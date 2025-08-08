
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Calendar, ExternalLink, Github } from 'lucide-react';

// --- Your project data ---
const projects = [
  {
    src: "/sam.png",
    timeline: "Ongoing",
    Event: "SAMVADINI CHATBOT",
    Location:
      "A bi-functional (voice and text) interface that tackles redundant FAQs for the exam department by accepting and answering queries in three languages using text or audio inputs.",
  },
  {
    src: "/div.png",
    timeline: "Ongoing",
    Event: "DIVYANGJAN SUPPORT",
    Location:
      "Supports specially-abled students by enabling requests for services like writing aid, supplementary notes, peer support, alongside a credit-based system for able students to help effectively—offered under one roof.",
  },
  {
    src: "/ver.png",
    timeline: "Ongoing",
    Event: "VERIFICATION MODULE",
    Location:
      "Centralizes and automates student graduation and college document verifications, handling requests, tracking, notifications, and auto-generating success certificates to organizations.",
  },
  {
    src: "/mou.png",
    timeline: "Ongoing",
    Event: "MOU Tracker",
    Location:
      "A centralized software portal managing college-based MOU processes including initiation, tracking, termination, renewal, and updates with all necessary functionalities.",
  },
  {
    src: "/ph.png",
    timeline: "Ongoing",
    Event: "PHD TRACKER",
    Location:
      "Automates Ph.D. student journeys with features for progress tracking, goal setting, collaboration, task and document management, reports, notifications, and analytics.",
  },
];

// --- Remap your data to what the grid expects ---
const remappedProjects = projects.map((p, i) => ({
  id: i + 1,
  title: p.Event,
  description: p.Location,
  image: p.src,
  status: p.timeline,
  team: 'Innovation Hub',
  technologies: ['React', 'Node.js'],
  github: '#',
  demo: '#',
  members: 3 + i,
  startDate: '2024-01-01', // Placeholder; replace with actual if known
}));

const getStatusColor = (status) => {
  if (status === 'Ongoing') return 'bg-yellow-100 text-yellow-800';
  if (status === 'Completed') return 'bg-green-100 text-green-800';
  if (status === 'Planned') return 'bg-blue-100 text-blue-800';
  return 'bg-gray-100 text-gray-800';
};

const ProjectPage = () => {
  // Form modal state
  const [formType, setFormType] = useState(null); // null | "start" | "join"

  // Dynamic stats
  const totalProjects = remappedProjects.length;
  const totalContributors = remappedProjects.reduce((sum, p) => sum + (p.members || 0), 0);
  const earliestDate = remappedProjects.reduce((min, p) => {
    const date = new Date(p.startDate);
    return date < min ? date : min;
  }, new Date());
  const monthsActive = Math.max(
    1,
    ((new Date().getFullYear() - earliestDate.getFullYear()) * 12) +
    (new Date().getMonth() - earliestDate.getMonth())
  );
  const liveDeployments = remappedProjects.filter(p => p.status === "Ongoing").length;

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
            Our <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the innovative projects built by our talented community members
          </p>
        </motion.div>

        {/* STATS: dynamic! */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{totalProjects}</div>
            <div className="text-gray-600">Active Projects</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Users className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{totalContributors}</div>
            <div className="text-gray-600">Contributors</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Calendar className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{monthsActive}</div>
            <div className="text-gray-600">Months Active</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <ExternalLink className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{liveDeployments}</div>
            <div className="text-gray-600">Live Deployments</div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {remappedProjects.map((project, index) => (
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
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-600 font-medium">{project.team}</span>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.members}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(project.startDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action + Modal */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join our community and bring your innovative ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFormType("start")}
              >
                Start a Project
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFormType("join")}
              >
                Join a Project
              </motion.button>
            </div>
          </div>

          {/* Modal Popup Form */}
          {formType && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
              <div className="bg-white rounded-xl p-8 shadow-xl max-w-md w-full relative">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={() => setFormType(null)}
                >
                  ×
                </button>
                <h2 className="text-xl font-bold mb-4">
                  {formType === "start" ? "Start a Project" : "Join a Project"}
                </h2>
                <form>
                  <div className="mb-4">
                    <label className="block mb-2">Name</label>
                    <input className="border p-2 rounded w-full" type="text" placeholder="Your Name" />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input className="border p-2 rounded w-full" type="email" placeholder="Your Email" />
                  </div>
                  {formType === "start" ? (
                    <div className="mb-4">
                      <label className="block mb-2">Project Idea</label>
                      <textarea className="border p-2 rounded w-full" placeholder="Describe your project" />
                    </div>
                  ) : (
                    <div className="mb-4">
                      <label className="block mb-2">Skills / Interest</label>
                      <textarea className="border p-2 rounded w-full" placeholder="Tell us what skills you'd like to contribute" />
                    </div>
                  )}
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
