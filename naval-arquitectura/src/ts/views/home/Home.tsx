import React from 'react';

import { HomeGrid } from './Home.style';

const Home = () => {
  return (
    <HomeGrid>
      <video autoPlay muted loop>
        <source src='video/backgroundVideo.mp4' type='video/mp4'/>
      </video>
      <button>Arquitectura</button>
      <button>Mobiliario</button>
    </HomeGrid>
  )
}

export default Home;
