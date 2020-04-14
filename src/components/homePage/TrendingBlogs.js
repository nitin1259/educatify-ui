import React from "react";
import "./HomePage.css";
import { Item } from "semantic-ui-react";
import SlaveBlog from "./SlaveBlog";

function TrendingBlogs() {
  return (
    <article className="trending-blogs">
      <Item.Group divided>
        <SlaveBlog />
        <SlaveBlog />
        <SlaveBlog />
        <SlaveBlog />
      </Item.Group>
    </article>
  );
}

export default TrendingBlogs;
