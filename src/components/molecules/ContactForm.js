import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <h2>Request for Proposal</h2>

        <form>
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="row form-group">
                <div className="col pr-0">
                  <input type="text" class="form-control" placeholder="First name"/>
                </div>
                <div className="col">
                  <input type="text" class="form-control" placeholder="Last name"/>
                </div>
              </div>

              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <div class="input-group-text"><i class="fas fa-at"></i></div>
                </div>
                <input type="email" class="form-control" id="email" placeholder="Email Address" />
              </div>

              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <div class="input-group-text"><i class="fas fa-phone"></i></div>
                </div>
                <input type="tel" class="form-control" id="phone" placeholder="Phone Number" />
              </div>

              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <div class="input-group-text"><i class="fas fa-globe"></i></div>
                </div>
                <input type="url" class="form-control" id="website" placeholder="Website" />
              </div>

              <div className="row form-group">
                <div className="col pr-0">
                  <select className="form-control">
                    <option>Timeline</option>
                    <option>Less than 1 month</option>
                    <option>1 &ndash; 3 months</option>
                    <option>3 &ndash; 6 months</option>
                    <option>More than 6 months</option>
                  </select>
                </div>
                <div className="col">
                  <select className="form-control">
                    <option>Budget</option>
                    <option>Less than $1,000</option>
                    <option>$1,000 &ndash; $5,000</option>
                    <option>$5,000 &ndash; $15,000</option>
                    <option>More than $15,000</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-7">
              <div className="form-group mb-4">
                <textarea className="form-control" placeholder="Project Details" rows="10"></textarea>
              </div>

              <input type="submit" class="btn btn-primary float-right" value="Send Request"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
