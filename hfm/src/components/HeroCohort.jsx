
import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

// --- Background Component for consistency ---
const ModernHeroBackground = React.memo(() => (
    <div className="modern-background-container" aria-hidden="true">
        <div className="gradient-mesh"></div>
        <div className="shapes-container">
            <div className="shape shape-1"></div>
            <div class="shape shape-2"></div>
        </div>
        <div className="grid-overlay"></div>
    </div>
));

const HeroCohort = () => {
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
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: var(--bg-color);
          padding: 2rem 1rem;
        }

        /* --- Modern Background Styles --- */
        .modern-background-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .gradient-mesh {
          width: 100%;
          height: 100%;
          position: absolute;
          background: 
            radial-gradient(ellipse at 10% 10%, var(--primary-blue) 0%, transparent 60%),
            radial-gradient(ellipse at 90% 90%, var(--primary-yellow) 0%, transparent 60%);
          animation: gradient-flow 20s ease-in-out infinite;
          opacity: 0.5;
          mix-blend-mode: overlay;
        }

        @keyframes gradient-flow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }

        @keyframes drift {
          to { transform: translateY(30px) translateX(-30px); }
        }
        

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.8;
        }

        .container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          margin-top:150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 80vh;
          padding: 2rem 0;
        }

        .hero-text {
          max-width: 90%;
          width: 100%;
          margin: 0 auto;
        }

        .hero-welcome {
          font-size: clamp(5.0rem, 3vw, 2rem);
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .hero-title {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .gradient-text {
            font-size: clamp(5.0rem, 3vw, 2rem);
          margin-bottom:30px;
          background: linear-gradient(135deg, var(--primary-yellow), var(--primary-blue), var(--primary-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: var(--text-dark);
          margin: 0 auto 2rem;
          opacity: 0.85;
          max-width: 700px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary-blue), var(--primary-pink));
          color: var(--white);
          box-shadow: 0 4px 15px rgba(0, 119, 255, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 119, 255, 0.4);
          background: linear-gradient(135deg, var(--primary-pink), var(--primary-blue));
        }

        .btn-outline {
          background: transparent;
          color: var(--primary-blue);
          border: 2px solid var(--primary-blue);
        }

        .btn-outline:hover {
          background: var(--primary-blue);
          color: var(--white);
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 119, 255, 0.2);
        }

        .hero-animation {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 400px;
          perspective: 1000px;
          margin-top: 2rem;
        }

        .rings-container {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          animation: spin-container 25s linear infinite;
        }

        @keyframes spin-container {
          to { transform: rotateY(360deg); }
        }

        @media (max-width: 1200px) {
          .container {
            padding: 0 1.5rem;
          }
          .hero-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
          }
          .hero-animation {
            height: 350px;
          }
          .rings-container {
            transform: scale(0.85);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 1.5rem 1rem;
          }
          .hero-content {
            padding: 1.5rem 0;
          }
          .hero-text {
            max-width: 95%;
          }
          .hero-title {
            font-size: clamp(2rem, 4.5vw, 3rem);
          }
          .hero-subtitle {
            font-size: clamp(1rem, 1.8vw, 1.2rem);
            max-width: 90%;
          }
          .hero-animation {
            height: 300px;
            margin-top: 1.5rem;
          }
          .rings-container {
            transform: scale(0.7);
          }
          .btn {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: clamp(1.8rem, 4vw, 2.5rem);
          }
          .hero-subtitle {
            font-size: clamp(0.9rem, 1.6vw, 1.1rem);
            margin-bottom: 1.5rem;
          }
          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
          }
          .btn {
            width: 100%;
            max-width: 220px;
            padding: 0.7rem 1.5rem;
          }
          .hero-animation {
            height: 250px;
          }
          .rings-container {
            transform: scale(0.6);
          }
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
                  <span className="hero-welcome">Cohorts At </span>
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
                 Join the next generation of bold thinkers and creators shaping what comes next.
                </motion.p>
                <motion.div
                                  className="hero-buttons"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                  <a href="#projects" className="btn btn-primary">
                                    Apply Now
                                  </a>
                                </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default HeroCohort;