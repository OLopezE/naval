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

  @media (min-width: 600px) {
    grid-template-columns: 0.7fr 0.3fr;
    align-items: end;
  }
`;

const LogoSection = styled.section`
    display: flex;
    padding: 1rem 0.5rem;
    justify-content: end;

    @media (max-width: 600px) {
      align-items: end;
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
@media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(4, 260px);
  }

  p {
    color: #42423F;
  }

  > div {
    padding: 1rem 0.5rem;

    > p:first-child {
      font-weight: 600;
    }
  }
`;

export {
  CarouselGrid,
  ContactGrid,
  LogoSection,
  PreviewHomeGrid
}