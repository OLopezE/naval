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
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;

  > span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: ${props => props.darkTheme ? '#42423F' : '#F4F0E7'};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  > span:first-child {
    top: 0px;
    transform-origin: left center;
    transform: ${props => props.showMenu ? 'rotate(45deg)' : 'none'};
  }

  > span:last-child {
    top: 100%;
    transform: translateY(-100%);
    transform-origin: left center;
    transform: ${props => props.showMenu ? 'rotate(-45deg)' : 'none'};
  }

  > span:nth-child(2) {
    top: 50%;
    transform-origin: left center;
    transform: translateY(-50%);
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