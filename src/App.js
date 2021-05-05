import React from "react";
import Header from "./components/header/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import GenericBlog from "./components/generalblog/GenericBlog";
import PageNotFound from "./components/common/PageNotFound";
// import FooterPage from "./components/footer/Footer";
import About from "./components/common/About";
import ReadingBlog from "./components/generalblog/ReadingBlog";
import "./App.css";
import NewBlog from "./components/createblog/NewBlog";
import CreateBlog from "./components/generalblog/CreateBlog";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
      {/* <FooterPage /> */}
    </div>
  );
}

export default App;
