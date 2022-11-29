import React from "react";


/** Display module - all dogs into */

function DogList({dogs}) {
  return (
    <ul>
      {dogs.map(d => (
      <li key={d.key}>
        <h3>{d.name}</h3>
        <img src={`"../public/${d.src}.jpg"`} alt="dog picture"></img>
      </li>
      ))}
    </ul>
  )
}

export default DogList;