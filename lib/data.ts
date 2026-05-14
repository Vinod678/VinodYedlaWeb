export const personalInfo = {
  name: 'Vinod Yedla',
  initials: 'VY',
  role: 'Software Engineer',
  tagline: 'Backend Engineer · Microservices · Cloud Native',
  bio: "I'm a software engineer with 4+ years of experience building scalable backend systems and microservices. Currently at Infosys, I specialize in Java, Spring Boot, and cloud-native architectures. I care deeply about writing clean, maintainable code and building systems that scale gracefully.",
  email: 'vinod.yedla@example.com',
  phone: '+91 XXXXXXXXXX',
  location: 'India',
  github: 'https://github.com/Vinod678',
  linkedin: 'https://linkedin.com/in/vinod-yedla',
  resumeUrl: '/assets/documents/VinodYedla_JavaDeveloper_4YearsOfExp.pdf',
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Built', value: '5+' },
    { label: 'Companies', value: '2' },
    { label: 'Technologies', value: '20+' },
  ],
  roles: [
    'Software Engineer',
    'Backend Developer',
    'Java Specialist',
    'Cloud Enthusiast',
    'Problem Solver',
  ],
}

export type Experience = {
  id: number
  role: string
  company: string
  duration: string
  type: string
  location: string
  description: string
  achievements: string[]
  tech: string[]
  current?: boolean
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Systems Engineer',
    company: 'Infosys',
    duration: 'Sep 2021 – Present',
    type: 'Full-time',
    location: 'India',
    current: true,
    description:
      'Working on enterprise-scale backend systems and microservices architecture for large-scale clients across multiple domains.',
    achievements: [
      'Developed and maintained high-performance microservices using Java and Spring Boot',
      'Containerized applications with Docker and orchestrated deployments using Kubernetes',
      'Built CI/CD pipelines significantly reducing manual deployment overhead',
      'Designed and implemented RESTful APIs enabling seamless cross-service communication',
      'Collaborated in cross-functional Agile teams to deliver features on schedule',
      'Contributed to architecture discussions and code reviews for quality assurance',
    ],
    tech: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'AWS', 'MySQL', 'REST APIs', 'Maven', 'Git'],
  },
  {
    id: 2,
    role: 'Software Engineering Intern',
    company: 'TV2Z Inc',
    duration: 'May 2021 – Sep 2021',
    type: 'Internship',
    location: 'Remote',
    description:
      'Contributed to frontend and backend development of the content management platform, gaining hands-on experience in the full software development lifecycle.',
    achievements: [
      'Built responsive UI components using HTML, CSS, and JavaScript',
      'Developed and integrated RESTful APIs for the content management system',
      'Collaborated with senior engineers to deliver features within sprint timelines',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'REST APIs', 'Git'],
  },
]

export type Project = {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  github: string
  live?: string
  featured: boolean
  highlights: string[]
  category: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Image Forgery Detection System',
    description:
      'ML-powered system that detects image manipulation and forgery using advanced forensic image analysis algorithms.',
    longDescription:
      'A comprehensive image forensics tool leveraging computer vision and machine learning to identify tampered regions in digital images. Uses Error Level Analysis (ELA) and statistical methods to expose inconsistencies introduced by editing tools.',
    tech: ['Python', 'OpenCV', 'NumPy', 'ELA', 'Image Processing', 'ML'],
    image: '/assets/images/Projects/imageForgeryDetection.png',
    github: 'https://github.com/Vinod678',
    featured: true,
    category: 'Machine Learning',
    highlights: [
      'Implemented Error Level Analysis to detect JPEG compression inconsistencies',
      'Achieved high detection accuracy across diverse image types',
      'Built intuitive UI for visualizing forgery heatmaps and detection results',
    ],
  },
  {
    id: 2,
    title: 'Face Recognition (LBP)',
    description:
      'Real-time face recognition using the Local Binary Pattern algorithm — efficient and accurate even under varied lighting.',
    longDescription:
      'Face recognition system using Local Binary Pattern Histogram algorithm, capable of identifying faces from a pre-trained dataset with high accuracy and low computational cost. Works effectively in real-world conditions.',
    tech: ['Python', 'OpenCV', 'LBP Algorithm', 'NumPy', 'Computer Vision'],
    image: '/assets/images/Projects/faceRecogLBP.png',
    github: 'https://github.com/Vinod678',
    featured: false,
    category: 'Computer Vision',
    highlights: [
      'LBP histogram feature extraction for robust face representation',
      'Real-time recognition with minimal computational overhead',
      'Effective under varying lighting and partial occlusion',
    ],
  },
  {
    id: 3,
    title: 'E-Commerce Application',
    description:
      'Full-stack e-commerce platform with product catalog, shopping cart, user auth, and order management.',
    longDescription:
      'A complete e-commerce solution featuring product catalog management, user authentication, shopping cart, and order processing. Built with Java Spring Boot backend and a responsive frontend for a seamless shopping experience.',
    tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'REST APIs'],
    image: '/assets/images/Projects/Ecommerce_Website.jpg',
    github: 'https://github.com/Vinod678',
    featured: false,
    category: 'Full-Stack',
    highlights: [
      'Complete product catalog with search and filtering capabilities',
      'Secure JWT-based user authentication and session management',
      'Shopping cart with real-time price calculations and order history',
    ],
  },
  {
    id: 4,
    title: 'Developer Portfolio v1',
    description:
      'Responsive personal portfolio built from scratch with smooth animations and EmailJS contact integration.',
    longDescription:
      'A fully responsive portfolio website showcasing professional experience and projects. Features smooth scroll animations, a modular CSS architecture, and integrated EmailJS for direct contact without a backend.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'EmailJS', 'Responsive Design'],
    image: '/assets/images/Projects/portfolio.png',
    github: 'https://github.com/Vinod678/VinodYedla',
    featured: false,
    category: 'Frontend',
    highlights: [
      'Mobile-first responsive design across all breakpoints',
      'CSS animations with scroll-triggered section reveals',
      'Zero-backend contact form via EmailJS integration',
    ],
  },
]

export type SkillCategory = {
  name: string
  emoji: string
  skills: Skill[]
}

export type Skill = {
  name: string
  icon: string
  level: 'Expert' | 'Advanced' | 'Intermediate'
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    emoji: '🖥️',
    skills: [
      { name: 'Java', icon: '/assets/images/Skills/icons8-java.svg', level: 'Expert' },
      { name: 'Spring Boot', icon: '/assets/images/Skills/icons8-spring-boot.svg', level: 'Advanced' },
      { name: 'REST APIs', icon: '/assets/images/Skills/rest-api-icon.svg', level: 'Advanced' },
      { name: 'Microservices', icon: '/assets/images/Skills/microservice-icon.svg', level: 'Advanced' },
      { name: 'Spring', icon: '/assets/images/Skills/spring-svgrepo-com.svg', level: 'Advanced' },
      { name: 'Maven', icon: '/assets/images/Skills/maven-svgrepo-com.svg', level: 'Advanced' },
      { name: 'MySQL', icon: '/assets/images/Skills/mysql.svg', level: 'Advanced' },
    ],
  },
  {
    name: 'Frontend',
    emoji: '🎨',
    skills: [
      { name: 'HTML5', icon: '/assets/images/Skills/html.svg', level: 'Advanced' },
      { name: 'CSS3', icon: '/assets/images/Skills/css3.svg', level: 'Advanced' },
      { name: 'JavaScript', icon: '/assets/images/Skills/javascript.svg', level: 'Intermediate' },
      { name: 'C', icon: '/assets/images/Skills/c.svg', level: 'Intermediate' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    emoji: '☁️',
    skills: [
      { name: 'Docker', icon: 'public/assets/images/Skills/docker.svg', level: 'Advanced' },
      { name: 'Kubernetes', icon: '/assets/images/Skills/kubernetes-icon.svg', level: 'Intermediate' },
      { name: 'AWS', icon: '/assets/images/Skills/amazonwebservices.svg', level: 'Intermediate' },
      { name: 'Linux', icon: '/assets/images/Skills/linux.svg', level: 'Intermediate' },
      { name: 'CI/CD', icon: '/assets/images/Skills/ci-cd-svgrepo-com.svg', level: 'Intermediate' },
    ],
  },
  {
    name: 'Tools',
    emoji: '🔧',
    skills: [
      { name: 'Git', icon: '/assets/images/Skills/git.svg', level: 'Advanced' },
      { name: 'GitHub', icon: '/assets/images/Skills/github.svg', level: 'Advanced' },
      { name: 'IntelliJ', icon: '/assets/images/Skills/intellij.svg', level: 'Advanced' },
      { name: 'Jira', icon: '/assets/images/Skills/jira-svgrepo-com.svg', level: 'Intermediate' },
      { name: 'Agile', icon: '/assets/images/Skills/agile.svg', level: 'Intermediate' },
      { name: 'VS Code', icon: '/assets/images/Skills/visualstudio.svg', level: 'Intermediate' },
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
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "IIIT Nuzvid",
    duration: "2017 – 2021",    
    description:
      "Core focus on algorithms, data structures, operating systems, computer networks, and software engineering principles. Graduated with distinction.",
  },
  {
    id: 2,
    degree: "Pre-University (12th Grade)",
    field: "Science (PCMB)",
    institution: "IIIT Nuzvid",
    duration: "2015 – 2017",
    description: "Science stream with Physics, Chemistry, Mathematics, and Biology.",
  },
  {
    id: 3,
    degree: "SSLC (10th Grade)",
    institution: "High School",
    duration: "2014 – 2015",
    description: "Completed secondary education with distinction.",
  },
]

// EmailJS Configuration - Uses environment variables from .env.local
export const emailjsConfig = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
}
