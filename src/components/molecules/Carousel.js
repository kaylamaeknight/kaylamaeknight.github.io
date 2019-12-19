import React, { Component } from 'react';

import Slide from '../atoms/Slide';
import LeftArrow from '../atoms/LeftArrow';
import RightArrow from '../atoms/RightArrow';

import bayWestDesktop from '../../assets/images/bayWestDesktop.png';
import bayWestMobile from '../../assets/images/bayWestMobile.png';

import MVSDesktop from '../../assets/images/MVSDesktop.png';
import MVSMobile from '../../assets/images/MVSMobile.png';

import workivaDesktop from '../../assets/images/workivaDesktop.png';
import workivaMobile from '../../assets/images/workivaMobile.png';

export default class Carousel extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sites: [
        {
          'desktop': bayWestDesktop,
          'mobile': bayWestMobile,
          'link': 'https://www.baywest.com'
        },
        {
          'desktop': MVSDesktop,
          'mobile': MVSMobile,
          'link': 'https://www.ipmvs.com'
        },
        {
          'desktop': workivaDesktop,
          'mobile': workivaMobile,
          'link': 'https://www.workiva.com'
        },
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

        <div className="carousel-arrows container-fluid px-5">
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
