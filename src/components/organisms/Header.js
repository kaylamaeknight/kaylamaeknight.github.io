import React, { Component } from "react";

// Modules
import {
  NavLink,
  HashRouter
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header className="header">
          <div className="container-fluid px-5 d-flex align-items-center">
            <h1 className="logo mt-1 mb-0"><NavLink to="/"><strong>KAYLA</strong>KNIGHT</NavLink></h1>

            <nav className="ml-auto d-none d-sm-block">
              <ul className="list unstyled list-inline m-0 d-flex align-items-center">
                <NavLink className="nav-link" to="/">Portfolio</NavLink>
                <NavLink className="nav-link" to="/resume">Résumé</NavLink>
                <NavLink className="nav-link btn btn-secondary ml-3" to="/contact">Contact</NavLink>
              </ul>
            </nav>
          </div>
        </header>
      </HashRouter>
    );
  }
}

export default Header;
