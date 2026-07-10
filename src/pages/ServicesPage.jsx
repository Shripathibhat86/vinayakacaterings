import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import MarqueeBanner from '../components/MarqueeBanner';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <Hero title="Our Services" subtitle="What We Offer" />
      <Services />
      <MarqueeBanner />
    </div>
  );
};

export default ServicesPage;
