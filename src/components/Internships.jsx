import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Search, Bookmark, Calendar, Users, ArrowRight, X, Briefcase, 
    ChevronDown, Building, MapPin, CheckCircle, Clock, FileText 
} from 'lucide-react';
import { internshipData, internshipCategories } from './internshipdata.js';
import { iconMap } from './iconMap';
import './Internships.css';

// --- Helper Functions ---
const getPriority = (spots) => {
    if (spots === 1) return { label: 'Urgent', className: 'high' };
    if (spots >= 2 && spots <= 3) return { label: 'High', className: 'medium' };
    return { label: 'Normal', className: 'low' };
};

const getSpotsIndicatorClass = (spots) => {
    if (spots >= 4) return 'var(--success-green)';
    if (spots >= 2) return 'var(--warning-orange)';
    if (spots === 1) return 'var(--danger-red)';
    return 'var(--border-light)';
};


// --- Enhanced Application Form Component ---
const EnhancedApplicationForm = ({ internship, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', portfolio: '', coverLetter: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateStep1 = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'A valid email is required.';
        if (!formData.mobile || !/^\d{10,}$/.test(formData.mobile)) newErrors.mobile = 'A valid 10-digit mobile number is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) {
            setStep(2);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Final validation can be added here if step 2 has required fields
        setIsSubmitted(true);
    };
    
    if (isSubmitted) {
        return (
            <div className="success-message">
                <CheckCircle size={60} />
                <h3>Application Sent!</h3>
                <p>You've successfully applied for the <strong>{internship.title}</strong> role.</p>
                <div className="success-note">We will review your application and get back to you soon.</div>
            </div>
        );
    }

    return (
        <form className="enhanced-application-form" onSubmit={handleSubmit} noValidate>
            <div className="form-header">
                <div className="internship-info">
                    <span className="internship-badge"><Briefcase size={16} />{internship.department}</span>
                    <h3>{internship.title}</h3>
                    <p>Complete the steps below to apply.</p>
                </div>
                <div className="form-progress">
                    <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
                    <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
                </div>
            </div>

            {step === 1 && (
                <motion.div className="form-step" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h4>Personal Information</h4>
                    <div className="form-group">
                        <label>Full Name <span className="required">*</span></label>
                        <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={errors.name ? 'error' : ''} />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label>Email Address <span className="required">*</span></label>
                        <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={errors.email ? 'error' : ''} />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Mobile Number <span className="required">*</span></label>
                        <input type="tel" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} className={errors.mobile ? 'error' : ''} />
                        {errors.mobile && <span className="error-message">{errors.mobile}</span>}
                    </div>
                    <button type="button" className="btn-next" onClick={handleNext}>Next Step <ArrowRight size={18} /></button>
                </motion.div>
            )}

            {step === 2 && (
                <motion.div className="form-step" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h4>Professional Details</h4>
                    <div className="form-group">
                        <label>Portfolio/Website URL</label>
                        <input type="url" value={formData.portfolio} onChange={e => setFormData({...formData, portfolio: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label>Cover Letter</label>
                        <textarea value={formData.coverLetter} onChange={e => setFormData({...formData, coverLetter: e.target.value})} placeholder="Tell us why you're a great fit..."></textarea>
                    </div>
                    <div className="form-actions">
                        <button type="button" className="btn-back" onClick={() => setStep(1)}>Go Back</button>
                        <button type="submit" className="btn-submit">Submit Application</button>
                    </div>
                </motion.div>
            )}
        </form>
    );
};


// --- Internship Card Component ---
const InternshipCard = ({ internship, onApply, onSave, isSaved }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const Icon = iconMap[internship.icon] || Briefcase;
    const priority = getPriority(internship.spots);
    const spotsIndicatorColor = getSpotsIndicatorClass(internship.spots);

    const handleApplyClick = (e) => {
        e.stopPropagation();
        onApply(internship);
    };

    const handleSaveClick = (e) => {
        e.stopPropagation();
        onSave(internship.id);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={`internship-card ${priority.className}-priority`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="card-header">
                <div className="internship-icon"><Icon size={32} /></div>
                <div className="card-title-section">
                    <div className="title-row">
                        <h3 className="internship-title">{internship.title}</h3>
                        <button onClick={handleSaveClick} className={`save-btn ${isSaved ? 'saved' : ''}`} aria-label="Save internship">
                            <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'} />
                        </button>
                    </div>
                    <div className="internship-details">
                        <span className="department"><Building size={14} /> {internship.department}</span>
                        <span className="duration"><Clock size={14} /> {internship.duration}</span>
                        <span className={`priority-badge ${priority.className}`}>{priority.label}</span>
                    </div>
                </div>
            </div>

            <p className="internship-description">{internship.description}</p>
            
            <AnimatePresence>
                {isExpanded && (
                    <motion.div 
                        className="expanded-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="additional-info">
                           <div className="info-item"><MapPin size={16} /> Location: Remote/Hybrid</div>
                           <div className="info-item"><FileText size={16} /> Type: Paid Internship</div>
                        </div>
                        <div className="requirements">
                            <h5>Key Requirements:</h5>
                            <ul>
                                {internship.skills.slice(0, 3).map(skill => (
                                    <li key={skill}>Proficiency in {skill}</li>
                                ))}
                                <li>Strong problem-solving skills</li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="skills-section">
                <h4>Top Skills</h4>
                <div className="skills-list">
                    {internship.skills.slice(0, 4).map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}
                    {internship.skills.length > 4 && <span className="skill-more">+{internship.skills.length - 4} more</span>}
                </div>
            </div>
            
            <div className="card-footer">
                <div className="spots-info">
                    <span className="spots-indicator" style={{ background: spotsIndicatorColor }}></span>
                    <span className="spots-text">{internship.spots} spot{internship.spots !== 1 ? 's' : ''} left</span>
                </div>
                <button className="apply-btn" onClick={handleApplyClick} disabled={internship.spots === 0}>
                    {internship.spots === 0 ? 'Filled' : 'Apply Now'}
                    {internship.spots > 0 && <ArrowRight size={16} />}
                </button>
            </div>
        </motion.div>
    );
};


// --- Main Internships Component ---
const Internships = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('spots-desc');
    const [saved, setSaved] = useState([]);
    const [modal, setModal] = useState({ isOpen: false, internship: null });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSave = (id) => {
        setSaved(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const filteredAndSortedInternships = useMemo(() => {
        let result = internshipData;
        
        if (activeCategory !== 'All') {
            result = result.filter(i => i.department === activeCategory);
        }

        if (searchTerm) {
            result = result.filter(i => 
                i.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                i.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        result.sort((a, b) => {
            if (sortOrder === 'spots-desc') return b.spots - a.spots;
            if (sortOrder === 'spots-asc') return a.spots - b.spots;
            if (sortOrder === 'title-asc') return a.title.localeCompare(b.title);
            if (sortOrder === 'title-desc') return b.title.localeCompare(a.title);
            return 0;
        });

        return result;
    }, [activeCategory, searchTerm, sortOrder]);

    const totalOpenings = useMemo(() => internshipData.reduce((sum, i) => sum + i.spots, 0), []);
    const urgentOpenings = useMemo(() => internshipData.filter(i => i.spots === 1).length, []);

    const resetFilters = () => {
        setActiveCategory('All');
        setSearchTerm('');
        setSortOrder('spots-desc');
    };

    return (
        <section className="internships">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">Find Your Internship</h2>
                    <p className="section-subtitle">Explore opportunities to grow with us. Your next career move starts here.</p>
                </header>

                <div className="stats-section">
                    <div className="stat-item"><span className="stat-number">{internshipData.length}</span><span className="stat-label">Total Roles</span></div>
                    <div className="stat-item"><span className="stat-number">{totalOpenings}</span><span className="stat-label">Open Spots</span></div>
                    <div className="stat-item urgent"><span className="stat-number">{urgentOpenings}</span><span className="stat-label">Urgent Roles</span></div>
                </div>

                <div className="controls-section">
                  <div className="category-filters">
                    {internshipCategories.map(cat => (
                      <button
                        key={cat}
                        className={`category-btn${activeCategory === cat ? ' active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  <div className="search-sort-wrapper">
                      <div className="search-container">
                        <Search size={18} />
                        <input
                          className="search-input"
                          type="text"
                          placeholder="Search by title or skill"
                          value={searchTerm}
                          onChange={e => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <div className="sort-container">
                        <select
                          className="sort-select"
                          value={sortOrder}
                          onChange={e => setSortOrder(e.target.value)}
                        >
                          <option value="spots-desc">Spots (High to Low)</option>
                          <option value="spots-asc">Spots (Low to High)</option>
                          <option value="title-asc">Title (A to Z)</option>
                          <option value="title-desc">Title (Z to A)</option>
                        </select>
                      </div>
                  </div>
                </div>


                <div className="results-header">
                    <h3>{filteredAndSortedInternships.length} Opportunities Found</h3>
                    <div className="saved-count">
                        <Bookmark size={16} />
                        <span>{saved.length} Saved</span>
                    </div>
                </div>

                {isLoading ? (
                    <div className="loading-state">
                        <div className="loading-spinner"></div>
                        <p>Finding best opportunities...</p>
                    </div>
                ) : filteredAndSortedInternships.length > 0 ? (
                    <motion.div layout className="internships-grid">
                        <AnimatePresence>
                            {filteredAndSortedInternships.map(internship => (
                                <InternshipCard 
                                    key={internship.id} 
                                    internship={internship} 
                                    onApply={() => setModal({ isOpen: true, internship })}
                                    onSave={handleSave}
                                    isSaved={saved.includes(internship.id)}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="no-results">
                        <Search size={64} />
                        <h3>No Internships Found</h3>
                        <p>Try adjusting your search or filter criteria.</p>
                        <button className="reset-btn" onClick={resetFilters}>Reset Filters</button>
                    </div>
                )}
            </div>
            
            <AnimatePresence>
                {modal.isOpen && (
                    <motion.div 
                        className="form-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div 
                            className="form-modal enhanced-modal"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        >
                             <button className="close-btn" onClick={() => setModal({ isOpen: false, internship: null })}><X size={20} /></button>
                             <EnhancedApplicationForm 
                                internship={modal.internship}
                                onClose={() => setModal({ isOpen: false, internship: null })}
                             />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Internships;
