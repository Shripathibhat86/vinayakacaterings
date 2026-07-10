import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-container">
          <Link to="/" className="brand-logo" onClick={closeMenu}>
            <img src="/logo.png" alt="Vinayaka Caterings Logo" className="logo-img" />
          </Link>
        </div>

        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Menu</NavLink></li>
            <li><NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Gallery</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink></li>
          </ul>
          
          <div className="nav-action mobile-only">
            <a href="https://wa.me/9164567454" target="_blank" rel="noopener noreferrer" className="btn btn-outline" onClick={closeMenu}>
              Book Now
            </a>
          </div>
        </nav>

        <div className="nav-action desktop-only">
          <a href="https://wa.me/9164567454" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Book Now
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
