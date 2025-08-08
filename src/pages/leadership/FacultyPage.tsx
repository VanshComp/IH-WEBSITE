import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Linkedin, Mail, Phone } from 'lucide-react';

const FacultyPage = () => {
  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Faculty Advisor',
      department: 'Computer Science',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
      bio: 'Guiding students in technological innovation and entrepreneurship with over 15 years of industry experience.',
      qualifications: ['PhD in Computer Science', 'M.Tech in AI', 'B.Tech in CSE'],
      achievements: ['15+ Years Industry Experience', '50+ Research Papers', 'Innovation Mentor'],
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Entrepreneurship'],
      contact: { email: 'rajesh.kumar@mitwpu.edu.in', phone: '+91-9876543210', linkedin: '#' }
    },
    {
      name: 'Prof. Meera Singh',
      role: 'Startup Mentor',
      department: 'Business Administration',
      image: 'https://images.pexels.com/photos/3763153/pexels-photo-3763153.jpeg',
      bio: 'Expert in business strategy and startup development with extensive entrepreneurial background.',
      qualifications: ['MBA from IIM Bangalore', 'B.Com in Finance', 'Certified Business Coach'],
      achievements: ['Serial Entrepreneur', '3 Successful Exits', 'Angel Investor'],
      expertise: ['Business Strategy', 'Startup Development', 'Investment Planning'],
      contact: { email: 'meera.singh@mitwpu.edu.in', phone: '+91-9876543211', linkedin: '#' }
    },
    {
      name: 'Dr. Amit Patel',
      role: 'Research Coordinator',
      department: 'Electronics & Communication',
      image: 'https://images.pexels.com/photos/5212344/pexels-photo-5212344.jpeg',
      bio: 'Leading research initiatives in IoT and embedded systems with focus on practical applications.',
      qualifications: ['PhD in Electronics', 'M.Tech in VLSI', 'B.Tech in ECE'],
      achievements: ['30+ Patents Filed', 'IEEE Senior Member', 'Research Excellence Award'],
      expertise: ['IoT Systems', 'Embedded Programming', 'Hardware Design'],
      contact: { email: 'amit.patel@mitwpu.edu.in', phone: '+91-9876543212', linkedin: '#' }
    },
    {
      name: 'Prof. Sunita Sharma',
      role: 'Innovation Coordinator',
      department: 'Design & Innovation',
      image: 'https://images.pexels.com/photos/3763154/pexels-photo-3763154.jpeg',
      bio: 'Fostering creativity and design thinking among students with focus on user-centered innovation.',
      qualifications: ['M.Des in Product Design', 'B.Des in Industrial Design', 'UX Certification'],
      achievements: ['Design Thinking Expert', 'Innovation Workshop Leader', 'Industry Consultant'],
      expertise: ['Design Thinking', 'Product Innovation', 'User Experience'],
      contact: { email: 'sunita.sharma@mitwpu.edu.in', phone: '+91-9876543213', linkedin: '#' }
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
            Faculty <span className="text-blue-600">Mentors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced faculty mentors who guide and support our innovation initiatives
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faculty.map((member, index) => (
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
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.department}</p>
                    </div>
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>

                  <p className="text-gray-700 text-sm mb-4">{member.bio}</p>

                  {/* Qualifications */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Qualifications:</h4>
                    <div className="space-y-1">
                      {member.qualifications.map((qual, qualIndex) => (
                        <div key={qualIndex} className="flex items-center text-xs text-gray-600">
                          <Award className="h-3 w-3 text-yellow-500 mr-2" />
                          {qual}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      <span className="text-xs">Email</span>
                    </a>
                    <a
                      href={`tel:${member.contact.phone}`}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      <span className="text-xs">Call</span>
                    </a>
                    <a
                      href={member.contact.linkedin}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 mr-1" />
                      <span className="text-xs">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Message */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <BookOpen className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Faculty Support & Guidance</h3>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            Our faculty mentors are always available to provide guidance, support your projects, 
            and help you navigate your entrepreneurial journey. Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Meeting
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mentorship Program
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FacultyPage;