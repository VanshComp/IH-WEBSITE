import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Github, Linkedin, Mail } from 'lucide-react';

const MentorsPage = () => {
  const mentors = [
    {
      name: 'Vikram Agarwal',
      role: 'Senior Student Mentor',
      year: 'Final Year CS',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg',
      bio: 'Mentoring juniors in full-stack development and helping them build industry-ready projects.',
      specialization: 'Full-Stack Development',
      achievements: ['Google Summer of Code', 'Open Source Contributor', 'Hackathon Winner'],
      mentees: 15,
      projects: 8,
      social: { linkedin: '#', github: '#', email: 'vikram@student.mitwpu.edu.in' }
    },
    {
      name: 'Anisha Jain',
      role: 'Design Mentor',
      year: 'Final Year Design',
      image: 'https://images.pexels.com/photos/3763151/pexels-photo-3763151.jpeg',
      bio: 'Helping students create impactful design solutions and build strong design portfolios.',
      specialization: 'UI/UX Design',
      achievements: ['Adobe Certified', 'UX Design Awards', 'Design Competition Winner'],
      mentees: 12,
      projects: 6,
      social: { linkedin: '#', github: '#', email: 'anisha@student.mitwpu.edu.in' }
    },
    {
      name: 'Rohan Mehta',
      role: 'AI/ML Mentor',
      year: 'Final Year AI',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Guiding students in machine learning projects and research paper publications.',
      specialization: 'Machine Learning',
      achievements: ['Research Publications', 'Kaggle Expert', 'AI Competition Winner'],
      mentees: 10,
      projects: 5,
      social: { linkedin: '#', github: '#', email: 'rohan@student.mitwpu.edu.in' }
    },
    {
      name: 'Kavya Sharma',
      role: 'Startup Mentor',
      year: 'Final Year Business',
      image: 'https://images.pexels.com/photos/3763150/pexels-photo-3763150.jpeg',
      bio: 'Supporting student entrepreneurs in business planning and startup development.',
      specialization: 'Entrepreneurship',
      achievements: ['Startup Founder', 'Business Plan Competition Winner', 'Pitch Expert'],
      mentees: 8,
      projects: 4,
      social: { linkedin: '#', github: '#', email: 'kavya@student.mitwpu.edu.in' }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student <span className="text-yellow-500">Mentors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced senior students who are passionate about sharing their knowledge
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="md:flex">
                {/* Image Section */}
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full overflow-hidden">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                      <p className="text-yellow-600 font-medium">{mentor.role}</p>
                      <p className="text-gray-600 text-sm">{mentor.year}</p>
                    </div>
                    <Star className="h-6 w-6 text-yellow-500" />
                  </div>

                  <p className="text-gray-700 text-sm mb-4">{mentor.bio}</p>

                  {/* Specialization */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      {mentor.specialization}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">{mentor.mentees}</div>
                      <div className="text-xs text-gray-600">Mentees</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">{mentor.projects}</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Achievements:</h4>
                    <div className="space-y-1">
                      {mentor.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${mentor.social.email}`}
                      className="flex items-center text-yellow-600 hover:text-yellow-800 transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      <span className="text-xs">Email</span>
                    </a>
                    <a
                      href={mentor.social.linkedin}
                      className="flex items-center text-yellow-600 hover:text-yellow-800 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 mr-1" />
                      <span className="text-xs">LinkedIn</span>
                    </a>
                    <a
                      href={mentor.social.github}
                      className="flex items-center text-yellow-600 hover:text-yellow-800 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      <span className="text-xs">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentorship Program Info */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-gray-900 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Users className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Join Our Mentorship Program</h3>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            Whether you want to be a mentor or find one, our program connects students 
            for knowledge sharing and collaborative growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find a Mentor
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-transparent border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Mentor
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentorsPage;