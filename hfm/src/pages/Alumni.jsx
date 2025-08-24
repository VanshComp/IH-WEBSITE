import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import AlumniCard from '../components/AlumniCard';
import '../styles/Alumni.css';
import { image } from 'framer-motion/client';
import HeroAlumni from '../components/HeroAlumni';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Assume GlitchHeading is a shared component
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
                    originalText.split("").map((letter, index) => {
                        if (index < iteration) return originalText[index];
                        if (letter === ' ') return ' ';
                        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                        return chars[Math.floor(Math.random() * 26)];
                    }).join("")
                );
                if (iteration >= originalText.length) clearInterval(interval);
                iteration += 1 / 3;
            }, 30);
        };
        element.addEventListener('mouseenter', scramble);
        scramble();
        return () => {
          element.removeEventListener('mouseenter', scramble);
          clearInterval(interval);
        };
    }, []);

    return <h1 ref={h1Ref} className="hero-title" data-text={text}>{displayText}</h1>;
};

// StatItem component remains the same
const StatItem = ({ endValue, label, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const easeOutQuad = t => t * (2 - t);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let startTimestamp = null;
                    const duration = 2000;
                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        setCount(Math.floor(easeOutQuad(progress) * endValue));
                        if (progress < 1) window.requestAnimationFrame(step);
                    };
                    window.requestAnimationFrame(step);
                    observer.unobserve(ref.current);
                }
            }, { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [endValue]);

    return (
        <div className="stat-item" ref={ref}>
            <h3>{prefix}{count}{suffix}</h3>
            <p>{label}</p>
        </div>
    );
};


const Alumni = () => {
    const alumni = [
        // ... (alumni data remains the same)
        { id: 1, name: "Aryan Yadav",image:"/Aryany.jpeg", batch: "2019", role: "Chairman of Innovation Hub", story: "Currently serving as the Chairman, leading the next wave of innovators with passion and vision." },
        { id: 2, name: "Gaurang Pandit",image:"/gaurangp.jpeg", batch: "2022", role: "Innovation Hub Graduate", story: "A dedicated member of Innovation Hub who contributed significantly to several award-winning projects." }
        
    ];
    const statsData = [
        // ... (stats data remains the same)
        { endValue: 100, label: 'Alumni Network', suffix: '+' },
        { endValue: 75, label: 'Placed in Top Companies', suffix: '%' },
        { endValue: 20, label: 'Successful Startups', suffix: '+' },
        { endValue: 100, label: 'Total Funding Raised', prefix: '₹', suffix: 'K' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };
    
    return (
      <>
      <Header/>
        <div className="alumni-page">
            <HeroAlumni/>
            {/* --- SECTION ORDER SWAPPED --- */}

            {/* 1. Alumni Content (Now first) */}
            <div className="alumni-content container">
                <motion.div className="alumni-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {alumni.map((alumnus) => (
                        <AlumniCard alumnus={alumnus} key={alumnus.id} />
                    ))}
                </motion.div>
            </div>
            
            {/* 2. Alumni Stats (Now second) */}
            <div className="alumni-stats">
                <div className="container">
                    <div className="stats-grid">
                        {statsData.map(stat => (
                            <StatItem key={stat.label} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Alumni;