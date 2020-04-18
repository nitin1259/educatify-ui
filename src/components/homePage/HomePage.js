import React from "react";
import PopularBlogs from "./PopularBlogs";
import TrendingBlogs from "./TrendingBlogs";
import "./HomePage.css";
// import "../../index.css";

function HomePage() {
  return (
    <main className="row">
      <PopularBlogs />
      <TrendingBlogs />
    </main>
  );
}

export default HomePage;
