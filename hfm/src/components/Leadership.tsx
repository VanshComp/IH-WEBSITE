import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen, Star, Linkedin, Github, Twitter } from 'lucide-react';

const Leadership = () => {
  const [activeTeam, setActiveTeam] = useState('current');

  const teams = {
    current: [
      {
        name: 'Arjun Sharma',
        role: 'President',
        department: 'Computer Science',
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
        bio: 'Leading Innovation Hub with passion for tech entrepreneurship',
        achievements: ['Founded 2 startups', 'Google Summer of Code'],
        social: { linkedin: '#', github: '#', twitter: '#' }
      },
      {
        name: 'Priya Patel',
        role: 'Vice President',
        department: 'Electronics',
        image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
        bio: 'Driving innovation in IoT and hardware projects',
        achievements: ['Intel Innovation Award', 'Published Research'],
        social: { linkedin: '#', github: '#', twitter: '#' }
      },
      {
        name: 'Rahul Gupta',
        role: 'Technical Lead',
        department: 'AI & ML',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        bio: 'Specializing in machine learning and data science',
        achievements: ['Kaggle Master', 'AI Research Paper'],
        social: { linkedin: '#', github: '#', twitter: '#' }
      },
      {
        name: 'Sneha Reddy',
        role: 'Creative Director',
        department: 'Design',
        image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg',
        bio: 'Creating stunning visual experiences and user interfaces',
        achievements: ['Dribbble Top Shot', 'Design Competition Winner'],
        social: { linkedin: '#', github: '#', twitter: '#' }
      }
    ],
    faculty: [
      {
        name: 'Dr. Rajesh Kumar',
        role: 'Faculty Advisor',
        department: 'Computer Science',
        image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
        bio: 'Guiding students in technological innovation and entrepreneurship',
        achievements: ['PhD in AI', '15+ Years Industry Experience'],
        social: { linkedin: '#', github: '#', twitter: '#' }
      },
      {
        name: 'Prof. Meera Singh',
        role: 'Startup Mentor',
        department: 'Business',
        image: 'https://images.pexels.com/photos/3763153/pexels-photo-3763153.jpeg',
        bio: 'Expert in business strategy and startup development',
        achievements: ['MBA from IIM', 'Serial Entrepreneur'],
        social: { linkedin: '#', github: '#', twitter: '#' }
      }
    ],
    mentors: [
      {
        name: 'Vikram Agarwal',
        role: 'Senior Student Mentor',
        department: 'Final Year CS',
        image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg',
        bio: 'Mentoring juniors in full-stack development',
        achievements: ['Google Intern', 'Open Source Contributor'],
        social: { linkedin: '#', github: '#', twitter: '#' }
      },
      {
        name: 'Anisha Jain',
        role: 'Design Mentor',
        department: 'Final Year Design',
        image: 'https://images.pexels.com/photos/3763151/pexels-photo-3763151.jpeg',
        bio: 'Helping students create impactful design solutions',
        achievements: ['Adobe Certified', 'UX Design Awards'],
        social: { linkedin: '#', github: '#', twitter: '#' }
      }
    ]
  };

  const teamTabs = [
    { id: 'current', label: 'Current Team', icon: Users },
    { id: 'faculty', label: 'Faculty Mentors', icon: BookOpen },
    { id: 'mentors', label: 'Student Mentors', icon: Star }
  ];

  const currentTeamData = teams[activeTeam as keyof typeof teams];
  
  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-600">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation and fostering entrepreneurship in our community
          </p>
        </motion.div>

        {/* Team Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {teamTabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTeam(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-full font-medium transition-all duration-300 ${
                  activeTeam === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
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

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          key={activeTeam}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentTeamData.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Card Front */}
              <div className="relative overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={member.social.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <Award className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-purple-600 font-medium text-sm mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.department}</p>
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">{member.bio}</p>
                
                {/* Achievements */}
                <div className="space-y-1">
                  {member.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              "To create a thriving ecosystem where students can explore, innovate, and build the future. 
              We believe in empowering every member to turn their ideas into reality, fostering collaboration, 
              and building solutions that make a positive impact on society."
            </p>
            <div className="mt-6 flex justify-center">
              <div className="flex items-center space-x-2 text-purple-600">
                <Users className="h-5 w-5" />
                <span className="font-medium">Together We Innovate</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;