import React from "react";
import { useParams } from "react-router-dom";

/** Display -- all info about a single dog
 *
 *
 * App --> Nav -->(allDogsArray) --> DogList --> (singleDogInfo) --> DogDetail
*/

/**
 *   Props:
 *  *    dogs - Array of Objects
 *      Ex: [
 *        	{
              "name": "Whiskey",
              "age": 5,
              "src": "whiskey",
              "facts": [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!"
              ]
	          }, ...
 *      ]

     State:
      None

     Render: RoutesList -> DogDetails
 */
function DogDetails({dogs}) {
  console.debug('DogDetails');

  const { name } = useParams();
  const dog = dogs.filter(d => name === d.name)[0]; //can use find

  return (
    <div className="DogDetails">
      <h3>{dog.name}</h3>
      <p>Age: {dog.age}</p>
      <img src={`/${dog.src}.jpg`} alt="dog"></img>
      Facts:
      <ul>
        {dog.facts.map((f,ind) => (
          <li key={`${dog.name} + ${ind}`}>{f}</li>
        ))}
      </ul>
    </div>
  )
}

export default DogDetails;