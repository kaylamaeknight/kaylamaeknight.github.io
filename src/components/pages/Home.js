import React, { Component } from "react";

// Components
import Carousel from "../molecules/Carousel";

class Home extends Component {
  render() {
    return (
      <section id="portfolio" className="content bg-gradient">
        
        <Carousel />

      </section>
    );
  }
}

export default Home;
