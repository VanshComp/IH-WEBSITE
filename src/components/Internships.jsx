import React, { useEffect, useRef } from 'react';
import { Calendar, Users, Award, ArrowRight } from 'lucide-react';
import './Internships.css';

const Internships = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const internships = [
    {
      id: 1,
      title: 'Patent Research Intern',
      duration: '3-6 months',
      department: 'Research & Development',
      description: 'Dive deep into patent landscapes, conduct prior art searches, and support innovation teams in developing breakthrough technologies.',
      skills: ['Patent Analysis', 'Research', 'Technical Writing'],
      spots: 5,
      icon: '🔬'
    },
    {
      id: 2,
      title: 'Innovation Catalyst',
      duration: '6-12 months',
      department: 'Innovation Lab',
      description: 'Work with startups and inventors to transform ideas into marketable products. Lead ideation sessions and prototype development.',
      skills: ['Product Development', 'Design Thinking', 'Project Management'],
      spots: 3,
      icon: '🚀'
    },
    {
      id: 3,
      title: 'IP Legal Assistant',
      duration: '4-8 months',
      department: 'Legal Affairs',
      description: 'Support our legal team in patent filing processes, IP strategy development, and intellectual property portfolio management.',
      skills: ['Legal Research', 'IP Law', 'Documentation'],
      spots: 2,
      icon: '⚖️'
    },
    {
      id: 4,
      title: 'Tech Innovation Analyst',
      duration: '3-9 months',
      department: 'Strategy & Analytics',
      description: 'Analyze emerging technologies, market trends, and innovation opportunities to guide strategic decisions.',
      skills: ['Data Analysis', 'Market Research', 'Technology Assessment'],
      spots: 4,
      icon: '📊'
    }
  ];

  const benefits = [
    {
      icon: <Award className="benefit-icon" />,
      title: 'Mentorship Program',
      description: 'Get paired with industry experts and innovation leaders'
    },
    {
      icon: <Users className="benefit-icon" />,
      title: 'Networking Events',
      description: 'Connect with entrepreneurs, inventors, and tech professionals'
    },
    {
      icon: <Calendar className="benefit-icon" />,
      title: 'Flexible Schedule',
      description: 'Work around your academic commitments'
    }
  ];

  return (
    <section id="internships" className="internships section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in-section">
          <h2 className="section-title">Our Internships</h2>
          <p className="section-subtitle">
            Launch your career in innovation and intellectual property. Join our dynamic team 
            and gain hands-on experience in the world's most exciting technologies.
          </p>
        </div>

        <div className="internships-grid">
          {internships.map((internship, index) => (
            <div 
              key={internship.id} 
              className={`internship-card fade-in-section`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-header">
                <div className="internship-icon">{internship.icon}</div>
                <div className="internship-meta">
                  <h3 className="internship-title">{internship.title}</h3>
                  <div className="internship-details">
                    <span className="duration">{internship.duration}</span>
                    <span className="department">{internship.department}</span>
                  </div>
                </div>
              </div>

              <p className="internship-description">{internship.description}</p>

              <div className="skills-section">
                <h4>Key Skills</h4>
                <div className="skills-list">
                  {internship.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="card-footer">
                <div className="spots-info">
                  <Users size={16} />
                  <span>{internship.spots} spots available</span>
                </div>
                <button className="apply-btn">
                  Apply Now
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-section slide-in-left">
          <h3 className="benefits-title">Why Intern With Us?</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                {benefit.icon}
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section slide-in-right">
          <div className="cta-content">
            <h3>Ready to Start Your Innovation Journey?</h3>
            <p>Join hundreds of interns who have launched successful careers through our programs.</p>
            <a href="#contact" className="btn btn-primary">
              Get Started Today
              <ArrowRight className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;