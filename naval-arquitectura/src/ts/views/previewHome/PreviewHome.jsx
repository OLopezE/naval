import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact';
import Carousel from './Carousel';
import Options from './Options';

import { PreviewHomeGrid, LogoSection } from './PreviewHome.style.js';

const PreviewHome = () => {
  const [currentView, setCurrentView] = useState('gallery');

  return (
    <PreviewHomeGrid>
      <Carousel />

      <LogoSection>
        <Link to="/catalogue">Catálogo</Link>

        <Contact />
      </LogoSection>
    </PreviewHomeGrid>
  )
};

export default PreviewHome;
