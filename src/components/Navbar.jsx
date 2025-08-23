import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <span className="logo-text">Innovation Hub</span>
            <span className="logo-subtitle">MIT WPU</span>
          </Link>
          
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <Link 
              to="/vision" 
              className={`navbar-link ${location.pathname === '/vision' || location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Vision
            </Link>
            <Link 
              to="/mentors" 
              className={`navbar-link ${location.pathname === '/mentors' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Mentors
            </Link>
            <Link 
              to="/alumni" 
              className={`navbar-link ${location.pathname === '/alumni' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Alumni
            </Link>
          </div>
          
          <div className="navbar-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;