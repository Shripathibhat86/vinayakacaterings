import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section-padding" id="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-subtitle">Get In Touch</h3>
            <p className="contact-desc">
              Have a special event coming up? We'd love to hear from you. 
              Let us handle the food while you enjoy the celebration.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Our Location</h4>
                  <p>Surathkal, Mangalore 575014, Karnataka, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h4>Phone Number</h4>
                  <p>+91 9164567454</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email Address</h4>
                  <p>vinayakacaterings@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <a href="https://wa.me/9164567454" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Event Type</label>
                <select id="subject" required>
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other Celebration</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
