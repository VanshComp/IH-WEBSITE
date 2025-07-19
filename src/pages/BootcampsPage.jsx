import React, { useState, useEffect, useRef } from 'react';

// --- CSS Styles ---
// In a real application, this would be in a separate file.
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  :root {
    --primary-blue: #009cf7;
    --accent-yellow: #EEC759;
    --white: #ffffff;
    --dark-text: #1a202c;
    --light-gray: #f7fafc;
    --shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  .bootcamps-body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(170deg, #f7fafc 0%, #e2e8f0 100%);
    color: var(--dark-text);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .bootcamps-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .bootcamps-header {
    text-align: left;
    margin-bottom: 3rem;
    perspective: 400px; /* Added for 3D effect */
  }

  .bootcamps-header h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--primary-blue);
    margin-bottom: 0.5rem;
    position: relative;
    display: inline-block;
    cursor: default;
  }
  
  /* New styles for letter animation */
  .bootcamps-header h1 span {
    display: inline-block;
    opacity: 0;
    transform-style: preserve-3d;
    transform-origin: center;
    transform: rotateY(90deg);
    animation: flip-letter 0.5s ease-out forwards;
  }

  @keyframes flip-letter {
    to {
      transform: rotateY(0deg);
      opacity: 1;
    }
  }

  .bootcamps-header h1::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    transform: translateX(0);
    width: 100px;
    height: 5px;
    background-color: var(--accent-yellow);
    border-radius: 5px;
  }

  .bootcamps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
  }

  .bootcamp-card {
    background: var(--white);
    border-radius: 15px;
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(50px);
    visibility: hidden;
    display: flex;
    flex-direction: column;
  }

  .bootcamp-card.isVisible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    transition: opacity 0.6s ease-out, transform 0.6s ease-out 0.2s;
  }

  .bootcamp-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: var(--shadow-hover);
  }

  .card-image-container {
    width: 100%;
    height: 220px;
    overflow: hidden;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  .bootcamp-card:hover .card-image {
    transform: scale(1.05);
  }

  .card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-blue);
    margin-bottom: 0.75rem;
  }

  .card-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .card-button {
    display: inline-block;
    background: linear-gradient(45deg, var(--primary-blue), #007bff);
    color: var(--white);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 156, 247, 0.3);
    border: none;
    cursor: pointer;
    text-align: center;
  }

  .card-button:hover {
    background: linear-gradient(45deg, #007bff, var(--primary-blue));
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 156, 247, 0.4);
  }

  /* Modal Styles */
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .modal-backdrop.isOpen {
    opacity: 1;
    visibility: visible;
  }

  .modal-content {
    background: var(--white);
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    width: 90%;
    max-width: 500px;
    position: relative;
    transform: translateY(-50px);
    transition: transform 0.4s ease;
  }

  .modal-backdrop.isOpen .modal-content {
      transform: translateY(0);
  }

  .modal-close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    background: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #888;
    transition: color 0.2s ease;
  }
  .modal-close-btn:hover {
      color: #333;
  }

  .modal-header h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--primary-blue);
  }
  .modal-header p {
      margin-top: 0;
      margin-bottom: 2rem;
      color: #666;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #444;
  }

  .form-group input, .form-group textarea {
    width: 92%;
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(0, 156, 247, 0.2);
  }

  .form-group textarea {
      resize: vertical;
      min-height: 120px;
  }

  .error-message {
      color: #e53e3e;
      font-size: 0.875rem;
      margin-top: 0.5rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .bootcamps-header h1 {
      font-size: 2.5rem;
    }
    .bootcamps-grid {
      grid-template-columns: 1fr;
    }
  }
`;

// --- Mock Data ---
const bootcampData = [
    { id: 1, title: 'AI & Machine Learning', description: 'Dive deep into the world of artificial intelligence. Learn to build and deploy machine learning models from scratch with hands-on projects.', imageUrl: '/BootcampPhotos/IMG_2796.JPG' },
    { id: 2, title: 'Full-Stack Web Development', description: 'Master the MERN stack (MongoDB, Express, React, Node.js) and become a job-ready full-stack developer. Build dynamic, responsive web apps.', imageUrl: '/BootcampPhotos/IMG_3702.JPG' },
    { id: 3, title: 'Data Science & Analytics', description: 'Unlock insights from data. Learn Python, Pandas, Matplotlib, and Scikit-learn to analyze data, create visualizations, and make predictions.', imageUrl: '/BootcampPhotos/IMG_3700.JPG' },
    { id: 4, title: 'Cybersecurity Essentials', description: 'Protect digital assets from cyber threats. Explore network security, ethical hacking, and cryptography in this comprehensive bootcamp.', imageUrl: '/BootcampPhotos/IMG_3701.JPG' },
    { id: 5, title: 'UX/UI Design Fundamentals', description: 'Learn the principles of user-centric design. Create intuitive and beautiful interfaces using Figma, from wireframing to high-fidelity prototypes.', imageUrl: '/BootcampPhotos/IMG_001.jpg' },
    { id: 6, title: 'Cloud Computing with AWS', description: 'Master the AWS cloud platform. Learn to design, deploy, and manage scalable and fault-tolerant systems using core AWS services.', imageUrl: '/BootcampPhotos/IMG_2804.JPG' },
];

// --- Custom Hook for Intersection Observer ---
const useIntersectionObserver = (options) => {
    const [elements, setElements] = useState([]);
    const [entries, setEntries] = useState([]);
    const observer = useRef(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(observedEntries => {
            setEntries(observedEntries);
        }, options);
        const { current: currentObserver } = observer;
        if (elements.length > 0) {
            elements.forEach(element => {
                if (element) currentObserver.observe(element);
            });
        }
        return () => {
            if (currentObserver) currentObserver.disconnect();
        };
    }, [elements, options]);

    return [setElements, entries];
};

// --- Enquiry Form Modal Component ---
const EnquiryModal = ({ isOpen, onClose, bootcampTitle }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is not valid.';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            console.log('Form Submitted:', { ...formData, bootcamp: bootcampTitle });
            // Here you would typically send the data to a server
            alert(`Thank you, ${formData.name}! Your enquiry for "${bootcampTitle}" has been sent.`);
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
            onClose();
        }
    };
    
    useEffect(() => {
        if(isOpen) {
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={`modal-backdrop ${isOpen ? 'isOpen' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <h2>Enquiry Form</h2>
                    <p>Interested in our <strong>{bootcampTitle}</strong> bootcamp? Fill out the form below.</p>
                </div>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
                        {errors.message && <p className="error-message">{errors.message}</p>}
                    </div>
                    <button type="submit" className="card-button" style={{width: '100%'}}>Submit Enquiry</button>
                </form>
            </div>
        </div>
    );
};

// --- Bootcamp Card Component ---
const BootcampCard = ({ title, description, imageUrl, isVisible, onLearnMoreClick }) => {
    return (
        <div className={`bootcamp-card ${isVisible ? 'isVisible' : ''}`}>
            <div className="card-image-container">
                <img src={imageUrl} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <button onClick={() => onLearnMoreClick(title)} className="card-button">Learn More</button>
            </div>
        </div>
    );
};

// --- Main Bootcamps Page Component ---
export default function BootcampsPage() {
    const [cardRefs, setCardRefs] = useState([]);
    const [setElements, entries] = useIntersectionObserver({ threshold: 0.1, rootMargin: '0px' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBootcamp, setSelectedBootcamp] = useState('');
    const headerText = "Bootcamps in IH";

    useEffect(() => {
        const refs = Array.from(document.querySelectorAll('.bootcamp-card'));
        setCardRefs(refs);
    }, []);

    useEffect(() => {
        if (cardRefs.length > 0) {
            setElements(cardRefs);
        }
    }, [cardRefs, setElements]);

    const visibleMap = new Map();
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            visibleMap.set(entry.target, true);
        }
    });

    useEffect(() => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = styles;
        document.head.appendChild(styleTag);
        document.body.className = 'bootcamps-body';
        return () => {
            document.head.removeChild(styleTag);
            document.body.className = '';
        };
    }, []);

    const handleOpenModal = (title) => {
        setSelectedBootcamp(title);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBootcamp('');
    };

    return (
        <>
            <div className="bootcamps-container">
                <header className="bootcamps-header">
                    <h1>
                        {headerText.split('').map((char, index) => (
                            <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h1>
                </header>
                <main>
                    <div className="bootcamps-grid">
                        {bootcampData.map((bootcamp, index) => (
                            <BootcampCard
                                key={bootcamp.id}
                                title={bootcamp.title}
                                description={bootcamp.description}
                                imageUrl={bootcamp.imageUrl}
                                isVisible={visibleMap.has(cardRefs[index])}
                                onLearnMoreClick={handleOpenModal}
                            />
                        ))}
                    </div>
                </main>
            </div>
            <EnquiryModal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                bootcampTitle={selectedBootcamp}
            />
        </>
    );
}
