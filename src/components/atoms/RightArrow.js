import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="next-arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;
