import React from "react";
import "./Header.css";

function NavHeader(props) {
  return (
    <nav className="header-nav">
      <ul className="nav-list">
        <li>
          <a href="/">Home</a>
        </li>
        {props.tags.map((tag) => {
          return (
            <li>
              <a href="/blog">{tag}</a>
            </li>
          );
        })}
        <li>
          <a href="/">More... </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavHeader;
