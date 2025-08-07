import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleSeeAllPrograms = () => {
    navigate('/courses');
  };

  return (
    <div className="hero-container">
      {/* Left Side - Text Content */}
      <div className="hero-text-content">
        <div className="hero-text-wrapper">
          <h1 className="hero-title">
            <span className="hero-title-line">We're Changing</span>
            <span className="hero-title-line">The Education</span>
            <span className="hero-title-line">System Forever.</span>
          </h1>
          
          <p className="hero-description">
            Practical education that gives you all the<br />
            tools you need to thrive in the digital age.
          </p>
          
          <button 
            className="hero-button" 
            onClick={handleSeeAllPrograms}
          >
            SEE ALL PROGRAMS
          </button>
        </div>
      </div>

      {/* Right Side - Only Cover Image */}
      <div className="cover-image-container">
        <img 
          src="/img_cover.png" 
          alt="Featured Program"
          className="cover-image"
        />
      </div>
    </div>
  );
};

export default Hero;