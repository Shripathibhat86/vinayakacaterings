import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCall from './FloatingCall';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        {children}
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
};

export default Layout;
