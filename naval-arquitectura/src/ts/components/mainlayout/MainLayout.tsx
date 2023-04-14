import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import OutlineLogo from '/media/logos/13-Logotipos-Naval.png';
import DarkLogo from '/media/logos/14-Logotipos-Naval.png';
import BrightLogo from '/media/logos/15-Logotipos-Naval.png';

import {
  MainLayoutWrapper,
  BurgerButton,
  BurgerGrid,
  LinkList,
  Logo
} from './MainLayout.styled';

const MainLayout = ({children}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    pathname !== '/' ? setDarkTheme(true) : setDarkTheme(false);
    setShowMenu(false);
  }, [pathname])

  return (
    <Fragment>
      <MainLayoutWrapper darkTheme={darkTheme}>
        <Link to="/">
          <Logo
            src={ darkTheme ? DarkLogo : BrightLogo }
            width='160px'
          />
        </Link>
        <BurgerGrid>
          {showMenu ?
          <LinkList darkTheme={darkTheme}>
            <Link to="/arquitectura">Arquitectura</Link>
            <Link to="/mobiliario">Mobiliario</Link>
            <Link to="/sobre-nosotros">Nosotros</Link>
            <Link to="/contacto">Contacto</Link>
          </LinkList> : null
          }
          <BurgerButton
            darkTheme={darkTheme}
            showMenu={showMenu}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span />
            <span />
            <span />
          </BurgerButton>
        </BurgerGrid>
      </MainLayoutWrapper>
      {children}
    </Fragment>
  )
}

export default MainLayout;
