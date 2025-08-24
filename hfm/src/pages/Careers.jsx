import React, { useState, useEffect, useRef } from 'react';
import JobCard from '../components/JobCard';
import Modal from '../components/Modal';
import '../styles/careers.css';
import HeroCareers from '../components/HeroCareer';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const heroRef = useRef(null);
  const jobsRef = useRef(null);

  const jobRoles = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "Create stunning user interfaces and bring innovative ideas to life with modern web technologies. Join our creative team building the future of digital experiences.",
      requirements: ["React/Vue.js", "JavaScript ES6+", "CSS3 & HTML5", "UI/UX Design Sense"],
      icon: "💻"
    },
    {
      id: 2,
      title: "Product Manager",
      description: "Lead product strategy and drive innovation from concept to launch. Shape the roadmap for products that impact thousands of users worldwide.",
      requirements: ["Product Strategy", "Agile Methodologies", "Data Analysis", "Team Leadership"],
      icon: "🚀"
    },
    {
      id: 3,
      title: "UX/UI Designer",
      description: "Design intuitive and beautiful experiences that users love. Collaborate with cross-functional teams to create products that solve real problems.",
      requirements: ["Figma/Sketch", "User Research", "Prototyping", "Design Systems"],
      icon: "🎨"
    },
    {
      id: 4,
      title: "Data Scientist",
      description: "Turn data into actionable insights that drive business decisions. Work with cutting-edge ML technologies to solve complex challenges.",
      requirements: ["Python/R", "Machine Learning", "Statistics", "Data Visualization"],
      icon: "📊"
    },
    {
      id: 5,
      title: "Marketing Specialist",
      description: "Build and execute marketing strategies that amplify our innovation message. Create campaigns that inspire and engage our community.",
      requirements: ["Digital Marketing", "Content Creation", "Analytics", "Brand Strategy"],
      icon: "📢"
    },
    {
      id: 6,
      title: "Backend Engineer",
      description: "Build robust and scalable systems that power our platform. Work with modern cloud technologies and microservices architecture.",
      requirements: ["Node.js/Python", "Database Design", "Cloud Services", "API Development"],
      icon: "⚙️"
    }
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <Header/>
    <div className="careers-page">
      {/* Hero Section */}
      <HeroCareers/>

      {/* Open Positions Section */}
      <section className="jobs-section" ref={jobsRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">
              Discover exciting opportunities to grow your career and make a meaningful impact
            </p>
          </div>
          
          <div className="jobs-grid">
            {jobRoles.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                onApplyClick={handleApplyClick}
                animationDelay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Join InnovationHub?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Growth Focused</h3>
              <p>Continuous learning opportunities and career development programs</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Remote First</h3>
              <p>Work from anywhere with flexible hours and work-life balance</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Innovation Culture</h3>
              <p>Be part of cutting-edge projects that shape the future</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Collaborative Team</h3>
              <p>Work with passionate professionals who support each other</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make an Impact?</h2>
            <p>Don't see the perfect role? We're always looking for exceptional talent.</p>
            <button className="cta-button" onClick={() => handleApplyClick({ title: "General Application", description: "Tell us about yourself and how you'd like to contribute to InnovationHub." })}>
              Send Open Application
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          job={selectedJob}
        />
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Careers;