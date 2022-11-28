import React from "react";
import { Link } from "react-router-dom";

function Nav({dogNames}) {
  console.log('Nav');
  return (
    <ul>
      {dogNames.map(d => (
        <li>
          <Link to={`dogs/${d}`}>{d}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav;