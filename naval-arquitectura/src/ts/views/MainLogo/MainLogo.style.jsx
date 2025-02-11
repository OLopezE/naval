import styled from 'styled-components';

const Layout = styled.div`
  height: 100vh;
  max-height: 100vh;
  display: grid;
  place-content: center;
  overflow: hidden;

  > a {
    z-index: 1;
  }
  img {
    width: 4rem;
  }
`;

const BgImage = styled.img`
  width: 100% !important;
  position: fixed;
  opacity: 50%;
  left: 0;
  top: 0;
`;

export { Layout, BgImage };