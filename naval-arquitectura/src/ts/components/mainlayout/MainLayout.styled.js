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
  transition: 1s;

  display: grid;
  gap: 4px;

  > span {
    height: 4px;
    width: 30px;
    background-color: ${props => props.darkTheme ? '#42423F' : '#F4F0E7'};
  }

  > span:first-child {
    transform: ${props => props.showMenu ? 'rotate(45deg)' : 'none'};
  }

  > span:last-child {
    transform: ${props => props.showMenu ? 'rotate(-45deg)' : 'none'};
  }

  > span:nth-child(2) {
    display: ${props => props.showMenu ? 'none' : 'block'};
  }
`;

const LinkList = styled.div`
  display: grid;

  > a {
    color: ${props => props.darkTheme ? '#42423F' : '#F4F0E7'};
    font-size: 1.2rem;
    transition: 0.2s;
  }

  > a:hover {
    transform: scale(1.1);
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
  LinkList,
  Logo
}