const careerRoadmaps = {
    'software-development': {
      title: 'Software Developer',
      beginner: {
        mustLearn: [
          'Programming Fundamentals',
          'Data Structures & Algorithms',
          'Version Control (Git)',
          'Command Line Basics'
        ],
        recommended: ['Problem Solving', 'Basic Mathematics', 'Computer Science Basics'],
        resources: [
          {
            type: 'course',
            name: 'CS50: Introduction to Computer Science',
            provider: 'Harvard/edX',
            url: 'https://www.edx.org/cs50',
            cost: 'Free'
          },
          {
            type: 'video',
            name: 'Programming Fundamentals Crash Course',
            provider: 'FreeCodeCamp',
            url: 'https://www.youtube.com/watch?v=zOjov-2OZ0E',
            cost: 'Free'
          },
          {
            type: 'book',
            name: 'Clean Code',
            author: 'Robert C. Martin',
            url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882'
          }
        ],
        mentors: [
          {
            name: 'Tech Lead Community',
            platform: 'Discord',
            url: 'https://discord.gg/techleads'
          }
        ],
        timeEstimate: '6 months'
      },
      intermediate: {
        mustLearn: [
          'Object-Oriented Programming',
          'Database Design',
          'API Development',
          'Testing Methodologies'
        ],
        recommended: ['Design Patterns', 'Code Review Skills', 'CI/CD Basics'],
        resources: [
          {
            type: 'course',
            name: 'Software Architecture & Design',
            provider: 'Udacity',
            url: 'https://www.udacity.com/course/software-architecture-design--ud821',
            cost: 'Paid'
          },
          {
            type: 'video',
            name: 'Design Patterns in Object Oriented Programming',
            provider: 'Christopher Okhravi',
            url: 'https://www.youtube.com/watch?v=v9ejT8FO-7I',
            cost: 'Free'
          },
          {
            type: 'book',
            name: 'Design Patterns: Elements of Reusable Object-Oriented Software',
            author: 'Gang of Four',
            url: 'https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8'
          }
        ],
        mentors: [
          {
            name: 'Software Engineering Daily',
            platform: 'Podcast & Community',
            url: 'https://softwareengineeringdaily.com/'
          }
        ],
        timeEstimate: '8 months'
      },
      advanced: {
        mustLearn: [
          'System Design',
          'Microservices Architecture',
          'Cloud Services',
          'Performance Optimization'
        ],
        recommended: ['Team Leadership', 'Technical Writing', 'Project Architecture'],
        resources: [
          {
            type: 'course',
            name: 'Microservices Architecture',
            provider: 'Pluralsight',
            url: 'https://www.pluralsight.com/courses/microservices-architecture',
            cost: 'Paid'
          },
          {
            type: 'book',
            name: 'Designing Data-Intensive Applications',
            author: 'Martin Kleppmann',
            url: 'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321'
          }
        ],
        mentors: [
          {
            name: 'System Design Community',
            platform: 'Reddit',
            url: 'https://www.reddit.com/r/systemdesign/'
          }
        ],
        timeEstimate: '12 months'
      }
    },
  
    'ui-ux-design': {
      title: 'UI & UX Designer',
      beginner: {
        mustLearn: [
          'Design Fundamentals',
          'User Research',
          'Wireframing',
          'Design Thinking'
        ],
        recommended: ['Color Theory', 'Typography', 'Sketching'],
        resources: [
          {
            type: 'course',
            name: 'Google UX Design Professional Certificate',
            provider: 'Coursera',
            url: 'https://www.coursera.org/professional-certificates/google-ux-design',
            cost: 'Paid'
          },
          {
            type: 'video',
            name: 'UX Design Fundamentals',
            provider: 'Skillshare',
            url: 'https://www.skillshare.com/classes/UX-Design-Fundamentals',
            cost: 'Paid'
          },
          {
            type: 'book',
            name: "Don't Make Me Think",
            author: 'Steve Krug',
            url: 'https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515'
          }
        ],
        mentors: [
          {
            name: 'UX Design Community',
            platform: 'Behance',
            url: 'https://www.behance.net/galleries/ui-ux'
          }
        ],
        timeEstimate: '4 months'
      },
      intermediate: {
        mustLearn: [
          'Prototyping Tools (Figma/Sketch)',
          'Information Architecture',
          'Interaction Design',
          'Usability Testing'
        ],
        recommended: ['Design Systems', 'Mobile Design Patterns', 'Accessibility'],
        resources: [
          {
            type: 'course',
            name: 'Advanced UI/UX Design',
            provider: 'Design+Code',
            url: 'https://designcode.io/',
            cost: 'Paid'
          },
          {
            type: 'video',
            name: 'Figma Tutorial',
            provider: 'Figma',
            url: 'https://www.youtube.com/c/Figmadesign',
            cost: 'Free'
          }
        ],
        timeEstimate: '6 months'
      },
      advanced: {
        mustLearn: [
          'Design Strategy',
          'Team Leadership',
          'Design Operations',
          'UX Research Methods'
        ],
        recommended: ['Service Design', 'Design Ethics', 'Business Strategy'],
        resources: [
          {
            type: 'conference',
            name: 'UX Research & Strategy',
            provider: 'Nielsen Norman Group',
            url: 'https://www.nngroup.com/training/',
            cost: 'Paid'
          }
        ],
        timeEstimate: '8 months'
      }
    },
  
    'information-security': {
      title: 'Information Security Analyst',
      beginner: {
        mustLearn: [
          'Network Fundamentals',
          'Operating Systems',
          'Security Basics',
          'Cryptography Fundamentals'
        ],
        recommended: ['Linux Basics', 'Programming Basics', 'Security Tools'],
        resources: [
          {
            type: 'certification',
            name: 'CompTIA Security+',
            provider: 'CompTIA',
            url: 'https://www.comptia.org/certifications/security',
            cost: 'Paid'
          },
          {
            type: 'course',
            name: 'Introduction to Cybersecurity',
            provider: 'Cisco Networking Academy',
            url: 'https://www.netacad.com/courses/cybersecurity',
            cost: 'Free'
          }
        ],
        timeEstimate: '6 months'
      },
      intermediate: {
        mustLearn: [
          'Penetration Testing',
          'Security Auditing',
          'Incident Response',
          'Malware Analysis'
        ],
        recommended: ['Forensics', 'Threat Intelligence', 'Security Architecture'],
        resources: [
          {
            type: 'certification',
            name: 'Certified Ethical Hacker (CEH)',
            provider: 'EC-Council',
            url: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
            cost: 'Paid'
          }
        ],
        timeEstimate: '8 months'
      },
      advanced: {
        mustLearn: [
          'Advanced Threat Detection',
          'Security Strategy',
          'Risk Management',
          'Security Leadership'
        ],
        recommended: ['Cloud Security', 'Zero Trust Architecture', 'Compliance'],
        resources: [
          {
            type: 'certification',
            name: 'CISSP',
            provider: '(ISC)²',
            url: 'https://www.isc2.org/Certifications/CISSP',
            cost: 'Paid'
          }
        ],
        timeEstimate: '12 months'
      }
    }
  };
  // Continuing with Cloud Engineering, Network Engineering, and Machine Learning paths
const careerRoadmaps2 = {
    'cloud-engineering': {
      title: 'Cloud Engineer',
      beginner: {
        mustLearn: [
          'Cloud Computing Fundamentals',
          'Linux Administration',
          'Basic Networking',
          'Command Line Interface'
        ],
        recommended: ['Python/Shell Scripting', 'Git Basics', 'Containerization Basics'],
        resources: [
          {
            type: 'certification',
            name: 'AWS Cloud Practitioner',
            provider: 'Amazon',
            url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
            cost: 'Paid'
          },
          {
            type: 'course',
            name: 'Introduction to Cloud Computing',
            provider: 'IBM/Coursera',
            url: 'https://www.coursera.org/learn/introduction-to-cloud',
            cost: 'Free'
          },
          {
            type: 'video',
            name: 'Cloud Computing Full Course',
            provider: 'freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=2LaAJq1lB1Q',
            cost: 'Free'
          }
        ],
        mentors: [
          {
            name: 'AWS Community',
            platform: 'Reddit',
            url: 'https://www.reddit.com/r/aws/'
          }
        ],
        timeEstimate: '6 months'
      },
      intermediate: {
        mustLearn: [
          'Infrastructure as Code',
          'Docker & Kubernetes',
          'CI/CD Pipelines',
          'Cloud Security'
        ],
        recommended: ['Monitoring & Logging', 'Cost Optimization', 'High Availability'],
        resources: [
          {
            type: 'certification',
            name: 'AWS Solutions Architect Associate',
            provider: 'Amazon',
            url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
            cost: 'Paid'
          },
          {
            type: 'course',
            name: 'Terraform Fundamentals',
            provider: 'HashiCorp',
            url: 'https://learn.hashicorp.com/terraform',
            cost: 'Free'
          }
        ],
        timeEstimate: '8 months'
      },
      advanced: {
        mustLearn: [
          'Multi-Cloud Architecture',
          'Cloud Native Applications',
          'DevOps Practices',
          'Disaster Recovery'
        ],
        recommended: ['Serverless Architecture', 'Cloud Migration', 'Enterprise Architecture'],
        resources: [
          {
            type: 'certification',
            name: 'Google Cloud Professional Cloud Architect',
            provider: 'Google',
            url: 'https://cloud.google.com/certification/cloud-architect',
            cost: 'Paid'
          }
        ],
        timeEstimate: '12 months'
      }
    },
  
    'network-engineering': {
      title: 'Network Engineer',
      beginner: {
        mustLearn: [
          'Network Fundamentals',
          'OSI Model',
          'TCP/IP',
          'Subnetting'
        ],
        recommended: ['Basic Security', 'Network Protocols', 'Cabling Standards'],
        resources: [
          {
            type: 'certification',
            name: 'CompTIA Network+',
            provider: 'CompTIA',
            url: 'https://www.comptia.org/certifications/network',
            cost: 'Paid'
          },
          {
            type: 'course',
            name: 'CCNA 200-301',
            provider: 'Cisco',
            url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html',
            cost: 'Paid'
          }
        ],
        timeEstimate: '6 months'
      },
      intermediate: {
        mustLearn: [
          'Routing Protocols',
          'Network Security',
          'Wireless Networks',
          'Network Automation'
        ],
        recommended: ['IPv6', 'VLANs', 'Network Troubleshooting'],
        resources: [
          {
            type: 'certification',
            name: 'CCNP Enterprise',
            provider: 'Cisco',
            url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise.html',
            cost: 'Paid'
          }
        ],
        timeEstimate: '12 months'
      },
      advanced: {
        mustLearn: [
          'Network Design',
          'SDN',
          'Network Programming',
          'Cloud Networking'
        ],
        recommended: ['5G Networks', 'Network Architecture', 'Network Management'],
        resources: [
          {
            type: 'certification',
            name: 'CCIE Enterprise',
            provider: 'Cisco',
            url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert/ccie-enterprise-infrastructure.html',
            cost: 'Paid'
          }
        ],
        timeEstimate: '18 months'
      }
    },
  
    'machine-learning': {
      title: 'Machine Learning Engineer',
      beginner: {
        mustLearn: [
          'Python Programming',
          'Statistics & Probability',
          'Linear Algebra',
          'Calculus'
        ],
        recommended: ['Data Visualization', 'Jupyter Notebooks', 'SQL'],
        resources: [
          {
            type: 'course',
            name: 'Machine Learning Specialization',
            provider: 'Coursera/Stanford',
            url: 'https://www.coursera.org/specializations/machine-learning-introduction',
            cost: 'Paid'
          },
          {
            type: 'book',
            name: 'Introduction to Statistical Learning',
            author: 'James, Witten, Hastie, Tibshirani',
            url: 'https://www.statlearning.com/',
            cost: 'Free'
          },
          {
            type: 'video',
            name: 'Machine Learning Course',
            provider: 'freeCodeCamp',
            url: 'https://www.youtube.com/watch?v=NWONeJKn6kc',
            cost: 'Free'
          }
        ],
        mentors: [
          {
            name: 'Machine Learning Community',
            platform: 'Discord',
            url: 'https://discord.gg/machine-learning'
          }
        ],
        timeEstimate: '8 months'
      },
      intermediate: {
        mustLearn: [
          'Deep Learning',
          'Neural Networks',
          'Computer Vision',
          'Natural Language Processing'
        ],
        recommended: ['TensorFlow/PyTorch', 'Model Deployment', 'MLOps Basics'],
        resources: [
          {
            type: 'course',
            name: 'Deep Learning Specialization',
            provider: 'Coursera/deeplearning.ai',
            url: 'https://www.coursera.org/specializations/deep-learning',
            cost: 'Paid'
          }
        ],
        timeEstimate: '12 months'
      },
      advanced: {
        mustLearn: [
          'Reinforcement Learning',
          'MLOps',
          'Advanced Model Architectures',
          'Research Methods'
        ],
        recommended: ['Ethics in AI', 'Model Optimization', 'Distributed Training'],
        resources: [
          {
            type: 'course',
            name: 'Advanced Machine Learning',
            provider: 'Coursera/HSE',
            url: 'https://www.coursera.org/specializations/aml',
            cost: 'Paid'
          }
        ],
        timeEstimate: '18 months'
      }
    }
  };
  const careerRoadmaps3 = {
    'game-development': {
      title: 'Game Developer',
      beginner: {
        mustLearn: [
          'Programming Fundamentals',
          'Game Engine Basics (Unity/Unreal)',
          '2D/3D Mathematics',
          'Game Design Principles'
        ],
        recommended: ['Basic Art Skills', 'Version Control', 'Sound Design Basics'],
        resources: [
          {
            type: 'course',
            name: 'CS50 Introduction to Game Development',
            provider: 'Harvard/edX',
            url: 'https://cs50.harvard.edu/games/',
            cost: 'Free'
          },
          {
            type: 'tutorial',
            name: 'Unity Learning Platform',
            provider: 'Unity',
            url: 'https://learn.unity.com/',
            cost: 'Free/Paid'
          },
          {
            type: 'video',
            name: 'Unreal Engine 5 Beginner Tutorial',
            provider: 'Unreal Engine',
            url: 'https://www.unrealengine.com/learn',
            cost: 'Free'
          }
        ],
        mentors: [
          {
            name: 'Game Dev League',
            platform: 'Discord',
            url: 'https://discord.gg/gamedev'
          }
        ],
        timeEstimate: '8 months'
      },
      intermediate: {
        mustLearn: [
          'Game Physics',
          'AI for Games',
          'Multiplayer Networking',
          'Shader Programming'
        ],
        recommended: ['Game Optimization', 'Level Design', 'Animation Systems'],
        resources: [
          {
            type: 'course',
            name: 'Game Physics Tutorial',
            provider: 'Udemy',
            url: 'https://www.udemy.com/course/game-physics/',
            cost: 'Paid'
          }
        ],
        timeEstimate: '12 months'
      },
      advanced: {
        mustLearn: [
          'Game Engine Architecture',
          'Advanced Graphics Programming',
          'Performance Optimization',
          'Tools Development'
        ],
        recommended: ['Team Leadership', 'Production Pipeline', 'Cross-platform Development'],
        resources: [
          {
            type: 'book',
            name: 'Game Engine Architecture',
            author: 'Jason Gregory',
            url: 'https://www.gameenginebook.com/'
          }
        ],
        timeEstimate: '18 months'
      }
    },
  
    'mobile-app-development': {
      title: 'Mobile App Developer',
      beginner: {
        mustLearn: [
          'Mobile Development Fundamentals',
          'iOS (Swift) or Android (Kotlin)',
          'UI/UX Basics',
          'Mobile Design Patterns'
        ],
        recommended: ['Git', 'REST APIs', 'Basic Networking'],
        resources: [
          {
            type: 'course',
            name: 'iOS & Swift - The Complete iOS App Development Bootcamp',
            provider: 'Udemy',
            url: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/',
            cost: 'Paid'
          },
          {
            type: 'tutorial',
            name: 'Android Basics in Kotlin',
            provider: 'Google',
            url: 'https://developer.android.com/courses',
            cost: 'Free'
          }
        ],
        timeEstimate: '6 months'
      },
      intermediate: {
        mustLearn: [
          'State Management',
          'Local Data Storage',
          'Push Notifications',
          'App Security'
        ],
        recommended: ['CI/CD for Mobile', 'Analytics Integration', 'Testing'],
        resources: [
          {
            type: 'course',
            name: 'Flutter Development Bootcamp',
            provider: 'Udemy',
            url: 'https://www.udemy.com/course/flutter-bootcamp-with-dart/',
            cost: 'Paid'
          }
        ],
        timeEstimate: '8 months'
      },
      advanced: {
        mustLearn: [
          'Cross-platform Development',
          'Performance Optimization',
          'App Store Optimization',
          'Advanced Animation'
        ],
        recommended: ['AR/VR Development', 'Machine Learning in Mobile', 'Enterprise Architecture'],
        timeEstimate: '12 months'
      }
    },
  
    'artificial-intelligence': {
      title: 'AI Engineer',
      beginner: {
        mustLearn: [
          'Python Programming',
          'Mathematics for AI',
          'Data Structures',
          'Basic Neural Networks'
        ],
        recommended: ['Ethics in AI', 'Basic ML Concepts', 'Statistical Analysis'],
        resources: [
          {
            type: 'course',
            name: 'AI For Everyone',
            provider: 'Coursera/deeplearning.ai',
            url: 'https://www.coursera.org/learn/ai-for-everyone',
            cost: 'Free'
          },
          {
            type: 'book',
            name: 'Artificial Intelligence: A Modern Approach',
            author: 'Stuart Russell and Peter Norvig',
            url: 'http://aima.cs.berkeley.edu/'
          }
        ],
        mentors: [
          {
            name: 'AI Research Community',
            platform: 'Reddit',
            url: 'https://www.reddit.com/r/artificial/'
          }
        ],
        timeEstimate: '8 months'
      },
      intermediate: {
        mustLearn: [
          'Deep Learning',
          'Natural Language Processing',
          'Computer Vision',
          'Reinforcement Learning'
        ],
        recommended: ['GANs', 'Transformer Models', 'AI Ethics'],
        resources: [
          {
            type: 'course',
            name: 'Advanced AI Learning Path',
            provider: 'Fast.ai',
            url: 'https://www.fast.ai/',
            cost: 'Free'
          }
        ],
        timeEstimate: '12 months'
      },
      advanced: {
        mustLearn: [
          'Advanced AI Architectures',
          'AI Research Methods',
          'Model Deployment at Scale',
          'AI System Design'
        ],
        recommended: ['AI Product Management', 'Research Paper Writing', 'Technical Leadership'],
        timeEstimate: '18 months'
      }
    },
  
    'project-management': {
      title: 'Project Manager',
      beginner: {
        mustLearn: [
          'Project Management Fundamentals',
          'Agile Methodologies',
          'Scrum Framework',
          'Basic Risk Management'
        ],
        recommended: ['Communication Skills', 'Basic Budget Management', 'Stakeholder Management'],
        resources: [
          {
            type: 'certification',
            name: 'Project Management Professional (PMP)',
            provider: 'PMI',
            url: 'https://www.pmi.org/certifications/project-management-pmp',
            cost: 'Paid'
          },
          {
            type: 'course',
            name: 'Google Project Management Certificate',
            provider: 'Coursera',
            url: 'https://www.coursera.org/professional-certificates/google-project-management',
            cost: 'Paid'
          }
        ],
        timeEstimate: '6 months'
      },
      intermediate: {
        mustLearn: [
          'Advanced Risk Management',
          'Project Portfolio Management',
          'Resource Optimization',
          'Quality Management'
        ],
        recommended: ['Change Management', 'Vendor Management', 'Process Improvement'],
        timeEstimate: '12 months'
      },
      advanced: {
        mustLearn: [
          'Program Management',
          'Strategic Planning',
          'Enterprise PMO',
          'Organizational Development'
        ],
        recommended: ['Executive Communication', 'Business Strategy', 'Cultural Intelligence'],
        timeEstimate: '18 months'
      }
    }
  };

  const careerRoadmaps4 = {
    'web-development': {
      title: 'Web Developer',
      beginner: {
        mustLearn: [
          'HTML5',
          'CSS3',
          'JavaScript Basics',
          'Responsive Design'
        ],
        recommended: ['Git', 'Web Accessibility', 'Browser Dev Tools'],
        resources: [
          {
            type: 'course',
            name: 'The Web Developer Bootcamp',
            provider: 'Udemy',
            url: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
            cost: 'Paid'
          },
          {
            type: 'tutorial',
            name: 'freeCodeCamp Responsive Web Design',
            provider: 'freeCodeCamp',
            url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
            cost: 'Free'
          },
          {
            type: 'documentation',
            name: 'MDN Web Docs',
            provider: 'Mozilla',
            url: 'https://developer.mozilla.org/',
            cost: 'Free'
          },
          {
            type: 'video',
            name: 'Full Stack Web Development Course',
            provider: 'Traversy Media',
            url: 'https://www.youtube.com/c/TraversyMedia',
            cost: 'Free'
          }
        ],
        mentors: [
          {
            name: 'Web Dev Community',
            platform: 'Discord',
            url: 'https://discord.gg/web-dev'
          }
        ],
        timeEstimate: '4 months'
      },
      intermediate: {
        mustLearn: [
          'Frontend Frameworks (React/Vue/Angular)',
          'Backend Development (Node.js)',
          'Database Management',
          'RESTful APIs'
        ],
        recommended: ['TypeScript', 'Testing', 'State Management', 'Authentication'],
        resources: [
          {
            type: 'course',
            name: 'React - The Complete Guide',
            provider: 'Udemy',
            url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
            cost: 'Paid'
          },
          {
            type: 'course',
            name: 'Node.js Developer Course',
            provider: 'Udemy',
            url: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/',
            cost: 'Paid'
          }
        ],
        timeEstimate: '8 months'
      },
      advanced: {
        mustLearn: [
          'Full Stack Architecture',
          'DevOps & Deployment',
          'Performance Optimization',
          'Security Best Practices'
        ],
        recommended: ['Microservices', 'Cloud Services', 'GraphQL', 'Web3'],
        resources: [
          {
            type: 'course',
            name: 'AWS Certified Developer',
            provider: 'A Cloud Guru',
            url: 'https://acloud.guru/learn/aws-certified-developer-associate',
            cost: 'Paid'
          }
        ],
        timeEstimate: '12 months'
      }
    },
  
    'it-management': {
      title: 'IT Manager',
      beginner: {
        mustLearn: [
          'IT Service Management',
          'Project Management',
          'Team Leadership',
          'IT Infrastructure Basics'
        ],
        recommended: ['Budget Management', 'Risk Management', 'Communication Skills'],
        resources: [
          {
            type: 'certification',
            name: 'ITIL Foundation',
            provider: 'Axelos',
            url: 'https://www.axelos.com/certifications/itil-service-management',
            cost: 'Paid'
          },
          {
            type: 'course',
            name: 'IT Management Essentials',
            provider: 'Coursera',
            url: 'https://www.coursera.org/learn/it-management',
            cost: 'Paid'
          }
        ],
        timeEstimate: '6 months'
      },
      intermediate: {
        mustLearn: [
          'Strategic Planning',
          'Vendor Management',
          'Change Management',
          'IT Governance'
        ],
        recommended: ['Cloud Strategy', 'Security Management', 'Process Improvement'],
        resources: [
          {
            type: 'certification',
            name: 'PMP Certification',
            provider: 'PMI',
            url: 'https://www.pmi.org/certifications/project-management-pmp',
            cost: 'Paid'
          }
        ],
        timeEstimate: '12 months'
      },
      advanced: {
        mustLearn: [
          'Enterprise Architecture',
          'Digital Transformation',
          'IT Strategy',
          'Portfolio Management'
        ],
        recommended: ['Innovation Management', 'Business Strategy', 'Executive Leadership'],
        timeEstimate: '24 months'
      }
    },
  
    'data-analyst': {
      title: 'Data Analyst',
      beginner: {
        mustLearn: [
          'SQL',
          'Excel Advanced Features',
          'Basic Statistics',
          'Data Visualization'
        ],
        recommended: ['Python Basics', 'Business Intelligence', 'Data Cleaning'],
        resources: [
          {
            type: 'course',
            name: 'Google Data Analytics Professional Certificate',
            provider: 'Coursera',
            url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
            cost: 'Paid'
          },
          {
            type: 'tutorial',
            name: 'SQL Tutorial',
            provider: 'W3Schools',
            url: 'https://www.w3schools.com/sql/',
            cost: 'Free'
          },
          {
            type: 'course',
            name: 'Data Analyst with Python',
            provider: 'DataCamp',
            url: 'https://www.datacamp.com/tracks/data-analyst-with-python',
            cost: 'Paid'
          }
        ],
        mentors: [
          {
            name: 'Data Analytics Community',
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/groups/data-analytics'
          }
        ],
        timeEstimate: '6 months'
      },
      intermediate: {
        mustLearn: [
          'Python for Data Analysis',
          'R Programming',
          'Advanced SQL',
          'Statistical Analysis'
        ],
        recommended: ['Machine Learning Basics', 'Data Warehousing', 'ETL Processes'],
        resources: [
          {
            type: 'book',
            name: 'Python for Data Analysis',
            author: 'Wes McKinney',
            url: 'https://wesmckinney.com/book/'
          }
        ],
        timeEstimate: '8 months'
      },
      advanced: {
        mustLearn: [
          'Big Data Technologies',
          'Advanced Analytics',
          'Data Strategy',
          'Predictive Modeling'
        ],
        recommended: ['Deep Learning', 'Natural Language Processing', 'Data Engineering'],
        timeEstimate: '12 months'
      }
    },
  
    'linux-administration': {
      title: 'Linux Administrator',
      beginner: {
        mustLearn: [
          'Linux Fundamentals',
          'Command Line Interface',
          'File System Management',
          'User Administration'
        ],
        recommended: ['Shell Scripting', 'Package Management', 'System Monitoring'],
        resources: [
          {
            type: 'certification',
            name: 'CompTIA Linux+',
            provider: 'CompTIA',
            url: 'https://www.comptia.org/certifications/linux',
            cost: 'Paid'
          },
          {
            type: 'course',
            name: 'Linux Administration Bootcamp',
            provider: 'Udemy',
            url: 'https://www.udemy.com/course/linux-administration-bootcamp/',
            cost: 'Paid'
          }
        ],
        timeEstimate: '6 months'
      },
      intermediate: {
        mustLearn: [
          'Network Services',
          'Security Hardening',
          'Automation',
          'Performance Tuning'
        ],
        recommended: ['Containerization', 'Cloud Integration', 'High Availability'],
        resources: [
          {
            type: 'certification',
            name: 'Red Hat Certified System Administrator',
            provider: 'Red Hat',
            url: 'https://www.redhat.com/en/services/certification/rhcsa',
            cost: 'Paid'
          }
        ],
        timeEstimate: '12 months'
      },
      advanced: {
        mustLearn: [
          'Enterprise Linux Management',
          'Clustering',
          'Storage Management',
          'Disaster Recovery'
        ],
        recommended: ['DevOps Practices', 'Infrastructure as Code', 'System Architecture'],
        timeEstimate: '18 months'
      }
    },
  
    'hardware-engineering': {
      title: 'Hardware Engineer',
      beginner: {
        mustLearn: [
          'Digital Logic',
          'Circuit Design',
          'Computer Architecture',
          'Electronics Fundamentals'
        ],
        recommended: ['PCB Design', 'Soldering', 'CAD Tools'],
        resources: [
          {
            type: 'course',
            name: 'Digital Electronics',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/',
            cost: 'Free'
          },
          {
            type: 'certification',
            name: 'CompTIA A+',
            provider: 'CompTIA',
            url: 'https://www.comptia.org/certifications/a',
            cost: 'Paid'
          }
        ],
        timeEstimate: '12 months'
      },
      intermediate: {
        mustLearn: [
          'Embedded Systems',
          'FPGA Programming',
          'Signal Processing',
          'Power Management'
        ],
        recommended: ['IoT Protocols', 'RF Design', 'Thermal Management'],
        resources: [
          {
            type: 'book',
            name: 'Computer Organization and Design',
            author: 'Patterson and Hennessy',
            url: 'https://www.amazon.com/Computer-Organization-Design-MIPS-Architecture/dp/0124077269'
          }
        ],
        timeEstimate: '18 months'
      },
      advanced: {
        mustLearn: [
          'System-on-Chip Design',
          'High-Speed Digital Design',
          'Hardware Security',
          'Advanced Architecture'
        ],
        recommended: ['AI Hardware', 'Quantum Computing', 'Advanced Manufacturing'],
        timeEstimate: '24 months'
      }
    }
  };

  class RoadmapGenerator {
    constructor(userData) {
      this.careerPath = userData.careerPath;
      this.currentLevel = userData.currentLevel;
      this.goals = userData.goals;
      this.timeCommitment = userData.timeCommitment;
    }
  
    generateRoadmap() {
      const careerData = skillRelationships[this.careerPath];
      if (!careerData) {
        throw new Error('Career path not found');
      }
  
      // Get relevant skills based on user's level
      const relevantSkills = this.getRelevantSkills(careerData);
      
      // Adjust timeline based on time commitment
      const adjustedTimeline = this.adjustTimeline(relevantSkills);
      
      // Generate personalized roadmap
      return {
        career: this.careerPath,
        startingLevel: this.currentLevel,
        roadmap: this.createPersonalizedPath(adjustedTimeline),
        estimatedCompletion: this.calculateCompletionTime(adjustedTimeline)
      };
    }
  
    getRelevantSkills(careerData) {
      const levels = ['beginner', 'intermediate', 'advanced'];
      const startIndex = levels.indexOf(this.currentLevel);
      
      return levels.slice(startIndex).map(level => ({
        level,
        ...careerData[level]
      }));
    }
  
    adjustTimeline(skills) {
      const timeMultiplier = {
        'full-time': 1,
        'part-time': 2,
        'casual': 3
      }[this.timeCommitment];
  
      return skills.map(levelData => ({
        ...levelData,
        timeEstimate: this.adjustTime(levelData.timeEstimate, timeMultiplier)
      }));
    }
  
    createPersonalizedPath(timeline) {
      return timeline.map(level => ({
        level: level.level,
        requiredSkills: level.mustLearn.map(skill => ({
          name: skill,
          resources: this.getResourcesForSkill(skill),
          estimatedTime: this.calculateSkillTime(skill, level.timeEstimate)
        })),
        optionalSkills: level.recommended.map(skill => ({
          name: skill,
          resources: this.getResourcesForSkill(skill),
          estimatedTime: this.calculateSkillTime(skill, level.timeEstimate)
        }))
      }));
    }
  
    getResourcesForSkill(skill) {
      // This would connect to your resource database or external APIs
      return [
        { type: 'course', name: `Learn ${skill}`, provider: 'platform1' },
        { type: 'tutorial', name: `${skill} Basics`, provider: 'platform2' }
      ];
    }
  
    calculateSkillTime(skill, levelTime) {
      // Implement your logic for calculating individual skill time
      return `${Math.round(parseInt(levelTime) / 4)} months`;
    }
  
    calculateCompletionTime(timeline) {
      // Sum up all time estimates
      return timeline.reduce((total, level) => {
        return total + parseInt(level.timeEstimate);
      }, 0) + ' months';
    }
  }
  