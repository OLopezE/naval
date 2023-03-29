import React, { useState } from 'react'
import { CarouselImage } from '../../components';

import { FurnitureAPI } from '../../api';

import {
  FurnitureGrid,
  FurnitureTitle,
  FurnitureText,
  FurnitureInfoWrapper,
  VerticalCarousel
} from './Furniture.style.js';

function Furniture() {
  const api = new FurnitureAPI();

  const [furniturePieces,_] = useState(api.getFurniturePiecesImgAndID());

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
          <CarouselImage id={piece.id} image={piece.image}/>
        ))}
        {/* */}
      </VerticalCarousel>
    </FurnitureGrid>
  )
}

export default Furniture