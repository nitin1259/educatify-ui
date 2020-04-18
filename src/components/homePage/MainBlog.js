import React from "react";
// import logo from "./../../logo.svg";
import logo from "./../../images/neal-e-johnson-KdrmVW1bC2s-unsplash.jpg";
// import { Item } from "semantic-ui-react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const paragraph = `India is a secular country where the people have the freedom to
practice any religion and also to convert into another religion of
their choice. So, all the cultures are freely accepted and respected
by the Indians`;

const MainBlog = () => (
  <div class="item" style={{ margin: "2%" }}>
    <div class="ui small image">
      <img src={logo} alt="Heading for the main blog" />
    </div>
    <div class="content">
      <Link to="read">
        <h3>Influence of Western Culture on Indian Society</h3>
      </Link>

      <div class="description" style={{ width: "90%", textAlign: "justify" }}>
        {paragraph}
      </div>
    </div>
  </div>
);

export default MainBlog;
