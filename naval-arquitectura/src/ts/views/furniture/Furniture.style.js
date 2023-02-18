import styled from 'styled-components';

const FurnitureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: 100svh;
  place-content: center;
  
  > div {
    padding-left: 3rem;
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

export {
  FurnitureGrid,
  FurnitureTitle,
  FurnitureText
}