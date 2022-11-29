import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import DogDetails from './DogDetails';
import DogList from './DogList';

function RoutesList({dogs}) {
  console.log('Routes');
  return (

    <Routes>
      <Route path="/dogs" element={< DogList dogs={dogs}/>} />

    </Routes>

  );
}

export default RoutesList;

    /* <Route path="/dogs/:name" element={< DogDetails dogs={dogs}/>} />
      <Route path="*" element={<Navigate to="/dogs" />} /> */