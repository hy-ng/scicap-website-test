import React, { useState, useEffect } from "react";
import "./BackgroundPattern.css";
import pattern from "../assets/pattern-bg-v3.svg";
import patternMobile from "../assets/pattern-bg-mobile.svg"; // You'll need to add this file

export default function BackgroundPattern() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <img
      src={isMobile ? patternMobile : pattern}
      className="background-pattern"
      alt=""
      aria-hidden="true"
      draggable="false"
    />
  );
}
