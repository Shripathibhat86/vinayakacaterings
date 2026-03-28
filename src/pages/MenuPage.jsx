import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import MarqueeBanner from '../components/MarqueeBanner';

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="menu-page">
      <Hero title="Our Menu" subtitle="Delicious Offerings" />
      <Menu />
      <MarqueeBanner />
    </div>
  );
};

export default MenuPage;
