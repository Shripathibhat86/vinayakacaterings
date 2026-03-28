import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import MarqueeBanner from '../components/MarqueeBanner';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Hero title="About Us" subtitle="Learn Our Story" />
      <About />
      <MarqueeBanner />
    </div>
  );
};

export default AboutPage;
