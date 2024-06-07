import React from 'react'

import { OptionsGrid } from './PreviewHome.style.js';

const Options = ({setView}) => {
  return (
    <OptionsGrid>
      <button
        onClick={() =>setView('gallery')}
      >Galería</button>
      <a
        href='https://drive.google.com/drive/folders/1YXa76R7xKOnXa331lc7wqzBAzuCP7-th?usp=drive_link'
        target='_blank'
      >
        Catálogo
      </a>
      <button
        onClick={() =>setView('contact')}
      >Contacto</button>
    </OptionsGrid>
  )
}

export default Options