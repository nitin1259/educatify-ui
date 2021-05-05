import React from "react";
import "./TrendingTopic.css";

function TrendingTopic() {
  return (
    <div className="trendingtopic__contianer">
      <ion-icon
        name="trending-up-outline"
        size="large"
        style={{ marginLeft: "5px", padding: "5px 5px" }}
      ></ion-icon>
      <p style={{ marginLeft: "5px", padding: "5px 5px" }}>
        <span style={{ color: "#333" }}>Closures: </span> helping modern web
      </p>
    </div>
  );
}

export default TrendingTopic;
