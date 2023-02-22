import styled from 'styled-components';

const FurnitureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: 100svh;
  place-content: center;
  
  > div {
    padding-left: 3rem;
    display: grid;
  }
`;

const FurnitureTitle = styled.h1`
  color: #42423F;
  border-bottom: 2px solid #42423F;
  font-weight: 200;
`;

const FurnitureText = styled.p`
  color: #42423F;
`;

const VerticalCarousel = styled.div`
  padding: 10rem 0;
  justify-content: center;
  gap: 2rem;
  max-height: 100svh;
  overflow-y: scroll;

  > img {
    width: 400px;

  }
  > div {
    width: 200px;
    height: 300px;
    background-color: black;
  }
`;

const FurnitureInfoWrapper = styled.div`
  place-content: center;
`;

export {
  FurnitureGrid,
  FurnitureTitle,
  FurnitureText,
  VerticalCarousel,
  FurnitureInfoWrapper
}