import React, { useEffect } from "react";
import "./Header.css";
import logo from "./../../../src/edu-white-transp.png";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Search } from "@material-ui/icons";

function Header() {
  // const tags = ["technology", "world", "corona", "culture", "hotspot"];
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img className="header__logo" src={logo} alt="amazon logo" />
        </Link>
      </div>
      {/* <NavHeader tags={tags} /> */}
      <div className="header__menu">
        <nav className="header__nav">
          <Link to="/" className="header__link">
            Home
          </Link>
          <Link to="/" className="header__link">
            Catagory
          </Link>
          <Link to="/" className="header__link">
            About
          </Link>
          <Link to="/blog/create" className="header__link">
            Write One...
          </Link>
        </nav>
      </div>
      {/* <div className="header__search">
        <input type="text" className="header_serchInput" />
        <SearchIcon className="header__searchIcon" />
      </div> */}

      <div className="header__icons">
        <Search className="header__icons__item" />
        <BookmarkIcon className="header__icons__item" />
        <NotificationsIcon className="header__icons__item" />
        <PersonIcon className="header__icons__item" />
      </div>
    </header>
  );
}

export default Header;
