import React from "react";
import { Route, Navigate } from "react-router-dom";

import DogDetails from './DogDetails';
import DogList from './DogList';

function Routes() {

  return (
    <Routes>
      <Route path="/dogs" element={< DogList />} />
      <Route path="/dogs/:name" element={< DogDetails />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default Routes;