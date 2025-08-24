// Simulates fetching data from an API or CMS
export const projectData = [
    { 
        id: 1, 
        title: 'Samavadini Chatbot', 
        description: 'Tackles the issue of redundant FAQs being brought up to the exam department through its bi-functional (voice and text-based) interface.', 
        image: '/sam.png', // changed to public folder path
        technologies: ['NLP', 'Voice Processing', 'Multi-language'], 
        category: 'AI/ML',
        date: "2024-05-20",
        status: "completed",
        links: {
            demo: "#",
            github: "#"
        }
    },
    { 
        id: 2, 
        title: 'Divyangjan Support', 
        description: 'Caters to the need of each specially-abled students by allowing them to request various services available for them like writing aid, supplementary notes, peer support, etc.', 
        image: '/div.png', 
        technologies: ['Accessibility', 'Support System', 'Credit System'], 
        category: 'Web App',
        date: "2024-03-15",
        status: "completed",
        links: {
            demo: "#",
            github: "#"
        }
    },
    { 
        id: 3, 
        title: 'Verification Module', 
        description: 'An interface for validating students graduation/college documents for verification and allowing the entire process to be seamlessly centralized and automated.', 
        image: '/ver.png', 
        technologies: ['Automation', 'Centralized System'], 
        category: 'Web App',
        date: "2024-01-10",
        status: "in-progress",
        links: {
            github: "#"
        }
    },
    { 
        id: 4, 
        title: 'MOU Tracker', 
        description: 'It is a centralized system for all processes surrounding college-based MOUs. System would aim to cover processes like initiation, tracking, termination, renewal, updation, etc.', 
        image: '/mou.png', 
        technologies: ['Process Management', 'Tracking', 'Administration'], 
        category: 'Web App',
        date: "2023-11-05",
        status: "completed",
        links: {
            demo: "#",
            github: "#"
        }
    },
    { 
        id: 5, 
        title: 'PHD Tracker', 
        description: 'Automates a students journey towards a Ph.D. by providing features such as progress tracking, goal setting, collaboration, task and document management, reporting.', 
        image: '/ph.png', 
        technologies: ['Progress Tracking', 'Goal Setting', 'Collaboration'], 
        category: 'Web App',
        date: "2023-09-20",
        status: "completed",
        links: {
            demo: "#",
            github: "#"
        }
    },
    { 
        id: 6, 
        title: 'Insudox', 
        description: 'Online insurance filing, tracking and claiming software which would allow for people to avail assistance while going through tedious procedures of company-based policy reimbursements.', 
        image: 'ins.png', 
        technologies: ['Insurance', 'Filing System', 'Claims Processing'], 
        category: 'Web App',
        date: "2023-07-18",
        status: "completed",
        links: {
            demo: "#",
            github: "#"
        }
    },
    { 
        id: 7, 
        title: 'CoBand - 19', 
        description: 'This project aimed to tackle the issue of managing students after college reopening by tracking vitals of students with the help of this band that will actually regulate the students.', 
        image: '/co19.png', 
        technologies: ['Health Monitoring', 'IoT', 'Student Safety'], 
        category: 'IoT',
        date: "2023-05-30",
        status: "completed",
        links: {
            github: "#"
        }
    },
    { 
        id: 8, 
        title: 'I - Traffic', 
        description: 'It is an intelligent traffic management system designed for the Indian Traffic System. Without changing the current set-up of signals, this device aims to optimize signal timers.', 
        image: '/traffic.png', 
        technologies: ['Traffic Management', 'Deep Learning', 'IoT'], 
        category: 'AI/ML',
        date: "2023-04-12",
        status: "completed",
        links: {
            github: "#"
        }
    },
    { 
        id: 9, 
        title: 'NGO Network', 
        description: 'This application works to connect NGOs across the country in order to meet the basic needs of the underprivileged people of the society.', 
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
        technologies: ['Social Network', 'NGO Management', 'Community Service'], 
        category: 'Web App',
        date: "2023-02-25",
        status: "completed",
        links: {
            demo: "#",
            github: "#"
        }
    },
    { 
        id: 10, 
        title: 'Robotic Arm E - Yantra', 
        description: 'Two Robotic arms were simulated in an automated warehouse setting with the help of ROS, Robotic Perception, Robotic Manipulation, IoT, Python and Google App Scripting.', 
        image: '/robo.png', 
        technologies: ['Robotics', 'ROS', 'Automation'], 
        category: 'IoT',
        date: "2022-12-15",
        status: "completed",
        links: {
            github: "#"
        }
    },
    { 
        id: 11, 
        title: 'Friend in Need', 
        description: 'It is a very innovative mobile application designed to curb domestic violence using appropriate mechanisms. It is also helpful for people facing mental health issues.', 
        image: '/friend.png', 
        technologies: ['Mental Health', 'Safety', 'Mobile App'], 
        category: 'Web App',
        date: "2022-10-01",
        status: "completed",
        links: {
            github: "#"
        }
    },
    { 
        id: 12, 
        title: 'Automatic Hand Sanitization', 
        description: 'Hand sanitization Module that senses the hand and dispenses sanitizer automatically while also reading the users temperature and checking if it is a safe value.', 
        image: '/handsani.jpg', 
        technologies: ['Automation', 'Health Safety', 'IoT'], 
        category: 'IoT',
        date: "2022-08-19",
        status: "completed",
        links: {
            github: "#"
        }
    },
    { 
        id: 13, 
        title: 'Speed Check', 
        description: 'As the name suggests, this device helps in controlling the speed limits of two-wheelers in order to reduce accidents. It also helps to keep your bike safe.', 
        image: '/speed.png', 
        technologies: ['Vehicle Safety', 'Speed Control', 'Anti-theft'], 
        category: 'IoT',
        date: "2022-06-28",
        status: "completed",
        links: {
            github: "#"
        }
    },
    { 
        id: 14, 
        title: 'YOunion', 
        description: 'Done by the First-Year students of our club, YOUnion was devised as a platform for professional connections catering to students and budding enthusiasts.', 
        image: '/union.png', 
        technologies: ['Professional Network', 'Student Platform', 'Collaboration'], 
        category: 'Web App',
        date: "2022-04-05",
        status: "completed",
        links: {
            demo: "#",
            github: "#"
        }
    }
];

export const projectCategories = ['All', 'Web App', 'AI/ML', 'IoT'];
