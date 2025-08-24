import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Mic, Rocket, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    { id: 'projects', label: 'Our Projects', icon: Code },
    { id: 'podcasts', label: 'Our Podcasts', icon: Mic },
    { id: 'startups', label: 'Our Startups', icon: Rocket },
    { id: 'events', label: 'Our Events', icon: Calendar }
  ];

  const content = {
    projects: [
      {
        title: 'AI-Powered Student Assistant',
        description: 'A smart chatbot helping students with academic queries',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
        status: 'Live',
        team: 'Team Alpha'
      },
      {
        title: 'Campus Event Management',
        description: 'Streamlining event organization across the campus',
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
        status: 'In Progress',
        team: 'Team Beta'
      },
      {
        title: 'Green Campus Initiative',
        description: 'IoT sensors monitoring campus environmental impact',
        image: 'https://images.pexels.com/photos/948199/pexels-photo-948199.jpeg',
        status: 'Planning',
        team: 'Team Gamma'
      }
    ],
    podcasts: [
      {
        title: 'TechTalk with Innovators',
        description: 'Weekly conversations with industry leaders',
        image: 'https://images.pexels.com/photos/7525037/pexels-photo-7525037.jpeg',
        episodes: '24',
        listeners: '5K+'
      },
      {
        title: 'Startup Stories',
        description: 'Behind-the-scenes of student startups',
        image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg',
        episodes: '18',
        listeners: '3K+'
      }
    ],
    startups: [
      {
        title: 'EduTech Solutions',
        description: 'Revolutionizing online learning experiences',
        image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg',
        funding: 'Seed Stage',
        founded: '2023'
      },
      {
        title: 'GreenLogistics',
        description: 'Sustainable supply chain management',
        image: 'https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg',
        funding: 'Series A',
        founded: '2022'
      }
    ],
    events: [
      {
        title: 'Innovation Summit 2024',
        description: 'Annual showcase of student innovations',
        image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
        date: 'March 15, 2024',
        attendees: '500+'
      },
      {
        title: 'Hackathon Weekend',
        description: '48-hour coding marathon',
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
        date: 'April 20-22, 2024',
        attendees: '200+'
      }
    ]
  };

  const currentContent = content[activeTab as keyof typeof content];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentContent.length) % currentContent.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the amazing projects, podcasts, startups, and events created by our community
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentSlide(0);
                }}
                className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="h-5 w-5" />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Content Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentContent.map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                    index === currentSlide ? 'ring-2 ring-blue-500' : ''
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {activeTab === 'projects' && (
                        <>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            (item as any).status === 'Live' ? 'bg-green-100 text-green-800' :
                            (item as any).status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {(item as any).status}
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {(item as any).team}
                          </span>
                        </>
                      )}
                      {activeTab === 'podcasts' && (
                        <>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            {(item as any).episodes} Episodes
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {(item as any).listeners} Listeners
                          </span>
                        </>
                      )}
                      {activeTab === 'startups' && (
                        <>
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                            {(item as any).funding}
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            Est. {(item as any).founded}
                          </span>
                        </>
                      )}
                      {activeTab === 'events' && (
                        <>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {(item as any).date}
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {(item as any).attendees} Attendees
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Action Buttons */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join a Project
            </motion.button>
            <motion.button
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Application Form
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;