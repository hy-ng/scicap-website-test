import React from "react";
import scicapLogo from "../assets/scicap-logo.png";
import sloanLogo from "../assets/sloan-logo.png"; // use a placeholder if you don't have the actual logo

export default function Footer() {
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
    </footer>
  );
}
