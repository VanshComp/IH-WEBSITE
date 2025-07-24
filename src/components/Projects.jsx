import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// --- Data Layer ---
const projectData = [
    { id: 1, title: 'Samavadini Chatbot', description: 'Tackles the issue of redundant FAQs being brought up to the exam department through its bi-functional (voice and text-based) interface. Accepts and answers queries in three languages using textual or audio user queues.', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['NLP', 'Voice Processing', 'Multi-language'], color: 'blue' },
    { id: 2, title: 'Divyangjan Support', description: 'Caters to the need of each specially-abled students by allowing them to request various services available for them like writing aid, supplementary notes, peer support, etc along with a credit-based system.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Accessibility', 'Support System', 'Credit System'], color: 'purple' },
    { id: 3, title: 'Verification Module', description: 'An interface for validating students graduation/college documents for verification and allowing the entire process to be seamlessly centralized and automated.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Document Verification', 'Automation', 'Centralized System'], color: 'orange' },
    { id: 4, title: 'MOU Tracker', description: 'It is a centralized system for all processes surrounding college-based MOUs. System would aim to cover processes like initiation, tracking, termination, renewal, updation, etc.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Process Management', 'Tracking', 'Administration'], color: 'green' },
    { id: 5, title: 'PHD Tracker', description: 'Automates a students journey towards a Ph.D. by providing features such as progress tracking, goal setting, collaboration, task and document management, reporting.', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Progress Tracking', 'Goal Setting', 'Collaboration'], color: 'blue' },
    { id: 6, title: 'Insudox', description: 'Online insurance filing, tracking and claiming software which would allow for people to avail assistance while going through tedious procedures of company-based policy reimbursements.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG00by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Insurance', 'Filing System', 'Claims Processing'], color: 'purple' },
    { id: 7, title: 'CoBand - 19', description: 'This project aimed to tackle the issue of managing students after college reopening by tracking vitals of students with the help of this band that will actually regulate the students.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Health Monitoring', 'IoT', 'Student Safety'], color: 'orange' },
    { id: 8, title: 'I - Traffic', description: 'It is an intelligent traffic management system designed for the Indian Traffic System. Without changing the current set-up of signals, this device aims to optimize signal timers.', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Traffic Management', 'Deep Learning', 'IoT'], color: 'green' },
    { id: 9, title: 'NGO Network', description: 'This application works to connect NGOs across the country in order to meet the basic needs of the underprivileged people of the society.', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Social Network', 'NGO Management', 'Community Service'], color: 'blue' },
    { id: 10, title: 'Robotic Arm E - Yantra', description: 'Two Robotic arms were simulated in an automated warehouse setting with the help of ROS, Robotic Perception, Robotic Manipulation, IoT, Python and Google App Scripting.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Robotics', 'ROS', 'Automation'], color: 'purple' },
    { id: 11, title: 'Friend in Need', description: 'It is a very innovative mobile application designed to curb domestic violence using appropriate mechanisms. It is also helpful for people facing mental health issues.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Mental Health', 'Safety', 'Mobile App'], color: 'orange' },
    { id: 12, title: 'Automatic Hand Sanitization', description: 'Hand sanitization Module that senses the hand and dispenses sanitizer automatically while also reading the users temperature and checking if it is a safe value.', image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Automation', 'Health Safety', 'IoT'], color: 'green' },
    { id: 13, title: 'Speed Check', description: 'As the name suggests, this device helps in controlling the speed limits of two-wheelers in order to reduce accidents. It also helps to keep your bike safe.', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Vehicle Safety', 'Speed Control', 'Anti-theft'], color: 'blue' },
    { id: 14, title: 'YOunion', description: 'Done by the First-Year students of our club, YOUnion was devised as a platform for professional connections catering to students and budding enthusiasts.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', technologies: ['Professional Network', 'Student Platform', 'Collaboration'], color: 'purple' }
];

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x240/232526/FFFFFF?text=Image+Not+Found';

// --- Animated Bubbles Background Component (Pure CSS) ---
const BubblesBackground = React.memo(() => (
    <div className="bubbles-background" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="bubble"></div>
        ))}
    </div>
));

// --- Project Card Component using Framer Motion ---
const ProjectCard = ({ project, index }) => {
    const isLeft = index % 2 === 0;

    const cardVariants = {
        hidden: { opacity: 0, x: isLeft ? -100 : 100, scale: 0.95 },
        visible: { 
            opacity: 1, 
            x: 0,
            scale: 1,
            transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
        }
    };

    return (
        <motion.div
            className={`timeline-item ${isLeft ? 'left' : 'right'}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="project-card">
                <div className="project-image">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        onError={(e) => { e.target.src = PLACEHOLDER_IMAGE; }}
                    />
                </div>
                <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Projects Component ---
const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <BubblesBackground />
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Projects
        </motion.h2>
        <div className="timeline">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
