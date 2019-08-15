import React from 'react'

const Slide = ({ desktop, mobile, link }) => {
  // const styles = {
  //   backgroundImage: `url(${image})`
  // }

  return (
    <a className="slide text-center" target="_blank" rel="noopener noreferrer" href={link}>
      <picture>
        <source media="(max-width: 768px)" srcset={mobile} />
        <img src={desktop} alt="" />
      </picture>
    </a>
  )
}

export default Slide;
