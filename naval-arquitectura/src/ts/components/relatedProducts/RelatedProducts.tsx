import React from 'react'
import { Link } from 'react-router-dom';

import { FurnitureAPI } from '../../api';

import { RelatedGrid } from './relatedProducts.style.js';

const RelatedProducts = ({ related }) => {

  const api = new FurnitureAPI();

  return (
    <RelatedGrid>
      <p>Artículos relacionados</p>
      {related.map((product) => (
        <Link to={`/mobiliario/${product}`}>
          <img src={api.getFurniturePieceImgById(product)}></img>
        </Link>
      ))}
    </RelatedGrid>
  )
}

export default RelatedProducts