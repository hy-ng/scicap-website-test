import React from "react";
import "./BackgroundPattern.css";
import pattern from "../assets/pattern-bg-v3.svg"; // Or paste SVG inline

export default function BackgroundPattern() {
  return (
    <img
      src={pattern}
      className="background-pattern"
      alt=""
      aria-hidden="true"
      draggable="false"
    />
  );
}
