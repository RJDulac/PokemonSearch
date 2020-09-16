import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div style={{ textAlign: "center" }}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/search">Search Pokemon</Link>
    </li>
    <li>
      <Link to="/examplepokemon">Example Pokemon</Link>
    </li>
  </div>
);

export default NavBar;
