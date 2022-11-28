import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Nav from "./Nav";
import Routes from "./Routes";



function App() {
  console.log('App');

  const [isLoaded, setIsLoaded] = useState(false);
  const [dogs, setDogs] = useState([]);

  console.log('isLoaded and dogs', isLoaded, dogs);

  async function getDogs() {
    let response = await axios.get("http://localhost:5001/dogs");
    setDogs(response.data);
    setIsLoaded(true);
  }

  if (!isLoaded) {
    getDogs();
  }

  const dogNames = dogs.map(d => d.name);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogNames}/>
        <Routes dogs={dogs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* <BrowserRouter>
  <Nav />
  <Routes />
</BrowserRouter> */