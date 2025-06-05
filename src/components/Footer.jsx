import React from "react";
import scicapLogo from "../assets/scicap-logo.png";
import sloanLogo from "../assets/sloan-logo.png"; // use a placeholder if you don't have the actual logo

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <img 
          src={scicapLogo} 
          alt="SciCap Logo" 
          className="footer-logo"
        />
        <div className="footer-supported">
          <span>supported by:</span>
          <img 
            src={sloanLogo} 
            alt="Sloan Foundation Logo"
          />
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} <a href="https://crowd.ist.psu.edu/crowd-ai-lab.html" target="_blank" rel="noopener noreferrer">Crowd-AI Lab, Penn State</a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
