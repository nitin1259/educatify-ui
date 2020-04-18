import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
