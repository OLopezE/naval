import React from 'react'

import { FurnitureGrid, FurnitureTitle, FurnitureText } from './Furniture.style.js';

function Furniture() {
  return (
    <FurnitureGrid>
      <div>
        <FurnitureTitle>
          Mobiliario
        </FurnitureTitle>
        <FurnitureText>
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </FurnitureText>
      </div>
      <p>fotos</p>
    </FurnitureGrid>
  )
}

export default Furniture