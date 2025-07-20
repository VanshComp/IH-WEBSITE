import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// --- Background Component for consistency ---
const ModernHeroBackground = React.memo(() => (
    <div className="modern-background-container" aria-hidden="true">
        <div className="gradient-mesh"></div>
        <div className="shapes-container">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
        </div>
        <div className="grid-overlay"></div>
    </div>
));


const HeroProjects = () => {
  const heroRef = useRef(null);

  // Mouse tracking for 3D parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  // Transformation for the 3D elements
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  // Text animation variants
  const title = "Innovation Hub";
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: i * 0.1 },
    }),
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  return (
    <>
      <style>{`
        :root {
          --primary-blue: #0077ff;
          --primary-yellow: #ffc300;
          --primary-pink: #ff4a85;
          --bg-color: #f7f8fc;
          --text-dark: #2c3e50;
          --text-muted: #7f8c8d;
          --white: #ffffff;
          --border-light: #e0e4e8;
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: var(--bg-color);
        }
        
        /* --- Modern Background Styles --- */
        .modern-background-container {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: 0;
            pointer-events: none;
        }

        .gradient-mesh {
            width: 100%; height: 100%;
            position: absolute;
            background: 
                radial-gradient(ellipse at 5% 5%, var(--primary-blue), transparent 50%),
                radial-gradient(ellipse at 95% 95%, var(--primary-yellow), transparent 50%);
            animation: gradient-flow 25s ease-in-out infinite;
            opacity: 0.6;
            mix-blend-mode: multiply;
        }
        
        @keyframes gradient-flow {
            50% { transform: scale(1.2); }
        }

        .shapes-container {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
        }

        .shape {
            position: absolute;
            border-radius: 50%;
            background: var(--primary-pink);
            opacity: 0.5;
            mix-blend-mode: multiply;
            animation: drift 30s ease-in-out infinite alternate;
        }
        .shape-1 { width: 20vw; height: 20vw; top: 10%; left: 15%; }
        .shape-2 { width: 15vw; height: 15vw; bottom: 15%; right: 10%; animation-duration: 25s; }

        @keyframes drift {
            to { transform: translateY(40px) translateX(-40px); }
        }

        .grid-overlay {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-image: 
                linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
            background-size: 60px 60px;
        }


        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          min-height: 80vh;
        }

        .hero-text {
          max-width: 600px;
        }
        
        .hero-welcome {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
          display: flex;
          flex-wrap: wrap;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary-yellow), var(--primary-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-left: 0.5rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-dark);
          margin-bottom: 2rem;
          opacity: 0.8;
          max-width: 500px;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .btn {
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .btn-primary {
          background-color: var(--primary-blue);
          color: var(--white);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 119, 255, 0.3);
        }

        .btn-outline {
          background-color: transparent;
          color: var(--primary-blue);
          border-color: var(--border-light);
        }
        
        .btn-outline:hover {
          color: var(--primary-blue);
          background-color: var(--app-white);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 119, 255, 0.1);
          border-color: var(--primary-blue);
        }

        .hero-animation {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 450px;
          perspective: 1200px;
        }
        
        /* New 3D Ring Animation */
        .rings-container {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          animation: spin-container 30s linear infinite;
        }
        
        @keyframes spin-container {
          to { transform: rotateY(360deg); }
        }
        
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 4px solid;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(5px);
          transform-style: preserve-3d;
        }
        
        .ring-1 {
          width: 400px;
          height: 400px;
          border-color: rgba(0, 119, 255, 0.3);
          transform: rotateY(70deg) rotateX(10deg);
        }
        
        .ring-2 {
          width: 300px;
          height: 300px;
          border-color: rgba(255, 195, 0, 0.4);
          transform: rotateY(-60deg) rotateX(20deg);
        }
        
        .ring-3 {
          width: 200px;
          height: 200px;
          border-color: rgba(255, 74, 133, 0.5);
          transform: rotateY(50deg) rotateX(-30deg);
        }
        
        .central-orb {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, var(--white), var(--primary-blue));
          border-radius: 50%;
          box-shadow: 0 0 40px var(--primary-blue), inset 0 0 20px var(--white);
          transform: translateZ(40px);
        }

        @media (max-width: 992px) {
           .rings-container { transform: scale(0.8); }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-title { justify-content: center; }
          .hero-subtitle { margin: 1.5rem auto; }
          .hero-buttons { justify-content: center; }
          .hero-animation { height: 350px; margin-top: 2rem; }
          .rings-container { transform: scale(0.7); }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2rem; }
          .hero-subtitle { font-size: 1rem; }
          .hero-buttons { flex-direction: column; align-items: center; }
          .hero-buttons .btn { width: 100%; max-width: 250px; }
        }
      `}</style>
      <section className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
        <ModernHeroBackground />
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-title">
                  <span className="hero-welcome">Welcome to the</span>
                  <motion.span
                    className="gradient-text"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {title.split("").map((char, i) => (
                      <motion.span key={i} variants={charVariants}>
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </h1>
                
                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Where brilliant minds converge to create the future. Discover groundbreaking 
                  projects, connect with visionary leaders, and be part of the next generation 
                  of innovators.
                </motion.p>

                <motion.div
                  className="hero-buttons"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <a href="#projects" className="btn btn-primary">
                    Explore Projects
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    Get In Touch
                  </a>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div className="hero-animation" style={{ rotateX, rotateY }}>
              <div className="rings-container">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                  <div className="central-orb"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroProjects;