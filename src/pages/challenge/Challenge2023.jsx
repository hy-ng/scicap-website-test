import React from 'react';

export default function Challenge2023() {
  return (
    <div className="challenge-page">
      <div className="challenge-header">
        <h1>SciCap Challenge 2023</h1>
        <p className="challenge-subtitle">
          Past Challenge Archive
        </p>
      </div>
      
      <section className="challenge-section">
        <h2>Challenge Overview</h2>
        <p>
          The SciCap Challenge 2023 brought together researchers and developers 
          to tackle the challenge of automated scientific figure understanding. 
          Participants developed AI models to generate accurate and contextually 
          relevant captions for scientific figures across various domains.
        </p>
      </section>

      <section className="challenge-section">
        <h2>Winners</h2>
        <div className="winners">
          <div className="winner-item first-place">
            <h3>🥇 First Place</h3>
            <p className="team-name">Team DeepSci</p>
            <p className="institution">Stanford University</p>
            <p className="score">Score: 89.5</p>
          </div>
          <div className="winner-item second-place">
            <h3>🥈 Second Place</h3>
            <p className="team-name">FigureSense</p>
            <p className="institution">MIT</p>
            <p className="score">Score: 87.2</p>
          </div>
          <div className="winner-item third-place">
            <h3>🥉 Third Place</h3>
            <p className="team-name">CaptionAI</p>
            <p className="institution">UC Berkeley</p>
            <p className="score">Score: 86.8</p>
          </div>
        </div>
      </section>

      <section className="challenge-section">
        <h2>Challenge Statistics</h2>
        <div className="statistics">
          <div className="stat-item">
            <h3>Total Participants</h3>
            <p>250+ Teams</p>
          </div>
          <div className="stat-item">
            <h3>Countries Represented</h3>
            <p>45+</p>
          </div>
          <div className="stat-item">
            <h3>Submissions</h3>
            <p>1000+</p>
          </div>
        </div>
      </section>
    </div>
  );
} 