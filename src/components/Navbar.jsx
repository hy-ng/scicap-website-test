import React, { useState } from "react";
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
      { text: "2024 Challenge", href: "/challenge/2024" },
      { text: "2023 Challenge", href: "/challenge/2023" }
    ]
  },
  { text: "External", href: "#" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={scicapLogo} alt="SciCap Logo" />
      </div>
      <ul className="navbar-links">
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
            >
              {link.text}
              {link.hasDropdown && <span className="dropdown-arrow">▾</span>}
            </a>
            {link.hasDropdown && activeDropdown === link.text && (
              <ul className="dropdown-menu">
                {link.dropdownItems.map((item) => (
                  <li key={item.text}>
                    <a href={item.href}>{item.text}</a>
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
