import React from "react";
import Header from "./components/header/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import GenericBlog from "./components/generalblog/GenericBlog";
import PageNotFound from "./components/common/PageNotFound";
import FooterPage from "./components/footer/Footer";
import About from "./components/common/About";
import ReadingBlog from "./components/generalblog/ReadingBlog";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" component={GenericBlog} />
        <Route path="/about" component={About} />
        <Route paht="/read" component={ReadingBlog} />
        <Route component={PageNotFound} />
      </Switch>
      <FooterPage />
    </div>
  );
}

export default App;
