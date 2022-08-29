import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Axios Function</Link>
        </li>
        <li>
          <Link to="axios-c">Axios Class</Link>
        </li>
        <li>
          <Link to="function-f">Fetch Function</Link>
        </li>
        <li>
          <Link to="class-f">Fetch Class</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
