import styled from "styled-components";

const CarouselGrid = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  position: relative;

  > div {
    position: relative;
    width: 400px;
    aspect-ratio: 1/1;
  }

  > img:first-child {
    height: 95% !important;
  }

  > img:nth-child(3) {
    height: 95% !important;
  }
`;

const CurrentImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  opacity: 0;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  opacity: ${({ active }) => active ? 1: 0 };

  @media (min-width: 600px) {
    height: 80%;
    width: unset;
  }
`;

const PreviewHomeGrid = styled.div`
  display: grid;
  height: 100vh;
  height: 100svh;
  grid-template-rows: 0.8fr 0.2fr;
  padding: 1rem;

  @media (min-width: 600px) {
    align-items: end;
    padding: 0;
  }
`;

const LogoSection = styled.section`
    display: grid;
    align-items: end;
    justify-content: center;
    height: 100%;

    @media (min-width: 600px) {
    align-items: start;
  }

    > button {
      all: unset;
      transition: 0.2s;

      :hover {
        transform: scale(1.05);
        cursor: pointer;
      }
    }
`;

const ContactGrid = styled.section`
  display: grid;
  height: 100%;
  place-content: center;

  a {
    all: unset;
    color: #42423F;

    :hover {
      cursor: pointer;
    }
  }

  > p {
    letter-spacing: 1.2px;
    text-align: center;
    color: #42423F;
  }

  > a {
    letter-spacing: 1.2px;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;

export {
  CarouselGrid,
  CurrentImage,
  ContactGrid,
  LogoSection,
  PreviewHomeGrid
}
