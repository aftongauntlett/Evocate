import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  
  const location = useLocation();


  return (
    <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Evocate
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/home"
        className={location.pathname === "/Home" ? "nav-link active" : "nav-link"}
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/restart"
        className={location.pathname === "/Restart" ? "nav-link active" : "nav-link"}
      >
        Restart
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/newGame"
        className={location.pathname === "/NewGame" ? "nav-link active" : "nav-link"}
      >
        New Game
      </Link>
    </li>
  </ul>
);
}


export default NavBar;
