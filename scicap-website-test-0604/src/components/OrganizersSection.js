import React from "react";

const organizers = [
  { name: "Ting-Hao ‘Kenneth’ Huang", affil: "Pennsylvania State University, Crowd-AI Lab" },
  { name: "Ho Yin (Sam) Ng", affil: "Pennsylvania State University, Crowd-AI Lab" },
  { name: "Ting-Yao ‘Edward’ Hsu", affil: "Pennsylvania State University, Crowd-AI Lab" },
  { name: "Chieh-Yang Huang", affil: "MetaMetrics Inc." },
  { name: "Ryan Rossi", affil: "Adobe Research" },
  { name: "Sungchul Kim", affil: "Adobe Research" },
  { name: "Tong Yu", affil: "Adobe Research" },
];

export default function OrganizersSection() {
  return (
    <section className="organizers-section" id="people">
      <h2>Organizers</h2>
      <div className="organizers-list">
        {organizers.map((o, i) => (
          <div className="organizer-card" key={i}>
            <h4>{o.name}</h4>
            <div className="affil">{o.affil}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
