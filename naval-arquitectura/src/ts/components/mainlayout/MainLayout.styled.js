import styled from 'styled-components';

const MainLayoutWrapper = styled.div`
  position: fixed;
  z-index: 2;
  height: 97%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 1rem;
  padding-bottom: 1rem;
`;

const BurgerButton = styled.button`
  background: transparent;
  cursor: pointer;

  display: grid;
  gap: 4px;

  > span {
    height: 4px;
    width: 30px;
    background-color: black;
  }
`;

export {
  MainLayoutWrapper,
  BurgerButton
}