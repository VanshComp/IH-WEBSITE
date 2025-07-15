import React from 'react';
import CohortSection from '../components/CohortSection';
import '../styles/CohortPage.css';
import '../styles/animations.css';

const CohortPage = () => {
  return (
    <div className="cohort-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>InnovationHub Cohorts</h1>
          <p>Join the next generation of bold thinkers
          and creators shaping what comes next.</p>
          <button className="cta-button">Apply Now</button>
        </div>
        <div className="hero-accent"></div>
      </header>
      
      <main>
        <CohortSection />
      </main>
      
      <footer className="cohort-footer">
        <p>Ready to start your innovation journey?</p>
        <button className="cta-button">Join Next Cohort</button>
      </footer>
    </div>
  );
};

export default CohortPage;