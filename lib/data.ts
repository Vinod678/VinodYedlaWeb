export const personalInfo = {
  name: 'Vinod Yedla',
  initials: 'VY',
  role: 'Senior Software Engineer',
  tagline: 'Java Developer · Backend Engineer · Cloud-Native Systems',
  bio: "Senior Software Engineer with 4+ years of experience building enterprise-grade backend systems and microservices. Currently contributing to ADP's Smart Compliance Canada platform as a consultant. I specialize in Java, Spring Boot, and cloud-native architectures — passionate about clean code, scalable systems, and engineering solutions that matter.",
  email: 'vinodyedla678@gmail.com',
  phone: '+91 9381063388',
  location: 'Hyderabad, India',
  github: 'https://github.com/Vinod678',
  linkedin: 'https://linkedin.com/in/vinod-yedla',
  resumeUrl: '/assets/documents/VinodYedla_JavaDeveloper_4YearsOfExp.pdf',
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Built', value: '5+' },
    { label: 'Companies', value: '3' },
    { label: 'Technologies', value: '20+' },
  ],
  roles: [
    'Senior Software Engineer',
    'Java Developer',
    'Backend Architect',
    'Cloud-Native Engineer',
    'Problem Solver',
  ],
}

export type Experience = {
  id: number
  role: string
  company: string
  companyShort: string
  duration: string
  type: string
  location: string
  description: string
  achievements: string[]
  tech: string[]
  current?: boolean
  accent: string
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Java Developer',
    company: 'ADP (via Info Services Digitech Pvt Ltd.)',
    companyShort: 'ADP',
    duration: 'Feb 2025 – Present',
    type: 'Full-time · Consultant',
    location: 'Hyderabad, India',
    current: true,
    accent: 'indigo',
    description:
      'Serving as a Java Developer consultant on ADP\'s Smart Compliance Canada platform, delivering enterprise authentication and user management capabilities to thousands of users.',
    achievements: [
      'Developed and delivered Manage Users and SSO sign-in functionalities for the Smart Compliance Canada platform, strengthening enterprise authentication workflows.',
      'Enhanced backend and UI modules by integrating RESTful APIs and implementing advanced search and robust error-handling mechanisms.',
      'Resolved critical production issues impacting enterprise workflows and improved platform stability for internal users.',
      'Contributed to the eNets to Affinity migration project, ensuring seamless data transfer and zero-downtime system integration.',
      'Implemented TTS download functionality and supported multiple encryption/decryption workflows for secure, compliant operations.',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'SSO', 'Microservices', 'MySQL', 'Git'],
  },
  {
    id: 2,
    role: 'Senior Systems Engineer',
    company: 'Infosys',
    companyShort: 'Infosys',
    duration: 'Sep 2021 – Jan 2025',
    type: 'Full-time',
    location: 'Hyderabad, India',
    accent: 'cyan',
    description:
      'Progressed from Systems Engineer to Senior Systems Engineer, delivering high-impact backend solutions for global clients across banking and telecom domains.',
    achievements: [
      'Developed a credit card closure system using Java and Spring Boot for Westpac Banking, automating customer verification and balance validation workflows end-to-end.',
      'Integrated external APIs for automated document generation, reducing processing time by 40% and eliminating manual handoffs.',
      'Designed and developed scalable RESTful APIs using Java 8 and Spring Boot for Inmarsat Telecom service integrations.',
      'Managed backend services deployed on Kubernetes while adhering to banking-grade security standards and compliance requirements.',
      'Maintained CI/CD pipelines via Git and Jenkins; leveraged Dynatrace and NewRelic for proactive monitoring, reducing MTTR significantly.',
      'Led code reviews and authored technical documentation, raising team engineering standards and onboarding velocity.',
    ],
    tech: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Docker', 'Kubernetes', 'AWS', 'MySQL', 'Jenkins', 'Dynatrace', 'NewRelic', 'Maven', 'Git'],
  },
  {
    id: 3,
    role: 'Software Engineer Intern',
    company: 'TV2Z, Inc.',
    companyShort: 'TV2Z',
    duration: 'Jun 2021 – Sep 2021',
    type: 'Internship',
    location: 'Hyderabad, India',
    accent: 'violet',
    description:
      'Built and enhanced an automation testing framework for OTT web applications, gaining hands-on experience in test-driven development and enterprise QA workflows.',
    achievements: [
      'Developed and maintained an automation testing framework for OTT web applications using Java, Selenium WebDriver, JUnit, and TestNG.',
      'Improved automation reliability and test coverage through continuous framework enhancements and reusable test utilities.',
      'Collaborated with QA and development teams to adapt automation workflows based on evolving product requirements.',
      'Supported end-to-end testing processes to improve application quality and accelerate release stability.',
    ],
    tech: ['Java', 'Selenium WebDriver', 'JUnit', 'TestNG', 'HTML', 'CSS', 'JavaScript', 'Git'],
  },
]

export type Project = {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  live?: string
  featured: boolean
  highlights: string[]
  category: string
  gradient: string
  icon: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Operations Assistant',
    description:
      'Enterprise AI-powered operations assistant integrating ticketing, monitoring, and collaboration workflows into a unified automation platform.',
    longDescription:
      'An enterprise-grade AI-powered operations assistant integrated with collaboration and monitoring platforms to automate operational workflows, ticket management, and real-time system notifications. Designed to streamline engineering operations through intelligent automation, natural language interactions, and centralized monitoring.',
    tech: [
      'Java',
      'Spring Boot',
      'Python',
      'REST APIs',
      'Webex APIs',
      'Jira',
      'Splunk',
      'Kafka',
      'Docker',
      'Microservices',
    ],
    github: 'https://github.com/Vinod678',
    featured: true,
    category: 'Enterprise Automation',
    gradient: 'from-cyan-600/25 via-blue-800/15 to-transparent',
    icon: '🤖',
    highlights: [
      'Developed an AI-driven chatbot integrating Webex, Jira, and Splunk for operational workflow automation',
      'Enabled real-time ticket tracking, alert notifications, and task management through conversational interactions',
      'Implemented scalable backend services with secure API integrations and asynchronous event-driven workflows',
    ],
  },
  {
    id: 2,
    title: 'School ERP & Management Platform',
    description:
      'Full-scale school ERP platform designed to digitize academic, administrative, and communication workflows for educational institutions.',
    longDescription:
      'A modern school management and ERP platform built to streamline student management, attendance, fee tracking, exams, report generation, and communication between administrators, teachers, students, and parents. Designed with scalable dashboard architecture, secure role-based access, and responsive user experience.',
    tech: [
      'Java',
      'Spring Boot',
      'Next.js',
      'REST APIs',
      'MySQL',
      'JWT Authentication',
      'Tailwind CSS',
      'AWS',
      'Docker',
      'CI/CD',
    ],
    github: 'https://github.com/Vinod678',
    featured: false,
    category: 'Full-Stack',
    gradient: 'from-emerald-600/25 via-green-800/15 to-transparent',
    icon: '🏫',
    highlights: [
      'Developed role-based dashboards for administrators, teachers, students, and parents',
      'Implemented modules for attendance, exams, fee management, report cards, and timetable scheduling',
      'Built responsive analytics dashboards and secure authentication workflows for scalable educational management',
    ],
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce application with product catalog, user authentication, shopping cart, and order management.',
    longDescription:
      'A production-grade e-commerce solution built with Java Spring Boot backend and a responsive frontend. Features role-based access control, JWT authentication, a complete product catalog with advanced filtering, shopping cart with real-time price computation, and a full order lifecycle management system.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/Vinod678',
    featured: false,
    category: 'Full-Stack',
    gradient: 'from-emerald-600/25 via-teal-800/15 to-transparent',
    icon: '🛒',
    highlights: [
      'Secure JWT-based authentication with role-based access control',
      'Product catalog with search, filtering, and pagination',
      'Complete order lifecycle: cart → checkout → order history',
    ],
  },
  {
    id: 4,
    title: 'Image Forgery Detection System',
    description:
      'ML-powered forensics tool that detects image manipulation using Error Level Analysis and statistical algorithms.',
    longDescription:
      'A comprehensive image forensics platform leveraging computer vision and machine learning to identify tampered regions in digital images. Combines Error Level Analysis (ELA) with statistical signal processing to expose inconsistencies introduced by editing tools — visualized through intuitive heatmaps.',
    tech: ['Python', 'OpenCV', 'NumPy', 'ELA', 'Image Processing', 'Machine Learning'],
    github: 'https://github.com/Vinod678',
    featured: false,
    category: 'Machine Learning',
    gradient: 'from-violet-600/25 via-purple-800/15 to-transparent',
    icon: '🔬',
    highlights: [
      'Implemented Error Level Analysis to detect JPEG compression inconsistencies with high accuracy',
      'Built intuitive heatmap visualizations for tampered region detection results',
      'Designed an efficient processing pipeline supporting diverse image types and formats',
    ],
  },
  {
    id: 5,
    title: 'Web Portfolio',
    description:
      'Responsive personal portfolio built from scratch with smooth animations, modular architecture, and EmailJS contact integration.',
    longDescription:
      'A fully responsive portfolio website showcasing professional experience and projects. Built with a focus on performance and smooth UX — features scroll-triggered animations, a modular CSS architecture, and a serverless contact form via EmailJS. Achieved Lighthouse scores above 90 across all categories.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'EmailJS', 'Responsive Design'],
    github: 'https://github.com/Vinod678/VinodYedla',
    featured: false,
    category: 'Frontend',
    gradient: 'from-amber-600/25 via-orange-800/15 to-transparent',
    icon: '💻',
    highlights: [
      'Mobile-first responsive design across all breakpoints with 90+ Lighthouse score',
      'CSS animations with scroll-triggered section reveals and smooth transitions',
      'Zero-backend contact form via EmailJS — no server required',
    ],
  },
  {
    id: 6,
    title: 'Face Recognition System (LBP)',
    description:
      'Real-time face recognition using Local Binary Pattern histograms — accurate, lightweight, and robust to lighting variation.',
    longDescription:
      'A face recognition system utilizing Local Binary Pattern Histogram descriptors for robust, real-time identification. Operates effectively across varied lighting conditions and partial occlusions with low computational overhead, making it suitable for deployment on resource-constrained environments.',
    tech: ['Python', 'OpenCV', 'LBP Algorithm', 'NumPy', 'Computer Vision'],
    github: 'https://github.com/Vinod678',
    featured: false,
    category: 'Computer Vision',
    gradient: 'from-blue-600/25 via-cyan-800/15 to-transparent',
    icon: '👁️',
    highlights: [
      'LBP histogram feature extraction for robust face representation under real-world conditions',
      'Real-time recognition pipeline with minimal computational overhead',
      'Effective under varying illumination and partial facial occlusion',
    ],
  }
]

export type SkillCategory = {
  name: string
  icon: string
  skills: Skill[]
}

export type Skill = {
  name: string
  icon: string
  level: 'Expert' | 'Advanced' | 'Intermediate'
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    icon: '{ }',
    skills: [
      { name: 'Java', icon: '/assets/images/Skills/icons8-java.svg', level: 'Expert' },
      { name: 'Python', icon: '/assets/images/Skills/algorithm_9lacupoqq0xd.svg', level: 'Advanced' },
      { name: 'JavaScript', icon: '/assets/images/Skills/javascript.svg', level: 'Intermediate' },
      { name: 'C', icon: '/assets/images/Skills/c.svg', level: 'Intermediate' },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Spring Boot', icon: '/assets/images/Skills/icons8-spring-boot.svg', level: 'Expert' },
      { name: 'REST APIs', icon: '/assets/images/Skills/rest-api-icon.svg', level: 'Expert' },
      { name: 'Microservices', icon: '/assets/images/Skills/microservice-icon.svg', level: 'Advanced' },
      { name: 'Spring', icon: '/assets/images/Skills/spring-svgrepo-com.svg', level: 'Advanced' },
      { name: 'Maven', icon: '/assets/images/Skills/maven-svgrepo-com.svg', level: 'Advanced' },
      { name: 'JUnit', icon: '/assets/images/Skills/java-svgrepo-com.svg', level: 'Advanced' },
    ],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5', icon: '/assets/images/Skills/html.svg', level: 'Advanced' },
      { name: 'CSS3', icon: '/assets/images/Skills/css3.svg', level: 'Advanced' },
      { name: 'JavaScript', icon: '/assets/images/Skills/javascript.svg', level: 'Intermediate' },
    ],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', icon: '/assets/images/Skills/mysql.svg', level: 'Advanced' },
      { name: 'Oracle DB', icon: '/assets/images/Skills/data_structure.svg', level: 'Intermediate' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'Docker', icon: '/assets/images/Skills/docker.svg', level: 'Advanced' },
      { name: 'Kubernetes', icon: '/assets/images/Skills/kubernetes-icon.svg', level: 'Intermediate' },
      { name: 'AWS', icon: '/assets/images/Skills/amazonwebservices.svg', level: 'Intermediate' },
      { name: 'Jenkins', icon: '/assets/images/Skills/ci-cd-svgrepo-com.svg', level: 'Intermediate' },
      { name: 'Linux', icon: '/assets/images/Skills/linux.svg', level: 'Intermediate' },
      { name: 'CI/CD', icon: '/assets/images/Skills/ci-cd-svgrepo-com.svg', level: 'Intermediate' },
    ],
  },
  {
    name: 'Tools',
    icon: '🔧',
    skills: [
      { name: 'Git', icon: '/assets/images/Skills/git.svg', level: 'Advanced' },
      { name: 'GitHub', icon: '/assets/images/Skills/github.svg', level: 'Advanced' },
      { name: 'IntelliJ IDEA', icon: '/assets/images/Skills/intellij.svg', level: 'Advanced' },
      { name: 'Selenium', icon: '/assets/images/Skills/javascript.svg', level: 'Advanced' },
      { name: 'Jira', icon: '/assets/images/Skills/jira-svgrepo-com.svg', level: 'Intermediate' },
      { name: 'VS Code', icon: '/assets/images/Skills/visualstudio.svg', level: 'Intermediate' },
      { name: 'Dynatrace', icon: '/assets/images/Skills/ci-cd-svgrepo-com.svg', level: 'Intermediate' },
    ],
  },
]

export type Education = {
  id: number
  degree: string
  field?: string
  institution: string
  duration: string
  grade?: string
  description?: string
}

export const educationData: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Engineering',
    institution: 'IIIT Nuzvid',
    duration: '2017 – 2021',
    description:
      'Core curriculum spanning algorithms, data structures, operating systems, computer networks, database systems, and software engineering principles.',
  },
  {
    id: 2,
    degree: 'Pre-University Course',
    field: 'Science (MPC)',
    institution: 'IIIT Nuzvid',
    duration: '2015 – 2017',
    description: 'Science stream with Mathematics, Physics, and Chemistry.',
  },
  {
    id: 3,
    degree: 'SSC',
    institution: 'Z P H School',
    duration: '2014 – 2015',
    // description: 'Completed secondary education with distinction.',
  },
]

export const emailjsConfig = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
}
