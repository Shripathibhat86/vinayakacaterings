import React from 'react';
import Hero from '../components/Hero';
import MarqueeBanner from '../components/MarqueeBanner';
import About from '../components/About';
import Services from '../components/Services';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';

const HomePage = () => {
  return (
    <>
      <Hero 
        title="Vinayaka Caterings" 
        subtitle="Best Veg Catering in Surathkal" 
      />
      <MarqueeBanner />
      <About />
      <Services />
      <Menu />
      <Gallery />
    </>
  );
};

export default HomePage;
