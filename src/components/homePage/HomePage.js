import React from "react";
import "./HomePage.css";
import ArticleCard from "../ArticleCard/ArticleCard";
// import "../../index.css";

function HomePage() {
  return (
    <main className="main">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      {/* <PopularBlogs />
      <TrendingBlogs /> */}
    </main>
  );
}

export default HomePage;
