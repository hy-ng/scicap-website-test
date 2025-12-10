import React from "react";
import { Link } from 'react-router-dom';

const newsList = [
  {
    date: "Dec 2025",
    text: (
      <>
        <p>
          We are pleased to announce that our workshop paper,{' '}
          <a
            href="https://crowd.ist.psu.edu/pdf/2026/2026-scicap-history.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="news-link"
          >
            "Five Years of SciCap: What We Learned and Future Directions for Scientific Figure Captioning"
          </a>{' '}
            , will be presented at the {' '}
          <a
            href="https://ai-2-ase.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="news-link"
          >
           5th Annual AAAI Workshop on AI to Accelerate Science and Engineering (AI2ASE 2026)
          </a>{' '}
          in Singapore this coming January.
        </p>
      </>
    )
  },
  {
    date: "Jun 2025",
    text: (
      <>
        <p>
          In this year, the SciCap Challenge will be hosted at{' '}
          <a
            href="https://lm4sci.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="news-link"
          >
            LM4Sci Workshop
          </a>{' '}
            in{' '}
          <a
            href="https://colmweb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="news-link"
          >
            COLM 2025
          </a>{' '}
          (October 7–10, Montreal, Canada), with the main event on October 10.
        </p>
        <p>
          <strong>Key Dates:</strong>
        </p>
        <ul>
          <li>
            <strong>August 11 (Monday):</strong> Challenge Submission Deadline (mandatory)
          </li>
          <li>
            <strong>August 15 (Friday):</strong> Technical Report Submission Deadline (mandatory)
          </li>
        </ul>
        <p>
          More details of the SciCap Challenge 2025 can be found{' '}
          <Link to="/challenge/2025">here</Link>.
        </p>
      </>
    )
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
      <h2 className="section-header news-title">NEWS</h2>
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
