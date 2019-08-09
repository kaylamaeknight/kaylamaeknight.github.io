import React from 'react'

const Slide = ({ image, link }) => {
  return <a className="slide text-center" target="_blank" rel="noopener noreferrer" href={link}><img alt={link} className="h-100" src={image} /></a>
}

export default Slide;
