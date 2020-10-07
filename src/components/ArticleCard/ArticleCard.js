import React from "react";
import "./ArticleCard.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import image1 from "./../../images/neal-e-johnson-KdrmVW1bC2s-unsplash.jpg";

function ArticleCard() {
  return (
    <div className="articlecard">
      <div className="acticlecard__image">
        <img src={image1} alt="article" />
      </div>
      <div className="articlecard_published">
        <span>{"6 Oct 2019"}</span>
        <span> By {"Amit Ravichandran"}</span>
      </div>
      <div className="acticlecard__content">
        <h2>
          Indians on western culture which has to be improved as per the
          mentality of every indian inthe the white color society where people
          are liveing in diversity
        </h2>
      </div>
      <div className="acticlecard__stats">
        <span>
          {" "}
          <ThumbUpIcon color="black" style={{ padding: "2px" }} />
          {5}
        </span>
        <span style={{ color: "black" }}>Read More</span>
      </div>
    </div>
  );
}

export default ArticleCard;
