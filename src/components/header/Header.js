import React, { useEffect } from "react";
import "./Header.css";
import logo from "./../../../src/logo.svg";
import { Input, Image, Header as Head } from "semantic-ui-react";
import NavHeader from "./NavHeader";
import { Link } from "react-router-dom";

function Header() {
  const tags = ["technology", "world", "corona", "culture", "hotspot"];
  return (
    <header className="header-main">
      <div className="header-name">
        <Link to="/blog">
          <Head as="h1" style={{ float: "left" }}>
            <Image
              size="small"
              src={logo}
              style={{ verticalAlign: "bottom" }}
            />
            Educatify
          </Head>
        </Link>
        <Input
          icon="search"
          style={{ float: "right", width: "30%", marginRight: "20px" }}
          placeholder="Search..."
        />
      </div>
      <NavHeader tags={tags} />
    </header>
  );
}

export default Header;
