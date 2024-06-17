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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UX Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Photographer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Intern Product Data Manager on Search and Sorting Service",
      company_name: "SHEIN",
      icon: starbucks,
      iconBg: "#383E56",
      date: "December 2019 - May 2020",
      points: [
        "Configured over 50 ABTests with 0 fault by proofreading; Reported unexpected fluctuation on test data using Excel and Tableau.",
        "Collected demands from collaborated group and improved efficiency of ABTesting configuration platform by 60% through setting standards, advising templates and solutions",
        "Conducted researches and proposed solutions on patterns of search keywords, fuzzy string matching and associational words.",
      ],
    },
    {
      title: "Intern Full Stack Developer on Intelligent Engine Service",
      company_name: "AISpeech",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2019 - May 2019",
      points: [
        "Implemented interface design, front-end and back-end development of 5 function blocks of Listening Test Platform.",
      ],
    },
    {
      title: "Intern Java Developer on Cloud Platform",
      company_name: "HORIZON ROBOTICS",
      icon: shopify,
      iconBg: "#383E56",
      date: "September 2018 - October 2018",
      points: [
        "Devised interfaces between front-end of face recognition function and SaaS layer and Detected and Refactored existing codes.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My Personal Website",
      description:
        "React Application that present my projects, my introduction allowing people to know about me.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://jiaoll.com",
    },
    {
      name: "Notion-based Blog system",
      description:
        "A next application that use Notion - a notebook system as the CMS. I use the system to write blogs in Notion and sync to the public website.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "notionapi",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://blog.jiaoll.com",
    },
    {
      name: "Meditation Button",
      description:
        "A next web application built using three.js, react-three/fiber and so on. It allows users to do a one-minute meditation on just one click.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  