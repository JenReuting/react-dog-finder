import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import DogDetails from './DogDetails';
import DogList from './DogList';

/**
 *  Props:
 *    dogs - Array of Objects
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

    States:
      None

    Render:
      App -> RoutesList -> Data Logic for Routes
 */
function RoutesList({dogs}) {
  console.log('RoutesList');
  return (

    <Routes>
      <Route path="/dogs" element={< DogList dogs={dogs}/>} />
      <Route path="/dogs/:name" element={< DogDetails dogs={dogs}/>} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>

  );
}

export default RoutesList;


