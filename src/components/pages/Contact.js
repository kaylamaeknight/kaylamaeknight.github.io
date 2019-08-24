import React, { Component } from "react";

// Modules
import {
  NavLink
} from "react-router-dom";

// Components
//import ContactForm from "../molecules/ContactForm";

class Contact extends Component {
  render() {
    return (
      <section className="content container-fluid">

        <div className="p-5">

          <h1 className="mb-3">Let&rsquo;s work together!</h1>
          <p className="lead mb-5">Projects big and small, if you think I&rsquo;m a great fit I would love to learn more. I can answer questions about my services, work hisory, the tools I&rsquo;ve worked with, or my technology stack, and you can also review this information in my <NavLink to="/resume">online résumé</NavLink>.</p>

          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Contracts</h2>
              <p>I am currently available for short or long-term contract engagements through <a target="_blank" rel="noopener noreferrer" href="https://www.roberthalf.com/work-with-us/our-services/creativegroup/">The Creative Group</a>. Please reach out to <a href="https://www.linkedin.com/in/jamesneis/">James Neis</a> for more information.</p>

              <p><i className="fas fa-at fa-fw mr-1"></i> <a href="mailto:james.neis@creativegroup.com">james.neis@creativegroup.com</a></p>
              <p><i class="fas fa-phone fa-fw mr-1"></i> <a href="tel:612.333.7990">612.333.7990</a></p>

            </div>
            <div className="col-12 col-md-6">
              <h2>Say Hello</h2>
              <p>Feel free to contact me through email or social networks to inquire about any of my services on a freelance basis for current or future availability.</p>
              <p><i className="fas fa-at fa-fw mr-1"></i> <a href="mailto:hello@kaylaknight.dev">hello@kaylaknight.dev</a></p>

              <ul className="list-unstyled list-inline">
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/kaylaknight/" target="_blank"rel="noopener noreferrer" ><i className="fab fa-linkedin-in fa-lg"></i></a></li>
                <li className="list-inline-item"><a href="https://www.behance.net/kayla-knight" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance fa-lg"></i></a></li>
                <li className="list-inline-item"><a href="https://github.com/kaylamaeknight" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt fa-lg"></i></a></li>
              </ul>
            </div>
          </div>

        </div>

      </section>
    );
  }
}

export default Contact;
