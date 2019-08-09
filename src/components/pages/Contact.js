import React, { Component } from "react";

// Components
//import ContactForm from "../molecules/ContactForm";

class Contact extends Component {
  render() {
    return (
      <section className="content container-fluid">

        <div className="p-5">

          <h1>Contact</h1>

          <h2>I am available for contract engagements through <br /><a target="_blank" rel="noopener noreferrer" href="https://www.roberthalf.com/work-with-us/our-services/creativegroup/">The Creative Group</a></h2>
          <p>Please reach out to <strong>James Neis</strong> for more information.</p>

          <p><i className="fas fa-envelope fa-fw mr-3"></i> <a href="mailto:james.neis@creativegroup.com">james.neis@creativegroup.com</a></p>
          <p className="mb-0"><i class="fas fa-phone fa-fw mr-3"></i> <a href="tel:612.333.7990">612.333.7990</a></p>

          <hr className="mt-5 mb-5" />

          <p>We can help you achieve your business goals by providing you with the committed resources you need for projects such as web/mobile design and development, user experience and content management.</p>
          <p>Our Salaried Professional Service specializes in the placement of creative and marketing professionals like myself, on a long-term and project basis where continuity is essential, mitigating the risk of turnover during the engagement.</p>

        </div>

      </section>
    );
  }
}

export default Contact;
