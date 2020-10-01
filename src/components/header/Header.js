import React, { useEffect } from "react";
import "./Header.css";
import logo from "./../../../src/edu-white-transp.png";
import { Input, Image, Header as Head } from "semantic-ui-react";
import NavHeader from "./NavHeader";
import { Link } from "react-router-dom";

function Header() {
  const tags = ["technology", "world", "corona", "culture", "hotspot"];
  return (
    <header className="header-main">
      <div className="header-name">
        <Link to="/" style={{ margin: "15px" }}>
          <Image src={logo} style={{ width: "100px" }} />
        </Link>
        <NavHeader tags={tags} />
        <Input
          icon="search"
          style={{
            width: "30%",
            height: "50px",
          }}
          placeholder="Search..."
        />
      </div>
    </header>
  );
}

export default Header;
