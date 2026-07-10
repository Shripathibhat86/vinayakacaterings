import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import MarqueeBanner from '../components/MarqueeBanner';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <Hero title="Contact Us" subtitle="Get in Touch" />
      <Contact />
      <MarqueeBanner />
    </div>
  );
};

export default ContactPage;
