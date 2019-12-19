import React from 'react';

import desktopFrame from '../../assets/images/desktop.svg';
import mobileFrame from '../../assets/images/mobile.svg';


const Slide = ({ desktop, mobile, link }) => {

  return (
    <div className="slide" target="_blank" rel="noopener noreferrer" href={link}>
      <div className="container d-flex align-items-center justify-content-center h-100">
        
        <div className="desktop mr-5">
          <img className="frame" src={desktopFrame} />
          <a className="website" href={link}><img src={desktop} alt="" /></a>
        </div>

        <div className="mobile mr-5">
          <img className="frame" src={mobileFrame} />
          <a className="website" href={link}><img src={mobile} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Slide;
