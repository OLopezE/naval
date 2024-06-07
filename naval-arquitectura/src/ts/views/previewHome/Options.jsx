import React from 'react'

import { OptionsGrid } from './PreviewHome.style.js';

const Options = ({setView}) => {
  return (
    <OptionsGrid>
      <a
        href='https://drive.google.com/drive/folders/1YXa76R7xKOnXa331lc7wqzBAzuCP7-th?usp=drive_link'
        target='_blank'
      >
        Catalogue
      </a>
      <button
        onClick={() =>setView('contact')}
      >
        Contact
      </button>
    </OptionsGrid>
  )
}

export default Options