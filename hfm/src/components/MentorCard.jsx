import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SharedCard.css';
import '../styles/MentorCard.css';

const MentorCard = ({ mentor }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="shared-card mentor-card-container"
      variants={cardVariants}
      whileHover={{ scale: 1.03, y: -8, boxShadow: "0px 20px 40px rgba(0, 123, 255, 0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img
        src={mentor.image}
        alt={mentor.name}
        className="mentor-card-image"
      />
      <h3 className="card-name">{mentor.name}</h3>
      <p className="card-role">{mentor.role}</p>
      <p className="card-quote">"{mentor.quote}"</p>
    </motion.div>
  );
};

export default MentorCard;