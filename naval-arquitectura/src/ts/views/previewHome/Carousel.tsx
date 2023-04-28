import React, { useEffect, useState } from 'react'

import images from './images.js';

import { CarouselGrid, CurrentImage } from './PreviewHome.style.js';

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  return (
    <CarouselGrid>
      {
        images.map((image: string, index: number) => (
          <CurrentImage
            key={index}
            src={image}
            alt={`Image ${index}`}
            active={index === imageIndex}
          />
        ))
      }
    </CarouselGrid>
  )
}

export default Carousel