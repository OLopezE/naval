import React from 'react'

import { ContactGrid } from './PreviewHome.style.js';

function Contact() {
  return (
    <ContactGrid>
      <img src='/media/logos/logo-nombre.png' width={140}/>

      <p>Oaxaca, México</p>
      <a href='mailto:proyecto@casanaval.mx'>proyecto@casanaval.mx</a>
      <a
        href='https://www.instagram.com/casa___naval/'
        target='_blank'
        >
        @casa___naval
      </a>
    </ContactGrid>
  )
}

export default Contact;
