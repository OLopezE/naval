import React from 'react';

import { HomeGrid, HomeButton, BackgroundVideo } from './Home.style';

const Home = () => {
  return (
    <HomeGrid>
      <BackgroundVideo autoPlay muted loop>
        <source src='media/video/backgroundVideo.mp4' type='video/mp4'/>
      </BackgroundVideo>
      <HomeButton>Arquitectura</HomeButton>
      <HomeButton>Mobiliario</HomeButton>
    </HomeGrid>
  )
}

export default Home;
