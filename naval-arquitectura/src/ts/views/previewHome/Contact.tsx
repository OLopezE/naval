import React from 'react'

import { ContactGrid } from './PreviewHome.style.js';

function Contact() {
  return (
    <ContactGrid>
      <a href='mailto:proyecto.marissa.naval@gmail.com'>proyecto.marissa.naval@gmail.com</a>
      <div>
        <a
          href='https://www.instagram.com/naval.mobiliario'
          target={'_blank'}
          >
          @naval.mobiliario
        </a>
        <a
          href='https://www.instagram.com/naval.arquitectura'
          target={'_blank'}
          >
          @naval.arquitectura
        </a>
      </div>
    </ContactGrid>
  )
}

export default Contact;
