import React from "react";

const newsList = [
  {
    date: "2025-06-02",
    text: "The leading organizers, Penn State's Ting-Hao 'Kenneth' Huang and C. Lee Giles, are awarded a grant by Alfred P. Sloan Foundation to build and deploy a web-based system that helps writers compose better captions for scientific figures!"
  },
  {
    date: "2025-05-15",
    text: "This year, the challenge will be hosted at IJCAI 2024 (August 3–9, Jeju Island, South Korea). The SciCap Challenge will be held on August 6."
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
