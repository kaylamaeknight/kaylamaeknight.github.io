import React, { Component } from "react";

// Modules
import {
  NavLink
} from "react-router-dom";

class Hero extends Component {
  render() {
    return (
      <section className="hero bg-gradient">
        <div>
          <h1><span>Hello World &mdash;</span>I am a UX/UI designer and front end web developer based in Minneapolis / St. Paul</h1>

          <ul className="mb-5 list-unstyled list-inline">
            <li className="list-inline-item"><a href="https://www.linkedin.com/in/kaylaknight/" target="_blank"rel="noopener noreferrer" ><i className="fab fa-linkedin-in fa-lg"></i></a></li>
            <li className="list-inline-item"><a href="https://www.behance.net/kayla-knight" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance fa-lg"></i></a></li>
            <li className="list-inline-item"><a href="https://github.com/kaylamaeknight" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt fa-lg"></i></a></li>
          </ul>

          <NavLink className="btn btn-primary" to="/contact">Say Hello</NavLink>
        </div>
      </section>
    );
  }
}

export default Hero;
