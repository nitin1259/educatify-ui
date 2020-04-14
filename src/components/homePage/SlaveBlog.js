import React from "react";
// import { Item } from "semantic-ui-react";
import logo from "./../../logo.svg";

const paragraph = `With multi-page apps, these three things come for free with apple iphone, iMac, iPad. `;
const SlaveBlog = () => (
  <div class="item">
    <div class="ui tiny image">
      <img src={logo} alt="Educatify" />
    </div>
    <div class="middle   content"> {paragraph}</div>
  </div>
);

export default SlaveBlog;
