import React, { useEffect } from 'react';
import AlumniCard from '../components/AlumniCard';
import './Alumni.css';

const Alumni = () => {
  const alumni = [
    {
      id: 1,
      name: "Gaurang Pandit",
      batch: "Alumni",
      role: "Innovation Hub Graduate",
      story: "A dedicated member of Innovation Hub who contributed significantly to various projects and initiatives during their time at MIT-WPU.",
      image: "",
      gif: "",
      achievement: "Successful Innovation Hub Alumni"
    },
    {
      id: 2,
      name: "Aryan Yadav",
      batch: "Alumni",
      role: "Chairman of Innovation Hub",
      story: "Currently serving as the Chairman of Innovation Hub, leading the organization with vision and dedication to foster innovation among students.",
      image: "",
      gif: "",
      achievement: "Leading Innovation Hub as Chairman"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in, .alumni-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="alumni-page">
      <div className="alumni-hero">
        <div className="bubbles-bg">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <div className="container">
          <h1 className="fade-in">Meet Our Alumni</h1>
          <p className="hero-subtitle fade-in">
            Success stories of Innovation Hub graduates making their mark in the tech world
          </p>
        </div>
      </div>

      <div className="alumni-content">
        <div className="container">
          <div className="alumni-grid">
            {alumni.map((alumnus, index) => (
              <AlumniCard 
                key={alumnus.id} 
                alumnus={alumnus} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="alumni-stats">
        <div className="container">
          <div className="stats-grid fade-in">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Alumni Network</p>
            </div>
            <div className="stat-item">
              <h3>75%</h3>
              <p>Placed in Top Companies</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Successful Startups</p>
            </div>
            <div className="stat-item">
              <h3>₹50K</h3>
              <p>Total Funding Raised</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;