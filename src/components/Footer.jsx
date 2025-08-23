import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Innovation Hub</h3>
            <p>MIT World Peace University</p>
            <p>Fostering innovation and entrepreneurship among students.</p>
            <p>Welcome to Possible!</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/vision">Vision</a></li>
              <li><a href="/mentors">Mentors</a></li>
              <li><a href="/alumni">Alumni</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: innovationhub@mitwpu.edu.in</p>
            <p>Phone: +91 7999084343 </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Innovation Hub, MIT WPU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;