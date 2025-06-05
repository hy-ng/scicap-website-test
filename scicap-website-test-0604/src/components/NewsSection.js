import React from "react";

const news = [
  {
    date: "2025-06-02",
    content:
      "The leading organizers, Penn State's Ting-Hao 'Kenneth' Huang and C. Lee Giles, are awarded a grant by Alfred P. Sloan Foundation to build and deploy a web-based system that helps writers compose better captions for scientific figures!",
  },
  {
    date: "2025-05-15",
    content:
      "This year, the challenge will be hosted at IJCAI 2024 (August 3-9, Jeju Island, South Korea). The SciCap Challenge will be held on August 6.",
  },
];

export default function NewsSection() {
  return (
    <section className="news-section">
      <h2>News</h2>
      <div className="news-list">
        {news.map((item, i) => (
          <div className="news-card" key={i}>
            <div className="news-date">{item.date}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
