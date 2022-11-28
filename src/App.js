import './App.css';
import React, { useState } from "react";
import axios from "axios";

import DogList from "./DogList";




function App() {

  let [dogs, setDogs] = useState('[]');


  axios.get("http://localhost:5001/dogs")
    .then(resp => {
      const data = resp.data;
      console.log("data ---> ", data)
      setDogs(data)
      console.log("dogs ----> ", dogs)
    })

  console.log("dogs2 ---->>", dogs)

  return (
    <div className="App">
      <h1>Dogs List {dogs = dogs}</h1>
      < DogList />
    </div>

  );
}

export default App;
