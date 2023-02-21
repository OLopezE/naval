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
  
  > p {
    text-align: center;
    color: #42423F;
  }
`;

const FurnitureDetailBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

`;

export {
  DetailsColumn,
  FurnitureDetailGrid,
  FurniturePropertiesGrid,
  FurnitureDetailBody
}