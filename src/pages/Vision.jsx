import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Vision.css';
import ApplicationModal from '../components/ApplicationModal';

// Reusable Glitch Heading Component
const GlitchHeading = ({ text }) => {
    const h1Ref = useRef(null);
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        const element = h1Ref.current;
        if (!element) return;

        let interval;
        const scramble = () => {
            const originalText = element.dataset.text;
            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                setDisplayText(
                    originalText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return originalText[index];
                            }
                            if (letter === ' ') return ' ';
                            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                            return chars[Math.floor(Math.random() * 26)];
                        })
                        .join("")
                );

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 30);
        };

        element.addEventListener('mouseenter', scramble);
        scramble(); // Initial scramble

        return () => {
          element.removeEventListener('mouseenter', scramble);
          clearInterval(interval);
        };
    }, []);

    return (
      <h1 ref={h1Ref} className="hero-title-vision" data-text={text}>
        {displayText}
      </h1>
    );
};

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
        <div className="vision-page">
            <div className="vision-hero">
                <div className="hero-content-container">
                    <GlitchHeading text="Our Vision at Innovation Hub" />
                    <motion.p 
                        className="hero-subtitle-vision"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      Empowering the next generation of innovators and entrepreneurs
                    </motion.p>
                    <motion.button 
                        className="btn hero-cta"
                        onClick={() => setIsModalOpen(true)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 215, 0, 0.3)" }}
                    >
                        Get Started
                    </motion.button>
                </div>
            </div>

            <div className="vision-content container">
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
    );
};

export default Vision;