import React, { useEffect, useState, useRef } from 'react'

import images from './images.js';

import { CarouselGrid, CurrentImage, MyVideo } from './PreviewHome.style.js';

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <CarouselGrid>
      <MyVideo ref={videoRef} autoPlay muted loop height='100%' active={imageIndex === 0} playsInline>
        <source src="/media/images/v2/01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </MyVideo>
      {
        images.map((image, index) => (
          <CurrentImage
            key={index}
            src={image}
            alt={`Image ${index}`}
            active={index === imageIndex && imageIndex !== 0}
          />))
      }
    </CarouselGrid>
  )
}

export default Carousel
