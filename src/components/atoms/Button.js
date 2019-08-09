import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <a href="#" className={`btn ${this.props.className}`}>{this.props.text}</a>
    );
  }
}

export default Button;
