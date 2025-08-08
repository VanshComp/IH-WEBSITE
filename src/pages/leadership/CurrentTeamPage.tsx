// import React from 'react';
// import { motion } from 'framer-motion';
// import { Users, Award, Linkedin, Github, Twitter } from 'lucide-react';

// const CurrentTeamPage = () => {
//   const team = [
//     {
//       name: 'Arjun Sharma',
//       role: 'President',
//       department: 'Computer Science',
//       image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
//       bio: 'Leading Innovation Hub with passion for tech entrepreneurship and community building.',
//       achievements: ['Founded 2 startups', 'Google Summer of Code', 'Published researcher'],
//       social: { linkedin: '#', github: '#', twitter: '#' }
//     },
//     {
//       name: 'Priya Patel',
//       role: 'Vice President',
//       department: 'Electronics',
//       image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
//       bio: 'Driving innovation in IoT and hardware projects with focus on sustainable technology.',
//       achievements: ['Intel Innovation Award', 'Published Research', 'Patent holder'],
//       social: { linkedin: '#', github: '#', twitter: '#' }
//     },
//     {
//       name: 'Rahul Gupta',
//       role: 'Technical Lead',
//       department: 'AI & ML',
//       image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
//       bio: 'Specializing in machine learning and data science with expertise in deep learning.',
//       achievements: ['Kaggle Master', 'AI Research Paper', 'Microsoft MVP'],
//       social: { linkedin: '#', github: '#', twitter: '#' }
//     },
//     {
//       name: 'Sneha Reddy',
//       role: 'Creative Director',
//       department: 'Design',
//       image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg',
//       bio: 'Creating stunning visual experiences and user interfaces that inspire and engage.',
//       achievements: ['Dribbble Top Shot', 'Design Competition Winner', 'Adobe Certified'],
//       social: { linkedin: '#', github: '#', twitter: '#' }
//     },
//     {
//       name: 'Vikram Agarwal',
//       role: 'Operations Manager',
//       department: 'Business',
//       image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg',
//       bio: 'Managing day-to-day operations and ensuring smooth execution of all initiatives.',
//       achievements: ['Event Management Expert', 'Community Builder', 'Startup Mentor'],
//       social: { linkedin: '#', github: '#', twitter: '#' }
//     },
//     {
//       name: 'Anisha Jain',
//       role: 'Marketing Head',
//       department: 'Communications',
//       image: 'https://images.pexels.com/photos/3763151/pexels-photo-3763151.jpeg',
//       bio: 'Building brand awareness and creating compelling content that resonates with our community.',
//       achievements: ['Digital Marketing Expert', 'Content Creator', 'Social Media Strategist'],
//       social: { linkedin: '#', github: '#', twitter: '#' }
//     }
//   ];

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
//             Current <span className="text-purple-600">Team</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Meet the passionate leaders driving innovation and fostering entrepreneurship in our community
//           </p>
//         </motion.div>

//         {/* Team Stats */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//             <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
//             <div className="text-2xl font-bold text-gray-900">12</div>
//             <div className="text-gray-600">Core Team Members</div>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//             <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
//             <div className="text-2xl font-bold text-gray-900">50+</div>
//             <div className="text-gray-600">Combined Achievements</div>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-lg text-center">
//             <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
//             <div className="text-2xl font-bold text-gray-900">5</div>
//             <div className="text-gray-600">Departments</div>
//           </div>
//         </motion.div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {team.map((member, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//             >
//               {/* Card Image */}
//               <div className="relative overflow-hidden">
//                 <div className="h-64 overflow-hidden">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="flex space-x-3">
//                     <a
//                       href={member.social.linkedin}
//                       className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
//                     >
//                       <Linkedin className="h-4 w-4 text-white" />
//                     </a>
//                     <a
//                       href={member.social.github}
//                       className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
//                     >
//                       <Github className="h-4 w-4 text-white" />
//                     </a>
//                     <a
//                       href={member.social.twitter}
//                       className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
//                     >
//                       <Twitter className="h-4 w-4 text-white" />
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
//                   <Award className="h-5 w-5 text-yellow-500" />
//                 </div>
//                 <p className="text-purple-600 font-medium text-sm mb-1">{member.role}</p>
//                 <p className="text-gray-600 text-sm mb-4">{member.department}</p>
//                 <p className="text-gray-700 text-sm mb-4 line-clamp-3">{member.bio}</p>
                
//                 {/* Achievements */}
//                 <div className="space-y-1">
//                   <h4 className="text-sm font-medium text-gray-900">Key Achievements:</h4>
//                   {member.achievements.map((achievement, achIndex) => (
//                     <div key={achIndex} className="flex items-center text-xs text-gray-600">
//                       <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
//                       {achievement}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Vision Statement */}
//         <motion.div
//           className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Leadership Vision</h3>
//             <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
//               "We believe in empowering every member to turn their ideas into reality, fostering collaboration, 
//               and building solutions that make a positive impact on society. Our diverse leadership team brings 
//               together expertise from technology, design, business, and communications to create a thriving 
//               ecosystem where innovation flourishes."
//             </p>
//             <div className="mt-6 flex justify-center">
//               <div className="flex items-center space-x-2 text-purple-600">
//                 <Users className="h-5 w-5" />
//                 <span className="font-medium">Leading with Purpose, Innovating with Passion</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CurrentTeamPage;



import React from "react";

// --- Types ---
interface Member {
  name: string;
  position: string;
  image?: string;
}

interface TeamDepartment {
  department: string;
  members: Member[];
}

// --- Data ---
const placeholderImage = "https://via.placeholder.com/150?text=Profile";

const teamData: TeamDepartment[] = [
  {
    department: "Leadership",
    members: [
      { name: "Shashwat Nande", position: "President", image: "/ShashwatNande.png" },
      { name: "Swastik Singh", position: "Vice President", image: "/Swastik Singh.jpg" },
      { name: "Zahid Pansare", position: "Executive Head", image: "/Zahid Pansare.jpg" },
    ],
  },
  {
    department: "Company Relations Department",
    members: [
      { name: "Janvi Bajpayee", position: "Company Relations Head", image: "/images/janvi.jpg" },
      { name: "Alroy Lopez", position: "Company Relations Committee Member", image: "/images/alroy.jpg" },
    ],
  },
  {
    department: "Technical Department",
    members: [
      { name: "Abhir Bengali", position: "Technical Head", image: "/Abhir Bengali.jpg" },
      { name: "Zaara Hirani", position: "Project Manager", image: "/images/zaara.jpg" },
      { name: "Aaradhya Banginwar", position: "Software Head", image: "/Aaradhya Banginwar.png" },
    ],
  },
  {
    department: "Events and Operations",
    members: [
      { name: "Atharva Falle", position: "Events and Operations Head", image: "/Atharva Falle.jpg" },
    ],
  },
  {
    department: "Design Department",
    members: [
      { name: "Shlok Jain", position: "Design Head", image: "/Shlok Jain.jpg" },
      { name: "Manaswi Deshmukh", position: "Design Committee Member", image: "/Manaswi Deshmukh.jpg" },
    ],
  },
  {
    department: "Marketing Department",
    members: [
      { name: "Niyati Mahawar", position: "Marketing Committee Member", image: "/Niyati Mahavar.jpg" },
      { name: "Divya Tiwari", position: "Marketing Committee Member", image: "/images/divya.jpg" },
      { name: "Lakshya Maheshwari", position: "Marketing Committee Member", image: "/images/lakshya.jpg" },
    ],
  },
  {
    department: "Data & HR Department",
    members: [
      { name: "Videeta Raut", position: "Data & HR Committee Member", image: "/Videeta Raut.jpg" },
      { name: "Janhavi Patel", position: "Data & HR Committee Member", image: "/Janhavi Patel.jpg" },
    ],
  },
];

// --- Helper to get initials ---
function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// --- Member Card Component ---
interface MemberCardProps extends Member {}

const MemberCard: React.FC<MemberCardProps> = ({ name, position, image }) => (
  <div className="group relative flex flex-col items-center px-6 py-8 bg-white border border-gray-100 rounded-2xl shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-yellow-400 max-w-[300px] w-full">
    {/* Profile image with outline */}
    <div className="relative">
      <img
        src={image || placeholderImage}
        alt={name}
        className="w-28 h-28 rounded-full border-4 border-blue-500/80 bg-white object-cover shadow-lg group-hover:border-yellow-400 transition duration-200"
        loading="lazy"
      />
      {/* Initials overlay for fallback */}
      {!image && (
        <span className="absolute inset-0 flex items-center justify-center font-bold text-2xl text-blue-900">
          {initials(name)}
        </span>
      )}
      {/* Icon badge for position */}
      <span className="absolute -bottom-2 -right-2 bg-yellow-400 text-xs text-blue-900 px-2 py-1 rounded-lg shadow">
        {position.split(" ")[0]}
      </span>
    </div>
    {/* Name & Position */}
    <h3 className="mt-6 text-xl font-bold text-gray-900">{name}</h3>
    <span className="mt-2 bg-blue-50 text-blue-700/90 rounded-2xl px-4 py-1 text-sm font-medium shadow-sm">
      {position}
    </span>
  </div>
);

// --- Main Team Page ---
const CurrentTeamPage: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-50 to-yellow-50 flex flex-col justify-center items-center gap-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 text-blue-700 tracking-tight drop-shadow-sm">
        Our Leadership & Team
      </h1>
      <div className="max-w-7xl mx-auto space-y-24 ">
        {teamData.map(({ department, members }) => (
          <section
            key={department}
            className="my-2 flex flex-col justify-center"
          >
            <div className="flex items-center mb-10">
              <div className="w-2 h-10 bg-yellow-400 rounded-md mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 tracking-tight">
                {department}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 justify-items-center mb-6">
              {members.map(({ name, position, image }) => (
                <MemberCard
                  key={name}
                  name={name}
                  position={position}
                  image={image}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CurrentTeamPage;
