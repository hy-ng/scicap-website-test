import React from "react";
import scicapLogo from "../assets/scicap-logo.png"; //TODO: Change to svg if possible (ask Kenneth if got original file)

const navLinks = [
  { text: "Home", href: "#", active: true },
  { text: "People", href: "#" },
  { text: "Dataset", href: "#" },
  { text: "Challenge", href: "#" },
  { text: "External", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={scicapLogo} alt="SciCap Logo" style={{ height: "38px" }} />
      </div>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.text}>
            <a
              href={link.href}
              className={link.active ? "active" : ""}
              tabIndex="0"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
