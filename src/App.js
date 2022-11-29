import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Nav from "./Nav";
import RoutesList from "./RoutesList";

import {v4 as uuid4} from "uuid";



function App() {


  const [isLoaded, setIsLoaded] = useState(false);
  const [dogs, setDogs] = useState([]);



  async function getDogs() {
    let response = await axios.get("http://localhost:5001/dogs");
    let dogs = response.data.map(d => ({...d, key: uuid4()}))
    setDogs(dogs);
    setIsLoaded(true);
  }

  if (!isLoaded) {
    getDogs();
  }

  const dogNames = dogs.map(d => ({name: d.name, key: d.key}));

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogNames}/>
        <div>
          {!isLoaded
            ? <p>Loading....</p>
            : <RoutesList dogs={dogs}/>
          }
        </div>
      </BrowserRouter>
    </div>
  );

}
export default App;
