import styled from 'styled-components';

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  > p {
    color: #42423F
  }

  > a {
    overflow: hidden;
  }
`;

export { RelatedGrid };