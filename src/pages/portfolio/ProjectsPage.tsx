import React from 'react';
import { motion } from 'framer-motion';
import { Code, Star, GitBranch, Eye } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Campus Navigator',
      description: 'AR-based navigation system for campus with real-time location tracking and interactive maps.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
      technologies: ['React Native', 'ARCore', 'Firebase', 'Google Maps API'],
      stars: 45,
      forks: 12,
      views: 1200,
      status: 'Active'
    },
    {
      id: 2,
      title: 'EcoTrack',
      description: 'Environmental monitoring dashboard tracking carbon footprint and sustainability metrics.',
      image: 'https://images.pexels.com/photos/948199/pexels-photo-948199.jpeg',
      technologies: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
      stars: 38,
      forks: 8,
      views: 890,
      status: 'Active'
    },
    {
      id: 3,
      title: 'StudyBuddy AI',
      description: 'AI-powered study companion that creates personalized learning paths and quizzes.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      stars: 67,
      forks: 23,
      views: 2100,
      status: 'Active'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of innovative projects built by our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitBranch className="h-4 w-4 mr-1" />
                      {project.forks}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {project.views}
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    {project.status}
                  </span>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;