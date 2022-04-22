import React from 'react';
import { Global } from '@emotion/react';

import globalStyles from '../styles/global-styles';

import MainNavigation from '../components/MainNavigation';
import Footer from './Footer';
import Seo from './Seo';

const Layout = ({ children, seo }) =>
(
  <>
    <Seo {...seo} />
    <Global styles={globalStyles} />
    <MainNavigation />
    {children}
    <Footer />
  </>
);


export default Layout;
