import { projectHero, meditation } from '../assets'
export const projectDetails = [
  {
    id: 1,
    title: 'A Blog system using Notion as CMS',
    img: projectHero,
    roles: ['Developer', 'UX Designer'],
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
    ],
    description:
      'This is a next application that uses Notion as a third-party API. I can edit my blog in Notion(a note software) and it will automatically update on the blog website',
    link: 'https://blog.jiaoll.com',
    blogs: [
      {
        title: "10 most useful tips to use Github Copilot in your coding",
        date: "June 8, 2024",
        link: "https://blog.jiaoll.com/travel-zhijin-china",
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
      {
        title: "Using Notion as CMS in a blog system - What is workflow",
        date: "June 8, 2024",
        link: "https://blog.jiaoll.com/travel-zhijin-china",
        description:"The blog is a conclusion after applying Github Copilot in my coding for a month. I will share the most useful tips to use Github Copilot about what is active, what is not",
        tags: [
          {
            name: 'Next',
            color: 'green-text-gradient',
          },
          {
            name: 'NotionAPI',
            color: 'orange-text-gradient',
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
    roles: ['Developer', 'UX Designer'],
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
    ],
    description:
      'A simplest Meditation website using threeJS and next to build. By clicking the button, you can start a meditation right away',
    link: 'https://meditation-button-next-three-js.vercel.app/',
    blogs: [
      {
        title: "10 most useful tips to use Github Copilot in your coding",
        date: "June 8, 2024",
        link: "https://blog.jiaoll.com/travel-zhijin-china",
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
      {
        title: "Using Notion as CMS in a blog system - What is workflow",
        date: "June 8, 2024",
        link: "https://blog.jiaoll.com/travel-zhijin-china",
        description:"The blog is a conclusion after applying Github Copilot in my coding for a month. I will share the most useful tips to use Github Copilot about what is active, what is not",
        tags: [
          {
            name: 'Next',
            color: 'green-text-gradient',
          },
          {
            name: 'NotionAPI',
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