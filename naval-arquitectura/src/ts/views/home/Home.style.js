import styled from 'styled-components';

const HomeGrid = styled.div`
  position: relative;
  display: flex;
  background-color: blue;
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

const HomeButton = styled.button`
  all: unset;
  font-size: 1.2rem;
  z-index: 1;
  padding: 0.5rem 1rem;

  :hover {
    cursor: pointer;
  }
`;

export {
  HomeGrid,
  HomeButton,
  BackgroundVideo
};
