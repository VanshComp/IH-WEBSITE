import React from 'react';
import ScrollAnimator from './ScrollAnimator';
import '../styles/CohortCard.css';

const CohortCard = ({ title, description, gifSrc }) => {
  return (
    <ScrollAnimator animationClass="fade-in-up">
      <div className="cohort-card">
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {gifSrc && (
          <div className="card-gif">
            <img src={gifSrc} alt={title} />
          </div>
        )}
      </div>
    </ScrollAnimator>
  );
};

export default CohortCard;