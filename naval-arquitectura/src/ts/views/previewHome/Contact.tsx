import React from 'react'

import { ContactGrid } from './PreviewHome.style.js';

function Contact() {

  const contactCards = [
    {
      name: 'Arq. Marissa Nava',
      phone: '+52 (614) 400 75-87',
      mail: 'proyecto.marissa.naval@gmail.com',
      instagram: 'marissa__naval'
    },
    {
      name: 'Arq. Deb Garay',
      phone: '+52 (614) 409 50-10',
      mail: 'deb@gmail.com',
      instagram: 'deb.garay'
    },
  ]

  return (
    <ContactGrid>
      {contactCards.map(contact => (
        <div>
          <p>{contact?.name}</p>
          <p>phone: {contact?.phone}</p>
          <p>{contact?.mail}</p>
          <p>{contact?.instagram}</p>
        </div>
      ))}
    </ContactGrid>
  )
}

export default Contact;
