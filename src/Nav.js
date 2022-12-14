import React from "react";
import { Link } from "react-router-dom"

/**
 *  Props:
 *    dogNames - Array of Objects
 *      Ex: [
 *        {
 *          name: `Whiskey`,
 *          key: (uuid)
 *        }, ...
 *      ]
 *
 *  States:
 *    None
 *
 *  Render:
 *    App -> Nav -> Link
 */
function Nav({dogNames}) {

  return (
    <ul>
      {dogNames.map(d => (
        <li key={d.key}>
          <Link to={`dogs/${d.name}`}>{d.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav;