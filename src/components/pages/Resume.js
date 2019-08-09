import React, { Component } from "react";

// Components

class Resume extends Component {
  render() {
    return (
      <section className="content container-fluid p-5">

        <h1>Résumé</h1>

        <div className="mb-5 row">
          <div class="col-12 col-md-8 mb-3 mb-md-0">
            <h2>Professional Experience</h2>

            <p>
              <strong>Front End Web Developer & UX/UI Designer - Consultant</strong><br />
              <small><a href="http://thecreativegroup.com" target="_blank" rel="noopener noreferrer">The Creative Group</a> &nbsp;&middot;&nbsp; July 2019 &ndash; Present &nbsp;&middot;&nbsp; Minneapolis / St. Paul</small><br />
            </p>

            <p>
              <strong>UI Designer &amp; Front End Developer</strong><br />
              <small><a href="https://www.linkedin.com/in/kaylaknight/" target="_blank" rel="noopener noreferrer">Independent Contractor</a> &nbsp;&middot;&nbsp; January 2019 &ndash; Present &nbsp;&middot;&nbsp; Minneapolis / St. Paul</small><br />
            </p>

            <p>
              <strong>Software Engineer</strong><br />
              <small><a href="http://workiva.com" target="_blank" rel="noopener noreferrer">Workiva</a> &nbsp;&middot;&nbsp; October 2015 &ndash; December 2018 &nbsp;&middot;&nbsp; Ames, IA (Remote)</small><br />
            </p>

            <p>
              <strong>Web Designer &amp; Front End Web Developer</strong><br />
              <small><a href="https://www.shiftdsm.com/" target="_blank" rel="noopener noreferrer">Shift Interactive</a> &nbsp;&middot;&nbsp; October 2014 &ndash; October 2015 &nbsp;&middot;&nbsp; West Des Moines, IA</small>
            </p>

            <p>
              <strong>Web Developer</strong><br />
              <small><a href="https://integer.com/" target="_blank" rel="noopener noreferrer">The Integer Group</a> &nbsp;&middot;&nbsp; April 2012 &ndash; October 2014 &nbsp;&middot;&nbsp; Des Moines, IA</small>
            </p>

            <p>
              <strong>Web Designer &amp; Developer Intern</strong><br />
              <small><a href="https://www.foundation.iastate.edu" target="_blank" rel="noopener noreferrer">The ISU Foundation</a> &nbsp;&middot;&nbsp; August 2010 &ndash; August 2011 &nbsp;&middot;&nbsp; Ames, IA</small>
            </p>
          </div>

          <div class="col-12 col-md-4">
            <h2>Education</h2>
            <p>
              <strong>B.S. Computer Science</strong><br />
              <small><a href="https://www.iastate.edu/" target="_blank" rel="noopener noreferrer">Iowa State</a> &nbsp;&middot;&nbsp; 2012 &nbsp;&middot;&nbsp; Ames, IA</small>
            </p>
          </div>
        </div>

        <h2>Technology Stack &amp; Tools</h2>

        <div className="w-100 d-lg-flex justify-content-between">
          <div className="mb-5 mb-md-0">
            <h3>Design &amp; Prototyping</h3>
            <ul className="list-unstyled">
              <li>Adobe XD</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Invision</li>
              <li>Flowmapp</li>
            </ul>
          </div>

          <div className="mb-5 mb-md-0">
            <h3>Front end Development</h3>
            <ul className="list-unstyled m-0">
              <li>Bootstrap 4</li>
              <li>Pattern Lab</li>
              <li>Storybook</li>
              <li>HTML5</li>
              <li>CSS3 (SCSS)</li>
              <li>JavaScript (ReactJS, jQuery)</li>
              <li>Email development</li>
            </ul>
          </div>

          <div className="mb-0">
            <h3>Back-end Development</h3>
            <ul className="list-unstyled">
              <li>WordPress</li>
              <li>Drupal</li>
              <li>Modx</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
