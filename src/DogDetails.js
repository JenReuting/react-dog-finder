import React from "react";
import { useParams } from "react-router-dom";

/** Display -- all info about a single dog
 *
 * App --> Nav -->(allDogsArray) --> DogList --> (singleDogInfo) --> DogDetail
*/

function DogDetails({dogs}) {
  const { name } = useParams();

  const dog = dogs.filter(d => name === d.name);

  return (
    <div className="DogDetails">
      <h3>{dog.name}</h3>
      <p>Age: {dog.age}</p>
      <img src={`"../public/${dog.src}.jpg"`} alt="dog picture"></img>
      Facts:
      <ul>
        {dog.facts.map(f => (
          <li>{f}</li>
        ))}
      </ul>
    </div>
  )
}

export default DogDetails;