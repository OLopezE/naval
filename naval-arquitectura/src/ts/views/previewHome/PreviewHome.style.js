import styled from "styled-components";

const CarouselGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;

  > div {
    width: 90%;
    aspect-ratio: 1/1;
    box-shadow: inset 8px 8px 16px #e8e4db,
    inset -8px -8px 16px #fffcf3;

    @media (min-width: 600px) {
      width: 60%;
      grid-template-columns: 0.7fr 0.3fr;
      align-items: end;
    }
  }
`;

const PreviewHomeGrid = styled.div`
  display: grid;
  height: 100vh;
  height: 100svh;
  grid-template-rows: 0.7fr 0.3fr;

  @media (min-width: 600px) {
    align-items: end;
  }
`;

const LogoSection = styled.section`
    display: grid;
    place-content: center;

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
  ContactGrid,
  LogoSection,
  PreviewHomeGrid
}