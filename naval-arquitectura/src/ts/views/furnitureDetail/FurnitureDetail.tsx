import { useState, useEffect } from 'react';

import { FurnitureAPI } from '../../api';
import { useParams } from 'react-router-dom';

import { HorizontalCarousel, RelatedProducts } from '../../components';

import {
  Description,
  FurnitureDetailGrid,
  FurniturePropertiesGrid,
  FurnitureDetailBody,
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
    images: [],
    related: []
  });

  const [focusedImage, setFocusedImage] = useState('');

  const { length, width, height } = furniturePiece.measurement; 

  const onClickImage = image => {
    setFocusedImage(image);
  };

  useEffect(() => {
    setFurniturePiece(api.getFurniturePiece(id));
  }, [id]);

  useEffect(() => {
    setFocusedImage(furniturePiece?.images[0]);
  }, [furniturePiece]);

  console.log(furniturePiece)
  return (
    <FurnitureDetailGrid>
      <FurniturePropertiesGrid>
        <p>Dimensiones: {length} largo x {width} ancho x {height} alto cm.</p>
        <p>Material: {furniturePiece.material}</p>
      </FurniturePropertiesGrid>
      <FurnitureDetailBody>
        <div>
          <HorizontalCarousel
            images={furniturePiece.images}
            onClickAction={onClickImage}
          />
          <Description>{furniturePiece?.description}</Description>
        </div>
        <FocusedPictureWrapper >
          <FocusedPicture src={focusedImage}/>
          <ProductName>{furniturePiece?.name}</ProductName>
          <BuyButton>Comprar</BuyButton>
        </FocusedPictureWrapper>
      </FurnitureDetailBody>
      <RelatedProducts
          related={furniturePiece?.related}
      />
    </FurnitureDetailGrid>
  )
}

export default FurnitureDetail;
