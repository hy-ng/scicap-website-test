import React, { useState, useEffect } from 'react';
import samNgPhoto from '../assets/member/Ng-Sam.jpg';
import defaultUserPhoto from '../assets/member/user-head.png';
import leaderboardPhoto from '../assets/SciCap25-info/leaderboard_SciCapChallenge2025.png';
import aashishPhoto from '../assets/member/SciCap25/AnanthaRamakrishnan-Aashish.jpg';
import kennethPhoto from '../assets/member/SciCap25/kennethHuang.jpg';
import edwardPhoto from '../assets/member/SciCap25/edwardHsu.jpg';
import { HashLink } from 'react-router-hash-link';


const Challenge2025 = () => {
  const [expandedSections, setExpandedSections] = useState(['tracks', 'dates', 'criteria']);
  const [currentSection, setCurrentSection] = useState('overview');
  const [centeringTimeout, setCenteringTimeout] = useState(null);
  const [isCentering, setIsCentering] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  // Debounced centering function
  const debouncedCenterActiveSection = () => {
    if (centeringTimeout) {
      clearTimeout(centeringTimeout);
    }
    
    const timeout = setTimeout(() => {
      centerActiveSection();
    }, 100); // Reduced delay for better responsiveness during scrolling
    
    setCenteringTimeout(timeout);
  };

  // Immediate centering function for better responsiveness
  const immediateCenterActiveSection = () => {
    if (centeringTimeout) {
      clearTimeout(centeringTimeout);
    }
    centerActiveSection();
  };

  // Force center function for middle sections
  const forceCenterActiveSection = () => {
    // Prevent multiple centering operations from running simultaneously
    if (isCentering) return;
    
    setIsCentering(true);
    
    const activeLink = document.querySelector(`.challenge-2025-nav a[href*="#${currentSection}"]`);
    const navScroll = document.querySelector('.challenge-2025-nav-scroll');
    
    if (activeLink && navScroll && window.innerWidth <= 768) {
      // Force centering for mobile
      requestAnimationFrame(() => {
        const navWidth = navScroll.clientWidth;
        const linkWidth = activeLink.offsetWidth;
        const linkLeft = activeLink.offsetLeft;
        
        // Calculate center position without considering current scroll
        const navCenter = navWidth / 2;
        const linkCenter = linkWidth / 2;
        const targetScrollLeft = linkLeft - navCenter + linkCenter;
        
        const maxScrollLeft = navScroll.scrollWidth - navScroll.clientWidth;
        const finalScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));
        
        // Use smooth scrolling with custom easing
        smoothScrollTo(navScroll, finalScrollLeft, 400);
        
        // Reset centering flag after animation
        setTimeout(() => setIsCentering(false), 450);
      });
    } else if (activeLink && window.innerWidth > 768) {
      // Force centering for desktop
      requestAnimationFrame(() => {
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        
        // Reset centering flag after animation
        setTimeout(() => setIsCentering(false), 450);
      });
    } else {
      setIsCentering(false);
    }
  };

  // Center active section in mobile nav
  const centerActiveSection = () => {
    // Check if we're on mobile (has scrollable container)
    const navScroll = document.querySelector('.challenge-2025-nav-scroll');
    const activeLink = document.querySelector(`.challenge-2025-nav a[href*="#${currentSection}"]`);
    
    if (navScroll && activeLink && window.innerWidth <= 768) {
      // Mobile: always center in scrollable container
      requestAnimationFrame(() => {
        const navWidth = navScroll.clientWidth;
        const linkWidth = activeLink.offsetWidth;
        const linkLeft = activeLink.offsetLeft;
        
        // Calculate center position without considering current scroll to prevent feedback loop
        const navCenter = navWidth / 2;
        const linkCenter = linkWidth / 2;
        const targetScrollLeft = linkLeft - navCenter + linkCenter;
        
        const maxScrollLeft = navScroll.scrollWidth - navScroll.clientWidth;
        const finalScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));
        
        // Only scroll if the target position is significantly different to prevent jitter
        if (Math.abs(navScroll.scrollLeft - finalScrollLeft) > 5) {
          // Use smooth scrolling with custom easing
          smoothScrollTo(navScroll, finalScrollLeft, 400);
        }
      });
    } else if (activeLink && window.innerWidth > 768) {
      // Desktop: always center the active link
      requestAnimationFrame(() => {
        // Always scroll into view, regardless of current visibility
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      });
    }
  };

  // Smooth scroll function with custom easing
  const smoothScrollTo = (element, target, duration = 400) => {
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();
    
    // Easing function: ease-out-cubic
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      element.scrollLeft = start + change * easeOutCubic(progress);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    
    requestAnimationFrame(animateScroll);
  };

  // Center clicked navigation item
  const centerClickedItem = (event) => {
    const clickedLink = event.currentTarget;
    
    // Check if we're on mobile (has scrollable container)
    const navScroll = document.querySelector('.challenge-2025-nav-scroll');
    
    if (navScroll && window.innerWidth <= 768) {
      // Mobile: always center in scrollable container
      requestAnimationFrame(() => {
        const navWidth = navScroll.clientWidth;
        const linkWidth = clickedLink.offsetWidth;
        const linkLeft = clickedLink.offsetLeft;
        
        // Calculate center position without considering current scroll
        const navCenter = navWidth / 2;
        const linkCenter = linkWidth / 2;
        const targetScrollLeft = linkLeft - navCenter + linkCenter;
        
        const maxScrollLeft = navScroll.scrollWidth - navScroll.clientWidth;
        const finalScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));
        
        // Use smooth scrolling with custom easing
        smoothScrollTo(navScroll, finalScrollLeft, 400);
      });
    } else if (window.innerWidth > 768) {
      // Desktop: always center the clicked link
      requestAnimationFrame(() => {
        // Always scroll into view, regardless of current visibility
        clickedLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      });
    }
  };

  // Add scroll listener for mobile nav
  useEffect(() => {
    const navScroll = document.querySelector('.challenge-2025-nav-scroll');
    const navContainer = document.querySelector('.challenge-2025-nav');
    
    if (navContainer) {
      // Center active section on initial load with longer delay
      setTimeout(centerActiveSection, 300);
      
      // Also center when the DOM structure changes (mobile/desktop switch)
      const resizeObserver = new ResizeObserver(() => {
        setTimeout(centerActiveSection, 100);
      });
      
      resizeObserver.observe(navContainer);
      
      // Cleanup timeout on unmount
      return () => {
        if (centeringTimeout) {
          clearTimeout(centeringTimeout);
        }
        resizeObserver.disconnect();
      };
    }
  }, []);

  // Handle window resize for mobile nav centering
  useEffect(() => {
    const handleResize = () => {
      // Trigger centering on resize for all screen sizes
      debouncedCenterActiveSection();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [centeringTimeout]);

  // Center active section when currentSection changes
  useEffect(() => {
    // Use force centering for better reliability, especially for middle sections
    setTimeout(() => forceCenterActiveSection(), 150);
  }, [currentSection]);

  // Intersection Observer to track current section
  useEffect(() => {
    const sectionIds = [
      'overview',
      'how-to-participate',
      'dataset',
      'evaluation',
      'baseline',
      'references',
      'contact-us',
      'organizers'
    ];

    // Check if Intersection Observer is supported
    if (!window.IntersectionObserver) {
      console.warn('Intersection Observer not supported');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        console.log('Intersection Observer entries:', entries.map(entry => ({
          id: entry.target.id,
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          boundingClientRect: entry.boundingClientRect
        })));
        
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        
        if (visible.length > 0) {
          const newSection = visible[0].target.id;
          // Only update if the section actually changed
          if (newSection !== currentSection) {
            console.log('Current section:', newSection); // Debug log
            setCurrentSection(newSection);
            // Use force centering for better reliability with middle sections
            setTimeout(() => forceCenterActiveSection(), 100);
          }
        }
      },
      { 
        rootMargin: '-100px 0px -30% 0px', // Adjusted for better middle section detection
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9] // More granular thresholds
      }
    );

    // Observe all sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        console.log('Observing section:', id, 'Element found:', !!element); // Debug log
      } else {
        console.warn('Section not found:', id); // Debug log
      }
    });

    // Fallback scroll-based tracking
    const handleScrollFallback = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const offset = 150; // Offset from top

      // Find which section is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollTop;
          
          if (scrollTop + offset >= elementTop) {
            if (currentSection !== sectionIds[i]) {
              console.log('Scroll fallback - Current section:', sectionIds[i]);
              setCurrentSection(sectionIds[i]);
              // Immediately center the new active section
              setTimeout(() => immediateCenterActiveSection(), 50);
            }
            break;
          }
        }
      }
    };

    // Add scroll listener as fallback
    window.addEventListener('scroll', handleScrollFallback);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollFallback);
      // Cleanup centering timeout
      if (centeringTimeout) {
        clearTimeout(centeringTimeout);
      }
    };
  }, [currentSection, centeringTimeout]);

  // Simple fixed positioning for the nav bar
  useEffect(() => {
    const nav = document.querySelector('.challenge-2025-nav');
    if (!nav) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const header = document.querySelector('.challenge-2025-header');
      
      if (header && scrollTop > header.offsetTop + header.offsetHeight) {
        // Add transition class first, then fixed class
        if (!nav.classList.contains('nav-fixed')) {
          nav.classList.add('nav-transitioning');
          setTimeout(() => {
            nav.classList.add('nav-fixed');
            nav.classList.remove('nav-transitioning');
          }, 10);
        }
      } else {
        // More subtle transition out when scrolling back up
        if (nav.classList.contains('nav-fixed')) {
          // Use a fade-out effect instead of position transition
          nav.style.opacity = '0.8';
          nav.style.transform = 'translateX(-50%) translateY(-10px)';
          
          setTimeout(() => {
            nav.classList.remove('nav-fixed');
            nav.style.opacity = '';
            nav.style.transform = '';
          }, 150);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="challenge-2025-page">
      <div className="challenge-2025-header">
        <h1>SciCap Challenge 2025</h1>
      </div>

      <nav className="challenge-2025-nav">
        <div className="challenge-2025-nav-container">
          {/* Scrollable navigation area */}
          <div className="challenge-2025-nav-scroll">
            <HashLink 
              smooth 
              to="/challenge/2025#overview"
              className={currentSection === 'overview' ? 'active' : ''}
              onClick={centerClickedItem}
            >
              Overview
            </HashLink>
            <HashLink 
              smooth 
              to="/challenge/2025#how-to-participate"
              className={currentSection === 'how-to-participate' ? 'active' : ''}
              onClick={centerClickedItem}
            >
              How to Participate
            </HashLink>
            <HashLink 
              smooth 
              to="/challenge/2025#dataset"
              className={currentSection === 'dataset' ? 'active' : ''}
              onClick={centerClickedItem}
            >
              Dataset
            </HashLink>
            <HashLink 
              smooth 
              to="/challenge/2025#evaluation"
              className={currentSection === 'evaluation' ? 'active' : ''}
              onClick={centerClickedItem}
            >
              Evaluation
            </HashLink>
            <HashLink 
              smooth 
              to="/challenge/2025#baseline"
              className={currentSection === 'baseline' ? 'active' : ''}
              onClick={centerClickedItem}
            >
              Baseline
            </HashLink>
            <HashLink 
              smooth 
              to="/challenge/2025#references"
              className={currentSection === 'references' ? 'active' : ''}
              onClick={centerClickedItem}
            >
              References
            </HashLink>
            <HashLink 
              smooth 
              to="/challenge/2025#contact-us"
              className={currentSection === 'contact-us' ? 'active' : ''}
              onClick={centerClickedItem}
            >
              Contact Us
            </HashLink>
            <HashLink 
              smooth 
              to="/challenge/2025#organizers"
              className={currentSection === 'organizers' ? 'active' : ''}
              onClick={centerClickedItem}
            >
              Organizers
            </HashLink>
          </div>
        </div>
      </nav>

      <section id="overview" className="challenge-2025-section">
        <h2>OVERVIEW</h2>
        <div className="main-text">
          <p>Welcome to the Third Scientific Figure Captioning Challenge (SciCap Challenge 2025)! This year, we're excited to introduce a new focus on personalized caption generation using our latest LaMP-CAP dataset, which features over 300,000 figures from more than 110,000 scientific papers, curated specifically for personalized caption generation with multimodal figure profiles.</p>
          
          <p>This challenge focuses on generating personalized captions for scientific figures. Participants will build AI models that generate captions tailored to different writing styles and research domains, using the LaMP-CAP dataset. The goal is to create systems that can adapt to various author styles and scientific contexts for more effective and personalized figure captions.</p>

          <p>The challenge will be hosted at the LM4Sci Workshop in COLM 2025 (October 7-10, Montreal, Canada). We invite researchers, students, industry practitioners, AI/NLP/CV experts, and anyone interested in advancing personalized scientific communication to participate!</p>

          <p>For questions about the challenge, please email us at <a href="mailto:scicap-challenge@googlegroups.com">scicap-challenge@googlegroups.com</a>.</p>
        </div>

        <div className="expandable-sections">
          {/* Temporarily hidden until details are confirmed
          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('office-hour') ? 'expanded' : ''}`}
              onClick={() => toggleSection('office-hour')}
            >
              Zoom Office Hour
              <span className="expand-icon">{expandedSections.includes('office-hour') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('office-hour') && (
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
          */}

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('tracks') ? 'expanded' : ''}`}
              onClick={() => toggleSection('tracks')}
            >
              One Track: Personalized Caption Generation (LaMP-CAP)
              <span className="expand-icon">{expandedSections.includes('tracks') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('tracks') && (
              <div className="section-content">
                <p>
                The challenge will feature a single track to encourage innovation in personalized caption generation for scientific figures and images. 
                This round of challenge will follow the LaMP-CAP paper, in which the teams can not only use typical inputs (figure images and figure-mentioning paragraphs) but also <strong>OTHER FIGURES AND THEIR CAPTIONS</strong> in the same paper to help personalization.
                </p>
                
                <p>
                <strong>Target Figure:</strong> The figure for which we want to generate a personalized caption.
                </p>
                
                <p>
                <strong>Profile Figures:</strong> Other figures from the same scientific paper that can be used to understand the author's writing style and preferences for caption generation.
                </p>
                
                <p>
                <strong>We strongly recommend</strong> each team to read our <a href="https://arxiv.org/abs/2506.06561" target="_blank" rel="noopener noreferrer">arXiv paper</a> before beginning to tackle this task.
                </p>
                
                <p>
                Teams can submit multiple results during the submission period. Teams will be allowed to use LLMs like GPT-4V and any external data for their captioning systems. 
                </p>
                <p>
                However, using the original author-written captions from the target figures from test set (public + hidden) will be prohibited.
                </p>
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('dates') ? 'expanded' : ''}`}
              onClick={() => toggleSection('dates')}
            >
              Important Dates
              <span className="expand-icon">{expandedSections.includes('dates') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('dates') && (
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

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('criteria') ? 'expanded' : ''}`}
              onClick={() => toggleSection('criteria')}
            >
              Prizes and Judging Criteria
              <span className="expand-icon">{expandedSections.includes('criteria') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('criteria') && (
              <div className="section-content">
                <p>
                  In this challenge, we will select two winners: <strong>Leaderboard Winner ($300 USD)</strong> and <strong>Quality Winner ($300 USD)</strong>. Please see the Evaluation section for more details.
                </p>

                <ul className="prizes-list">
                  <li>
                    <strong>Leaderboard Winner ($300 USD):</strong> The Winner will be determined by the <strong>highest ROUGE-L score</strong> on the whole test set, as shown on the EvalAI leaderboard.
                  </li>
                  <li>
                    <strong>Quality Winner ($300 USD):</strong> The Winner will be determined by the best average human ranking from a subset of the test set. See the Evaluation section for details.
                  </li>
                </ul>

                <p className="presentation-note">
                  <strong>The top 4 teams on the leaderboard (including the Leaderboard Winner and the next 3 highest scoring teams), as well as the Quality Winner, will be invited to present their posters in person at the workshop.</strong>
                </p>

                <p className="registration-note">
                  <strong>Important:</strong> Each participating team is responsible for securing their own registration tickets for the COLM 2025 conference and workshop. Given that tickets sold out last year at COLM, we cannot guarantee that each team (even the winning team) will be able to register for COLM 2025 successfully. This responsibility lies entirely with the participating teams.
                </p>

                <p>
                  Each winning team will receive a cash prize, which will be distributed as checks. We could also provide the prize as an Amazon Gift Card if the team prefers.
                </p>

                <p>
                  This challenge will select <strong>two distinct winning teams</strong>. If one team tops both categories, the runner-up in the <strong>Leaderboard Winner</strong> becomes the winner for that category.
                </p>

                <p className="hosting-team-note">
                  The hosting team (us) can not be the winner.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="how-to-participate" className="challenge-2025-section">
        <h2>HOW TO PARTICIPATE</h2>
        <div className="main-text">
          <p>To be considered for awards, you must:</p>
          <ol>
            <li>Submit your output for the test set via Eval.AI before the deadline, and</li>
            <li>Provide a report, 2-4 pages in length, detailing your system. Please use the COLM 2025 paper template for your submission.
              (The Google Form for technical report submission (due on Aug 15) will be made available here when the deadline approaches.)
            </li>
          </ol>
        </div>

        <div className="expandable-sections">
          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('evalai') ? 'expanded' : ''}`}
              onClick={() => toggleSection('evalai')}
            >
              Submit to Eval.AI
              <span className="expand-icon">{expandedSections.includes('evalai') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('evalai') && (
              <div className="section-content">
                <p>Please submit your results using the following link. Please note that each team must first create an account on Eval.AI before you can view the leaderboard or submit your results.
                </p>
                <p className="hosting-team-note">
                  Challenge link: <a href="https://eval.ai/web/challenges/challenge-page/2561/overview" target="_blank" rel="noopener noreferrer">https://eval.ai/web/challenges/challenge-page/2561/overview</a>
                </p>
                <p className="technical-note">
                  <em>Note:</em> We are aware of and apologize for the possible evaluation delays on the Eval.AI platform. These are due to a technical issue, possibly from high submission volumes, complex evaluations, or system maintenance. We appreciate your patience while all submissions are being processed.
                </p>
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('submission-format') ? 'expanded' : ''}`}
              onClick={() => toggleSection('submission-format')}
            >
              Submission Format
              <span className="expand-icon">{expandedSections.includes('submission-format') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('submission-format') && (
              <div className="section-content">
                <p>To submit to a phase, teams must upload a <strong>JSON</strong> file containing their model's answer prediction in the following format:</p>
                
                <div className="code-block">
                  <pre className="json-format">
{`[
  {
    "image_id": int, 
    "caption": "PREDICTED CAPTION STRING"
  },
  {
    "image_id": int,
    "caption": "PREDICTED CAPTION STRING"
  }
...
]`}
                  </pre>
                </div>

                <ul className="format-description">
                  <li><strong>image_id:</strong> an image's unique id</li>
                  <li><strong>caption:</strong> the predicted caption for the image.</li>
                </ul>

                <p className="technical-note">
                  <em>Note:</em> The submission file must include every <strong>image_id</strong> corresponding to the test set, and the format must also be correct. We will reject those unqualified files, and eval.ai will show the error message (e.g., missing id, the key can not be found.)
                </p>
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('technical-report') ? 'expanded' : ''}`}
              onClick={() => toggleSection('technical-report')}
            >
              System Technical Report Submission
              <span className="expand-icon">{expandedSections.includes('technical-report') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('technical-report') && (
              <div className="section-content">
                <p>Every team must submit a report, ranging from 2-4 pages, that provides an in-depth overview of their system. This should encompass data processing, methodologies, experimental results, etc. Please adhere to the COLM 2025 paper template for your submission.</p>
                <p><em>The Google Form for technical report submission (due on Aug 15) will be made available here when the deadline approaches.</em></p>
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('prohibited-use') ? 'expanded' : ''}`}
              onClick={() => toggleSection('prohibited-use')}
            >
              Prohibited Use of Gold Data
              <span className="expand-icon">{expandedSections.includes('prohibited-use') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('prohibited-use') && (
              <div className="section-content">
                <p><span className="warning-text"><strong>Participants should not use the original captions of the "target" figures from the arXiv papers (termed "gold data") as input for their systems.</strong></span> These gold captions are intended only for evaluation purposes. Using the gold data is seen as cheating. Teams found doing so will be disqualified from the challenge. Since all arXiv papers are public, we know the potential for cheating.</p>
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('pretrained-models') ? 'expanded' : ''}`}
              onClick={() => toggleSection('pretrained-models')}
            >
              Guidelines for Using Large Pretrained Models
              <span className="expand-icon">{expandedSections.includes('pretrained-models') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('pretrained-models') && (
              <div className="section-content">
                <p>Teams participating <strong>can</strong> utilize large pre-trained systems such as GPT-4 or LLaMa in their captioning systems. Each team must clearly detail their methodology in the technical report for replication purposes.</p>
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('use-of-submitted-data') ? 'expanded' : ''}`}
              onClick={() => toggleSection('use-of-submitted-data')}
            >
              Use of Submitted Data
              <span className="expand-icon">{expandedSections.includes('use-of-submitted-data') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('use-of-submitted-data') && (
              <div className="section-content">
                <p>By participating in this challenge, you agree that the organizers may use your submitted results and evaluation scores for further analysis and publication, including error and qualitative analysis. Submission of your results constitutes your consent to this usage.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="dataset" className="challenge-2025-section">
        <h2>DATASET</h2>
        <div className="expandable-sections">
          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('lamp-cap-dataset') ? 'expanded' : ''}`}
              onClick={() => toggleSection('lamp-cap-dataset')}
            >
              LaMP-CAP Dataset
              <span className="expand-icon">{expandedSections.includes('lamp-cap-dataset') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('lamp-cap-dataset') && (
              <div className="section-content">
                <p>Our LaMP-CAP is an extension of the SciCap Challenge dataset, with a new focus on personalized and context-aware scientific figure captioning. Unlike traditional caption datasets, LaMP-Cap provides not only target figures and their metadata, but also profile figures from the same scientific paper, enabling research into leveraging multimodal context for improved captioning. Metadata is available in our <a href="https://github.com/Crowd-AI-Lab/lamp-cap" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>

                <p className="technical-note">
                  <em>Note:</em> Only a subset of the public and hidden test sets is used in LaMP-CAP. Specifically, we include only arXiv papers that contain at least two figures from the same paper, which are required to construct target-profile pairs. The details can be checked in our <a href="https://arxiv.org/abs/2506.06561" target="_blank" rel="noopener noreferrer">paper</a> and <a href="https://github.com/Crowd-AI-Lab/lamp-cap" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                </p>
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('scicap-challenge-dataset') ? 'expanded' : ''}`}
              onClick={() => toggleSection('scicap-challenge-dataset')}
            >
              SciCap Challenge Dataset (That LaMP-CAP is Based On)
              <span className="expand-icon">{expandedSections.includes('scicap-challenge-dataset') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('scicap-challenge-dataset') && (
              <div className="section-content">
                <p>For this challenge, participants should also refer to the original SciCap Challenge dataset, which has been updated with public and hidden test sets. For each figure, the following is provided.</p>

                <ul className="data-list">
                  <li>Figure <strong>image</strong> (extracted from the original arXiv paper)</li>
                  <li>Figure <strong>caption</strong> (extracted from the original arXiv paper)</li>
                  <li><strong>Paragraphs</strong> that mention the figure (extracted from the original arXiv paper, e.g., "As shown in Figure 5, …".)</li>
                </ul>

                <p>More detailed information about the data format can be found in the "Example Data Format" section below.</p>

                <h4>Getting the Dataset</h4>
                <p>You can download the dataset from our <a href="https://huggingface.co/datasets/Crowd-AI-Lab/scicap" target="_blank" rel="noopener noreferrer">Hugging Face</a> dataset with the python command.</p>

                <div className="code-block">
                  <pre className="python-format">
{`from huggingface_hub import snapshot_download
snapshot_download(repo_id="CrowdAILab/scicap", repo_type='dataset')`}
                  </pre>
                </div>

                <p>We split the image files into several zip files to fit the size limit on HuggingFace. Please use the following command to merge all splits into one zip file.</p>

                <div className="code-block">
                  <pre className="bash-format">
{`zip -F img-split.zip --out img.zip`}
                  </pre>
                </div>

                <h4>Data Folder Structure</h4>
                <p>SciCap Challenge dataset schema is very close to the widely popular <strong>'mscoco'</strong> dataset.</p>

                <ul className="data-list">
                  <li>
                    <strong>images:</strong> two separated folders, contain arXiv and acl figures
                    <ul className="data-list">
                      <li>
                        <strong>ArXiv:</strong> contains all the arXiv figures
                        <ul className="data-list">
                          <li><strong>Training set:</strong> 70% (333,472 samples)</li>
                          <li><strong>Validation set:</strong> 10% (47,639 samples)</li>
                          <li><strong>Public test set:</strong> 10% (47,639 samples)</li>
                          <li><strong>Hidden test set:</strong> 10% (47,639 samples)</li>
                        </ul>
                      </li>
                      <li>
                        <strong>ACL:</strong> contains all the ACL figures. (All papers already published at arXiv have been removed.)
                        <ul className="data-list">
                          <li><strong>Training set:</strong> 26,868 samples</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>annotations:</strong> contains the figure information (filename, image id, figure type and ocr) and text information (mapped image id, caption id, caption, normalized caption, paragraph and mention)
                    <ul className="data-list">
                      <li>
                        <strong>ArXiv:</strong> includes three json files, train.json / val.json / public-test.json
                        <ul className="data-list">
                          <li>Training / Validation set</li>
                          <li>Testing set (w/o caption and normalized caption)</li>
                        </ul>
                      </li>
                      <li>
                        <strong>ACL:</strong> includes one json file, train-acl.json (All papers already published at arXiv have been removed.)
                        <ul className="data-list">
                          <li>Training set</li>
                        </ul>
                      </li>
                      <li>
                        <em>Note:</em> each figure could contain <strong>multiples</strong> paragraphs / mentions
                      </li>
                    </ul>
                  </li>
                </ul>

                <h4>Example Data Format</h4>
                <div className="code-block">
                  <pre className="json-format">
{`{
  "images": [
    {
      "file_name": "000000501522.png",
      "id": 501522,
      "figure_type": "Graph Plot",
      "ocr": [
        "Kath-n s-krloni",
        "Piv/o;{dB)"
      ]
    }
  ], ...
  "annotations": [
    {
      "image_id": 501522,
      "id": 835714,
      "caption": "Figure 4: Bit error ratio of LDPC code after decoupled log-likelihood computation and belief-propagation algorithm.",
      "caption_no_index": "Bit error ratio of LDPC code after decoupled log-likelihood computation and belief-propagation algorithm.",
      "paragraph": [
        "Approaching the channel capacity of coarsely quantized MIMO systems is however not straight forward. Figure 4 shows the bit error ratio obtained with an ensemble of randomly generated LDPC code of length n = 250 applied on the same channel as in the previ-ous section. The parity check matrices were generated following [10]. The performance of our input set reduction method with K = 32 compared to the full input use (K = 256) in terms of BER when combined with an LDPC code is shown in this figure. For both cases the total rate is R = 2.5 bits/channel use; and the rate of the LDPC code was adjusted for each case accordingly. We apply a decoupled detection/decoding approach, where first the log-likelihood ratios",
        "This comes about, since log 2 K code-bits are transfered per channel use, hence, for each received quantized vector y[n] the log-likelihood ratios of log 2 K encoded bits are computed. Obviously the proper reduction of the input set improves the BER behavior significantly. Besides the full use of the input set cannot be handled gracefully, leading to a relatively large error floor. This is caused by the fact that with coarse channel output quantization, many different input symbols may be assigned to the same output symbols at high SNR. To resolve this ambiguities small code rate and large block length would be necessary, which leads again to high latency time and complex receiver. Fortunately, reducing the input set solves this problem in a simpler way. As we see in Fig. 4, the optimal constellation does not see any error floor and the receiver's task become easier with the more distinguishable selected symbols."
      ],
      "mention": [
        [
          "Figure 4 shows the bit error ratio obtained with an ensemble of randomly generated LDPC code of length n = 250 applied on the same channel as in the previ-ous section."
        ],
        [
          "As we see in Fig. 4, the optimal constellation does not see any error floor and the receiver's task become easier with the more distinguishable selected symbols."
        ]
      ]
    }
  ], ...
}`}
                  </pre>
                </div>

                <h4>Additional Metadata</h4>
                <p>The following additional metadata information is provided by SciCap challenge dataset for reference. Further details are provided about the figures (<strong>ArXiv ID</strong> and <strong>category</strong>, only for the <strong>train/val/test set</strong>) and text information (<strong>caption length</strong>, excluding figure index).</p>

                <div className="code-block">
                  <pre className="json-format">
{`{
  "image_id": 501522,
  "caption_id": 835714,
  "caption_length": 14,
  "arXiv_id": 1010.5526,
  "categories": "cs.IT,math.IT"
},
{
  "image_id": 501523,
  "caption_id": 835715,
  "caption_length": 51,
  "arXiv_id": 1910.00706,
  "categories": "quant-ph"
},...`}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="evaluation" className="challenge-2025-section">
        <h2>EVALUATION</h2>
        <div className="expandable-sections">
          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('automatic-eval') ? 'expanded' : ''}`}
              onClick={() => toggleSection('automatic-eval')}
            >
              Automatic Evaluation on Leaderboard (Leaderboard Winner)
              <span className="expand-icon">{expandedSections.includes('automatic-eval') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('automatic-eval') && (
              <div className="section-content">
                <p>We report BLEU and ROUGE metrics for each submission. Eval.AI automatically shows your results via a leaderboard for reference. The leaderboard scores are sorted based on the <strong>Rouge-L</strong>. Rouge-L is used as the primary evaluation matrix because it captures the longest common subsequence between generated and reference captions, making it suitable for personalized text generation, where structural similarity and semantic alignment are more important than exact n-gram overlap. Despite EvalAI providing automatic quality scores, these will not affect challenge outcomes.</p>
                <p>The following shows a screenshot of our leaderboard with a baseline result:</p>
                <img
                  src={leaderboardPhoto}
                  alt="Leaderboard screenshot for SciCap Challenge 2025 baseline results"
                  style={{ maxWidth: '100%', border: '1px solid #ccc', borderRadius: '6px', margin: '1rem 0' }}
                />
              </div>
            )}
          </div>

          <div className="expandable-section">
            <button 
              className={`section-button ${expandedSections.includes('human-eval') ? 'expanded' : ''}`}
              onClick={() => toggleSection('human-eval')}
            >
              Human-in-the-Loop Evaluation (Quality Winner)
              <span className="expand-icon">{expandedSections.includes('human-eval') ? '▼' : '▲'}</span>
            </button>
            {expandedSections.includes('human-eval') && (
              <div className="section-content">
                <p>Human evaluation will be performed on a subset of the test set. This year, while our evaluation prioritizes how clearly and accurately a submission conveys the figure's key message, we will also include components of "personalization" in the evaluation. For example, the golden captions will be provided as references to the human judges for ranking submitted captions based on their overall quality and how easily they could be adapted into a finalized description like the original caption.
                <br />
                <br />
                The team with the best average rank wins. 
                <br />
                <br />
                If more than five teams participate, a preliminary screening will be conducted to ensure a high-quality evaluation. In this case, we will use an automated method to select the top five teams. The submissions from these five teams will then proceed to the full human evaluation round.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="baseline" className="challenge-2025-section">
        <h2>BASELINE</h2>
        <div className="main-text">
          <p>Currently, we are offering two baseline results on the leaderboard, evaluated on the SciCap Challenge test set (public + hidden), filtered using our LaMP-CAP metadata.</p>
          <ul>
            <li>No Profile - GPT-4o</li>
            <li>ALL Profile - GPT-4o</li>
          </ul>
          <p>Please go to read our <a href="https://arxiv.org/abs/2506.06561" target="_blank" rel="noopener noreferrer">paper</a> for more implementation details.</p>
        </div>
      </section>

      <section id="references" className="challenge-2025-section">
        <h2>REFERENCES</h2>
        <div className="main-text">
          <p>If you want to refer to the <strong>baseline models and relevant analysis</strong>, please cite the following paper:</p>
          <ol>
            <li>
              Ng, H. Y. S., Hsu, T. Y., Anantha Ramakrishnan, A., Kveton, B., Lipka, N., Dernoncourt, F., ... & 
              Huang, T. H. K. (2025). <a href="https://arxiv.org/abs/2506.06561" target="_blank" rel="noopener noreferrer"> 
              LaMP-Cap: Personalized Figure Caption Generation With Multimodal Figure Profiles</a>. arXiv preprint arXiv:2506.06561.
            </li>
          </ol>

          <p>If you want to cite the <strong>original SciCap Challenge datasets</strong>, please cite the following two papers:</p>
          <ol>
            <li>
              Hsu, T. Y., Giles, C. L., & Huang, T. H. (2021, November). <a href="https://aclanthology.org/2021.findings-emnlp.277/" target="_blank" rel="noopener noreferrer">SciCap: Generating Captions for Scientific Figures</a>. 
              In Findings of the Association for Computational Linguistics: EMNLP 2021 (pp. 3258-3264).
            </li>
            <li>
              Hsu, T. Y. E., Hsu, Y. L., Rohatgi, S., Huang, C. Y., Ng, H. Y. S., Rossi, R., ... & Huang, T. H. K. (2025). 
              <a href="https://arxiv.org/abs/2501.19353" target="_blank" rel="noopener noreferrer"> Do Large Multimodal Models Solve Caption Generation for 
              Scientific Figures? Lessons Learned from SCICAP Challenge 2023</a>. 
              arXiv preprint arXiv:2501.19353. (Accepted to TACL 2025)
            </li>
          </ol>
        </div>
      </section>

      <section id="contact-us" className="challenge-2025-section">
        <h2>CONTACT US</h2>
        <div className="main-text">
          <p>For questions about the challenge, please email us at <a href="mailto:scicap-challenge@googlegroups.com">scicap-challenge@googlegroups.com</a>.</p>
        </div>
      </section>

      <section id="past-scicap-challenge" className="challenge-2025-section">
        <h2>PAST SCICAP CHALLENGE</h2>
        <div className="main-text">
          <p>
            <a href="https://www.notion.so/47b914e092dd4965af7b432f6b2d42e8?pvs=21" target="_blank" rel="noopener noreferrer">
              The 1st Scientific Figure Captioning (SciCap) Challenge</a> in the 5th Workshop on Closing the Loop Between Vision and Language at ICCV 2023.
          </p>
          <p>
            <a href="https://gusty-cabbage-7e7.notion.site/The-Second-Scientific-Figure-Captioning-Challenge-SCICAP-Challenge-2024-d9131ae2517640998430fac2271c6e43" target="_blank" rel="noopener noreferrer">
              The 2nd Scientific Figure Captioning (SciCap) Challenge</a> at IJCAI 2024.
          </p>
        </div>
      </section>

      <section id="organizers" className="challenge-2025-section">
        <h2>ORGANIZERS</h2>
        <div className="organizers-grid">
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={samNgPhoto} alt="Ho Yin (Sam) Ng" />
            </div>
            <h3>Ho Yin (Sam) Ng</h3>
            <p>Pennsylvania State University<br />(Crowd-AI Lab)</p>
            <a
              href="https://hy-ng.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="organizer-link"
              title="Personal Website"
              style={{ display: 'inline-block', marginTop: '0.5rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#555" strokeWidth="2"/>
                <ellipse cx="10" cy="10" rx="5" ry="9" stroke="#555" strokeWidth="2"/>
                <line x1="1" y1="10" x2="19" y2="10" stroke="#555" strokeWidth="2"/>
              </svg>
            </a>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={edwardPhoto} alt="Ting-Yao 'Edward' Hsu" />
            </div>
            <h3>Ting-Yao 'Edward' Hsu</h3>
            <p>Pennsylvania State University<br />(Crowd-AI Lab)</p>
            <a
              href="https://tingyaohsu.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="organizer-link"
              title="Personal Website"
              style={{ display: 'inline-block', marginTop: '0.5rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#555" strokeWidth="2"/>
                <ellipse cx="10" cy="10" rx="5" ry="9" stroke="#555" strokeWidth="2"/>
                <line x1="1" y1="10" x2="19" y2="10" stroke="#555" strokeWidth="2"/>
              </svg>
            </a>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={aashishPhoto} alt="Aashish Anantha Ramakrishnan" />
            </div>
            <h3>Aashish Anantha Ramakrishnan</h3>
            <p>Pennsylvania State University</p>
            <a
              href="https://aashish2000.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="organizer-link"
              title="Personal Website"
              style={{ display: 'inline-block', marginTop: '0.5rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#555" strokeWidth="2"/>
                <ellipse cx="10" cy="10" rx="5" ry="9" stroke="#555" strokeWidth="2"/>
                <line x1="1" y1="10" x2="19" y2="10" stroke="#555" strokeWidth="2"/>
              </svg>
            </a>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={defaultUserPhoto} alt="Ryan Rossi" />
            </div>
            <h3>Ryan Rossi</h3>
            <p>Adobe Research</p>
            <a
              href="http://ryanrossi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="organizer-link"
              title="Personal Website"
              style={{ display: 'inline-block', marginTop: '0.5rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#555" strokeWidth="2"/>
                <ellipse cx="10" cy="10" rx="5" ry="9" stroke="#555" strokeWidth="2"/>
                <line x1="1" y1="10" x2="19" y2="10" stroke="#555" strokeWidth="2"/>
              </svg>
            </a>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={defaultUserPhoto} alt="Sungchul Kim" />
            </div>
            <h3>Sungchul Kim</h3>
            <p>Adobe Research</p>
            <a
              href="https://sites.google.com/site/subright/"
              target="_blank"
              rel="noopener noreferrer"
              className="organizer-link"
              title="Personal Website"
              style={{ display: 'inline-block', marginTop: '0.5rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#555" strokeWidth="2"/>
                <ellipse cx="10" cy="10" rx="5" ry="9" stroke="#555" strokeWidth="2"/>
                <line x1="1" y1="10" x2="19" y2="10" stroke="#555" strokeWidth="2"/>
              </svg>
            </a>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={defaultUserPhoto} alt="Tong Yu" />
            </div>
            <h3>Tong Yu</h3>
            <p>Adobe Research</p>
          </div>
          <div className="organizer-card">
            <div className="organizer-avatar">
              <img src={kennethPhoto} alt="Ting-Hao 'Kenneth' Huang" />
            </div>
            <h3>Ting-Hao 'Kenneth' Huang</h3>
            <p>Pennsylvania State University<br />(Crowd-AI Lab)</p>
            <a
              href="http://kennethhuang.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="organizer-link"
              title="Personal Website"
              style={{ display: 'inline-block', marginTop: '0.5rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#555" strokeWidth="2"/>
                <ellipse cx="10" cy="10" rx="5" ry="9" stroke="#555" strokeWidth="2"/>
                <line x1="1" y1="10" x2="19" y2="10" stroke="#555" strokeWidth="2"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge2025; 