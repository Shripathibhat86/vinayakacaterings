import React from 'react';
import './Hero.css';

const Hero = ({ title = "Vinayaka Caterings", subtitle = "Home" }) => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p className="breadcrumb"><span>Home</span> / <strong>{subtitle}</strong></p>
      </div>
    </section>
  );
};

export default Hero;
