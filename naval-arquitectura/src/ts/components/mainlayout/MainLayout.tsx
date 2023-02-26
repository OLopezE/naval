import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import OutlineLogo from '../../../../public/media/logos/13-Logotipos-Naval.png';
import DarkLogo from '../../../../public/media/logos/14-Logotipos-Naval.png';
import BrightLogo from '../../../../public/media/logos/15-Logotipos-Naval.png';

import { MainLayoutWrapper, BurgerButton } from './MainLayout.styled';

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
          <div>
            <Link to="/arquitectura">Arquitectura</Link>
            <Link to="/mobiliario">Mobiliario</Link>
            <Link to="/sobre-nosotros">Nosotros</Link>
            <Link to="/contacto">Contacto</Link>
          </div> : null
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
