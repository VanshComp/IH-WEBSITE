import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, Search, X, ChevronDown, Frown, Sparkles } from 'lucide-react';
import '../styles/Patents.css';

// --- Data (Can be moved to a separate file) ---
const patentData = [
    { id: 1, title: 'Drowsy Driver', description: 'A drowsiness detection system made using a combination of parameters for increased accuracy. This innovative solution uses computer vision and machine learning to detect driver fatigue in real-time.', image: '/drowsy.png', category: 'AI', status: 'Granted', date: '2024-02-15', link: '#' },
    { id: 2, title: 'Co - Band', description: 'A device to track the real-time and over-time academic, curricular and health-based information alongside contact tracing. This wearable technology provides comprehensive monitoring for educational institutions.', image: '/coband.png', category: 'IoT', status: 'Granted', date: '2023-11-20', link: '#' },
    { id: 3, title: 'Paw\'llar', description: 'A virtual assistant to cater to your dog\'s needs by detecting its mood and needs through its vitals tracked by a physical collar. Revolutionary pet care technology that understands your furry friend better than ever.', image: '/paw.png', category: 'AI', status: 'Pending', date: '2024-06-01', link: '#' },
    { id: 4, title: 'Solder - Aid', description: 'An automated soldering stand that assists the user in high fidelity soldering. This precision tool revolutionizes electronic manufacturing with AI-guided soldering assistance.', image: '/solder.png', category: 'Hardware', status: 'Granted', date: '2023-05-10', link: '#' },
    { id: 5, title: 'Dynamic Diffuser', description: 'Increasing the aerodynamic efficiency of a car by using a dynamic spoiler and diffuser which help provide the required down force. Smart automotive technology that adapts to driving conditions.', image: '/diffuser.png', category: 'Hardware', status: 'Granted', date: '2022-12-22', link: '#' },
    { id: 6, title: 'Cardio Cradle', description: 'Aiding the cardiovascular system using a non-invasive solution based on VAD\'s for individuals who cannot carry out the process of pumping blood without assistance from an external source. Life-saving medical technology.', image: '/cardio.png', category: 'BioTech', status: 'Pending', date: '2024-07-30', link: '#' },
];

const patentCategories = ['All', 'AI', 'IoT', 'Hardware', 'BioTech'];
const PATENTS_PER_PAGE = 6;

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

// --- Custom Hook for Enhanced Logic ---
const usePatents = (initialPatents) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [sortBy, setSortBy] = useState('date_desc');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const processedPatents = useMemo(() => {
        let patents = initialPatents;
        if (activeFilter !== 'All') {
            patents = patents.filter(p => p.category === activeFilter);
        }
        if (debouncedSearch) {
            patents = patents.filter(p =>
                p.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                p.description.toLowerCase().includes(debouncedSearch.toLowerCase())
            );
        }
        patents.sort((a, b) => {
            switch (sortBy) {
                case 'date_asc': return new Date(a.date) - new Date(b.date);
                case 'title_asc': return a.title.localeCompare(b.title);
                case 'title_desc': return b.title.localeCompare(a.title);
                case 'date_desc':
                default:
                    return new Date(b.date) - new Date(a.date);
            }
        });
        return patents;
    }, [activeFilter, debouncedSearch, sortBy, initialPatents]);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeFilter, debouncedSearch, sortBy]);

    const totalPages = Math.ceil(processedPatents.length / PATENTS_PER_PAGE);
    const paginatedPatents = processedPatents.slice(
        (currentPage - 1) * PATENTS_PER_PAGE,
        currentPage * PATENTS_PER_PAGE
    );

    return {
        paginatedPatents, searchTerm, setSearchTerm, activeFilter, setActiveFilter,
        sortBy, setSortBy, currentPage, setCurrentPage, totalPages,
        totalResults: processedPatents.length,
    };
};

// --- Sub-Components ---
const PatentSkeleton = ({ index }) => (
    <motion.div
        className="patent-card-skeleton"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
    >
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-description"></div>
            <div className="skeleton-description" style={{ width: '80%' }}></div>
            <div className="skeleton-description" style={{ width: '60%' }}></div>
        </div>
    </motion.div>
);

const PatentCard = React.memo(({ patent, onCardClick, index }) => (
    <motion.div
        className="patent-card"
        onClick={() => onCardClick(patent)}
        layout
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.95 }}
        transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: [0.4, 0, 0.2, 1]
        }}
        whileHover={{ 
            y: -12, 
            scale: 1.02,
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
        }}
        whileTap={{ scale: 0.98 }}
    >
        <div className="patent-image">
            <img src={patent.image} alt={patent.title} loading="lazy" />
        </div>
        <div className="patent-content">
            <h3 className="patent-title">{patent.title}</h3>
            <p className="patent-description">{patent.description}</p>
        </div>
    </motion.div>
));

const PatentModal = ({ patent, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const focusableElements = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements?.[0];
        const lastElement = focusableElements?.[focusableElements.length - 1];
        
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key !== 'Tab') return;
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement?.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement?.focus();
                    e.preventDefault();
                }
            }
        };
        
        firstElement?.focus();
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!patent) return null;

    return (
        <motion.div 
            className="modal-backdrop" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
        >
            <motion.div 
                ref={modalRef} 
                className="modal-content" 
                role="dialog" 
                aria-modal="true" 
                aria-labelledby="modal-title" 
                tabIndex={-1}
                initial={{ y: 100, scale: 0.9, opacity: 0 }} 
                animate={{ y: 0, scale: 1, opacity: 1 }} 
                exit={{ y: 100, scale: 0.9, opacity: 0 }} 
                transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 30,
                    duration: 0.4
                }} 
                onClick={(e) => e.stopPropagation()}
            >
                <header className="modal-header">
                    <img src={patent.image} alt={patent.title} className="modal-image" />
                    <button 
                        className="modal-close-btn" 
                        onClick={onClose} 
                        aria-label="Close patent details"
                    >
                        <X size={20} />
                    </button>
                </header>
                <div className="modal-body">
                    <h2 id="modal-title" className="modal-title">{patent.title}</h2>
                    <div className="modal-meta">
                        <div className="meta-item">
                            <Calendar size={18} />
                            <p>Filed: {new Date(patent.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}</p>
                        </div>
                        <div className="meta-item">
                            <Award size={18} />
                            <p>Status: <span className={`status ${patent.status.toLowerCase()}`}>{patent.status}</span></p>
                        </div>
                        <div className="meta-item">
                            <Sparkles size={18} />
                            <p>Category: {patent.category}</p>
                        </div>
                    </div>
                    <p className="modal-description">{patent.description}</p>
                </div>
                <footer className="modal-footer">
                    <a 
                        href={patent.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="modal-link"
                    >
                        View Official Document
                    </a>
                </footer>
            </motion.div>
        </motion.div>
    );
};

const NoResults = () => (
    <motion.div 
        className="no-results-container" 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
        <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
        >
            <Frown size={64} className="no-results-icon" />
        </motion.div>
        <h3 className="no-results-title">No Patents Found</h3>
        <p className="no-results-text">Try adjusting your search or filter settings to discover more innovations.</p>
    </motion.div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;
    
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    
    return (
        <motion.nav 
            className="pagination-container" 
            aria-label="Patents pagination"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
        >
            {pageNumbers.map((number, index) => (
                <motion.button
                    key={number}
                    className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                    onClick={() => onPageChange(number)}
                    aria-current={currentPage === number ? 'page' : undefined}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {number}
                </motion.button>
            ))}
        </motion.nav>
    );
};

// --- Main Component ---
const Patents = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allPatents, setAllPatents] = useState([]);
    const {
        paginatedPatents, searchTerm, setSearchTerm, activeFilter, setActiveFilter,
        sortBy, setSortBy, currentPage, setCurrentPage, totalPages, totalResults
    } = usePatents(allPatents);
    const [selectedPatent, setSelectedPatent] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setAllPatents(patentData);
            setIsLoading(false);
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.body.style.overflow = selectedPatent ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPatent]);

    useEffect(() => {
        if (!isLoading) {
            setStatusMessage(`Showing ${paginatedPatents.length} of ${totalResults} patents.`);
        }
    }, [paginatedPatents.length, totalResults, isLoading]);

    return (
        <section id="patents" className="patents-section">
            
        <AnimatedBackground />
            <div className="patents-container">
                <motion.header 
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    <h2 className="section-title">Our Innovations</h2>
                    <p className="section-subtitle">
                        Discover groundbreaking patents that are shaping the future, from AI and IoT to hardware and biotechnology.
                    </p>
                </motion.header>

                <motion.div 
                    className="controls-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="filter-controls">
                        {patentCategories.map((category, index) => (
                            <motion.button 
                                key={category} 
                                className={`filter-btn ${activeFilter === category ? 'active' : ''}`} 
                                onClick={() => setActiveFilter(category)}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                    
                    <div className="search-sort-wrapper">
                        <div className="search-bar">
                            <Search size={20} className="search-icon" />
                            <input 
                                type="text" 
                                placeholder="Search patents..." 
                                className="search-input" 
                                value={searchTerm} 
                                onChange={(e) => setSearchTerm(e.target.value)} 
                            />
                            {searchTerm && (
                                <motion.button 
                                    className="clear-search-btn" 
                                    onClick={() => setSearchTerm('')} 
                                    aria-label="Clear search"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={18} />
                                </motion.button>
                            )}
                        </div>
                        
                        <div className="sort-control">
                            <select 
                                id="sort-by" 
                                className="sort-select" 
                                value={sortBy} 
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="date_desc">Newest First</option>
                                <option value="date_asc">Oldest First</option>
                                <option value="title_asc">Title (A-Z)</option>
                                <option value="title_desc">Title (Z-A)</option>
                            </select>
                            <ChevronDown size={18} className="sort-icon" />
                        </div>
                    </div>
                </motion.div>

                <div className="sr-only" aria-live="polite" role="status">
                    {statusMessage}
                </div>

                <motion.div 
                    className="patents-grid" 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            Array.from({ length: PATENTS_PER_PAGE }).map((_, index) => (
                                <PatentSkeleton key={`skeleton-${index}`} index={index} />
                            ))
                        ) : paginatedPatents.length > 0 ? (
                            paginatedPatents.map((patent, index) => (
                                <PatentCard 
                                    key={patent.id} 
                                    patent={patent} 
                                    index={index}
                                    onCardClick={setSelectedPatent} 
                                />
                            ))
                        ) : (
                            <NoResults />
                        )}
                    </AnimatePresence>
                </motion.div>

                {!isLoading && totalPages > 1 && (
                    <Pagination 
                        currentPage={currentPage} 
                        totalPages={totalPages} 
                        onPageChange={setCurrentPage} 
                    />
                )}
            </div>

            <AnimatePresence>
                {selectedPatent && (
                    <PatentModal 
                        patent={selectedPatent} 
                        onClose={() => setSelectedPatent(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Patents;