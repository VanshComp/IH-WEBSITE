import React, { useEffect } from 'react';
import './Vision.css';

const Vision = () => {
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

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="vision-page">
      <div className="vision-hero">
        <div className="particles-bg"></div>
        <div className="container">
          <h1 className="fade-in">Our Vision at Innovation Hub</h1>
          <p className="hero-subtitle fade-in">Empowering the next generation of innovators and entrepreneurs</p>
        </div>
      </div>

      <div className="vision-content">
        <div className="container">
          <div className="vision-section slide-in-left">
            <h2>Our Mission</h2>
            <p>
              At Innovation Hub, we believe that every student has the potential to be an innovator. 
              Our mission is to create an ecosystem where creativity meets technology, where ideas 
              transform into impactful solutions, and where students are empowered to shape the future 
              through entrepreneurship and innovation.
            </p>
          </div>

          <div className="vision-section slide-in-right">
            <h2>Long-term Goals</h2>
            <p>
              We envision a future where MIT WPU becomes the epicenter of student-led innovation in India. 
              Our long-term goals include establishing a thriving startup ecosystem, creating industry 
              partnerships that provide real-world experience, and developing a network of successful 
              entrepreneurs who give back to the community.
            </p>
          </div>

          <div className="vision-section slide-in-left">
            <h2>Fostering Innovation</h2>
            <p>
              We understand that innovation thrives in environments that encourage experimentation, 
              collaboration, and continuous learning. Through our programs, we provide students with 
              access to cutting-edge resources, mentorship from industry experts, and opportunities 
              to work on real-world challenges that matter.
            </p>
          </div>

          <div className="vision-section slide-in-right">
            <h2>Our Impact</h2>
            <p>
              Since our inception, Innovation Hub has supported over 500 students through various 
              projects, conducted 50+ workshops on emerging technologies, and facilitated internships 
              with leading companies. We've helped launch 25+ student startups and created a community 
              of innovators who continue to push boundaries and create meaningful change.
            </p>
          </div>
        </div>
      </div>

      <div className="vision-cta">
        <div className="container">
          <div className="fade-in">
            <h2>Join Our Journey</h2>
            <p>Ready to be part of something bigger? Join Innovation Hub and transform your ideas into reality.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;