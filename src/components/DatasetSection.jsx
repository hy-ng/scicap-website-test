import React from "react";

const datasetList = [
  {
    title: "LaMP-CAP (2025)",
    desc: "A dataset of over 300,000 figures from more than 110,000 scientific papers, curated for personalized caption generation with multimodal figure profiles.",
    links: {
      paper: "https://arxiv.org/abs/2506.06561",
      dataset: "https://github.com/Crowd-AI-Lab/lamp-cap"
    }
  },
  {
    title: "SciCap Challenge (2023)",
    desc: "400,000 scientific figure images from various arXiv papers, along with their respective captions and relevant paragraphs.",
    links: {
      paper: "https://aclanthology.org/2023.inlg-main.6/",
      dataset: "https://huggingface.co/datasets/CrowdAILab/scicap"
    }
  },
  {
    title: "SciCap-Eval (2023)",
    desc: "A human evaluation dataset that contains human judgments for 3,600 scientific figure captions for 600 arXiv figures.",
    links: {
      paper: "https://aclanthology.org/2023.findings-emnlp.363/",
      dataset: "#"
    }
  },
  {
    title: "SciCap (2021)",
    desc: "Large-scale image captioning dataset featuring real-world scientific figures and their captions. It includes over two million images from more than 290,000 arXiv papers.",
    links: {
      paper: "https://aclanthology.org/2021.findings-emnlp.277/",
      dataset: "https://github.com/tingyaohsu/scicap"
    }
  },
  {
    title: "Coming Soon...",
    desc: "Stay tuned for our next dataset release! We're working on something exciting to further advance scientific figure understanding.",
  },
];

export default function DatasetSection() {
  return (
    <section className="dataset-section">
      <h2 className="section-header dataset-title">DATASET</h2>
      <div className="dataset-cards">
        {datasetList.map((ds, idx) => (
          <div className="dataset-card" key={idx}>
            <div className="dataset-card-title">{ds.title}</div>
            <div className="dataset-card-desc">{ds.desc}</div>
            {ds.links && (
              <div className="dataset-card-buttons">
                <a 
                  href={ds.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`dataset-button paper-button ${ds.links.paper === "#" ? "inactive" : ""}`}
                  onClick={ds.links.paper === "#" ? (e) => e.preventDefault() : undefined}
                >
                  Paper
                </a>
                <a 
                  href={ds.links.dataset}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`dataset-button dataset-button ${ds.links.dataset === "#" ? "inactive" : ""}`}
                  onClick={ds.links.dataset === "#" ? (e) => e.preventDefault() : undefined}
                >
                  Dataset
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
