import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="left-section">
            <div className="copyright">©2025 Educate</div>
            <div className="footer-text">
              <p>Legal business name: IAG SERVICES - FZCO</p>
              <p>Address: DSO-IFZA-20424, IFZA Properties, Dubai Silicon Oasis, Dubai, United Arab Emirates</p>
              <p>Business phone: 058 535 0301</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="footer-links">
            <span>Contact</span>
            <span>Terms</span>
            <span>Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;