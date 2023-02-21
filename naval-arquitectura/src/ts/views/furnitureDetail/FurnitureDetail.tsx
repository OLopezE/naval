import { useState, useEffect } from 'react';

import { FurnitureAPI } from '../../api';
import { useParams } from 'react-router-dom';

import {
  DetailsColumn,
  FurnitureDetailGrid,
  FurniturePropertiesGrid,
  FurnitureDetailBody
} from './FurnitureDetail.style.js';

const FurnitureDetail = () => {
  const api = new FurnitureAPI();
  const { id } = useParams();

  const [furniturePiece, setFurniturePiece] = useState({
    name: null,
    id: 0,
    price: 0,
    description: '',
    measurement: {
      length: 0,
      width: 0,
      height: 0
    },
    image: null
  });

  useEffect(() => {
    setFurniturePiece(api.getFurniturePiece(id));
  }, []);

  return (
    <FurnitureDetailGrid>
      <FurniturePropertiesGrid>
        <p>Medidas {`${furniturePiece?.name}`}</p>
        <p>Peso</p>
        <p>Material</p>
      </FurniturePropertiesGrid>
      <FurnitureDetailBody>
        <DetailsColumn>

        </DetailsColumn>
        <div></div>
      </FurnitureDetailBody>
    </FurnitureDetailGrid>
  )
}

export default FurnitureDetail;
