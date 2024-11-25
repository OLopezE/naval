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

  a {
    all: unset;
    color: #42423F;
    font-family: Bembo;

    :hover {
      cursor: pointer;
    }
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const LogoSection = styled.section`
    display: grid;
    place-content: center;
    gap: 1rem;

    @media (min-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: space-between;
    }

    button {
      all: unset;
      transition: 0.2s;

      :hover {
        transform: scale(1.05);
        cursor: pointer;
      }
    }

    > a {
      text-align: center;
    }
`;

const ContactGrid = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (min-width: 800px) {
    justify-content: end;
    align-items: end;
  }

  a {
    all: unset;
    color: #42423F;
    font-family: Bembo;

    :hover {
      cursor: pointer;
    }
  }

  > p, a {
    margin-right: 10px;
  }

  > p {
    font-family: Bembo;
    letter-spacing: 1.2px;
    text-align: center;
    color: #42423F;
  }
`;

const OptionsGrid = styled.div`

  height: 100%;
  gap: 1rem;

  > button, a {
    all: unset;

    font-family: Bembo;
    font-size: 1rem;
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
