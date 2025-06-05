import React from "react";

const newsList = [
  {
    date: "Jun 2025",
    text: "This year, the challenge will be hosted at COLM 2025 (October 7–10, Montreal, Canada). The SciCap Challenge will be held on October 10."
  },
  {
    date: "Nov 2024",
    text: (
      <>
        The leading organizers, Penn State's{' '} 
        <a 
          href="http://kennethhuang.cc/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="news-link"
        >
          Ting-Hao 'Kenneth' Huang
        </a> 
        {' '}
        and 
        {' '} 
        <a 
          href="https://clgiles.ist.psu.edu/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="news-link"
        >
          C. Lee Giles
        </a> 
        , are awarded a grant by{' '}
        <a 
          href="https://sloan.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="news-link"
        >
          Alfred P. Sloan Foundation
        </a>
        {' '}to build and deploy a web-based system that helps writers compose better captions for scientific figures!
      </>
    )
  }
];

export default function NewsSection() {
  return (
    <section className="news-section">
      <h2 className="news-title">NEWS</h2>
      <div className="news-cards">
        {newsList.map((item, idx) => (
          <div className="news-card" key={idx}>
            <div className="news-date">{item.date}</div>
            <div className="news-text">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
