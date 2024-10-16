import React, { Fragment, useState } from 'react'
import Contact from './Contact';
import Carousel from './Carousel';
import Options from './Options';

import DarkLogo from '/media/logos/14-Logotipos-Naval.png';

import { PreviewHomeGrid, LogoSection } from './PreviewHome.style.js';

const PreviewHome = () => {
  const [currentView, setCurrentView] = useState('gallery');

  return (
    <PreviewHomeGrid>
      {currentView === 'gallery'  && <Carousel />}
      {currentView === 'contact' && <Contact />}

      <LogoSection>
        <Options setView={setCurrentView}/>
        <button
          onClick={() => {setCurrentView('gallery')}}
          >
          <img src={DarkLogo} width={140}/>
        </button>
      </LogoSection>
    </PreviewHomeGrid>
  )
};

export default PreviewHome;
