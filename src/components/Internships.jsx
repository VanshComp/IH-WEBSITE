import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, ArrowRight, CheckCircle, X, Briefcase } from 'lucide-react';
import { internshipData, internshipCategories } from './internshipdata.js';
import { iconMap } from './iconMap';
import './Internships.css';

// Helpers
function getSpotsColor(spots) {
  if (spots >= 4) return '#27ae60';      // green: lots
  if (spots >= 2) return '#f39c12';      // yellow: mid
  if (spots === 1) return '#e74c3c';     // red: urgent
  return '#bdc3c7';                      // gray: none
}

// ApplicationForm with basic validation and feedback
const ApplicationForm = ({ internshipTitle, onClose }) => {
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', qualification: '', skills: '', reason: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!formData.name) errs.name = 'Required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid Email Required';
    if (!formData.mobile || !/^\d{10,}$/.test(formData.mobile)) errs.mobile = 'Valid Mobile Required';
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // Simulate submit
    setSubmitted(true);
    setTimeout(onClose, 2000);
  };

  if (submitted)
    return (
      <div className="form-header" style={{ textAlign: 'center', color: '#27ae60' }}>
        <CheckCircle size={44} />
        <h3>Application Received!</h3>
        <p>Thank you for applying for the <b>{internshipTitle}</b> position.</p>
      </div>
    );

  return (
    <form className="application-form" onSubmit={handleSubmit} noValidate>
      <div className="form-header">
        <h3>Apply: {internshipTitle}</h3>
        <p>Launch your career in innovation and IP.</p>
      </div>
      {["name", "mobile", "email", "qualification", "skills", "reason"].map(field => (
        <div className="form-group" key={field}>
          <label htmlFor={field} style={{textTransform: 'capitalize'}}>{field}</label>
          {field === "reason"
            ? <textarea id={field} name={field} value={formData[field]} onChange={handleChange} />
            : <input id={field} name={field} value={formData[field]} onChange={handleChange} />}
          {errors[field] && <span style={{ color: '#e74c3c', fontSize: '0.9em' }}>{errors[field]}</span>}
        </div>
      ))}
      <button className="btn-submit" type="submit">Apply Now <ArrowRight size={18} /></button>
    </form>
  );
};

const Internships = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modal, setModal] = useState({ open: false, internship: null });

  const filtered = selectedCategory === 'All'
    ? internshipData
    : internshipData.filter(i => i.department === selectedCategory);

  return (
    <section className="internships">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Open Internships</h2>
          <p className="section-subtitle">
            Kickstart your career with a leading team in innovation and IP.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: 24, flexWrap: 'wrap' }}>
            {internshipCategories.map(cat => (
              <button
                key={cat}
                style={{
                  background: selectedCategory === cat ? 'var(--primary-blue)' : 'var(--border-light)',
                  color: selectedCategory === cat ? 'var(--white)' : 'var(--dark-gray)',
                  border: 'none', borderRadius: 20, padding: '0.4rem 1.1rem', fontWeight: 600,
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedCategory(cat)}
              >{cat.replace('&amp;', '&')}</button>
            ))}
          </div>
        </div>
        <motion.div layout className="internships-grid">
          <AnimatePresence>
            {filtered.map((internship) => {
              const Icon = iconMap[internship.icon] || Briefcase;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="internship-card"
                  key={internship.id}
                  tabIndex={0}
                  onClick={() => setModal({ open: true, internship })}
                >
                  <div className="card-header">
                    <div className="internship-icon"><Icon size={38} /></div>
                    <div>
                      <h3 className="internship-title">{internship.title}</h3>
                      <div className="internship-details">
                        <span className="duration"><Calendar size={15} style={{ verticalAlign: -2, marginRight: 3 }} /> {internship.duration}</span>
                        <span className="department">{internship.department.replace('&amp;', '&')}</span>
                      </div>
                    </div>
                  </div>
                  <p className="internship-description">{internship.description}</p>
                  <div className="skills-section">
                    <h4>Skills Required</h4>
                    <div className="skills-list">
                      {internship.skills.map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="spots-info" style={{ gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{
                        width: 12, height: 12, background: getSpotsColor(internship.spots), borderRadius: '50%', display: 'inline-block'
                      }} />
                      <Users size={15} />
                      <span>{internship.spots} spot{internship.spots !== 1 ? 's' : ''} left</span>
                    </div>
                    <button
                      className="apply-btn"
                      onClick={(e) => { e.stopPropagation(); setModal({ open: true, internship }); }}
                    >Apply <ArrowRight size={16} /></button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {modal.open && (
          <motion.div
            className="form-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal({ open: false, internship: null })}
          >
            <motion.div
              className="form-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button aria-label="Close" className="close-btn" onClick={() => setModal({ open: false, internship: null })}>
                <X size={22} />
              </button>
              <ApplicationForm internshipTitle={modal.internship.title} onClose={() => setModal({ open: false, internship: null })} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Internships;
