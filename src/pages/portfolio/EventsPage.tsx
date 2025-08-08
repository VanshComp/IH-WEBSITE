
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Filter, Search, ExternalLink } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// --- Events Data ---
const EVENTS = [
  { src: "/RTEP.jpg", timeline: "09/02/2024 – 10/02/2024", title: "RTEP", Location: "Innovation Hub, Main Auditorium" },
  { src: "/hmit.jpg", timeline: "19/03/2024 – 21/03/2024", title: "HackMITWPU", Location: "Innovation Hub, Main Auditorium" },
  { src: "/ince.jpg", timeline: "05/05/2024", title: "Inception", Location: "Innovation Hub, Main Auditorium" },
];

const DUMMY_DATA = [
  { id: 4, href: "#", imgSrc: "/neuro.jpg", title: "Neuro Harmony Program", description: "...", readMoreHref: "#" },
  { id: 5, href: "#", imgSrc: "/nak.jpg", title: "Nakshatra Event", description: "...", readMoreHref: "#" },
  { id: 6, href: "#", imgSrc: "/esummit.png", title: "E-Summit 2024", description: "...", readMoreHref: "#" },
];

const tabs = [
  { id: 1, href: "#", imgSrc: "/ride.jpg", title: "RIDE - Research, Innovation & Entrepreneurship", description: "...", readMoreHref: "#" },
  { id: 2, href: "#", imgSrc: "/sih.jpg", title: "Smart India Hackathon 2023", description: "...", readMoreHref: "#" },
  { id: 3, href: "#", imgSrc: "/nasa.jpg", title: "NASA Space Apps Challenge", description: "...", readMoreHref: "#" },
];

// --- Unify All Events ---
const mappedEvents = [
  ...EVENTS.map((e, idx) => ({
    id: idx + 1,
    title: e.title,
    description: "",
    image: e.src,
    date: e.timeline,
    location: e.Location,
    category: "featured",
    readMoreHref: "#",
  })),
  ...DUMMY_DATA.map((e) => ({
    id: e.id,
    title: e.title,
    description: e.description,
    image: e.imgSrc,
    date: "",
    location: "",
    category: "special",
    readMoreHref: e.readMoreHref,
  })),
  ...tabs.map((e) => ({
    id: e.id + 10,
    title: e.title,
    description: e.description,
    image: e.imgSrc,
    date: "",
    location: "",
    category: "program",
    readMoreHref: e.readMoreHref,
  })),
];

// --- Dynamic: Extract Categories & Counts ---
function categoryLabel(cat) {
  // Customize display labels here if desired
  switch (cat) {
    case "featured": return "Innovation Hub Events";
    case "program":  return "Programs";
    case "special":  return "Special Events";
    default:         return cat.charAt(0).toUpperCase() + cat.slice(1);
  }
}
const dynamicCategories = Array.from(
  mappedEvents.reduce((map, item) => {
    map.set(item.category, (map.get(item.category) || 0) + 1);
    return map;
  }, new Map())
).map(([key, count]) => ({
  key: String(key),
  name: categoryLabel(key),
  count,
}));

const categories = [
  { id: 'all', label: 'All Events' },
  ...dynamicCategories.map(c => ({
    id: c.key,
    label: c.name
  }))
];

// --- Helpers (as before) ---
const getStatusByDate = (dateStr) => {
  if (!dateStr) return null;
  let [startStr, endStr] = dateStr.split('–').map((s) => s.trim());
  if (!startStr) return null;
  if (!endStr) endStr = startStr;
  const parseDate = (str) => {
    const parts = str.split('/');
    if (parts.length === 3) {
      return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    }
    return new Date(str);
  };
  const today = new Date();
  today.setHours(0,0,0,0);
  const start = parseDate(startStr);
  const end = parseDate(endStr);
  start.setHours(0,0,0,0);
  end.setHours(0,0,0,0);
  if (today < start) return "upcoming";
  if (today > end) return "completed";
  if (today >= start && today <= end) return "ongoing";
  return null;
};
const getStatusColor = (status) => {
  switch (status) {
    case 'upcoming': return 'bg-blue-100 text-blue-800';
    case 'completed': return 'bg-gray-100 text-gray-800';
    case 'ongoing': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};
const getCategoryColor = (category) => {
  switch (category) {
    case 'featured': return 'bg-purple-100 text-purple-800';
    case 'program': return 'bg-yellow-100 text-yellow-800';
    case 'special': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getFilteredEvents = (events, activeFilter, searchTerm) =>
  events.filter((event) => {
    const matchesFilter = activeFilter === 'all' || event.category === activeFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (event.description ? event.description.toLowerCase().includes(searchTerm.toLowerCase()) : false);
    return matchesFilter && matchesSearch;
  });

// --- Main Component ---
const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredEvents = getFilteredEvents(mappedEvents, activeFilter, searchTerm);
  const [ctaModal, setCtaModal] = useState(null);

  // CountUp scroll trigger
  const { ref: countsRef, inView: countsInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-600">Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our exciting events, workshops, and competitions to learn, network, and grow
          </p>
        </motion.div>

    

        {/* Search and Filter */}
        <motion.div className="mb-8"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeFilter === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => {
            const statusTag = getStatusByDate(event.date);
            return (
              <motion.div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {statusTag && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(statusTag)}`}>
                        {statusTag}
                      </span>
                    )}
                    {event.category && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  {event.description && (
                    <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  )}
                  <div className="space-y-2 mb-4">
                    {event.date && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" /> {event.date}
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" /> {event.location}
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    {event.readMoreHref ? (
                      <a
                        href={event.readMoreHref}
                        className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium flex items-center justify-center"
                      >
                        Read More <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    ) : (
                      <button
                        className="flex-1 bg-gray-300 text-gray-500 py-2 rounded-lg cursor-not-allowed text-sm font-medium"
                        disabled
                      >
                        More Info
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

    {/* Divider */}
        <div className="w-11/12 h-[0.9px] bg-[#6d6d6d] mx-auto my-8" />

        {/* Dynamic Events Category with CountUp Animation */}
        <section
          ref={countsRef}
          className="mt-8 w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-6 gap-6 text-center px-4 mx-auto"
        >
          {dynamicCategories.map((category) => (
            <div key={category.key} className="flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 transition-all mt-2">
                <CountUp
                  start={0}
                  end={category.count}
                  duration={1.3}
                  suffix="+"
                  useEasing={true}
                  separator=","
                  preserveValue={true}
                  redraw={false}
                  {...(countsInView ? {} : { end: 0 })}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {category.name}
              </h3>
            </div>
          ))}
        </section>
        {/* Call to Action with Modal */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <Calendar className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Want to Organize an Event?</h3>
            <p className="text-lg mb-6 opacity-90">
              Share your ideas and let's create amazing experiences together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCtaModal("propose")}
              >
                Propose Event
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCtaModal("guidelines")}
              >
                Event Guidelines
              </motion.button>
            </div>
          </div>
          {ctaModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
              <div className="bg-white rounded-xl p-8 shadow-xl max-w-md w-full relative">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={() => setCtaModal(null)}
                >
                  ×
                </button>
                {ctaModal === "propose" ? (
                  <>
                    <h2 className="text-xl font-bold mb-4">Propose an Event</h2>
                    <form>
                      <div className="mb-4">
                        <label className="block mb-2">Your Name</label>
                        <input className="border p-2 rounded w-full" type="text" placeholder="Name" />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2">Your Email</label>
                        <input className="border p-2 rounded w-full" type="email" placeholder="Email" />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2">Event Idea</label>
                        <textarea className="border p-2 rounded w-full" placeholder="Describe your event idea" />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                      >
                        Submit
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-bold mb-4">Event Guidelines</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-2">
                      <li>Submit your event proposal with key details.</li>
                      <li>Ensure your event fosters innovation and community engagement.</li>
                      <li>Follow campus safety and inclusivity policies.</li>
                      <li>Contact the Innovation Hub for additional support.</li>
                    </ul>
                    <button
                      className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                      onClick={() => setCtaModal(null)}
                    >
                      Close
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default EventsPage;
