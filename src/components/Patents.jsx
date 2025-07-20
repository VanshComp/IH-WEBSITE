import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Eye, 
  ArrowRight
} from 'lucide-react';
import './Patents.css';

// Data - can be simplified as we removed many fields from display
const patents = [
    { id: 1, title: 'Advanced Neural Network Architecture', description: 'Revolutionary approach to deep learning with improved efficiency and accuracy.', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, title: 'Sustainable Energy Storage System', description: 'Novel battery technology with enhanced longevity and environmental safety.', image: 'https://images.pexels.com/photos/9875421/pexels-photo-9875421.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, title: 'Smart Medical Diagnostic Tool', description: 'AI-powered diagnostic system for early disease detection and prevention.', image: 'https://images.pexels.com/photos/7089016/pexels-photo-7089016.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, title: 'Quantum Computing Interface', description: 'Breakthrough in quantum-classical computing integration and optimization.', image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, title: 'Autonomous Vehicle Navigation', description: 'Advanced LiDAR and AI integration for safer autonomous driving systems.', image: 'https://images.pexels.com/photos/3846206/pexels-photo-3846206.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, title: 'Biocompatible Implant Material', description: 'Next-generation biomaterial for improved implant integration and longevity.', image: 'https://images.pexels.com/photos/8434641/pexels-photo-8434641.jpeg?auto=compress&cs=tinysrgb&w=400' }
];

const useIntersectionObserver = (threshold = 0.1) => {
    return useInView({ triggerOnce: true, threshold });
};

const PatentCard = ({ patent, inView, index }) => {
    return (
        <motion.div
            className="patent-card"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -8 }}
        >
            <div className="patent-image">
                <img src={patent.image} alt={patent.title} />
                <div className="patent-overlay">
                    <motion.button className="view-patent-btn" whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }}>
                        <Eye size={20} />
                    </motion.button>
                </div>
            </div>
            <div className="patent-content">
                <h3 className="patent-title">{patent.title}</h3>
                <p className="patent-description">{patent.description}</p>
            </div>
        </motion.div>
    );
};

const Patents = () => {
  const [ref, inView] = useIntersectionObserver();

  return (
    <section id="patents" className="patents-section">
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <h2 className="section-title">Our Patents</h2>
          <p className="section-subtitle">
            Discover groundbreaking innovations that are shaping the future. 
            From AI and quantum computing to sustainable energy and healthcare.
          </p>
        </motion.div>

        <motion.div className="patents-grid" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
          {patents.map((patent, index) => (
            <PatentCard key={patent.id} patent={patent} inView={inView} index={index} />
          ))}
        </motion.div>

        <motion.div className="patents-cta" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.8 }}>
          <h3>Ready to Patent Your Innovation?</h3>
          <p>Join our community of inventors and protect your groundbreaking ideas.</p>
          <motion.button className="btn btn-primary" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
            Start Your Patent Journey <ArrowRight className="btn-icon" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Patents;