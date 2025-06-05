import React from 'react';

export default function Challenge2024() {
  return (
    <div className="challenge-page">
      <div className="challenge-header">
        <h1>SciCap Challenge 2024</h1>
        <p className="challenge-subtitle">
          Advancing Scientific Figure Understanding through AI
        </p>
      </div>
      
      <section className="challenge-section">
        <h2>About the Challenge</h2>
        <p>
          The SciCap Challenge 2024 invites participants to develop innovative AI solutions 
          for understanding and describing scientific figures. This year's challenge focuses 
          on improving the accuracy and relevance of figure captions while maintaining 
          scientific precision.
        </p>
      </section>

      <section className="challenge-section">
        <h2>Important Dates</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Registration Opens</h3>
            <p>January 15, 2024</p>
          </div>
          <div className="timeline-item">
            <h3>Submission Deadline</h3>
            <p>June 30, 2024</p>
          </div>
          <div className="timeline-item">
            <h3>Results Announcement</h3>
            <p>August 15, 2024</p>
          </div>
        </div>
      </section>

      <section className="challenge-section">
        <h2>Prizes</h2>
        <div className="prizes">
          <div className="prize-item">
            <h3>🥇 First Place</h3>
            <p>$5,000</p>
          </div>
          <div className="prize-item">
            <h3>🥈 Second Place</h3>
            <p>$3,000</p>
          </div>
          <div className="prize-item">
            <h3>🥉 Third Place</h3>
            <p>$2,000</p>
          </div>
        </div>
      </section>
    </div>
  );
} 