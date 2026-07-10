import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-column">
            <div className="about-image">
              {/* Fallback to hero.png or any relevant catering image */}
              <img src="/hero.png" alt="Vinayaka Caterings Setup" />
            </div>
            <div className="about-badge">
              <span className="badge-text-small">Since</span>
              <span className="badge-text-large">2018</span>
            </div>
          </div>
          
          <div className="about-content-column">
            <div className="about-header">
              <span className="about-subtitle">ABOUT US <span className="gold-dot">●</span></span>
            </div>
            <h2 className="about-title">
              Indulge in a celebration with great food!
            </h2>
            <p className="about-description">
              Vinayaka Caterings is a professional catering company that was established in 2018, offering comprehensive services to meet all your culinary needs. Our primary goal is to provide a unique and memorable dining experience with each meal we serve. We are committed to maintaining uncompromised quality, exceptional hygiene standards, meticulous presentation and attention to detail to ensure the utmost satisfaction of our customers.
            </p>
            <a href="https://wa.me/9164567454" target="_blank" rel="noopener noreferrer" className="btn about-btn">
              Book Now 
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
