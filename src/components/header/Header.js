import React from "react";
import "./Header.css";
import logo from "./../../../src/edu-white-transp.png";
import { NavLink } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import { Search } from "@material-ui/icons";

function Header() {
  // const tags = ["technology", "world", "corona", "culture", "hotspot"];
  return (
    <header className="header">
      <div>
        <NavLink to="/">
          <img className="header__logo" src={logo} alt="Educatify" />
        </NavLink>
      </div>
      {/* <NavHeader tags={tags} /> */}
      <div className="header__menu">
        <nav className="header__nav">
          <NavLink to="/" className="header__link">
            Home
          </NavLink>
          <NavLink to="/" className="header__link">
            Catagory
          </NavLink>
          <NavLink to="/" className="header__link">
            About
          </NavLink>
          <NavLink to="/" className="header__link">
            Write One...
          </NavLink>
        </nav>
      </div>

      {/* this for side icon */}

      <div className="header__icons">
        <Search className="header__icons__item" />
        <PersonIcon className="header__icons__item" />
      </div>
    </header>
  );
}

export default Header;
