import React, { Component } from 'react';

import Slide from '../atoms/Slide';
import LeftArrow from '../atoms/LeftArrow';
import RightArrow from '../atoms/RightArrow';

import workivaDesktop from '../../assets/images/workiva.png';
import workivaMobile from '../../assets/images/workiva-mobile.png';

import amplifyDesktop from '../../assets/images/amplify.png';
import amplifyMobile from '../../assets/images/amplify-mobile.png';

import foundationDesktop from '../../assets/images/foundation.png';
import foundationMobile from '../../assets/images/foundation-mobile.png';

import dailyui001Desktop from '../../assets/images/ui001.png';
import dailyui001Mobile from '../../assets/images/ui001.png';

import vanmeterDesktop from '../../assets/images/vanmeter.png';
import vanmeterMobile from '../../assets/images/vanmeter.png';

import gtsbDesktop from '../../assets/images/gtsb.png';
import gtsbMobile from '../../assets/images/gtsb.png';

export default class Carousel extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sites: [
        {
          'desktop': dailyui001Desktop,
          'mobile': dailyui001Mobile,
          'link': 'https://www.behance.net/gallery/83369907/Daily-UI-001-Login'
        },
        {
          'desktop': workivaDesktop,
          'mobile': workivaMobile,
          'link': 'https://workiva.com'
        },
        {
          'desktop': amplifyDesktop,
          'mobile': amplifyMobile,
          'link': 'https://conference.workiva.com'
        },
        {
          'desktop': foundationDesktop,
          'mobile': foundationMobile,
          'link': 'https://kaylaknight.dev/portfolio-foundation'
        },
        {
          'desktop': vanmeterDesktop,
          'mobile': vanmeterMobile,
          'link': 'https://vanmeterinc.com'
        },
        {
          'desktop': gtsbDesktop,
          'mobile': gtsbMobile,
          'link': 'http://drivesmartiowa.com'
        }
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    // Exiting the method early if we are at the beginning of the sites array.
    // We also want to set currentIndex and translateValue, so we return
    // to the last image in the array.
    if(this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.sites.length - 1,
        translateValue: -(this.slideWidth() * (this.state.sites.length - 1))
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + (this.slideWidth())
    }));
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the sites array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.sites.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth() + 1)
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
            this.state.sites.map((site, i) => (
              <Slide key={i} link={site.link} desktop={site.desktop} mobile={site.mobile} />
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
