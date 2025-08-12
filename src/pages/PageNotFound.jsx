import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pnf-container">
      <div className="pnf-content">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-subtitle">Page Not Found</h2>
        <p className="pnf-description">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="pnf-button">Go to Home</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
