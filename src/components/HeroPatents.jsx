import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Award, Users } from 'lucide-react';
import './HeroPatents.css';

const HeroPatents = () => {
  const stats = [
    { id: 1, icon: <Award />, number: '150+', label: 'Patents Filed' },
    { id: 2, icon: <Zap />, number: '85%', label: 'Success Rate' },
    { id: 3, icon: <Users />, number: '500+', label: 'Innovators' }
  ];

  // Hooks for 3D mouse parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-400, 400], [8, -8]);
  const rotateY = useTransform(x, [-400, 400], [-8, 8]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      id="home" 
      className="hero-patents" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* --- Left Column (Text) --- */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              Revolutionizing Innovation
              <span className="gradient-text"> Through Patents</span>
            </h1>
            
            <p className="hero-subtitle">
              Join our vibrant ecosystem of inventors, entrepreneurs, and innovators. 
              Protect your ideas, accelerate your growth, and shape the future.
            </p>

            <div className="hero-buttons">
              <a href="#patents" className="btn btn-primary">
                Explore Patents <ArrowRight size={16} />
              </a>
              <a href="#about" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </motion.div>

          {/* --- Right Column (Interactive 3D Area) --- */}
          <motion.div 
            className="hero-interactive-area"
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="innovation-graphic"
              style={{ transform: 'translateZ(40px)' }}
            >
              <motion.div
                className="central-node"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="central-icon" />
              </motion.div>
              <div className="orbit-node"></div>
            </motion.div>
            
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className={`stat-item stat-pos-${index + 1}`}
                style={{ transform: 'translateZ(60px)' }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content-wrapper">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroPatents;
