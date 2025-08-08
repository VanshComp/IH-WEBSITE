import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { navItems } from '../data/navItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const hasActiveChild = (children: any[]) => {
    return children.some(child => location.pathname === child.path);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg backdrop-blur-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-yellow-400 to-blue-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">Innovation Hub</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.children && item.children.length > 0 ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 py-2 px-3 text-sm font-medium transition-colors duration-200 ${
                        hasActiveChild(item.children)
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border transition-all duration-200 ${
                        activeDropdown === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.path}
                          onClick={closeDropdown}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                            isActivePath(child.path)
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path || '/'}
                    className={`relative py-2 px-3 text-sm font-medium transition-colors duration-200 ${
                      isActivePath(item.path || '/')
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.title}
                    {isActivePath(item.path || '/') && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join our Team
            </motion.button>
            <motion.button
              className="px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`lg:hidden bg-white border-t shadow-lg ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.children && item.children.length > 0 ? (
                <div>
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className={`flex items-center justify-between w-full py-2 text-sm font-medium ${
                      hasActiveChild(item.children) ? 'text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {activeDropdown === index && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.path}
                          onClick={closeDropdown}
                          className={`block py-1 text-sm ${
                            isActivePath(child.path) ? 'text-blue-600' : 'text-gray-600'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path || '/'}
                  onClick={closeDropdown}
                  className={`block w-full text-left py-2 text-sm font-medium ${
                    isActivePath(item.path || '/') ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 space-y-2">
            <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg">
              Join our Team
            </button>
            <button className="w-full px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg font-medium">
              Apply Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;