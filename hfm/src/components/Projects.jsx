import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { projectData, projectCategories } from './data';
import '../styles/Projects.css';

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/600x400/232526/FFFFFF?text=Image+Not+Found';
const PROJECTS_PER_PAGE = 6;
const ANIMATION_CONFIG = {
  modal: { type: 'spring', stiffness: 300, damping: 30 },
  header: { duration: 0.8, ease: "easeOut" },
  card: { type: 'spring', stiffness: 260, damping: 20 },
};

// --- Custom Hook for Logic ---
const useProjectFilters = (initialProjects) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredProjects = useMemo(() => {
    let projects = initialProjects;
    if (activeFilter !== 'All') {
      projects = projects.filter(p => p.category === activeFilter);
    }
    if (debouncedSearch) {
      projects = projects.filter(p =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        p.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        p.technologies.some(tech => tech.toLowerCase().includes(debouncedSearch.toLowerCase()))
      );
    }
    return projects;
  }, [activeFilter, debouncedSearch, initialProjects]);

  const projectsToShow = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => setVisibleCount(filteredProjects.length);
  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setVisibleCount(PROJECTS_PER_PAGE);
  };

  return { projectsToShow, hasMore, handleLoadMore, handleFilterChange, setSearchTerm, activeFilter };
};

// --- Enhanced Animated Background Component ---
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

const ProjectSkeleton = React.memo(({ isLeft }) => (
  <div className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
    <div className="project-card-skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-description"></div>
      </div>
    </div>
  </div>
));

const ProjectCard = React.memo(({ project, isLeft, onCardClick }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: cardRef, 
    offset: ["start end", "end start"] 
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={cardRef} 
      className={`timeline-item ${isLeft ? 'left' : 'right'}`} 
      style={{ y, opacity }}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      layout
      onClick={() => onCardClick(project)}
    >
      <div className="project-card" onMouseMove={handleMouseMove}>
        <div className="project-image-wrapper">
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-image" 
            loading="lazy" 
            onError={(e) => { e.target.src = PLACEHOLDER_IMAGE; }} 
          />
        </div>
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-technologies">
            {project.technologies.map(tech => (
              <motion.span 
                key={tech} 
                className="tech-tag"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKeyDown);
    modalRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div 
      className="modal-backdrop" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      onClick={onClose}
    >
      <motion.div 
        ref={modalRef} 
        className="modal-content" 
        tabIndex={-1} 
        initial={{ y: 100, scale: 0.8, opacity: 0 }} 
        animate={{ y: 0, scale: 1, opacity: 1 }} 
        exit={{ y: 100, scale: 0.8, opacity: 0 }} 
        transition={ANIMATION_CONFIG.modal} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close project details"
        >
          ×
        </button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <div className="project-info">
          <h2 className="project-title modal-title">{project.title}</h2>
          <div className="project-technologies modal-tech-container">
            {project.technologies.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
          <p className="project-description modal-description">{project.description}</p>
          <div className="modal-links">
            {project.links?.demo && (
              <motion.a 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-link-btn demo"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Live Demo
              </motion.a>
            )}
            {project.links?.github && (
              <motion.a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-link-btn github"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📱 Source Code
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allProjects, setAllProjects] = useState([]);
  const { 
    projectsToShow, 
    hasMore, 
    handleLoadMore, 
    handleFilterChange, 
    setSearchTerm, 
    activeFilter 
  } = useProjectFilters(allProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setAllProjects(projectData);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const controlsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <AnimatedBackground />
      <div className="projects-container">
        <motion.header 
          className="section-header" 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="section-title">My Projects</h2>
        </motion.header>

        <motion.div 
          className="controls-wrapper"
          variants={controlsVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="filter-controls">
            {projectCategories.map(category => (
              <motion.button 
                key={category} 
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`} 
                onClick={() => handleFilterChange(category)} 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }} 
                aria-label={`Filter projects by ${category}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="search-input" 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </motion.div>

        <motion.div className="timeline" layout>
          <AnimatePresence mode="wait">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <ProjectSkeleton key={index} isLeft={index % 2 === 0} />
              ))
            ) : (
              projectsToShow.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  isLeft={index % 2 === 0} 
                  onCardClick={setSelectedProject} 
                />
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {hasMore && !isLoading && (
          <div className="load-more-container">
            <motion.button 
              className="filter-btn active load-more-btn" 
              onClick={handleLoadMore} 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
            </motion.button>
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;