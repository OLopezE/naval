import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import OutlineLogo from '../../../../public/media/logos/13-Logotipos-Naval.png';
import DarkLogo from '../../../../public/media/logos/14-Logotipos-Naval.png';
import BrightLogo from '../../../../public/media/logos/15-Logotipos-Naval.png';

import { MainLayoutWrapper } from './MainLayout.styled';

const MainLayout = ({children}) => {
  const [logo, setLogo] = useState(BrightLogo);
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    pathname !== '/' ? setLogo(DarkLogo) : setLogo(BrightLogo);
  }, [pathname])

  console.log(pathname);
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
          <ul>
            <li>Inicio</li>
            <li>Arquitectura</li>
            <li>Mobiliario</li>
            <li>Contacto</li>
            <li>Sobre nosotras</li>
          </ul> : null
          }
          <button
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? 'x':'open'}
          </button>
        </div>
      </MainLayoutWrapper>
      {children}
    </Fragment>
  )
}

export default MainLayout;
