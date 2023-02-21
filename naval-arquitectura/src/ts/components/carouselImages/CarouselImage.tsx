import { Link } from 'react-router-dom';

import FramedImageLink from './CarouselImage.style.js';

const CarouselImage = ({image, id}) => {
  return (
    <FramedImageLink
      to={`/mobiliario/${id}`}
    >
      <img src={image}/>
    </FramedImageLink>
  )
}

export default CarouselImage