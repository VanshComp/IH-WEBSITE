import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/Vision.css';
import ApplicationModal from '../components/ApplicationModal';
import HeroVision from '../components/HeroVision';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Reusable Glitch Heading Component
const Vision = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };
    const AnimatedBackground = React.memo(() => (
      <div className="background-shapes" aria-hidden="true">
        {/* Large gradient orbs */}
        <div className="floating-shape gradient-orb orb-1" />
        <div className="floating-shape gradient-orb orb-2" />
        <div className="floating-shape gradient-orb orb-3" />
        <div className="floating-shape gradient-orb orb-4" />
        <div className="floating-shape gradient-orb orb-5" />
        <div className="floating-shape gradient-orb orb-6" />
        
        {/* Multiple Hexagons */}
        <div className="floating-shape geometric-shape hexagon hexagon-1" />
        <div className="floating-shape geometric-shape hexagon hexagon-2" />
        <div className="floating-shape geometric-shape hexagon hexagon-3" />
        
        {/* Multiple Triangles */}
        <div className="floating-shape geometric-shape triangle-shape triangle-1" />
        <div className="floating-shape geometric-shape triangle-shape triangle-2" />
        <div className="floating-shape geometric-shape triangle-shape triangle-3" />
        <div className="floating-shape geometric-shape triangle-shape triangle-4" />
        
        {/* Multiple Diamonds */}
        <div className="floating-shape geometric-shape diamond diamond-1" />
        <div className="floating-shape geometric-shape diamond diamond-2" />
        <div className="floating-shape geometric-shape diamond diamond-3" />
        
        {/* Rotating Squares */}
        <div className="floating-shape square-shape square-1" />
        <div className="floating-shape square-shape square-2" />
        <div className="floating-shape square-shape square-3" />
        
        {/* Pulsing Circles */}
        <div className="floating-shape circle-pulse circle-1" />
        <div className="floating-shape circle-pulse circle-2" />
        <div className="floating-shape circle-pulse circle-3" />
        
        {/* Twinkling Stars */}
        <div className="floating-shape star-shape star-1" />
        <div className="floating-shape star-shape star-2" />
        <div className="floating-shape star-shape star-3" />
        
        {/* Enhanced Floating particles */}
        {Array.from({ length: 12 }, (_, i) => (
          <div 
            key={`particle-${i}`}
            className="particle" 
            style={{ 
              top: `${Math.random() * 80 + 10}%`, 
              left: `${Math.random() * 80 + 10}%`, 
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }} 
          />
        ))}
    
        {/* Mini particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div 
            key={`mini-particle-${i}`}
            className="mini-particle" 
            style={{ 
              top: `${Math.random() * 90 + 5}%`, 
              left: `${Math.random() * 90 + 5}%`, 
              animationDelay: `${i * 0.4}s`,
              backgroundColor: `var(--${['blue', 'purple', 'yellow', 'green', 'pink'][i % 5]}-accent)`
            }} 
          />
        ))}
    
        {/* Large particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <div 
            key={`large-particle-${i}`}
            className="large-particle" 
            style={{ 
              top: `${Math.random() * 80 + 10}%`, 
              left: `${Math.random() * 80 + 10}%`, 
              animationDelay: `${i * 1.2}s`,
              backgroundColor: `var(--${['purple', 'blue', 'green', 'pink'][i % 4]}-accent)`
            }} 
          />
        ))}
        
        {/* Pentagon shapes */}
        <div className="floating-shape pentagon pentagon-1" />
        <div className="floating-shape pentagon pentagon-2" />
        <div className="floating-shape pentagon pentagon-3" />
        
        {/* Octagon shapes */}
        <div className="floating-shape octagon octagon-1" />
        <div className="floating-shape octagon octagon-2" />
        <div className="floating-shape octagon octagon-3" />
        
        {/* Cross shapes */}
        <div className="floating-shape cross cross-1" />
        <div className="floating-shape cross cross-2" />
        <div className="floating-shape cross cross-3" />
        
        {/* Heart shapes */}
        <div className="floating-shape heart heart-1" />
        <div className="floating-shape heart heart-2" />
        <div className="floating-shape heart heart-3" />
        
        {/* Arrow shapes */}
        <div className="floating-shape arrow arrow-1" />
        <div className="floating-shape arrow arrow-2" />
        <div className="floating-shape arrow arrow-3" />
        
        {/* Lightning bolts */}
        <div className="floating-shape lightning lightning-1" />
        <div className="floating-shape lightning lightning-2" />
        <div className="floating-shape lightning lightning-3" />
        
        {/* Spiral shapes */}
        <div className="floating-shape spiral spiral-1" />
        <div className="floating-shape spiral spiral-2" />
        <div className="floating-shape spiral spiral-3" />
        
        {/* Wave shapes */}
        <div className="floating-shape wave wave-1" />
        <div className="floating-shape wave wave-2" />
        <div className="floating-shape wave wave-3" />
        
        {/* Infinity symbols */}
        <div className="floating-shape infinity infinity-1" />
        <div className="floating-shape infinity infinity-2" />
        
        {/* Multiple Morphing blobs */}
        <div className="floating-shape morphing-blob blob-1" />
        <div className="floating-shape morphing-blob blob-2" />
        <div className="floating-shape morphing-blob blob-3" />
        
        {/* Grid overlay */}
        <div className="grid-overlay" />
      </div>
    ));

   const visionSections = [
        { 
            title: "Foster Student-led Innovation", 
            content: "We provide a fertile ground for creativity, empowering students to take the lead on their innovative journeys. From initial brainstorming to developing functional prototypes, we offer the resources and mentorship needed to validate their concepts. Our ecosystem is built on the principle of 'fail-fast, learn-faster,' creating a safe space for bold experimentation. This approach ensures students confidently transform academic knowledge into tangible, real-world impact." 
        },
        { 
            title: "Bridge Academia & Industry", 
            content: "Our hub acts as a dynamic interface between theoretical knowledge and practical industry application. We facilitate direct collaboration through workshops led by industry veterans, joint research initiatives, and exclusive internship opportunities. This symbiotic relationship allows students to work on live, pressing challenges, gaining invaluable hands-on experience. In turn, our partners benefit from fresh perspectives and access to a pipeline of next-generation talent." 
        },
        { 
            title: "Support Early-Stage Startups", 
            content: "We are committed to transforming viable ideas into successful ventures with comprehensive end-to-end support. Through our dedicated incubation programs, we offer access to essential seed funding, state-of-the-art labs, and collaborative coworking spaces. Our support extends to mentorship from seasoned entrepreneurs and guidance on business strategy, legal compliance, and IP. We aim to demystify the startup journey, making it an accessible goal for every ambitious student." 
        },
        { 
            title: "Drive Interdisciplinary Collaboration", 
            content: "We believe breakthrough innovations occur at the intersection of diverse disciplines. Our platform actively dismantles academic silos by encouraging students from engineering, design, management, and humanities to form powerful teams. Through immersive events like hackathons and design sprints, we create an environment where varied perspectives merge to create holistic solutions. This approach mirrors the collaborative dynamics of today's leading innovation ecosystems." 
        },
        { 
            title: "Embed Innovation in Culture", 
            content: "Our goal is to weave innovation into the very fabric of the university's culture, making it a core part of the student experience. We go beyond isolated events by fostering a campus-wide movement that celebrates curiosity, critical thinking, and a bias for action. Through flagship initiatives and inspiring speaker series, we aim to make creative problem-solving a daily habit. We ensure every student graduates not just with a degree, but with the confidence to be a lifelong innovator." 
        },
        { 
            title: "Solve Real Problems at Scale", 
            content: "Innovation at our hub is purpose-driven, aimed squarely at addressing society's most pressing challenges. We encourage projects that leverage technology for social good, focusing on sectors like sustainability, healthcare, and smart urban development. Our mentorship guides students through the entire impact lifecycle, from identifying a community need to developing a robust, scalable solution. The ultimate measure of our success is creating ventures that generate lasting positive change." 
        },
        { 
            title: "Global Innovation Readiness", 
            content: "We are dedicated to preparing our students to thrive and lead in the interconnected global innovation landscape. We provide exposure to international standards through global competitions, virtual exchange programs, and collaborations with leading universities. This global-first mindset equips them with the cross-cultural communication skills and acumen needed to compete on an international stage. Our vision is to cultivate innovators who can develop solutions with worldwide relevance and appeal." 
        }
    ];

    return (
      <>
      <Header/>
        <div className="vision-page">
            <HeroVision/>

            <div className="vision-content container">
              <AnimatedBackground/>
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {visionSections.map((section, index) => (
                        <motion.div className="vision-section" key={index} variants={itemVariants}>
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
        <Footer/>
        </>
    );
};

export default Vision;