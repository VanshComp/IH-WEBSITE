// src/pages/ContactUs.jsx
import React, { useState, useEffect } from 'react';
import '../styles/ContactUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const validateForm = () => {
    const newErrors = {};

    // Validate name (no numbers allowed)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (/\d/.test(formData.name)) {
      newErrors.name = 'Name cannot contain numbers.';
    }

    // Validate email (correct format)
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    // Validate message (required)
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // Clear error for the field being edited
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    if (validateForm()) {
        alert('Thank you for your message! Our team will contact you shortly.');
        setFormData({ name: '', email: '', message: '' });
    }
  };

  // Flip animation for header letters
  useEffect(() => {
    const flipLetters = () => {
      const letters = document.querySelectorAll('.flip-letter');
      letters.forEach((letter, i) => {
        setTimeout(() => {
          letter.style.transform = 'rotateX(0)';
          letter.style.opacity = '1';
        }, i * 80);
      });
    };

    flipLetters();
    
    // Scroll animation with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector('.contact-section'));
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
    <Header/>
    <div className="contact-section">
      <div className="contact-header">
        {'Contact Us'.split('').map((char, index) => (
          <span 
            key={index} 
            className="flip-letter"
            style={{ '--delay': index * 0.1 }}
          >
            {char}
          </span>
        ))}
        <div className="header-decoration"></div>
      </div>

      <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
        {/* Left Column - Contact Form */}
        <div className="contact-form">
          <h2 className="form-title">Get in Touch</h2>
          <p className="form-subtitle">Have questions or ideas? Reach out to our team.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your inquiry or idea..."
                required
              ></textarea>
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>
            
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#009CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#009CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3>InnovationHub Location</h3>
              <p>MIT World Peace Univerity, Kothrud, Pune</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22 20.52 21.53 21 20.93 21H19.93C10.8 21 3 13.2 3 4.07V3.07C3 2.47 3.48 2 4.08 2H7.05C7.65 2 8.13 2.48 8.14 3.08C8.21 5.03 8.55 6.92 9.14 8.72C9.27 9.12 9.15 9.55 8.84 9.85L6.9 11.79C8.52 14.83 11.17 17.48 14.21 19.1L16.15 17.16C16.45 16.85 16.88 16.73 17.28 16.86C19.08 17.45 20.97 17.79 22.92 17.86C23.52 17.87 24 18.35 24 18.95Z" stroke="#009CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3>Contact Information</h3>
              <p>Email: innovation.hub@mitwpu.edu.in</p>
              <p>Phone: +91- 7999084343</p>
              <p>Hours: Mon-Fri, 9AM - 5PM</p>
            </div>
          </div>
          
          <div className="info-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#009CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#009CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#009CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#009CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3>Key Contacts</h3>
              <div className="contact-person">
                <strong>Club President</strong>
                <p>Shashwat Nande</p>
                <p>shashwat.nande@mitwpu.edu.in</p>
              </div>
              <div className="contact-person">
                <strong>Club Vice President</strong>
                <p>Swastik Singh</p>
                <p>swastik.singh@mitwpu.edu.in</p>
              </div>
            </div>
          </div>
          
          <button className="apply-btn">
            <span>Apply Now</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;