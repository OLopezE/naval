import React from 'react';
import { Link } from 'react-router-dom';

import { HomeGrid, HomeLink, BackgroundVideo } from './Home.style';

const Home = () => {
  return (
    <HomeGrid>
      <BackgroundVideo autoPlay muted loop>
        <source src='media/video/backgroundVideo.mp4' type='video/mp4'/>
      </BackgroundVideo>
      <HomeLink to="/arquitectura">Arquitectura</HomeLink>
      <HomeLink to="/mobiliario">Mobiliario</HomeLink>
    </HomeGrid>
  )
}

export default Home;
