import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Play, Download, Clock, Calendar } from 'lucide-react';

const PodcastsPage = () => {
  const podcasts = [
    {
      id: 1,
      title: 'TechTalk with Innovators',
      description: 'Weekly conversations with industry leaders and successful entrepreneurs.',
      image: 'https://images.pexels.com/photos/7525037/pexels-photo-7525037.jpeg',
      episodes: 24,
      listeners: '5K+',
      duration: '45 min avg',
      lastEpisode: '2024-02-15'
    },
    {
      id: 2,
      title: 'Startup Stories',
      description: 'Behind-the-scenes stories of student startups and their journey.',
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg',
      episodes: 18,
      listeners: '3K+',
      duration: '30 min avg',
      lastEpisode: '2024-02-10'
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
            Our <span className="text-green-600">Podcasts</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Listen to inspiring conversations and stories from our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={podcast.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{podcast.title}</h3>
                <p className="text-gray-600 mb-4">{podcast.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Episodes:</span>
                    <span className="ml-2 font-medium">{podcast.episodes}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Listeners:</span>
                    <span className="ml-2 font-medium">{podcast.listeners}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <span className="ml-2 font-medium">{podcast.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Latest:</span>
                    <span className="ml-2 font-medium">{new Date(podcast.lastEpisode).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm">
                    <Play className="h-4 w-4" />
                    <span>Listen Now</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm">
                    <Download className="h-4 w-4" />
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastsPage;