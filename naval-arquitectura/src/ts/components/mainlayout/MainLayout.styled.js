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

  @media (max-width: 600px) {
    flex-direction: row;
    position: fixed;
    align-items: center;
    height: 80px;
    width: 100%;
    padding: 0;
    top: 0;
  }  
`;

const BurgerGrid = styled.div`
  position: relative;
`;

const BurgerButton = styled.button`
  background: transparent;
  cursor: pointer;
  transition: 0.1s;

  display: grid;
  gap: 4px;

  > span {
    height: 3px;
    width: 30px;
    border-radius: 4px;
    background-color: ${props => props.darkTheme ? '#42423F' : '#F4F0E7'};
  }

  :hover {
    border: none;
    transform: scale(1.1);
  }

  :focus {
    outline: none;
  }

  :focus-visible {
    outline: none;
  }

  :active {
    transform: scale(0.9);
  }

`;

const LinkList = styled.div`
  display: grid;
  padding-left: 1.2rem;

  > a {
    color: ${props => props.darkTheme ? '#42423F' : '#F4F0E7'};
    font-size: 1.2rem;
    transition: 0.2s;
    font-weight: 100;
  }

  > a:hover {
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    position: absolute;
    left: -70px;
    bottom: -110px;
  } 
`;

const Logo = styled.img`
  transition: 0.2s;

  :hover {
    transform: scale(1.1);
  }
`

export {
  MainLayoutWrapper,
  BurgerButton,
  BurgerGrid,
  LinkList,
  Logo
}