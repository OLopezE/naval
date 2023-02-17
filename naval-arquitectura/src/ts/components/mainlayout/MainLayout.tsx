import React, { Fragment } from 'react';

import { MainLayoutWrapper } from './MainLayout.styled';

const MainLayout = ({children}) => {
  return (
    <Fragment>
      <MainLayoutWrapper>
        <p>logo</p>
      </MainLayoutWrapper>
      {children}
    </Fragment>
  )
}

export default MainLayout;
