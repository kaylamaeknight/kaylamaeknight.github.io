import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <h2>Leave a Message</h2>

        <form>
          <div className="row form-group mb-4">
            <div className="col">
              <input type="text" class="form-control" placeholder="First name"/>
            </div>
            <div className="col">
              <input type="text" class="form-control" placeholder="Last name"/>
            </div>
          </div>

          <div className="form-group mb-4">
            <input type="email" class="form-control" placeholder="Email"/>
          </div>

          <div className="form-group mb-4">
            <textarea className="form-control" placeholder="Message" rows="5"></textarea>
          </div>

          <input type="submit" class="btn btn-primary float-right" value="Send"/>
        </form>
      </div>
    );
  }
}

export default ContactForm;
