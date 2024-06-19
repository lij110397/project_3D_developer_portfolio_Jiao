import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  shein,
  horizontal,
  aispeech,
  carrent,
  jobit,
  tripguide,
  threejs,
  ucl,
  beijingjiaotong,
  epita,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'education',
    title: 'Eduction',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },

]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'UX Designer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Photographer',
    icon: creator,
  },
]

const educations = [
  {
    university: 'University College London',
    icon: ucl,
    date: '2020 - 2021',
    degree: 'MSc of Human-Computer Interaction',
    modules: [
      'Interaction Science',
      'Interaction Design',
      'Digital Health',
      'Serious and Persuasive Games',
      'Data Visualization',
      'Affective Interaction',
    ],
    others:
      'Executed final dissertation about feasibility analysis of utilizing Deep Learning models on image processing of wearable cameras',
  },
  {
    university: 'Beijing Jiaotong University',
    icon: beijingjiaotong,
    date: '2015 - 2019',
    degree: 'BSc of Software Engineering',
    modules: [
      'Mathematical Foundations',
      'Programming language(C, Java, C++)',
      'Web Development',
      'Game Development and Game Engine',
      'User interface design and evaluation',
      'Software architecture',
    ],
    others: 'Intelligent security industry design and development',
  },
  {
    university: "EPITA",
    icon: epita,
    date: '2017 - 2018',
    degree: 'Exchange Student',
    modules: [
      'Project Management',
      'Cultural Integration Workshop',
      'Unix System',
      'Linear Algebra',
    ],
    others: '/',
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'Intern Product Data Manager on Search and Sorting Service',
    company_name: 'SHEIN',
    tags: [
      {
        name: 'ABTesting',
        color: 'blue-text-gradient',
      },
      {
        name: 'Search Engine',
        color: 'pink-text-gradient',
      },
      {
        name: 'Project Management',
        color: 'green-text-gradient',
      },
    ],
    icon: shein,
    iconBg: '#383E56',
    date: 'December 2019 - May 2020',
    points: [
      'Configured over 50 ABTests with 0 fault.',
      'Reported unexpected fluctuation on test data using Excel and Tableau.',
      'Collected demands and improved efficiency of ABTesting configuration platform by 60% through setting standards, advising templates and solutions',
      'Conducted researches and proposed solutions on patterns of search keywords, fuzzy string matching and associational words.',
    ],
  },
  {
    title: 'Intern Full Stack Developer on Intelligent Engine Service',
    company_name: 'AISpeech',
    tags: [
      {
        name: 'Vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'Java||Spring Boot',
        color: 'pink-text-gradient',
      },
      {
        name: 'Mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'SaaS',
        color: 'orange-text-gradient',
      },
    ],
    icon: aispeech,
    iconBg: '#E6DEDD',
    date: 'March 2019 - May 2019',
    points: [
      'Maintained and developed 6 function modules of the Listening Test Platform for Speech synthesis service cooperating with product manager',
      'Devised and developed independently, using Vue in front end, Java(Spring Boot Framework) and MYSQL in back end',
    ],
  },
  {
    title: 'Intern Java Developer on Cloud Platform',
    company_name: 'HORIZON ROBOTICS',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'Product Management',
        color: 'pink-text-gradient',
      },
      {
        name: 'NodeJS',
        color: 'green-text-gradient',
      },
    ],
    icon: horizontal,
    iconBg: '#383E56',
    date: 'September 2018 - October 2018',
    points: [
      'Conducted and presented Demand analysis of the Intelligent security industry',
      'Managed system Interface Design between Front-end and SaaS layer about face recognition service, familiar with overall system architecture and functional module design',
      'Detected and Refactored existing codes.',
      'Developed 4 modules using NodeJS on Face recognition service independently.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'My Personal Website',
    description:
      'React Application that present my projects, my introduction allowing people to know about me.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://jiaoll.com',
  },
  {
    name: 'Notion-based Blog system',
    description:
      'A next application that use Notion - a notebook system as the CMS. I use the system to write blogs in Notion and sync to the public website.',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'notionapi',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://blog.jiaoll.com',
  },
  {
    name: 'Meditation Button',
    description:
      'A next web application built using three.js, react-three/fiber and so on. It allows users to do a one-minute meditation on just one click.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export {
  services,
  educations,
  technologies,
  experiences,
  testimonials,
  projects,
}
