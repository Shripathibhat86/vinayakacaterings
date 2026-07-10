import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>Vinayaka Caterings</h2>
          <p>Think Veg, Think Vinayaka</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Ph: 9164567454</p>
          <p>Surathkal, Mangalore 575014</p>
          <p>Karnataka, India</p>
          <a href="mailto:vinayakacaterings@gmail.com" className="contact-link">vinayakacaterings@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vinayaka Caterings. All Rights Reserved.</p>
        <p className="developer-info">
          Developed & Maintained by <a href="tel:8722570265" className="developer-link">SK WEB LABS</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
