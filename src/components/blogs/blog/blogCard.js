import React from "react";
import "./blogCard.css";

function BlogCard() {
  return (
    <div className="blogcard__div">
      <div className="blogcard__content">
        <h5>This is heading of the blog </h5>
        <p>
          this should be the content for the blog which should be the reading
          pannel and the audacity has to be the only thing to look into for the
          confession{" "}
        </p>
      </div>
      <div className="blogcard__image">
        <img
          src="https://images.idgesg.net/images/article/2018/07/code_coding_javascript_laptop_by_clement_h_cc0_via_unsplash_1200x800-100763703-large.jpg"
          alt="title"
          style={{ height: "100px", width: "auto" }}
        />
      </div>
    </div>
  );
}

export default BlogCard;
