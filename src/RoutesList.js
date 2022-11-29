import React from "react";
import { Route, Navigate } from "react-router-dom";

import DogDetails from './DogDetails';
import DogList from './DogList';

function RoutesList({dogs}) {
  console.log('Routes');
  return (
    // <Routes>
    //   <Route path="/dogs" element={< DogList dogs={dogs}/>} />
    //   <Route path="/dogs/:name" element={< DogDetails dogs={dogs}/>} />
    //   <Route path="*" element={<Navigate to="/dogs" />} />
    // </Routes>
    <div>Routes</div>
  );
}

export default RoutesList;