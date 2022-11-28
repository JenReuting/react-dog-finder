import React from "react";


/** Display module - all dogs into */

function DogList({dogs}) {
  return (
    <ul>
      dogs.map(d => (<li>{dogs.name}</li>))
    </ul>
  )
}

export default DogList;