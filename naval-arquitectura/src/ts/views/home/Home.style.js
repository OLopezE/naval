import styled from 'styled-components';

import { Link } from 'react-router-dom';

const HomeGrid = styled.div`
  position: relative;
  display: flex;
  height: 100svh;
  overflow: hidden;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  width: 100%;
`;

const HomeLink = styled(Link)`
  all: unset;
  font-size: 1.2rem;
  z-index: 1;
  padding: 0.5rem 1rem;
  transition: 0.2s;

  :hover {
    color: white;
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export {
  HomeGrid,
  HomeLink,
  BackgroundVideo
};
