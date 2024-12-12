import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact';
import Carousel from './Carousel';

import { PreviewHomeGrid } from './PreviewHome.style.js';

const PreviewHome = () => {
  const [displayGallery, toggleGallery] = useState(true);

  return (
    <PreviewHomeGrid>
      <Link to="/catalogue">Catálogo</Link>

      {displayGallery ? <Carousel /> : <Contact />}

      <button onClick={() => toggleGallery(prev => !prev)}>
        <img src='/media/logos/logo-nombre.png' width={140}/>
      </button>
    </PreviewHomeGrid>
  )
};

export default PreviewHome;
