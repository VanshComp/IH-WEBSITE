// import React from 'react';
// import { motion } from 'framer-motion';
// import { Rocket, TrendingUp, Users, DollarSign, Calendar, ExternalLink } from 'lucide-react';

// const StartupsPage = () => {
//   const startups = [
//     {
//       id: 1,
//       name: 'EduTech Solutions',
//       description: 'Revolutionizing online learning experiences through AI-powered personalized education platforms that adapt to individual learning styles.',
//       logo: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg',
//       founded: '2023',
//       funding: 'Seed Stage',
//       fundingAmount: '₹50L',
//       employees: 8,
//       industry: 'EdTech',
//       website: '#',
//       founders: ['Arjun Sharma', 'Priya Patel'],
//       achievements: ['Winner of MIT-WPU Startup Challenge', 'Featured in TechCrunch India']
//     },
//     {
//       id: 2,
//       name: 'GreenLogistics',
//       description: 'Sustainable supply chain management platform using IoT and blockchain technology to optimize delivery routes and reduce carbon footprint.',
//       logo: 'https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg',
//       founded: '2022',
//       funding: 'Series A',
//       fundingAmount: '₹2Cr',
//       employees: 15,
//       industry: 'Logistics',
//       website: '#',
//       founders: ['Rahul Gupta', 'Sneha Reddy'],
//       achievements: ['Raised Series A funding', 'Partnership with major e-commerce platforms']
//     },
//     {
//       id: 3,
//       name: 'HealthConnect',
//       description: 'Telemedicine platform connecting rural patients with urban healthcare providers through AI-assisted diagnosis and treatment recommendations.',
//       logo: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
//       founded: '2023',
//       funding: 'Pre-Seed',
//       fundingAmount: '₹25L',
//       employees: 6,
//       industry: 'HealthTech',
//       website: '#',
//       founders: ['Vikram Agarwal', 'Anisha Jain'],
//       achievements: ['Government healthcare partnership', 'Featured in Forbes 30 Under 30']
//     },
//     {
//       id: 4,
//       name: 'AgriSmart',
//       description: 'Smart farming solutions using drone technology and machine learning to optimize crop yields and reduce resource consumption.',
//       logo: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
//       founded: '2022',
//       funding: 'Seed Stage',
//       fundingAmount: '₹75L',
//       employees: 12,
//       industry: 'AgriTech',
//       website: '#',
//       founders: ['Ravi Kumar', 'Meera Singh'],
//       achievements: ['Winner of National AgriTech Challenge', 'Pilot with 500+ farmers']
//     }
//   ];

//   const getFundingColor = (funding: string) => {
//     switch (funding) {
//       case 'Series A':
//         return 'bg-green-100 text-green-800';
//       case 'Seed Stage':
//         return 'bg-blue-100 text-blue-800';
//       case 'Pre-Seed':
//         return 'bg-yellow-100 text-yellow-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Our <span className="text-yellow-500">Startups</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Meet the innovative startups founded by our community members who are changing the world
//           </p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//             <Rocket className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
//             <div className="text-2xl font-bold text-gray-900">25+</div>
//             <div className="text-gray-600">Startups Launched</div>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//             <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
//             <div className="text-2xl font-bold text-gray-900">₹10Cr+</div>
//             <div className="text-gray-600">Total Funding</div>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//             <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
//             <div className="text-2xl font-bold text-gray-900">150+</div>
//             <div className="text-gray-600">Jobs Created</div>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//             <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
//             <div className="text-2xl font-bold text-gray-900">85%</div>
//             <div className="text-gray-600">Success Rate</div>
//           </div>
//         </motion.div>

//         {/* Startups Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {startups.map((startup, index) => (
//             <motion.div
//               key={startup.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={startup.logo}
//                   alt={startup.name}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
              
//               <div className="p-6">
//                 <div className="flex items-start justify-between mb-3">
//                   <h3 className="text-xl font-bold text-gray-900">{startup.name}</h3>
//                   <span className={`px-3 py-1 rounded-full text-sm font-medium ${getFundingColor(startup.funding)}`}>
//                     {startup.funding}
//                   </span>
//                 </div>
                
//                 <p className="text-gray-600 mb-4 line-clamp-3">{startup.description}</p>
                
//                 <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
//                   <div>
//                     <span className="text-gray-500">Founded:</span>
//                     <span className="ml-2 font-medium">{startup.founded}</span>
//                   </div>
//                   <div>
//                     <span className="text-gray-500">Industry:</span>
//                     <span className="ml-2 font-medium">{startup.industry}</span>
//                   </div>
//                   <div>
//                     <span className="text-gray-500">Funding:</span>
//                     <span className="ml-2 font-medium text-green-600">{startup.fundingAmount}</span>
//                   </div>
//                   <div>
//                     <span className="text-gray-500">Team Size:</span>
//                     <span className="ml-2 font-medium">{startup.employees}</span>
//                   </div>
//                 </div>
                
//                 <div className="mb-4">
//                   <h4 className="text-sm font-medium text-gray-900 mb-2">Founders:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {startup.founders.map((founder, founderIndex) => (
//                       <span
//                         key={founderIndex}
//                         className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
//                       >
//                         {founder}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="mb-4">
//                   <h4 className="text-sm font-medium text-gray-900 mb-2">Key Achievements:</h4>
//                   <ul className="space-y-1">
//                     {startup.achievements.map((achievement, achIndex) => (
//                       <li key={achIndex} className="flex items-start text-sm text-gray-600">
//                         <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 mt-2 flex-shrink-0" />
//                         {achievement}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div className="flex space-x-3">
//                   <a
//                     href={startup.website}
//                     className="flex items-center space-x-2 px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors duration-200 text-sm font-medium"
//                   >
//                     <ExternalLink className="h-4 w-4" />
//                     <span>Visit Website</span>
//                   </a>
//                   <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm">
//                     <Users className="h-4 w-4" />
//                     <span>Connect</span>
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <motion.div
//           className="text-center mt-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-gray-900">
//             <Rocket className="h-16 w-16 mx-auto mb-4" />
//             <h3 className="text-2xl font-bold mb-4">Have a Startup Idea?</h3>
//             <p className="text-lg mb-6 opacity-90">
//               Join our incubation program and turn your vision into reality
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Apply for Incubation
//               </motion.button>
//               <motion.button
//                 className="px-6 py-3 bg-transparent border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-200"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Learn More
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default StartupsPage;


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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
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
