import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    { title: "Wedding Event", subtitle: "Grand celebrations & majestic feasts" },
    { title: "60th Wedding Event", subtitle: "Shashtiabdapoorthi catering specials" },
    { title: "70th Wedding Event", subtitle: "Bheemaratha Shanthi feasts" },
    { title: "Upanayanam", subtitle: "Traditional thread ceremony spreads" },
    { title: "Namakaranam", subtitle: "Naming ceremony joyful treats" },
    { title: "Seemantham", subtitle: "Baby shower gathering specialties" },
    { title: "Baby Shower", subtitle: "Joyous and loving celebrations" },
    { title: "Birthday Party", subtitle: "Memorable moments and tasty snacks" },
    { title: "House Warming", subtitle: "Gruhapravesham traditional meals" },
    { title: "Mehendi Functions", subtitle: "Colorful festivities and street food" },
    { title: "Corporate Events", subtitle: "Professional & elegant catering" },
    { title: "Retirement Functions", subtitle: "Honoring milestones with great food" }
  ];

  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="services-subtitle">Catering for every special occasion in your life</p>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                <span className="service-bullet">❈</span>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
