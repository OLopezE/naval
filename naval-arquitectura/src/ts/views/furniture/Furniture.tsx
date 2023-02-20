import React, { useState } from 'react'
import { CarouselImage } from '../../components';

import furniture from '../../api/furnitureJSON/furniture.js';
import { FurnitureAPI } from '../../api';

import {
  FurnitureGrid,
  FurnitureTitle,
  FurnitureText,
  FurnitureInfoWrapper,
  VerticalCarousel
} from './Furniture.style.js';

function Furniture() {
  const randomImages = [1,2,3,4,5,6]
  const api = new FurnitureAPI();

  const [furniturePieces, setFurniturePieces] = useState(api.getFurniturePiecesImgAndID());

  return (
    <FurnitureGrid>
      <FurnitureInfoWrapper>
        <FurnitureTitle>
          Mobiliario
        </FurnitureTitle>
        <FurnitureText>
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </FurnitureText>
      </FurnitureInfoWrapper>
      <VerticalCarousel>
        {furniturePieces.map(piece => (
          <img src={piece.image} />
        ))}
        {/*<CarouselImage /> */}
      </VerticalCarousel>
    </FurnitureGrid>
  )
}

export default Furniture