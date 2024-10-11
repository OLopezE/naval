import React from 'react'

import { OptionsGrid } from './PreviewHome.style.js';

const Options = ({setView}) => {
  return (
    <OptionsGrid>
      <a
        href='https://drive.google.com/file/d/1pkZfQp7E6RJag8sEQTfO23zdsvncIu-T/view?usp=sharing'
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