import React from "react";
import "./Header.css";
import logo from "../../../src/logo.svg";
import { Input, Image, Header as Head } from "semantic-ui-react";

function Header() {
  return (
    <header className="header-main">
      <div className="header-name">
        <Head as="h2" style={{ float: "left" }}>
          <Image size="small" src={logo} /> Educatify
        </Head>
        <Input
          icon="search"
          style={{ float: "right", width: "30%", marginRight: "20px" }}
          placeholder="Search..."
        />
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
            <a href="/">Politics</a>
          </li>
          <li>
            <a href="/">Technology</a>
          </li>
          <li>
            <a href="/">Life</a>
          </li>
          <li>
            <a href="/">More... </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
