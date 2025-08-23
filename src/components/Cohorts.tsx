import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  Target, 
  FileText, 
  Handshake,
  CheckCircle,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const Cohorts = () => {
  const [activeTab, setActiveTab] = useState('what');

  const tabs = [
    { id: 'what', label: 'What is it?', icon: HelpCircle },
    { id: 'looking', label: 'What we look for', icon: Search },
    { id: 'do', label: 'What we do', icon: Target },
    { id: 'application', label: 'Application', icon: FileText },
    { id: 'partners', label: 'Partners', icon: Handshake }
  ];

  const content = {
    what: {
      title: 'Innovation Cohorts Program',
      description: 'A structured 12-week program designed to accelerate student startups and innovative projects.',
      features: [
        'Intensive mentorship sessions with industry experts',
        'Weekly workshops on entrepreneurship and technology',
        'Access to funding opportunities and investor networks',
        'Collaborative workspace and resources',
        'Demo day presentation to potential investors',
        'Alumni network and continued support'
      ],
      stats: [
        { number: '50+', label: 'Startups Launched' },
        { number: '₹2Cr+', label: 'Funding Raised' },
        { number: '200+', label: 'Participants' },
        { number: '95%', label: 'Success Rate' }
      ]
    },
    looking: {
      title: 'What We Look For',
      description: 'We seek passionate individuals with innovative ideas and the drive to make a difference.',
      criteria: [
        {
          title: 'Innovative Thinking',
          description: 'Original ideas that solve real problems',
          icon: CheckCircle
        },
        {
          title: 'Commitment',
          description: 'Dedication to see projects through completion',
          icon: Clock
        },
        {
          title: 'Team Collaboration',
          description: 'Ability to work effectively in teams',
          icon: Users
        },
        {
          title: 'Growth Mindset',
          description: 'Willingness to learn and adapt',
          icon: TrendingUp
        }
      ]
    },
    do: {
      title: 'Program Activities',
      description: 'A comprehensive curriculum covering all aspects of startup development.',
      activities: [
        {
          week: 'Weeks 1-3',
          title: 'Foundation Building',
          tasks: ['Idea validation', 'Market research', 'Team formation', 'Business model canvas']
        },
        {
          week: 'Weeks 4-6',
          title: 'Product Development',
          tasks: ['MVP development', 'User testing', 'Iteration cycles', 'Technology stack selection']
        },
        {
          week: 'Weeks 7-9',
          title: 'Business Strategy',
          tasks: ['Go-to-market strategy', 'Financial planning', 'Legal considerations', 'IP protection']
        },
        {
          week: 'Weeks 10-12',
          title: 'Launch Preparation',
          tasks: ['Pitch deck creation', 'Investor meetings', 'Demo day preparation', 'Launch strategy']
        }
      ]
    },
    application: {
      title: 'Application Process',
      description: 'Join our cohort and accelerate your startup journey.',
      process: [
        { step: 1, title: 'Submit Application', description: 'Fill out our comprehensive application form' },
        { step: 2, title: 'Initial Screening', description: 'Our team reviews your application and idea' },
        { step: 3, title: 'Interview Round', description: 'Virtual interview with our selection committee' },
        { step: 4, title: 'Final Selection', description: 'Successful candidates are notified and onboarded' }
      ],
      deadline: 'Applications close: March 15, 2024',
      nextCohort: 'Cohort 5 starts: April 1, 2024'
    },
    partners: {
      title: 'Our Partners',
      description: 'We work with leading organizations to provide the best support for our cohorts.',
      partners: [
        { name: 'TiE Pune', type: 'Mentor Network', logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg' },
        { name: 'NASSCOM', type: 'Industry Support', logo: 'https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg' },
        { name: 'Angel Investors', type: 'Funding Partners', logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg' },
        { name: 'Tech Companies', type: 'Corporate Partners', logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg' }
      ]
    }
  };

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <section id="cohorts" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Innovation <span className="text-orange-600">Cohorts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your startup journey through our structured program designed for student entrepreneurs
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 m-1 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="h-4 w-4" />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {activeTab === 'what' && (
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.title}</h3>
                <p className="text-lg text-gray-600 mb-8">{currentContent.description}</p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {(currentContent as any).stats.map((stat: any, index: number) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(currentContent as any).features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'looking' && (
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.title}</h3>
                <p className="text-lg text-gray-600 mb-8">{currentContent.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(currentContent as any).criteria.map((criterion: any, index: number) => {
                    const IconComponent = criterion.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <IconComponent className="h-8 w-8 text-orange-600 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{criterion.title}</h4>
                          <p className="text-gray-600">{criterion.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'do' && (
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.title}</h3>
                <p className="text-lg text-gray-600 mb-8">{currentContent.description}</p>
                
                <div className="space-y-6">
                  {(currentContent as any).activities.map((activity: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                      <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{activity.title}</h4>
                          <span className="text-sm font-medium text-orange-600">{activity.week}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {activity.tasks.map((task: string, taskIndex: number) => (
                            <span
                              key={taskIndex}
                              className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm"
                            >
                              {task}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'application' && (
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.title}</h3>
                <p className="text-lg text-gray-600 mb-8">{currentContent.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Application Steps</h4>
                    <div className="space-y-4">
                      {(currentContent as any).process.map((step: any, index: number) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            {step.step}
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900">{step.title}</h5>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-600 to-yellow-600 text-white p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-4">Important Dates</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">{(currentContent as any).deadline}</p>
                      </div>
                      <div>
                        <p className="font-medium">{(currentContent as any).nextCohort}</p>
                      </div>
                    </div>
                    <motion.button
                      className="mt-6 w-full bg-white text-orange-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'partners' && (
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.title}</h3>
                <p className="text-lg text-gray-600 mb-8">{currentContent.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {(currentContent as any).partners.map((partner: any, index: number) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                      <h4 className="font-semibold text-gray-900 mb-2">{partner.name}</h4>
                      <p className="text-sm text-gray-600">{partner.type}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Cohorts;