import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-inner">
        <div className="navbar-logo-container">
          <img
            src="/img1.png"
            alt="EDUCATE Logo"
            className="navbar-logo"
          />
          <span className="navbar-logo-text"></span>
        </div>

        {/* Desktop Menu */}
        <nav className="navbar-menu-container">
          <a href="/" className="active" onClick={closeMenu}>Home</a>
          <a href="/courses" onClick={closeMenu}>Programs</a>
          <a href="/mission" onClick={closeMenu}>Our Mission</a>
          <a href="/careers" onClick={closeMenu}>Career</a>
          <a href="/login" onClick={closeMenu}>Student Login</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`navbar-mobile-menu-expanded ${isMenuOpen ? 'active' : ''}`}>
          <button className="mobile-menu-close" onClick={closeMenu}>×</button>
          <a href="/" className="active" onClick={closeMenu}>Home</a>
          <a href="/courses" onClick={closeMenu}>Programs</a>
          <a href="/mission" onClick={closeMenu}>Our Mission</a>
          <a href="/careers" onClick={closeMenu}>Career</a>
          <a href="/login" onClick={closeMenu}>Student Login</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;