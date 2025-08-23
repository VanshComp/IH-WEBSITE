// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import MentorCard from '../components/MentorCard';
// import './Mentors.css';

// // Assume GlitchHeading is a shared component
// const GlitchHeading = ({ text }) => {
//     const h1Ref = useRef(null);
//     const [displayText, setDisplayText] = useState(text);

//     useEffect(() => {
//         const element = h1Ref.current;
//         if (!element) return;
//         let interval;
//         const scramble = () => {
//             const originalText = element.dataset.text;
//             let iteration = 0;
//             clearInterval(interval);
//             interval = setInterval(() => {
//                 setDisplayText(
//                     originalText.split("").map((letter, index) => {
//                         if (index < iteration) return originalText[index];
//                         if (letter === ' ') return ' ';
//                         const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//                         return chars[Math.floor(Math.random() * 26)];
//                     }).join("")
//                 );
//                 if (iteration >= originalText.length) clearInterval(interval);
//                 iteration += 1 / 3;
//             }, 30);
//         };
//         element.addEventListener('mouseenter', scramble);
//         scramble();
//         return () => {
//           element.removeEventListener('mouseenter', scramble);
//           clearInterval(interval);
//         };
//     }, []);

//     return <h1 ref={h1Ref} className="hero-title" data-text={text}>{displayText}</h1>;
// };

// const Mentors = () => {
//     const mentors = [
//         // Faculty Mentors
//         { id: 1, name: 'Dr. Bhavana Tiple', role: 'Faculty Mentor', quote: 'Innovation is the bridge between imagination and impact.', type: 'faculty' },
//         { id: 2, name: 'Dr. Surbhi Razdan', role: 'Faculty Mentor', quote: 'Fostering creativity and entrepreneurial thinking.', type: 'faculty' },
//         { id: 3, name: 'Dr. Deepali Jawle', role: 'Faculty Mentor', quote: 'Nurturing the next generation of innovators.', type: 'faculty' },
//         { id: 4, name: 'Dr. Shivprakash Barve', role: 'Faculty Mentor', quote: 'Excellence in innovation through dedication.', type: 'faculty' },
        
//         // Student Mentors
//         { id: 5, name: 'Harsh Choudhary', role: 'Student Mentor', quote: 'Leading by example and inspiring peers.', type: 'student' },
//         { id: 6, name: 'Mudit Jain', role: 'Student Mentor', quote: 'Bridging the gap between students and innovation.', type: 'student' },
//         { id: 7, name: 'Vansh Gautam', role: 'Student Mentor', quote: 'Leading by example and inspiring peers.', type: 'student' },
//         { id: 8, name: 'Durvank Belitkar', role: 'Student Mentor', quote: 'Bridging the gap between students and innovation.', type: 'student' },
        
//         // --- NEW MENTORS ADDED ---
//         { id: 9, name: 'Rajkumar Sharma', role: 'Student Mentor', quote: 'Bridging the gap between students and innovation.', type: 'student' },
//         { id: 10, name: 'Deep Sangani', role: 'Student Mentor', quote: 'Bridging the gap between students and innovation.', type: 'student' },
//     ];

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.1, delayChildren: 0.3 }
//         }
//     };

//     return (
//         <div className='mentors-page'>
//             <div className='mentors-hero'>
//                 <div className='hero-content'>
//                     <GlitchHeading text="Our Mentors" />
//                     <p className='hero-subtitle'>Meet the experienced faculty and dedicated students who guide our innovation journey</p>
//                 </div>
//             </div>
//             <div className='mentors-content container'>
//                 <section className='mentors-section faculty-section'>
//                     <motion.div 
//                       className='section-header'
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.7 }}
//                     >
//                         <h2>Faculty Mentors</h2>
//                         <p>Experienced faculty members guiding innovation and research</p>
//                     </motion.div>
//                     <motion.div className='mentors-grid' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//                         {mentors.filter(m => m.type === 'faculty').map(mentor => (
//                             <MentorCard mentor={mentor} key={mentor.id} />
//                         ))}
//                     </motion.div>
//                 </section>
//                 <section className='mentors-section'>
//                      <motion.div 
//                       className='section-header'
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.7, delay: 0.2 }}
//                     >
//                         <h2>Student Mentors</h2>
//                         <p>Dedicated student leaders fostering peer-to-peer learning</p>
//                     </motion.div>
//                     <motion.div className='mentors-grid' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//                         {mentors.filter(m => m.type === 'student').map(mentor => (
//                             <MentorCard mentor={mentor} key={mentor.id} />
//                         ))}
//                     </motion.div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default Mentors;



import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MentorCard from '../components/MentorCard';
import './Mentors.css';

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

const mentors = [
    // Faculty Mentors
    {
        id: 1,
        name: 'Dr. Bhavana Tiple',
        role: 'Faculty Mentor',
        quote: 'Innovation is the bridge between imagination and impact.',
        type: 'faculty',
        image: '/bhavana.jpg'
    },
    {
        id: 2,
        name: 'Dr. Surbhi Razdan',
        role: 'Faculty Mentor',
        quote: 'Fostering creativity and entrepreneurial thinking.',
        type: 'faculty',
        image: '/surbhi.webp'
    },
    {
        id: 3,
        name: 'Dr. Deepali Javale',
        role: 'Faculty Mentor',
        quote: 'Nurturing the next generation of innovators.',
        type: 'faculty',
        image: '/deepali.jpg'
    },
    {
        id: 4,
        name: 'Dr. Shivprakash Barve',
        role: 'Faculty Mentor',
        quote: 'Excellence in innovation through dedication.',
        type: 'faculty',
        image: '/shivprakash.jpg'
    },

    // Student Mentors

    {
        id: 5,
        name: 'Harsh Choudhary',
        role: 'Student Mentor',
        quote: 'Innovation isn\'t just about ideas; it\'s about empowering the greatness in others.',
        type: 'student',
        image: '/harshc.jpeg'
    },
    {
        id: 6,
        name: 'Mudit Jain',
        role: 'Student Mentor',
        quote: 'Let\'s transform classroom theory into real-world impact. I\'m here to help connect the dots.',
        type: 'student',
        image: '/muditj.jpeg'
    },
    {
        id: 7,
        name: 'Vansh Gautam',
        role: 'Student Mentor',
        quote: 'Embrace curiosity. The most groundbreaking solutions begin with the courage to ask \'What if?\'',
        type: 'student',
        image: ''
    },
    {
        id: 8,
        name: 'Durvank Belitkar',
        role: 'Student Mentor',
        quote: 'Ideas are the starting line, but execution wins the race. Let\'s focus on building and delivering.',
        type: 'student',
        image: '/durvankb.jpeg'
    },
    {
        id: 9,
        name: 'Rajkumar Sharma',
        role: 'Student Mentor',
        quote: 'True innovation is driven by purpose. Let\'s find the \'why\' behind your idea and bring it to life.',
        type: 'student',
        image: '/raj.jpg'
    },
    {
        id: 10,
        name: 'Deep Sangani',
        role: 'Student Mentor',
        quote: 'Technology is our paintbrush and creativity is our canvas. Let\'s build something extraordinary.',
        type: 'student',
        image: '/deeps.jpeg'
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const Mentors = () => {
    return (
        <div className='mentors-page'>
            <div className='mentors-hero'>
                <div className='hero-content'>
                    <GlitchHeading text="Our Mentors" />
                    <p className='hero-subtitle'>Meet the experienced faculty and dedicated students who guide our innovation journey</p>
                </div>
            </div>
            <div className='mentors-content container'>
                <section className='mentors-section faculty-section'>
                    <motion.div
                        className='section-header'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2>Faculty Mentors</h2>
                        <p>Experienced faculty members guiding innovation and research</p>
                    </motion.div>
                    <motion.div className='mentors-grid' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {mentors.filter(m => m.type === 'faculty').map(mentor => (
                            <MentorCard mentor={mentor} key={mentor.id} />
                        ))}
                    </motion.div>
                </section>
                <section className='mentors-section'>
                    <motion.div
                        className='section-header'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h2>Student Mentors</h2>
                        <p>Dedicated student leaders fostering peer-to-peer learning</p>
                    </motion.div>
                    <motion.div className='mentors-grid' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {mentors.filter(m => m.type === 'student').map(mentor => (
                            <MentorCard mentor={mentor} key={mentor.id} />
                        ))}
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Mentors;