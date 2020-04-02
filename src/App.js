import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Trending from './components/trending/trending-page';
import Contact from './components/contact/contact-page';
import Home from './components/home/home-page';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <header>
          <NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/trending">Trending</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
      </header>
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/trending" component={Trending}/>
        <Route path="/contact" component={Contact}/>
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
