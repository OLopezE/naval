import React, { Fragment, useState } from 'react'
import Contact from './Contact';
import Carousel from './Carousel';

import DarkLogo from '/media/logos/14-Logotipos-Naval.png';

import { PreviewHomeGrid, LogoSection } from './PreviewHome.style.js';

const PreviewHome = () => {
  const [toggleContact, setToggleContact] = useState(false);


  return (
    <PreviewHomeGrid>
      {toggleContact ?
      (<Contact />) : (<Carousel />)}
      <LogoSection>
        <button
          onClick={() => {setToggleContact(!toggleContact)}}
          >
          <img src={DarkLogo} width={140}/>
        </button>
      </LogoSection>
    </PreviewHomeGrid>
  )
};

export default PreviewHome;
