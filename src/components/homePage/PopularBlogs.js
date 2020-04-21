import React from "react";
import "./HomePage.css";
import MainBlog from "./MainBlog";
import { Item } from "semantic-ui-react";

function PopularBlogs() {
  return (
    <article className="popular-blogs">
      <div className="popular-blogs-heading">Popular in Educatify...</div>
      <Item.Group className="popular-item-group">
        <MainBlog />
        <MainBlog />
      </Item.Group>
    </article>
  );
}

export default PopularBlogs;
