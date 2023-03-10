import { useState, useEffect } from 'react';

import { FurnitureAPI } from '../../api';
import { useParams } from 'react-router-dom';

import {
  Description,
  FurnitureDetailGrid,
  FurniturePropertiesGrid,
  FurnitureDetailBody,
  SmallPicture,
  SmallPictureButton,
  SmallPicturesWrapper,
  FocusedPictureWrapper,
  FocusedPicture,
  ProductName,
  BuyButton,

} from './FurnitureDetail.style.js';

const FurnitureDetail = () => {
  const api = new FurnitureAPI();
  const { id } = useParams();

  const [furniturePiece, setFurniturePiece] = useState({
    name: null,
    id: 0,
    price: 0,
    material: '',
    description: '',
    measurement: {
      length: 0,
      width: 0,
      height: 0
    },
    image: ''
  });

  useEffect(() => {
    setFurniturePiece(api.getFurniturePiece(id));
  }, []);

  console.log(furniturePiece)
  return (
    <FurnitureDetailGrid>
      <FurniturePropertiesGrid>
        <div>
          <p>Medidas</p>
          <p>Altura: {furniturePiece.measurement.width}</p>
          <p>Largo: {furniturePiece.measurement.width}</p>
          <p>Ancho: {furniturePiece.measurement.width}</p>
        </div>
        <div>
          <p>Peso:</p>
        </div>
        <div>
          <p>Material: {furniturePiece.material}</p>
        </div>
      </FurniturePropertiesGrid>
      <FurnitureDetailBody>
        <div>
          <SmallPicturesWrapper>
            {/* {furniturePiece?.image.map(image => (
              <SmallPictureButton>
                <SmallPicture src={image}/>
              </SmallPictureButton>
              ))} */}
          </SmallPicturesWrapper>
          <Description>{furniturePiece?.description}</Description>
        </div>
        <FocusedPictureWrapper >
          <FocusedPicture src={furniturePiece?.image}/>
          <ProductName>{furniturePiece?.name}</ProductName>
          <BuyButton>Comprar</BuyButton>
        </FocusedPictureWrapper>
        {/* <RelatedProducts /> */}
      </FurnitureDetailBody>
    </FurnitureDetailGrid>
  )
}

export default FurnitureDetail;
