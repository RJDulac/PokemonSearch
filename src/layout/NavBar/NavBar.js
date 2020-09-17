import React from "react";
import { NavLink } from "react-router-dom";

import style from "./NavBar.module.css";

const NavBar = () => (
  <nav className={style.container}>
    <li>
      <NavLink exact to="/" activeClassName={style.selected}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/search" activeClassName={style.selected}>
        Search Pokemon
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/all" activeClassName={style.selected}>
        Display All Pokemon
      </NavLink>
    </li>
  </nav>
);

export default NavBar;
