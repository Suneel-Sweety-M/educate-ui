import React from 'react';
import './navbar.css';

const Navbar = () => {
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

        <nav className="navbar-menu-container">
          <a href="/" className="active">Home</a>
          <a href="/courses">Programs</a>
          <a href="/mission">Our Mission</a>
          <a href="/careers">Career</a>
          <a href="/login" className="navbar-login-btn">Student Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
