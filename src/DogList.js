import React from "react";

/** Display module - all dogs into */

/**
 *   Props:
 *     *    dogs - Array of Objects
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

     Render:
       RoutesList -> DogList
 */
function DogList({dogs}) {
  return (
    <ul>
      {dogs.map(d => (
      <li key={d.key}>
        <h3>{d.name}</h3>
        <img src={require(`../public/${d.src}.jpg`)} alt="dog"></img>
      </li>
      ))}
    </ul>
  )
}

export default DogList;

