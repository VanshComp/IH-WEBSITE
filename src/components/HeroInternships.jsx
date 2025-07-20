import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Rocket, Target } from 'lucide-react';
import './HeroInternships.css';

const HeroInternships = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="home" className="hero-internships">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.h1 className="hero-title" variants={itemVariants}>
              Launch Your Career in
              <span className="title-highlight">&nbsp;Innovation</span>
            </motion.h1>
            
            <motion.p className="hero-subtitle" variants={itemVariants}>
              Join an award-winning ecosystem of over 500+ innovators. Gain real-world experience on groundbreaking projects and launch your future in technology and intellectual property.
            </motion.p>
            
            <motion.div className="hero-cta" variants={itemVariants}>
              <a href="#internships" className="btn btn-primary hero-btn">
                <span>View Openings</span>
                <ArrowRight className="btn-icon" />
              </a>
              <a href="#about" className="btn btn-outline hero-btn">
                <span>Program Details</span>
              </a>
            </motion.div>

            <motion.div className="hero-trust" variants={itemVariants}>
              <p className="trust-text">Our interns come from top universities worldwide</p>
              <div className="trust-logos">
                <div className="trust-logo">MIT</div>
                <div className="trust-logo">Stanford</div>
                <div className="trust-logo">Google</div>
              </div>
            </motion.div>
          </div>
          
          <motion.div className="hero-visual" variants={itemVariants}>
            <div className="innovation-showcase">
                <div className="showcase-card card-1">
                    <div className="card-icon"><Zap size={20}/></div>
                    <p>AI & Machine Learning</p>
                </div>
                <div className="showcase-card card-2">
                    <div className="card-icon"><Rocket size={20}/></div>
                    <p>Quantum Computing</p>
                </div>
                <div className="showcase-card card-3">
                    <div className="card-icon"><Target size={20}/></div>
                    <p>Biotechnology</p>
                </div>
                 <div className="showcase-main-circle">
                    <p>Your Future Starts Here</p>
                 </div>
            </div>
          </motion.div>
        </motion.div> 
      </div>
    </section>
  );
};

export default HeroInternships;
