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
                <li><a class="nav-link" href="https://www.linkedin.com/in/kaylaknight/" target="_blank"rel="noopener noreferrer" ><i className="fab fa-linkedin-in"></i></a></li>
                {/* <li><a class="nav-link" href="#"><i class="fab fa-behance"></i></a></li> */}
                <li><a class="nav-link" href="mailto:hello@kaylaknight.dev"><i class="fas fa-envelope"></i></a></li>
              </ul>
            </nav>
          </div>
        </header>
      </HashRouter>
    );
  }
}

export default Header;
