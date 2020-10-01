import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function NavHeader(props) {
  return (
    <nav className="header-nav">
      <ul className="nav-list">
        <li>
          <Link to="/" className="header__link">
            Home
          </Link>
        </li>
        {props.tags.map((tag) => {
          return (
            <li>
              <Link to="/blog" className="header__link">
                {tag}
              </Link>
            </li>
          );
        })}
        <li>
          <Link to="/blog/create" className="header__link">
            Write One...
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavHeader;
