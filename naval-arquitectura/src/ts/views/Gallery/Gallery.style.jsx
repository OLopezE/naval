import styled from "styled-components";

const GalleryLayout = styled.div`
  padding: 2rem;
  height: calc(100svh - 4rem);
  overflow: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling for iOS */

  iframe {
    width: 100%;
    height: 100%; /* Ensure it takes full height */
    border: none;
    overflow: auto;
  }

`;

export { GalleryLayout };
