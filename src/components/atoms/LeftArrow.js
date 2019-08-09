import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="back-arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;
