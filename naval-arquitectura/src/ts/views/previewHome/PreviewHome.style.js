import styled from "styled-components";

const CarouselGrid = styled.div`
  grid-row: 2;
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
  display: grid;
  height: calc(100vh - 4rem);
  height: calc(100svh - 4rem);
  padding: 2rem;
  grid-template-rows: 30px 1fr 5%;

  a {
    all: unset;
    color: #42423F;
    font-family: Bembo;
    text-align: right;

    :hover {
      cursor: pointer;
    }
  }

  button {
    all: unset;
    transition: 0.2s;
    height: 35px;
    justify-self: end;
    align-self: end;

      :hover {
        cursor: pointer;
      }
    }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 30px 1fr;

    > a {
      grid-column: 2;
    }

    > button {
      grid-column: 2;
      grid-row: 2;
    }
  }

  p, a {
    font-size: 12px;
    color: #42423F;
    font-family: Bembo;
  }
`;


const ContactGrid = styled.section`
  display: flex;
  flex-direction: column;
  grid-row: 3;
  margin-right: 12px;

  > p {
      text-align: right;
  }

  @media (min-width: 800px) {
    justify-content: end;
    align-items: start;
    grid-column: 1;
    grid-row: 2;
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
  OptionsGrid,
  PreviewHomeGrid
}
