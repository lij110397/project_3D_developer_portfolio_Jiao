import { projectHero, meditation } from '../assets'
export const projectDetails = [
  {
    id: 1,
    title: 'A Blog system using Notion as CMS',
    img: projectHero,
    roles: ['Developer', 'UX-Designer'],
    duration: '2024.05.15 - 2024.06.02',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'notionApi',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwindCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'daisyUI',
        color: 'orange-text-gradient',
      },
      {
        name: 'vercel',
        color: 'blue-text-gradient',
      },
      {
        name: 'i18next',
        color: 'pink-text-gradient',
      },
      {
        name: 'Github Actions',
        color: 'green-text-gradient',
      },
    ],
    description:
      'This is a next application that uses Notion as a third-party API. I can edit my blog in Notion(a note software) and it will automatically update on the blog website.',
    link: 'https://blog.jiaoll.com',
    points: [
      'Using Notion as CMS',
      'Language switch using i18next',
      'Theme switch using daisy ui',
      'Github Action as CI tool',
      'Cypress for E2E testing',
    ],
    blogs: [
      {
        title: "Tips of Using Github Copilot as code tool",
        date: "June 8, 2024",
        link: "https://blog.jiaoll.com/github-copilot-code-tips",
        description:"The blog is a conclusion after applying Github Copilot in my coding for a month. I will share the most useful tips to use Github Copilot about what is active, what is not",
        tags: [
          {
            name: 'githubCopilot',
            color: 'blue-text-gradient',
          },
          {
            name: 'tools',
            color: 'pink-text-gradient',
          },
        ],
        lang:"en"
      },
    ]
  },
  {
    id: 2,
    title: 'Meditation button',
    img: meditation,
    roles: ['Developer', 'UX-Designer'],
    duration: '2024.06.03 - 2024.06.14',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'threeJS',
        color: 'pink-text-gradient',
      },
      {
        name: 'react-three-fiber',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindCSS',
        color: 'orange-text-gradient',
      },
      {
        name: 'nextAuth',
        color: 'pink-text-gradient',
      },
      {
        name: 'Redux',
        color: 'blue-text-gradient',
      },
    ],
    description:
      'A simple Meditation website using threeJS and next to build. By clicking the button, you can start a meditation right away.',
    link: 'https://meditation-button-next-three-js.vercel.app/',
    points: [
      'Using threeJS to create a 3D meditation scene',
      'Using react-three-fiber to integrate threeJS with React',
      'Using NextAuth with mongodb-adapter and email verification using mailgun as SMTP',
      'Using Redux to synchronize time among components',
    ],
    blogs: [
      {
        title: "Redux and toolkit simple workflow",
        date: "July 9, 2024",
        link: "https://blog.jiaoll.com/redux-react-toolkit-workflow",
        description:"The basic workflow of using redux and toolkit in react application. It also introduces why we use redux and core concepts related.",
        tags: [
          {
            name: 'React',
            color: 'blue-text-gradient',
          },
          {
            name: 'Redux',
            color: 'pink-text-gradient',
          },
        ],
        lang:"en"
      },
      {
        title: "Login Page UX design in web",
        date: "June 24, 2024",
        link: "https://blog.jiaoll.com/login-daily-mimic-challenge",
        description:"This is UX learning conclusion of a mimicry practice of a login page. It also points out some useful tools like image palette plugin and WhatTheFonts website. It concludes a basic workflow for the practice.",
        tags: [
          {
            name: 'UX',
            color: 'green-text-gradient',
          },
          {
            name: 'Design',
            color: 'orange-text-gradient',
          },
        ],
        lang:"en"
      },
    ]
  },
]

export const projectNavLinks = [
  {
    id: 'home',
    title: 'Home'
  },
  {
    id: 'project',
    title: 'Project',
  },
  {
    id: 'blogs',
    title: 'Blogs',
  },
]