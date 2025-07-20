import React from 'react';
import './AlumniCard.css';

const AlumniCard = ({ alumnus, index }) => {
  return (
    <div 
      className="alumni-card"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="card-header">
        <div className="profile-section">
          {alumnus.image ? (
            <img src={alumnus.image} alt={alumnus.name} className="profile-image" />
          ) : (
            <div className="profile-placeholder">
              <span>{alumnus.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          )}
          <div className="profile-info">
            <h3>{alumnus.name}</h3>
            <p className="batch">{alumnus.batch}</p>
            <p className="role">{alumnus.role}</p>
          </div>
        </div>
      </div>
      
      <div className="card-body">
        {alumnus.gif ? (
          <div className="achievement-image">
            <img src={alumnus.gif} alt={`${alumnus.name} achievement`} />
            <div className="achievement-overlay">
              <p>{alumnus.achievement}</p>
            </div>
          </div>
        ) : (
          <div className="achievement-placeholder">
            <p>{alumnus.achievement}</p>
          </div>
        )}
        
        <div className="story-section">
          <h4>Success Story</h4>
          <p className="story">{alumnus.story}</p>
        </div>
        
        <button className="btn btn-primary">Know More</button>
      </div>
    </div>
  );
};

export default AlumniCard;