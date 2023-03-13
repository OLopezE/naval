import styled from 'styled-components';

const DetailsColumn = styled.div`

`;

const FurnitureDetailGrid = styled.div`
  display: grid;
  padding: 3rem;
`;

const FurniturePropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 2px solid #42423F;
  min-height: 120px;
  
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  p {
    text-align: center;
    color: #42423F;
    margin: 0;
  }
`;

const FurnitureDetailBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem 0;

`;

const SmallPicturesWrapper = styled.div`
  grid-column: span 1;
  max-height: 224px;
  display: flex;
  gap: 2rem;
`;

const FocusedPictureWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

const FocusedPicture = styled.img`
  width: 400px;
`;

const ProductName = styled.p`
  color: #42423F;
  font-size: 1.4rem;
`;

const BuyButton = styled.button`

`;

const Description = styled.p`
  color: #42423F;
  font-size: 1.4rem;
`;

const SmallPicture = styled.img`
  width: 200px;
  height: 200px;
`;

const SmallPictureButton = styled.button`
  all: unset;
  transition: 0.2s;
  cursor: pointer;
  
  :hover {
    transform: scale(1.1);
  }
`;

export {
  DetailsColumn,
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
  Description
}