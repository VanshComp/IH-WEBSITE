import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Lightbulb, Rocket, Plus, Search, MapPin, Clock } from 'lucide-react';

const Ecosystem = () => {
  const [showInternshipForm, setShowInternshipForm] = useState(false);
  const [showStartupForm, setShowStartupForm] = useState(false);

  const internships = [
    {
      title: 'Frontend Developer Intern',
      company: 'TechStart Solutions',
      location: 'Pune, Maharashtra',
      type: 'Remote',
      duration: '3 months',
      stipend: '₹15,000/month',
      description: 'Work on cutting-edge React applications with our development team.',
      tags: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Data Science Intern',
      company: 'DataFlow Analytics',
      location: 'Mumbai, Maharashtra',
      type: 'Hybrid',
      duration: '6 months',
      stipend: '₹20,000/month',
      description: 'Analyze large datasets and build predictive models.',
      tags: ['Python', 'Machine Learning', 'SQL']
    },
    {
      title: 'UI/UX Design Intern',
      company: 'CreativeMinds Studio',
      location: 'Pune, Maharashtra',
      type: 'On-site',
      duration: '4 months',
      stipend: '₹12,000/month',
      description: 'Create beautiful and intuitive user interfaces.',
      tags: ['Figma', 'User Research', 'Prototyping']
    }
  ];

  const bootcamps = [
    {
      title: 'Full-Stack Development Bootcamp',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      startDate: 'March 1, 2024',
      description: 'Master modern web development with MERN stack',
      features: ['Live Projects', 'Industry Mentors', 'Job Placement Support']
    },
    {
      title: 'AI & Machine Learning Bootcamp',
      duration: '16 weeks',
      level: 'Intermediate',
      startDate: 'April 15, 2024',
      description: 'Dive deep into AI/ML with hands-on projects',
      features: ['Real Datasets', 'Research Papers', 'Industry Applications']
    },
    {
      title: 'Startup Accelerator Program',
      duration: '20 weeks',
      level: 'All Levels',
      startDate: 'February 1, 2024',
      description: 'Transform your idea into a viable business',
      features: ['Funding Support', 'Mentor Network', 'Market Validation']
    }
  ];

  return (
    <section id="ecosystem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Innovation <span className="text-yellow-500">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover opportunities, join bootcamps, and turn your startup ideas into reality
          </p>
        </motion.div>

        {/* Internships Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Internship Opportunities</h3>
            </div>
            <motion.button
              onClick={() => setShowInternshipForm(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="h-5 w-5" />
              <span>Post Internship</span>
            </motion.button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-gray-900">{internship.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    internship.type === 'Remote' ? 'bg-green-100 text-green-800' :
                    internship.type === 'Hybrid' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {internship.type}
                  </span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{internship.company}</p>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {internship.location}
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  {internship.duration} • {internship.stipend}
                </div>
                <p className="text-gray-700 text-sm mb-4">{internship.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {internship.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white text-gray-700 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bootcamps Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Rocket className="h-8 w-8 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-900">Bootcamps & Programs</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bootcamps.map((bootcamp, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">{bootcamp.title}</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{bootcamp.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">{bootcamp.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Starts:</span>
                    <span className="font-medium">{bootcamp.startDate}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{bootcamp.description}</p>
                <div className="space-y-2 mb-6">
                  {bootcamp.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-yellow-400 text-gray-900 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-medium">
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Startup Ideas Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Lightbulb className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-3xl font-bold mb-4">Have a Startup Idea?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with mentors, find co-founders, and get the support you need to bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setShowStartupForm(true)}
              className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Share Your Idea
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Co-founders
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal Forms */}
      {showInternshipForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-xl max-w-md w-full p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <h3 className="text-xl font-bold mb-4">Post an Internship</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Job Title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                placeholder="Job Description"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowInternshipForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Post
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {showStartupForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-xl max-w-md w-full p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <h3 className="text-xl font-bold mb-4">Share Your Startup Idea</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Startup Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                placeholder="Describe your idea..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowStartupForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Ecosystem;