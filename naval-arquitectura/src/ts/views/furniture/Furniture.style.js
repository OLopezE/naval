import styled from 'styled-components';

const FurnitureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: 100svh;
  place-content: center;
  
  > div {
    display: grid;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    overflow-y: scroll;
    height: 100%;
  }
`;

const VerticalCarousel = styled.div`
  padding: 10rem 0;
  justify-content: center;
  gap: 2rem;
  max-height: 100svh;
  overflow-y: scroll;

  @media (max-width: 600px) {
    all: unset;
    justify-content: center;
  }
  

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
  padding-left: 3rem;

  > h1 {
    color: #42423F;
    margin: 0;
    border-bottom: 2px solid #42423F;
    font-weight: 200;
    letter-spacing: 4px;
    margin-bottom: 1rem;
  }

  > p {
    color: #42423F;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
  
`;

export {
  FurnitureGrid,
  VerticalCarousel,
  FurnitureInfoWrapper
}