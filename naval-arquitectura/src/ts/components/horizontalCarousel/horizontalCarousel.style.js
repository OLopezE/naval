import styled from 'styled-components';

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
    }

  > button {
    all: unset;
    position: relative;
    background: #F4F0E7;
    box-shadow: inset 8px 8px 16px #e8e4db,
            inset -8px -8px 16px #fffcf3;
    display: flex;
    aspect-ratio: 1;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    overflow: hidden;
    border-radius: 4px;

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

export {
  ImagesGrid
}