import React, { useState } from 'react';
import samNgPhoto from '../assets/member/Ng-Sam.jpg';
import defaultUserPhoto from '../assets/member/user-head.png';

const Challenge2025 = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="challenge-2025-page">
      <div className="challenge-2025-header">
        <h1>SciCap Challenge 2025</h1>
      </div>

      <nav className="challenge-2025-nav">
        <a href="#overview">Overview</a>
        <a href="#baseline-models">Baseline Models</a>
        <a href="#how-to-participate">How to Participate</a>
        <a href="#references">References</a>
        <a href="#dataset">Dataset</a>
        <a href="#contact-us">Contact Us</a>
        <a href="#organizers">Organizers</a>
      </nav>

      <section id="overview" className="challenge-2025-section">
        <h2>OVERVIEW</h2>
        <div className="main-text">
          <p>Welcome to the Third Scientific Figure Captioning Challenge (SciCap Challenge 2025)! This year, we're excited to introduce a new focus on personalized caption generation using our latest LaMP-CAP dataset, which features over 300,000 figures from more than 110,000 scientific papers, curated specifically for personalized caption generation with multimodal figure profiles.</p>
          
          <p>Our challenge this year aims to advance the field of scientific figure understanding by developing AI models that can generate captions that adapt to researchers' unique writing styles and domain contexts. Using the LaMP-CAP dataset, participants will build computational models that can learn from and emulate different writing patterns, incorporate domain-specific knowledge, and consider other contextual factors that contribute to creating more effective and personalized scientific captions.</p>

          <p>The challenge will be hosted at the LM4Sci Workshop in COLM 2025 (October 7-10, Montreal, Canada). We invite researchers, students, industry practitioners, AI/NLP/CV experts, and anyone interested in advancing personalized scientific communication to participate!</p>

          <p>For questions about the challenge, please email us at <a href="mailto:scicap-challenge@googlegroups.com">scicap-challenge@googlegroups.com</a>.</p>
        </div>

        <div className="expandable-sections">
          {/* Temporarily hidden until details are confirmed
          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSection === 'office-hour' ? 'expanded' : ''}`}
              onClick={() => toggleSection('office-hour')}
            >
              Zoom Office Hour
              <span className="expand-icon">{expandedSection === 'office-hour' ? '▼' : '▲'}</span>
            </button>
            {expandedSection === 'office-hour' && (
              <div className="section-content">
                <p>The organizers will host a 30-minute-long Zoom office hour to answer all kinds of questions. Please do not hesitate to join us!</p>
                <ul>
                  <li>Date: NOT Decided Yet</li>
                  <li>Time: Eastern Daylight Time</li>
                  <li>Zoom Link: TBA</li>
                </ul>
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSection === 'tracks' ? 'expanded' : ''}`}
              onClick={() => toggleSection('tracks')}
            >
              One Challenge, Two Track
              <span className="expand-icon">{expandedSection === 'tracks' ? '▼' : '▲'}</span>
            </button>
            {expandedSection === 'tracks' && (
              <div className="section-content">
                <p>
                  The challenge will be structured into two tracks to accommodate the inherent differences and evaluation fairness between <strong>Short</strong> and <strong>Long captions.</strong> While longer captions tend to be viewed as more informative by readers <a href="https://arxiv.org/abs/2302.12324" target="_blank" rel="noopener noreferrer">[Huang et al. 2023]</a>, short captions are also crucial due to real-world space constraints in paper writing.
                </p>
              </div>
            )}
          </div>
          */}

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSection === 'dates' ? 'expanded' : ''}`}
              onClick={() => toggleSection('dates')}
            >
              Important Dates
              <span className="expand-icon">{expandedSection === 'dates' ? '▼' : '▲'}</span>
            </button>
            {expandedSection === 'dates' && (
              <div className="section-content">
                <ul className="dates-list">
                  <li>SciCap Challenge launches: June 16, 2025</li>
                  <li><strong>Challenge Submission Deadline: August 11 (Monday), 2025 (mandatory)</strong></li>
                  <li><strong>Technical Report Submission Deadline: August 15 (Friday), 2025 (mandatory)</strong></li>
                  <li>Challenge Result Notification: September 1 (Monday), 2025</li>
                  <li>Challenge hosted at LM4Sci Workshop in COLM: October 10, 2025</li>
                </ul>

                <p className="time-note">
                  Note: All time are in Central Time Zone (CST) time, which is <strong><em>6 hours behind Coordinated Universal Time (UTC)</em></strong>.
                </p>
              </div>
            )}
          </div>

          {/* Temporarily hidden until details are confirmed
          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSection === 'criteria' ? 'expanded' : ''}`}
              onClick={() => toggleSection('criteria')}
            >
              Prizes and Judging Criteria
              <span className="expand-icon">{expandedSection === 'criteria' ? '▼' : '▲'}</span>
            </button>
            {expandedSection === 'criteria' && (
              <div className="section-content">
                <p>
                  In this challenge, we will select two winners: <strong>Short Caption Track Winner ($300 USD)</strong> and <strong>Long Caption Track Winner ($300 USD)</strong>. Please see the <strong>Evaluation section</strong> for more details.
                </p>

                <ul className="prizes-list">
                  <li>
                    <strong>Short Caption Track Winner ($300 USD):</strong> The Winner will be determined by the best human evaluation score from a <strong>human-curated subset of the hidden test set</strong>. This subset contains captions where the quality of the captions is better.
                  </li>
                  <li>
                    <strong>Long Caption Track Winner ($300 USD):</strong> The Winner will be determined by the best human evaluation score from a <strong>human-curated subset of the hidden test set</strong>. This subset contains captions where the quality of the captions is better.
                  </li>
                </ul>

                <p className="presentation-note">
                  <strong>The winning teams will be invited for a short oral presentation in the challenge.</strong>
                </p>

                <p>
                  Each winning team will receive a cash prize, which will be distributed as checks. We could also provide the prize as an Amazon Gift Card if the team prefers.
                </p>

                <p>
                  This challenge will select <strong>two distinct winning teams</strong>. If one team tops both tracks, the runner-up in the <strong>Short Caption Winner track</strong> becomes the winner for that category.
                </p>

                <p className="hosting-team-note">
                  The hosting team (us) can not be the winner.
                </p>
              </div>
            )}
          </div>
          */}
        </div>
      </section>

      <section id="references" className="challenge-2025-section">
        <h2>REFERENCES</h2>
        <div className="main-text">
          <p>If you want to refer to the <strong>baseline models and relevant analysis</strong>, please cite the following paper:</p>
          <ol>
            <li>
              Ng, H. Y. S., Hsu, T. Y., Ramakrishnan, A. A., Kveton, B., Lipka, N., Dernoncourt, F., ... & 
              Huang, T. H. K. (2025). <a href="https://arxiv.org/abs/2302.12324" target="_blank" rel="noopener noreferrer"> 
              LaMP-Cap: Personalized Figure Caption Generation With Multimodal Figure Profiles</a>. arXiv preprint arXiv:2506.06561.
            </li>
          </ol>

          <p>If you want to cite the <strong>datasets</strong>, please cite the following two papers:</p>
          <ol>
            <li>
              Hsu, T. Y., Giles, C. L., & Huang, T. H. (2021, November). <a href="https://aclanthology.org/2021.findings-emnlp.277/" target="_blank" rel="noopener noreferrer">SciCap: Generating Captions for Scientific Figures</a>. 
              In Findings of the Association for Computational Linguistics: EMNLP 2021 (pp. 3258-3264).
            </li>
            <li>
              Karishma, Z., Rohatgi, S., Puranik, K. S., Wu, J., & Giles, C. L. (2023). <a href="https://arxiv.org/abs/2301.12293" target="_blank" rel="noopener noreferrer">ACL-Fig: A Dataset for Scientific Figure Classification</a>. 
              arXiv preprint arXiv:2301.12293.
            </li>
          </ol>
        </div>
      </section>

      <section id="organizers" className="challenge-2025-section">
        <h2>ORGANIZERS</h2>
        <div className="organizers-grid">
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={defaultUserPhoto} alt="Ting-Hao 'Kenneth' Huang" />
            </div>
            <h3>Ting-Hao 'Kenneth' Huang</h3>
            <p>Pennsylvania State University<br />Crowd-AI Lab</p>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={samNgPhoto} alt="Ho Yin (Sam) Ng" />
            </div>
            <h3>Ho Yin (Sam) Ng</h3>
            <p>Pennsylvania State University<br />Crowd-AI Lab</p>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={defaultUserPhoto} alt="Ting-Yao 'Edward' Hsu" />
            </div>
            <h3>Ting-Yao 'Edward' Hsu</h3>
            <p>Pennsylvania State University<br />Crowd-AI Lab</p>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={defaultUserPhoto} alt="Chieh-Yang Huang" />
            </div>
            <h3>Chieh-Yang Huang</h3>
            <p>MetaMetrics Inc.</p>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={defaultUserPhoto} alt="Ryan Rossi" />
            </div>
            <h3>Ryan Rossi</h3>
            <p>Adobe Research</p>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={defaultUserPhoto} alt="Sungchul Kim" />
            </div>
            <h3>Sungchul Kim</h3>
            <p>Adobe Research</p>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={defaultUserPhoto} alt="Tong Yu" />
            </div>
            <h3>Tong Yu</h3>
            <p>Adobe Research</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge2025; 