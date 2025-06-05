import React from "react";

const datasets = [
  {
    title: "SciCap-Eval (2023)",
    desc: "Curated from the SciCap Challenge Dataset for personalized caption generation with multimodal figure profiles.",
    tag: "Paper Dataset",
  },
  {
    title: "SciCap ALL (2025)",
    desc: "400,000 scientific figure images from various arXiv papers, along with their respective captions and relevant paragraphs.",
    tag: "Paper Dataset",
  },
  {
    title: "LaMP-CAP (2025)",
    desc: "Curated from the SciCap Challenge Dataset for personalized caption generation with multimodal figure profiles.",
    tag: "Paper Dataset",
  },
  {
    title: "SciCap Challenge (2023)",
    desc: "400,000 scientific figure images from various arXiv papers, along with their respective captions and relevant paragraphs.",
    tag: "Paper Dataset",
  },
  {
    title: "SciCap (2021)",
    desc: "Large-scale image captioning dataset featuring real-world scientific figures and their captions. Over two million images from 290,000+ arXiv papers.",
    tag: "Paper Dataset",
  },
];

export default function DatasetSection() {
  return (
    <section className="datasets-section" id="datasets">
      <h2>Dataset</h2>
      <div className="datasets-list">
        {datasets.map((ds, i) => (
          <div className="dataset-card" key={i}>
            <div className="title">{ds.title}</div>
            <div className="desc">{ds.desc}</div>
            <div className="tag">{ds.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
