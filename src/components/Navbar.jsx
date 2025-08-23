import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Hook to get the current page location

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: 'Projects', href: '/#projects' },
    { title: 'Patents', href: '/patents' },
    { title: 'Internships', href: '/internships' },
  ];
  
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Innovate.
        </Link>

        <div className="navbar-menu-desktop">
          <ul>
            {navLinks.map((link, index) => (
              <motion.li
                key={link.title}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                {link.href.startsWith('/') ? (
                  <Link to={link.href}>{link.title}</Link>
                ) : (
                  <a href={link.href}>{link.title}</a>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.a
          href="#contact"
          className="btn btn-outline navbar-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Contact Us
        </motion.a>

        <div className="navbar-menu-mobile-toggle">
          <Menu onClick={toggleMenu} className="hamburger-icon" />
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="navbar-menu-mobile"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="close-icon-container">
          <X onClick={toggleMenu} className="close-icon" />
        </div>
        <ul>
          {navLinks.map((link, index) => (
            <motion.li
              key={link.title}
              custom={index}
              initial="hidden"
              animate={isOpen ? 'visible' : 'hidden'}
              variants={mobileLinkVariants}
            >
              <Link to={link.href}>{link.title}</Link>
            </motion.li>
          ))}
           <motion.li
              custom={navLinks.length}
              initial="hidden"
              animate={isOpen ? 'visible' : 'hidden'}
              variants={mobileLinkVariants}
           >
                <a href="#contact" className="btn btn-primary">Contact Us</a>
           </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;