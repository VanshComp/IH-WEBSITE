import React from 'react';

const JobCard = ({ job, onApplyClick, animationDelay }) => {
  return (
    <div 
      className="job-card" 
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="job-card-header">
        <div className="job-icon">{job.icon}</div>
        <h3 className="job-title">{job.title}</h3>
      </div>
      
      <p className="job-description">{job.description}</p>
      
      <div className="job-requirements">
        <h4>Key Skills:</h4>
        <ul>
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      
      <button 
        className="apply-button"
        onClick={() => onApplyClick(job)}
      >
        Apply Now
        <span className="apply-arrow">→</span>
      </button>
    </div>
  );
};

export default JobCard;