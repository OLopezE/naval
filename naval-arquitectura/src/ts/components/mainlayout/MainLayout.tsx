import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import OutlineLogo from '/media/logos/13-Logotipos-Naval.png';
import DarkLogo from '/media/logos/14-Logotipos-Naval.png';
import BrightLogo from '/media/logos/15-Logotipos-Naval.png';

import { MainLayoutWrapper, BurgerButton, LinkList } from './MainLayout.styled';

const MainLayout = ({children}) => {
  const [logo, setLogo] = useState(BrightLogo);
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    pathname !== '/' ? setLogo(DarkLogo) : setLogo(BrightLogo);
  }, [pathname])

  return (
    <Fragment>
      <MainLayoutWrapper>
        <Link to="/">
          <img
            src={logo}
            width='160px'
          />
        </Link>
        <div>
          {showMenu ?
          <LinkList>
            <Link to="/arquitectura">Arquitectura</Link>
            <Link to="/mobiliario">Mobiliario</Link>
            <Link to="/sobre-nosotros">Nosotros</Link>
            <Link to="/contacto">Contacto</Link>
          </LinkList> : null
          }
          <BurgerButton
            showMenu = {showMenu}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span />
            <span />
            <span />
          </BurgerButton>
        </div>
      </MainLayoutWrapper>
      {children}
    </Fragment>
  )
}

export default MainLayout;
