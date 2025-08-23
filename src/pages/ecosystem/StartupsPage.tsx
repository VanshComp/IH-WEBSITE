
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const cards = [
  {
    id: 1,
    href: "#ideathon-expo",
    imgSrc: "/hackthon-1.webp",
    title: "HackMIT-WPU & Innovation Expo",
    description:
      "Hackathons and ideathons empowering students from diverse disciplines to transform raw ideas into prototypes and early MVPs. Opportunities to validate concepts through peer feedback and mentorship.",
    readMoreHref: "#ideathon-expo-details",
  },
  {
    id: 3,
    href: "#startup-showcase",
    imgSrc: "/st.jpg",
    title: "Startup Showcase & Demo Days",
    description:
      "Annual showcase events that bring student founders face to face with investors, industry partners, and incubators—offering exposure, constructive feedback, and potential funding opportunities.",
    readMoreHref: "#showcase-details",
  },
  {
    id: 4,
    href: "#mentorship-guidance",
    imgSrc: "/men.jpg",
    title: "Mentorship & Business Guidance",
    description:
      "Guidance on business modeling, pitch deck preparation, market research, and prototyping supported by faculty, industry experts, and alumni entrepreneurs.",
    readMoreHref: "#mentorship-guidance-details",
  },
  {
    id: 5,
    href: "#innovation-culture",
    imgSrc: "/cul.jpg",
    title: "Culture of Creativity & Ownership",
    description:
      "A dynamic, youth-led environment encouraging fast learning, pivoting, and independent startup development. Innovators are supported whether they choose incubation or self-bootstrapping.",
    readMoreHref: "#innovation-culture-details",
  },
];

const StartupsPage = () => {
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
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Programs & Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the initiatives that empower our community of innovators and entrepreneurs
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.a
              key={card.id}
              href={card.href}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              aria-label={card.title}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-4">{card.description}</p>
                <div>
                  <a
                    href={card.readMoreHref}
                    className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read More <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Optional Call to Action - you can customize or omit */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
            <p className="text-lg mb-6 opacity-90">
              Join our community to take part in exciting hackathons, mentorship programs, and more.
            </p>
            <a
              href="#join"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Join Now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StartupsPage;
