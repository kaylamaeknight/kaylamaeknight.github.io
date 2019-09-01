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
          <h1 className="mb-3"><span>Hello World &mdash;</span>I am a UX/UI designer and front end web developer based in Minneapolis / St. Paul</h1>

          <ul className="list-unstyled list-inline mb-5 mb-xl-0">
            <li className="list-inline-item"><a href="https://www.linkedin.com/in/kaylaknight/" target="_blank"rel="noopener noreferrer" ><i className="fab fa-linkedin-in fa-lg"></i></a></li>
            <li className="list-inline-item"><a href="https://www.behance.net/kayla-knight" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance fa-lg"></i></a></li>
            <li className="list-inline-item"><a href="https://github.com/kaylamaeknight" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt fa-lg"></i></a></li>
          </ul>

          <ul className="list-unstyled mt-4 mb-xl-5 d-none d-xl-block">
            <li>UX/UI or Web Design</li>
            <li>Sitemaps, Userflows, Wireframes</li>
            <li>Style Guide Development</li>
            <li>Front End Development</li>
            <li>WordPress, Drupal, or Modx Theming</li>
            <li>MailChimp Development</li>
          </ul>

          <NavLink className="btn btn-primary" to="/contact">Work With Me</NavLink>

        </div>
      </section>
    );
  }
}

export default Hero;
