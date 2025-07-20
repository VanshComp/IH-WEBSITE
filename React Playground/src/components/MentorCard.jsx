import React from 'react';
import './MentorCard.css';

const MentorCard = ({ mentor, index }) => {
  return (
    <div 
      className={`mentor-card ${mentor.type === 'student' ? 'student-mentor' : 'faculty-mentor'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-image">
        {mentor.image ? (
          <img src={mentor.image} alt={mentor.name} />
        ) : (
          <div className="placeholder-image">
            <span>{mentor.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
        )}
        <div className="card-overlay">
          <div className="overlay-content">
            <h3>{mentor.name}</h3>
            <p>{mentor.role}</p>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <h3>{mentor.name}</h3>
        <p className="role">{mentor.role}</p>
        <p className="quote">"{mentor.quote}"</p>
        <button className={`btn ${mentor.type === 'student' ? 'btn-secondary' : 'btn-primary'}`}>
          Connect
        </button>
      </div>
    </div>
  );
};

export default MentorCard;