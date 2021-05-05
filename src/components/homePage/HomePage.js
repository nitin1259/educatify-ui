import React from "react";
import "./HomePage.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import BlogCard from "../blogs/blog/blogCard";
import TrendingTopics from "../trends/trends/TrendingTopics";
import FooterPage from "../footer/Footer";
// import "../../index.css";

function HomePage() {
  return (
    <main className="main">
      {/* <h2> This is home page</h2> */}
      <div className="homepage__mainpanel">
        {" "}
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="homepage__sidepanel">
        Trending topics
        <TrendingTopics />
      </div>
    </main>
  );
}

export default HomePage;
