import React, { Component } from 'react';

import Slide from '../atoms/Slide';
import LeftArrow from '../atoms/LeftArrow';
import RightArrow from '../atoms/RightArrow';

import ui001 from '../../assets/images/ui001.png';
import ui002 from '../../assets/images/ui002.png';
import ui003 from '../../assets/images/ui003.png';
import workiva from '../../assets/images/workiva.png';
import gtsb from '../../assets/images/gtsb.png';
import vanmeter from '../../assets/images/vanmeter.png';

export default class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        workiva,
        vanmeter,
        gtsb,
        ui001,
        ui002,
        ui003
      ],
      links: [
        'https://workiva.com',
        'https://vanmeterinc.com',
        'http://drivesmartiowa.com',
        'https://www.behance.net/gallery/83369907/Daily-UI-001-Login',
        'https://www.behance.net/gallery/83415529/Daily-UI-002-Payment-Info',
        'https://www.behance.net/gallery/83671421/Daily-UI-003-Landing-Page'
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    // Exiting the method early if we are at the beginning of the images array.
    // We also want to set currentIndex and translateValue, so we return
    // to the last image in the array.
    if(this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1,
        translateValue: -(this.slideWidth() * (this.state.images.length - 1))
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + (this.slideWidth())
    }));
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="carousel">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`
          }}
        >
          {
            this.state.images.map((image, i) => (
              <Slide key={i} link={this.state.links[i]} image={image} />
            ))
          }
        </div>

        <div className="carousel-arrows">
          <LeftArrow
        	  goToPrevSlide={this.goToPrevSlide}
        	/>
          <RightArrow
        	  goToNextSlide={this.goToNextSlide}
        	/>
        </div>
      </div>
    );
  }
}
