import React, { Component } from "react";

// Modules
import {
  Route,
  HashRouter
} from "react-router-dom";

// Assets
import "./assets/css/App.scss";

// Components
import Header from "./components/organisms/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Header/>
        <main>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
        </main>
      </HashRouter>
    );
  }
}

export default Main;
