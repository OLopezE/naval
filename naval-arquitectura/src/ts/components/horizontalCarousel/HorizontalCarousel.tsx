import React from 'react'

import {
  ImagesGrid
} from './horizontalCarousel.style.js';

const HorizontalCarousel = ({ images = [], onClickAction }) => {
  return (
    <ImagesGrid>
      {images.map( image => (
        <button onClick={() => onClickAction(image)}>
          <img src={image} />
        </button>
      ))}
    </ImagesGrid>
  )
};

export default HorizontalCarousel;
