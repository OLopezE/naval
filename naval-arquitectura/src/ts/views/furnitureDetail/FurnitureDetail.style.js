import styled from 'styled-components';

const DetailsColumn = styled.div`

`;

const FurnitureDetailGrid = styled.div`
  display: grid;
  padding: 3rem 8rem;
`;

const FurniturePropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid #42423F;
  min-height: 120px;
  place-items: center;

  p {
    text-align: center;
    color: #42423F;
    margin: 0;
    font-size: 1.2rem;
  }
`;

const FurnitureDetailBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem 0;

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
  color: #F4F0E7;
`;

const Description = styled.p`
  color: #42423F;
  font-size: 1.4rem;
`;

export {
  DetailsColumn,
  FurnitureDetailGrid,
  FurniturePropertiesGrid,
  FurnitureDetailBody,
  FocusedPictureWrapper,
  FocusedPicture,
  ProductName,
  BuyButton,
  Description
}