import React, { useState, useEffect, useRef } from "react";
import scicapLogo from "../assets/scicap-logo.png"; //TODO: Change to svg if possible (ask Kenneth if got original file)

const navLinks = [
  { text: "Home", href: "#", active: true },
  { text: "People", href: "#" },
  { text: "Dataset", href: "#" },
  { 
    text: "Challenge",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { text: "2024", href: "https://gusty-cabbage-7e7.notion.site/The-Second-Scientific-Figure-Captioning-Challenge-SCICAP-Challenge-2024-d9131ae2517640998430fac2271c6e43", target: "_blank" },
      { text: "2023", href: "https://crowdailab.notion.site/The-1st-Scientific-Figure-Captioning-SciCap-Challenge-47b914e092dd4965af7b432f6b2d42e8", target: "_blank" }
    ]
  },
  { text: "External", href: "#" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menu if click is outside navbar
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    // Add event listeners for click/touch outside
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Clean up event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Only re-run if isMobileMenuOpen changes

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-logo">
        <img src={scicapLogo} alt="SciCap Logo" />
      </div>

      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
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
            onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.text)}
            onMouseLeave={() => setActiveDropdown(null)}
            className={link.hasDropdown ? 'has-dropdown' : ''}
          >
            <a
              href={link.href}
              className={link.active ? "active" : ""}
              tabIndex="0"
              onClick={() => {
                if (link.hasDropdown && window.innerWidth <= 900) {
                  // Toggle dropdown on mobile
                  setActiveDropdown(activeDropdown === link.text ? null : link.text);
                } else {
                  // Close mobile menu when clicking a non-dropdown link
                  setIsMobileMenuOpen(false);
                  setActiveDropdown(null);
                }
              }}
            >
              {link.text}
              {link.hasDropdown && <span className="dropdown-arrow">▾</span>}
            </a>
            {link.hasDropdown && (activeDropdown === link.text || window.innerWidth <= 900) && (
              <ul className={`dropdown-menu ${activeDropdown === link.text ? 'show' : ''}`}>
                {link.dropdownItems.map((item) => (
                  <li key={item.text}>
                    <a 
                      href={item.href}
                      target={item.target}
                      rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.text}
                    </a>
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
