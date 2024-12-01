import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact';
import Carousel from './Carousel';
import Options from './Options';

import { PreviewHomeGrid, LogoSection } from './PreviewHome.style.js';

const PreviewHome = () => {
  const [displayGallery, toggleGallery] = useState(true);

  return (
    <PreviewHomeGrid>
      {displayGallery ? <Carousel /> : <Contact />}

      <LogoSection>
        <Link to="/catalogue">Catálogo</Link>

        <button onClick={() => toggleGallery(prev => !prev)}>
          <img src='/media/logos/logo-nombre.png' width={140}/>
        </button>
      </LogoSection>
    </PreviewHomeGrid>
  )
};

export default PreviewHome;
