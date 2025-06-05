import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SciCap</div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#people">People</a>
        <a href="#datasets">Dataset</a>
        <a href="#challenge">Challenge</a>
        <a href="#external">External</a>
      </div>
    </nav>
  );
}
