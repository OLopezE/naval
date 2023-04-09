import styled from 'styled-components';

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  > p {
    color: #42423F
  }

  > a {
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    aspect-ratio: 1;
    box-shadow: inset 8px 8px 16px #e8e4db,
            inset -8px -8px 16px #fffcf3;
    
    :hover {
      transform: scale(1.1);
    }

    > img {
      position: absolute;
      height: 110%;
      min-width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export { RelatedGrid };