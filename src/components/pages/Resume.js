import React, { Component } from "react";

// Components

class Resume extends Component {
  render() {
    return (
      <section className="content container-fluid p-5">

        <h1>Résumé</h1>

        <div className="row">
          <div class="col-12 col-md-8 mb-3 mb-md-0">
            <h2>Professional Experience</h2>

            <article className="mb-5">
              <h3>UX/UI Designer &amp; Front End Web Developer, <a href="http://thecreativegroup.com" target="_blank" rel="noopener noreferrer">The Creative Group</a></h3>
              <small className="d-block mb-3">July 2019 &ndash; Present &nbsp;&middot;&nbsp; Minneapolis / St. Paul</small>

              <ul className="mb-0">
                <li>UX/UI or web design</li>
                <li>Front end development</li>
                <li>WordPress &amp; Drupal theme development</li>
                <li>Email template development</li>
              </ul>
            </article>

            <article className="mb-5">
              <h3>UX/UI Designer &amp; Web Developer, <a href="https://www.linkedin.com/in/kaylaknight/" target="_blank" rel="noopener noreferrer">Independant Contractor</a></h3>
              <small className="d-block mb-3">January 2019 &ndash; Present &nbsp;&middot;&nbsp; Minneapolis / St. Paul</small>

              <ul>
                <li>Developed UI design system for EVEREVE&rsquo;s ecommerce website and documented in Zeplin</li>
                <li>Content, code maintenance, hosting and domain management for WordPress websites at Hot Dish Advertising</li>
                <li>MailChimp development tested in Litmus at JT Mega</li>
              </ul>

            </article>

            <article className="mb-5">
              <h3>Software Engineer, <a href="http://workiva.com" target="_blank" rel="noopener noreferrer">Workiva</a></h3>
              <small className="d-block mb-3">October 2015 &ndash; December 2018 &nbsp;&middot;&nbsp; Ames, IA (Remote)</small>

              <ul>
                <li>Helped design Workiva&rsquo;s design system for several brands</li>
                <li>Developed front end code for living style guide in Pattern Lab</li>
                <li>Drupal 7 theme development and module development / maintenance</li>
              </ul>

            </article>

            <article className="mb-5">
              <h3>Web Designer &amp; Front End Web Developer, <a href="https://www.shiftdsm.com/" target="_blank" rel="noopener noreferrer">Shift Interactive</a></h3>
              <small className="d-block mb-3">October 2014 &ndash; October 2015 &nbsp;&middot;&nbsp; West Des Moines, IA</small>

              <ul>
                <li>Client-facing UX planning with sitemaps, user flows, and wireframing</li>
                <li>Web and UI design</li>
                <li>Front end, WordPress, and Modx development</li>
              </ul>

            </article>

            <article className="mb-5">
              <h3>Web Developer, <a href="https://integer.com/" target="_blank" rel="noopener noreferrer">The Integer Group</a></h3>
              <small className="d-block mb-3">April 2012 &ndash; October 2014 &nbsp;&middot;&nbsp; Des Moines, IA</small>

              <ul>
                <li>Front end development</li>
                <li>Smaller custom PHP-based applications or microsites</li>
                <li>Email development</li>
              </ul>

            </article>

            <article className="mb-5">
              <h3>Web Designer &amp; Developer Intern, <a href="https://www.foundation.iastate.edu" target="_blank" rel="noopener noreferrer">The ISU Foundation</a></h3>
              <small className="d-block mb-3">August 2010 &ndash; August 2011 &nbsp;&middot;&nbsp; Ames, IA</small>

              <ul>
                <li>Front end development</li>
                <li>Content management</li>
                <li>Facebook app development</li>
              </ul>
            </article>


            <h2 className="mt-5">Education</h2>

            <article>
              <h3>B.S. Computer Science, <a href="https://www.iastate.edu/" target="_blank" rel="noopener noreferrer">Iowa State</a></h3>
              <small className="d-block mb-3">2012 &nbsp;&middot;&nbsp; Ames, IA</small>
            </article>
          </div>

          <div className="col-12 col-md-4 pl-4">

            <h2>Design &amp; Prototyping</h2>
            <table className="table table-borderless m-0 mb-5">
              <tr>
                  <th class="small w-40">Adobe XD</th>
                  <td className="w-60"><div class="progress-bar"><div class="progress w-70"></div></div></td>
              </tr>
              <tr>
                  <th class="small">Sketch</th>
                  <td><div class="progress-bar"><div class="progress w-50"></div></div></td>
              </tr>
              <tr>
                  <th class="small">Pattern Lab</th>
                  <td><div className="progress-bar"><div class="progress w-90"></div></div></td>
              </tr>
              <tr>
                  <th class="small">Zeplin</th>
                  <td><div className="progress-bar"><div class="progress w-80"></div></div></td>
              </tr>
              <tr>
                  <th class="small">Invision</th>
                  <td><div className="progress-bar"><div class="progress w-40"></div></div></td>
              </tr>
              <tr>
                  <th class="small">Flowmapp</th>
                  <td><div className="progress-bar"><div class="progress w-80"></div></div></td>
              </tr>
            </table>

            <h2>Front End Development</h2>

            <table className="table table-borderless m-0 mb-5">
              <tr>
                  <th className="small w-40">HTML5</th>
                  <td className="w-60"><div class="progress-bar"><div class="progress w-100"></div></div></td>
              </tr>
              <tr>
                  <th className="small">CSS3</th>
                  <td><div className="progress-bar"><div class="progress w-100"></div></div></td>
              </tr>
              <tr>
                  <th className="small">SCSS (Sass)</th>
                  <td><div className="progress-bar"><div class="progress w-100"></div></div></td>
              </tr>
              <tr>
                  <th class="small">Bootstrap 4</th>
                  <td><div className="progress-bar"><div class="progress w-100"></div></div></td>
              </tr>
              <tr>
                  <th class="small">jQuery</th>
                  <td><div class="progress-bar"><div class="progress w-90"></div></div></td>
              </tr>
              <tr>
                  <th class="small">WordPress</th>
                  <td><div class="progress-bar"><div class="progress w-80"></div></div></td>
              </tr>
              <tr>
                  <th class="small">Drupal</th>
                  <td><div class="progress-bar"><div class="progress w-50"></div></div></td>
              </tr>
              <tr>
                <th className="small w-40">React</th>
                <td className="w-60"><div class="progress-bar"><div class="progress w-20"></div></div></td>
              </tr>
              <tr>
                <th class="small">Animation</th>
                <td><div class="progress-bar"><div class="progress w-20"></div></div></td>
              </tr>
            </table>

            <h2>Back End Development</h2>

            <table class="table table-borderless mb-5">
              <tr>
                <th class="small">PHP</th>
                <td><div class="progress-bar"><div class="progress w-70"></div></div></td>
              </tr>
              <tr>
                <th class="small w-40">Node</th>
                <td className="w-60"><div class="progress-bar"><div class="progress w-20"></div></div></td>
              </tr>
            </table>

            <h2>Completely Unrelated, but Worthy Skills</h2>

            <table class="table table-borderless">
              <tr>
                <th className="small">Old Video Games</th>
                <td className="w-60"><div class="progress-bar"><div class="progress w-100"></div></div></td>
              </tr>
              <tr>
                <th className="small">I Love Lucy Trivia</th>
                <td className="w-60"><div class="progress-bar"><div class="progress w-100"></div></div></td>
              </tr>
              <tr>
                <th className="small">CSS Art</th>
                <td className="w-60"><div class="progress-bar"><div class="progress w-75"></div></div></td>
              </tr>
              <tr>
                <th className="small">Walking cats</th>
                <td className="w-60"><div class="progress-bar"><div class="progress w-30"></div></div></td>
              </tr>
              <tr>
                <th class="small">3D Modeling</th>
                <td><div class="progress-bar"><div class="progress w-15"></div></div></td>
              </tr>
            </table>

          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
