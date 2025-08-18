import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, Search, X, ChevronDown, Frown } from 'lucide-react';
import './Patents.css';

// --- Data (Can be moved to a separate file) ---
const patentData = [
    { id: 1, title: 'Drowsy Driver', description: 'A drowsiness detection system made using a combination of parameters for increased accuracy.', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400', category: 'AI', status: 'Granted', date: '2024-02-15', link: '#' },
    { id: 2, title: 'Co - Band', description: 'A device to track the real-time and over-time academic, curricular and health-based information alongside contact tracing.', image: 'https://images.pexels.com/photos/9875421/pexels-photo-9875421.jpeg?auto=compress&cs=tinysrgb&w=600&h=400', category: 'IoT', status: 'Granted', date: '2023-11-20', link: '#' },
    { id: 3, title: 'Paw’llar', description: 'A virtual assistant to cater to your dog’s needs by detecting its mood and needs through its vitals tracked by a physical collar. A very long description to test the scrolling capability of the modal. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://images.pexels.com/photos/7089016/pexels-photo-7089016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400', category: 'AI', status: 'Pending', date: '2024-06-01', link: '#' },
    { id: 4, title: 'Solder - Aid', description: 'An automated soldering stand that assists the user in high fidelity soldering.', image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600&h=400', category: 'Hardware', status: 'Granted', date: '2023-05-10', link: '#' },
    { id: 5, title: 'Dynamic Diffuser', description: 'Increasing the aerodynamic efficiency of a car by using a dynamic spoiler and diffuser which help provide the required down force.', image: 'https://images.pexels.com/photos/3846206/pexels-photo-3846206.jpeg?auto=compress&cs=tinysrgb&w=600&h=400', category: 'Hardware', status: 'Granted', date: '2022-12-22', link: '#' },
    { id: 6, title: 'Biocompatible Implant Material', description: 'Next-generation biomaterial for improved implant integration and longevity.', image: 'https://images.pexels.com/photos/8434641/pexels-photo-8434641.jpeg?auto=compress&cs=tinysrgb&w=600&h=400', category: 'BioTech', status: 'Pending', date: '2024-07-30', link: '#' },
    { id: 7, title: 'Quantum Encryption Algorithm', description: 'A novel algorithm for securing data transmission using principles of quantum mechanics.', image: 'https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400', category: 'AI', status: 'Granted', date: '2024-08-01', link: '#' },
];
const patentCategories = ['All', 'AI', 'IoT', 'Hardware', 'BioTech'];
const PATENTS_PER_PAGE = 6;

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
const PatentSkeleton = () => (
    <div className="patent-card-skeleton">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-description"></div>
            <div className="skeleton-description" style={{ width: '80%' }}></div>
        </div>
    </div>
);

const PatentCard = React.memo(({ patent, onCardClick }) => (
    <motion.div
        className="patent-card"
        onClick={() => onCardClick(patent)}
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={{ y: -8 }}
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
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
            <motion.div ref={modalRef} className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex={-1} initial={{ y: 50, scale: 0.9 }} animate={{ y: 0, scale: 1 }} exit={{ y: 50, scale: 0.9 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} onClick={(e) => e.stopPropagation()}>
                <header className="modal-header">
                    <img src={patent.image} alt={patent.title} className="modal-image" />
                    <button className="modal-close-btn" onClick={onClose} aria-label="Close patent details"><X size={20} /></button>
                </header>
                <div className="modal-body">
                    <h2 id="modal-title" className="modal-title">{patent.title}</h2>
                    <div className="modal-meta">
                        <div className="meta-item"><Calendar size={16} /><p>Filed: {patent.date}</p></div>
                        <div className="meta-item"><Award size={16} /><p>Status: <span className={`status ${patent.status.toLowerCase()}`}>{patent.status}</span></p></div>
                    </div>
                    <p className="modal-description">{patent.description}</p>
                </div>
                <footer className="modal-footer">
                    <a href={patent.link} target="_blank" rel="noopener noreferrer" className="modal-link">View Official Document</a>
                </footer>
            </motion.div>
        </motion.div>
    );
};

const NoResults = () => (
    <motion.div className="no-results-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
        <Frown size={48} className="no-results-icon" />
        <h3 className="no-results-title">No Patents Found</h3>
        <p className="no-results-text">Try adjusting your search or filter settings.</p>
    </motion.div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
        <nav className="pagination-container" aria-label="Patents pagination">
            {pageNumbers.map(number => (
                <button
                    key={number}
                    className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                    onClick={() => onPageChange(number)}
                    aria-current={currentPage === number ? 'page' : undefined}
                >
                    {number}
                </button>
            ))}
        </nav>
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
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.body.style.overflow = selectedPatent ? 'hidden' : 'unset';
    }, [selectedPatent]);

    useEffect(() => {
        if (!isLoading) {
            setStatusMessage(`Showing ${paginatedPatents.length} of ${totalResults} patents.`);
        }
    }, [paginatedPatents.length, totalResults, isLoading]);

    return (
        <section id="patents" className="patents-section">
            <div className="patents-container">
                <header className="section-header">
                    <h2 className="section-title">Our Innovations</h2>
                    <p className="section-subtitle">Discover groundbreaking patents that are shaping the future, from AI and IoT to hardware and biotechnology.</p>
                </header>
                <div className="controls-wrapper">
                    <div className="filter-controls">
                        {patentCategories.map(category => (
                            <motion.button key={category} className={`filter-btn ${activeFilter === category ? 'active' : ''}`} onClick={() => setActiveFilter(category)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{category}</motion.button>
                        ))}
                    </div>
                    <div className="search-sort-wrapper">
                        <div className="search-bar">
                            <span className="search-icon"><Search size={18} /></span>
                            <input type="text" placeholder="Search patents..." className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            {searchTerm && (
                                <button className="clear-search-btn" onClick={() => setSearchTerm('')} aria-label="Clear search">
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                        <div className="sort-control">
                            <select id="sort-by" className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="date_desc">Newest First</option>
                                <option value="date_asc">Oldest First</option>
                                <option value="title_asc">Title (A-Z)</option>
                                <option value="title_desc">Title (Z-A)</option>
                            </select>
                            <ChevronDown size={16} className="sort-icon" />
                        </div>
                    </div>
                </div>
                <div className="sr-only" aria-live="polite" role="status">
                    {statusMessage}
                </div>
                <motion.div className="patents-grid" layout>
                    <AnimatePresence>
                        {isLoading ? (
                            Array.from({ length: PATENTS_PER_PAGE }).map((_, index) => <PatentSkeleton key={index} />)
                        ) : paginatedPatents.length > 0 ? (
                            paginatedPatents.map(patent => <PatentCard key={patent.id} patent={patent} onCardClick={setSelectedPatent} />)
                        ) : (
                            <NoResults />
                        )}
                    </AnimatePresence>
                </motion.div>
                {!isLoading && totalPages > 1 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                )}
            </div>
            <AnimatePresence>
                {selectedPatent && <PatentModal patent={selectedPatent} onClose={() => setSelectedPatent(null)} />}
            </AnimatePresence>
        </section>
    );
};

export default Patents;
