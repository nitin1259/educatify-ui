import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="row">
      <header className="header-main">
        <div className="header-name">
          <span style={{ color: "black", fontSize: "200%", fontWeight: 700 }}>
            Educatify
          </span>
          <input type="text" placeholder="Search.."></input>
        </div>
        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Coronovirus</a>
            </li>
            <li>
              <a href="/">Stories</a>
            </li>
            <li>
              <a href="/">World</a>
            </li>

            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Coronovirus</a>
            </li>
            <li>
              <a href="/">Stories</a>
            </li>
            <li>
              <a href="/">World</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
