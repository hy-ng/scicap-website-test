import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import scicapLogo from "../assets/scicap-logo.png"; //TODO: Change to svg if possible (ask Kenneth if got original file)

const navLinks = [
  { text: "Home", href: "/", active: true },
  { text: "People", href: "#", inactive: true },
  { text: "Dataset", href: "#", inactive: true },
  { 
    text: "Challenge",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { text: "2025", href: "/challenge/2025" },
      { text: "2024", href: "https://gusty-cabbage-7e7.notion.site/The-Second-Scientific-Figure-Captioning-Challenge-SCICAP-Challenge-2024-d9131ae2517640998430fac2271c6e43", target: "_blank" },
      { text: "2023", href: "https://crowdailab.notion.site/The-1st-Scientific-Figure-Captioning-SciCap-Challenge-47b914e092dd4965af7b432f6b2d42e8", target: "_blank" }
    ]
  },
  { text: "External", href: "#", inactive: true },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const renderLink = (item) => {
    if (item.target === '_blank' || item.href.startsWith('http')) {
      return (
        <a
          href={item.href}
          target={item.target}
          rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
          className={item.inactive ? 'inactive' : ''}
        >
          {item.text}{item.hasDropdown && <span className="dropdown-arrow">▸</span>}
        </a>
      );
    }
    return (
      <Link
        to={item.href}
        className={item.inactive ? 'inactive' : ''}
      >
        {item.text}{item.hasDropdown && <span className="dropdown-arrow">▸</span>}
      </Link>
    );
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={scicapLogo} alt="SciCap Logo" />
        </Link>
      </div>

      <button 
        className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {navLinks.map((link) => (
          <li 
            key={link.text}
            className={link.hasDropdown ? 'has-dropdown' : ''}
          >
            {renderLink(link)}
            {link.hasDropdown && (
              <ul className="dropdown-menu">
                {link.dropdownItems.map((item) => (
                  <li key={item.text}>
                    {renderLink(item)}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
