import React from 'react';
import { motion } from 'framer-motion';
import './SharedCard.css'; // Use the new shared CSS
import './AlumniCard.css'; // Keep for specific overrides

const AlumniCard = ({ alumnus }) => {
    const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

    return (
        <motion.div
            className="shared-card alumni-card-container"
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -8, boxShadow: "0px 20px 40px rgba(0, 123, 255, 0.15)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
        src={alumnus.image}
        alt={alumnus.name}
        className="mentor-card-image"
      />
            <h3 className="card-name">{alumnus.name}</h3>
            <p className="card-role">{alumnus.role} - {alumnus.batch}</p>
            <p className="card-story">{alumnus.story}</p>
        </motion.div>
    );
};
export default AlumniCard;