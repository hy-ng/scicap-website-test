import React from "react";

const datasetList = [
  {
    title: "LaMP-CAP (2025)",
    desc: "Curated from the SciCap Challenge Dataset for personalized caption generation with multimodal figure profiles.",
    tags: ["Paper", "Dataset"],
  },
  {
    title: "SciCap Challenge (2023)",
    desc: "400,000 scientific figure images from various arXiv papers, along with their respective captions and relevant paragraphs.",
    tags: ["Paper", "Dataset"],
  },
  {
    title: "SciCap (2021)",
    desc: "Large-scale image captioning dataset featuring real-world scientific figures and their captions. It includes over two million images from more than 290,000 arXiv papers.",
    tags: ["Paper", "Dataset"],
  },
  {
    title: "SciCap-Eval (2023)",
    desc: "Curated from the SciCap Challenge Dataset for personalized caption generation with multimodal figure profiles.",
    tags: ["Paper", "Dataset"],
  },
  {
    title: "SciCap ALL (2025)",
    desc: "400,000 scientific figure images from various arXiv papers, along with their respective captions and relevant paragraphs.",
    tags: ["Paper", "Dataset"],
  },
];

export default function DatasetSection() {
  return (
    <section className="dataset-section">
      <h2 className="dataset-title">DATASET</h2>
      <div className="dataset-cards">
        {datasetList.map((ds, idx) => (
          <div className="dataset-card" key={idx}>
            <div className="dataset-card-title">{ds.title}</div>
            <div className="dataset-card-desc">{ds.desc}</div>
            <div className="dataset-card-tags">
              {ds.tags.map((tag, i) => (
                <span className="dataset-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
