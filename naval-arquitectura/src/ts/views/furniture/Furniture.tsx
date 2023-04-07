import React, { useState } from 'react'
import {  CarouselImage } from '../../components';

import { FurnitureAPI } from '../../api';

import {
  FurnitureGrid,
  FurnitureInfoWrapper,
  VerticalCarousel
} from './Furniture.style.js';

function Furniture() {
  const api = new FurnitureAPI();

  const [furniturePieces,_] = useState(api.getFurniturePiecesImgAndID());

  return (
    <FurnitureGrid>
      <FurnitureInfoWrapper>
        <h1>Mobiliario</h1>
        <p>Objetos que nos acompañan en nuestro día a día.</p>
        <p>Aquellos con quienes, sin darnos cuenta, pasamos gran parte de nuestra vida.</p>
        <p>Compañeros de madera, hechos con las manos de nuestros artesanos, llenos de sabiduría, esfuerzo y amor.</p>
      </FurnitureInfoWrapper>
      <VerticalCarousel>
        {furniturePieces.map(piece => (
          <CarouselImage id={piece.id} image={piece.image}/>
        ))}
      </VerticalCarousel>
    </FurnitureGrid>
  )
}

export default Furniture