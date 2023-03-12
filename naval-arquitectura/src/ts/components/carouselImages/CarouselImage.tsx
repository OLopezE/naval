import { Link } from 'react-router-dom';

import FramedImageLink from './CarouselImage.style.js';

import BrightLogo from '/media/logos/15-Logotipos-Naval.png';

const CarouselImage = ({image, id}) => {
  return (
    <FramedImageLink
      to={`/mobiliario/${id}`}
    >
      <img src={BrightLogo} width='100px'/>
    </FramedImageLink>
  )
}

export default CarouselImage