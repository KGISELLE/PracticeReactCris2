import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import NavBar from '../components/elements/NavBar/NavBar';

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <NavBar />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;  