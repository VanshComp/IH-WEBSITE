import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { throttle } from 'lodash';

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

// --- Background Component ---
const LightModeBackground = React.memo(() => (
    <div className="light-mode-background-container" aria-hidden="true">
        <div className="gradient-mesh"></div>
        <div className="shapes-container">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
            <div className="shape shape-7"></div>
            <div className="shape shape-8"></div>
            <div className="shape shape-9"></div>
        </div>
        <div className="grid-overlay"></div>
    </div>
));


// --- Presentation Components ---
const ProjectItem = React.memo(({ project, index }) => {
  const isLeft = project.id % 2 !== 0;
  const titleId = `project-title-${project.id}`;
  const descriptionId = `project-description-${project.id}`;

  return (
    <div
      className={`timeline-item ${isLeft ? 'left' : 'right'}`}
      role="listitem"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      style={{ '--i': index }}
    >
      <div className="project-card-container">
        <div className={`project-card ${project.color}`}>
          <div className="project-image">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width="400"
              height="240"
              onError={(e) => { e.target.src = PLACEHOLDER_IMAGE; }}
            />
          </div>
          <div className="project-info">
            <h3 id={titleId} className="project-title">{project.title}</h3>
            <p id={descriptionId} className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// --- Main Component ---
const Projects = () => {
  const sectionRef = useRef(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  const projects = useMemo(() => projectData, []);

  // Animate timeline items on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const timelineItems = sectionRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Handle background animations based on scroll position
  const handleScroll = useCallback(throttle(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const scrollY = window.scrollY;
    // Calculate a ratio from 0 to 1 based on how far the section has been scrolled
    const ratio = Math.max(0, Math.min(1, (scrollY - section.offsetTop + window.innerHeight * 0.5) / rect.height));
    setScrollRatio(ratio);
  }, 16), []); // Throttle to run every frame

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel(); // Clean up lodash throttle
    };
  }, [handleScroll]);

  return (
    <section 
      id="projects" 
      className="projects" 
      ref={sectionRef} 
      aria-labelledby="projects-heading"
      style={{
        '--scroll-ratio': scrollRatio,
      }}
    >
      <style>{`
        :root {
          --app-blue: #009cf7;
          --app-yellow: #EEC759;
          --app-pink: #ff8a74;
          --app-white: #ffffff;
          --bg-color: #f7f8fc;
          --text-dark: #2c3e50;
          --text-muted: #7f8c8d;
          --border-light: #e0e4e8;
          --gradient-blue: linear-gradient(45deg, #009cf7, #4facfe);
        }

        .projects {
          background-color: var(--bg-color);
          padding: 4rem 1rem;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          animation: sectionFadeIn 1s ease-out forwards;
        }

        @keyframes sectionFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .light-mode-background-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
            /* Scroll animation applied here */
            transform: translateY(calc(var(--scroll-ratio) * -100px));
        }

        .gradient-mesh {
            width: 100%;
            height: 100%;
            position: absolute;
            background: 
                radial-gradient(ellipse at 10% 90%, var(--app-blue), transparent 50%),
                radial-gradient(ellipse at 90% 10%, var(--app-yellow), transparent 50%),
                radial-gradient(ellipse at 50% 50%, var(--app-pink), transparent 40%);
            animation: gradient-flow 25s ease-in-out infinite;
            opacity: 0.6;
            mix-blend-mode: multiply;
             /* Deeper parallax for this layer */
            transform: translateY(calc(var(--scroll-ratio) * -50px));
        }

        @keyframes gradient-flow {
            50% { transform: translate(10px, 20px) rotate(5deg) scale(1.1); }
        }

        .shapes-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            /* Rotate the whole container on scroll */
            transform: rotate(calc(var(--scroll-ratio) * 20deg));
        }

        .shape {
            position: absolute;
            border-radius: 30%;
            background: var(--app-blue);
            opacity: 0.7;
            mix-blend-mode: multiply;
            animation: drift 20s ease-in-out infinite alternate;
            will-change: transform;
        }
        .shape-1 { width: 30vw; height: 30vw; top: -10vw; left: -5vw; animation-duration: 22s; }
        .shape-2 { width: 25vw; height: 25vw; bottom: -5vw; right: -10vw; background: var(--app-yellow); animation-duration: 28s; }
        .shape-3 { width: 20vw; height: 20vw; top: 40%; left: 25%; animation-duration: 18s; }
        .shape-4 { width: 15vw; height: 15vw; top: 10%; right: 20%; background: var(--app-pink); animation-duration: 24s; }
        .shape-5 { width: 18vw; height: 18vw; bottom: 25%; left: 10%; background: var(--app-blue); animation-duration: 20s; }
        .shape-6 { width: 12vw; height: 12vw; top: 30%; right: 30%; background: var(--app-yellow); animation-duration: 26s; }
        .shape-7 { width: 10vw; height: 10vw; bottom: 20%; left: 15%; background: var(--app-pink); animation-duration: 30s; }
        .shape-8 { width: 8vw; height: 8vw; top: 20%; left: 40%; background: var(--app-blue); animation-duration: 32s; }
        .shape-9 { width: 6vw; height: 6vw; bottom: 15%; right: 25%; background: var(--app-yellow); animation-duration: 34s; }
        .shape:hover {
            animation: drift 10s ease-in-out infinite alternate;
            transform: translateY(-10px) translateX(10px) rotate(-5deg);
        }


        @keyframes drift {
            to { transform: translateY(20px) translateX(-20px) rotate(15deg); }
        }

        .grid-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
            background-size: 60px 60px;
            /* Fastest parallax for foreground feel */
            transform: translateY(calc(var(--scroll-ratio) * 50px));
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .section-title {
          text-align: center;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 4rem;
        }

        .section-title::after {
          content: '';
          display: block;
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0px;
          height: 4px;
          background: var(--gradient-blue);
          border-radius: 2px;
          animation: scale-in 1.5s 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        
        @keyframes scale-in { to { width: 80px; } }

        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 0%;
          background: var(--border-light);
          border-radius: 2px;
          animation: drawLine 2s ease-out 1s forwards;
        }

        @keyframes drawLine { to { height: 100%; } }

        .timeline-item {
          position: relative;
          margin: 6rem 0;
          width: calc(50% - 25px);
          opacity: 0;
          will-change: transform, opacity;
          scroll-margin-top: 120px;
        }

        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-100px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(100px); } to { opacity: 1; transform: translateX(0); } }
        
        .timeline-item.is-visible.left { animation: fadeInLeft 0.8s ease-out forwards; animation-delay: calc(var(--i) * 100ms); }
        .timeline-item.is-visible.right { animation: fadeInRight 0.8s ease-out forwards; animation-delay: calc(var(--i) * 100ms); }
        
        .timeline-item.left { left: 0; }
        .timeline-item.right { left: 51%; transform: translateX(25px); }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          top: 60px;
          width: 20px;
          height: 20px;
          background: var(--gradient-blue);
          border: 3px solid var(--app-white);
          border-radius: 50%;
          z-index: 10;
          animation: floatingNode 4s ease-in-out infinite;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          top: 65px;
          width: 10px;
          height: 10px;
          background: var(--bg-color);
          border: 3px solid var(--app-blue);
          border-radius: 50%;
          z-index: 11;
          animation: innerPulse 2s ease-in-out infinite;
        }

        @keyframes floatingNode { 50% { transform: scale(1.1) rotate(180deg); } }
        @keyframes innerPulse { 50% { transform: scale(1.3); opacity: 0.7; } }
        
        .timeline-item.left::before { left: 100%; transform: translateX(15px); }
        .timeline-item.right::before { right: 100%; transform: translateX(-15px); }
        .timeline-item.left::after { left: 100%; transform: translateX(20px); }
        .timeline-item.right::after { right: 100%; transform: translateX(-20px); }
        
        .project-card {
          background: var(--app-white);
          border: 1px solid var(--border-light);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        
        .project-card.blue { border-top: 4px solid var(--app-blue); }
        .project-card.purple, .project-card.orange { border-top: 4px solid var(--app-yellow); }
        .project-card.green { border-top: 4px solid var(--app-blue); }
        
        .project-card:hover { transform: translateY(-10px); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12); }
        
        .project-image img { width: 100%; height: 200px; object-fit: cover; transition: transform 0.5s ease; }
        .project-card:hover .project-image img { transform: scale(1.1); }
        
        .project-info { padding: 1.5rem; }
        .project-title { font-size: 1.5rem; font-weight: 700; color: var(--text-dark); margin: 0 0 1rem 0; }
        .project-description { font-size: 1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem; }
        
        .project-technologies { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tech-tag {
          background-color: #eef1f4;
          color: var(--text-muted);
          padding: 0.4rem 0.8rem;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .tech-tag:hover { background-color: var(--app-blue); color: var(--app-white); transform: translateY(-2px); box-shadow: 0 8px 15px rgba(0, 156, 247, 0.3); }
        
        @media (max-width: 768px) {
          .timeline::before { left: 50%; transform: translateX(-50%); }
          .timeline-item { width: 100%; left: 0 !important; margin: 4rem 0; }
          .timeline-item.is-visible { animation: fadeInBottom 1s ease-out forwards; animation-delay: calc(var(--i) * 100ms); }
          .timeline-item::before, .timeline-item::after { left: 50%; transform: translateX(-50%); }
          @keyframes fadeInBottom { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        }
      `}</style>
      
      <LightModeBackground />
      
      <div className="container">
        <h2 id="projects-heading" className="section-title">Our Projects</h2>
        <div className="timeline" role="list">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;