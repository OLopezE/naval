import styled from 'styled-components';

const MainLayoutWrapper = styled.div`
  position: fixed;
  z-index: 2;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 1rem;
`;

const BurgerButton = styled.button`
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;

  display: grid;

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