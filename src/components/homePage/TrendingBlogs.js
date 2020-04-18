import React from "react";
import "./HomePage.css";
import { Item } from "semantic-ui-react";
import SlaveBlog from "./SlaveBlog";

function TrendingBlogs() {
  return (
    <article className="trending-blogs">
      <div className="popular-blogs-heading">Trending in Educatify...</div>
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
