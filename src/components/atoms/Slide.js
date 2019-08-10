import React from 'react'

const Slide = ({ image, link }) => {
  const styles = {
    backgroundImage: `url(${image})`
  }

  return <a className="slide text-center" target="_blank" rel="noopener noreferrer" href={link} style={styles}></a>
}

export default Slide;
