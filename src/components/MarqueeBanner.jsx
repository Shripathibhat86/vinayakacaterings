import React from 'react';
import './MarqueeBanner.css';

const MarqueeBanner = () => {
  const servicesList = [
    "Wedding", "60th Wedding Event", "70th Wedding Event", 
    "Upanayanam", "Namakaranam", "Seemantham", "Baby Shower", 
    "Birthday Party", "House Warming", "Mehendi Functions", 
    "Corporate Events", "Retirement"
  ];

  return (
    <div className="services-marquee-container">
      <div className="services-marquee">
        <div className="services-marquee-content">
          {servicesList.map((service, index) => (
            <span key={`first-${index}`} className="marquee-item">
              <span className="bullet">•</span> {service}
            </span>
          ))}
        </div>
        <div className="services-marquee-content">
          {servicesList.map((service, index) => (
            <span key={`second-${index}`} className="marquee-item">
              <span className="bullet">•</span> {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;
