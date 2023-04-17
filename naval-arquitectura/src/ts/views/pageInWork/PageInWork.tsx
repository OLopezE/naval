import React from 'react'
import { Link } from 'react-router-dom';

import { PageInWorkGrid } from './PageInWork.style.js'

const PageInWork = ({legend='Esta sección esta siendo construida.'}) => {
  return (
    <PageInWorkGrid>
      <p>{legend}</p>
      <Link to='/'>Volver a inicio</Link>
    </PageInWorkGrid>
  )
};

export default PageInWork;
