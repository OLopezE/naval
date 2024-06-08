import styled from "styled-components";

const CarouselGrid = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  position: relative;
  overflow: hidden;

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
  display: flex;
  height: calc(100vh - 2rem);
  height: calc(100svh - 2rem);
  gap: 1rem;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
`;

const LogoSection = styled.section`
    display: grid;
    place-content: center;
    gap: 1rem;

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
    text-align: center;
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  height: 100%;
  place-content: center;
  gap: 1rem;

  > button, a {
    all: unset;

    font-size: 1.2rem;
    color: #42423F;
    text-align: center;
    cursor: pointer;
  }
`;

export {
  CarouselGrid,
  CurrentImage,
  ContactGrid,
  LogoSection,
  OptionsGrid,
  PreviewHomeGrid
}
