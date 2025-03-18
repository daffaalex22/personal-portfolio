import {
    backend,
    creator,
    web,
  javascript,
    html,
    css,
  reactjs,
    nodejs,
    mongodb,
  git,
  docker,
    dealls,
    inedu,
  b25,
    threejs,
    go,
    mysql,
    postgresql,
    graphql,
    aws,
    pahamify,
  cleanarch,
  alterra,
  wisata,
  galunggung,
  rima,
  peakPost,
  github,
  live,
  atomik,
  virta,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: creator,
    },
    {
      title: "Javascript Developer",
      icon: web,
    },
    {
      title: "Go Developer",
      icon: backend,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Golang",
      icon: go,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "GraphQL",
      icon: graphql,
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
      name: "docker",
      icon: docker,
    },
    {
      name: "AWS",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Engineer (Frontend Heavy)",
      company_name: "Wisata App",
      icon: wisata,
      iconBg: "#ffffff",
      date: "Feb 2024 - April 2024",
      points: [
        "Engaged in feature ideation and design processes, collaborating with stakeholders to define and implement user-centric solutions",
        "Developed responsive frontend interfaces using Nuxt (Vue.js)",
        "Maintained backend services using Python (FastAPI) and PostgreSQL"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Dealls",
      icon: dealls,
      iconBg: "#761cec",
      date: "Aug 2022 - May 2023",
      points: [
        "Initiated the usage of Debugger, Git Hooks, and Standardizing Clear Task Description for Increasing Developers Productivity",
        "Develop and maintain backend application using tech such as NodeJS, MongoDB, Go, PostgreSQL and Redis.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Collaborate with other internal parties such as Frontend Engineers, QA Engineers, and Product Managers."
      ],
    },
    {
      title: "Backend Software Engineer",
      company_name: "Pahamify",
      icon: pahamify,
      iconBg: "#ffffff",
      date: "Feb 2022 - Jul 2022",
      points: [
        "Familiarize with tech stacks such as Go, NodeJs, MySQL, GraphQL, etc.",
        "Built some mini projects/POC related to sharding, tracing and private library.",
        "Collaborate with seniors as well as other interns.",
      ],
    },
    {
      title: "[Bootcamp Student] Fullstack Engineer",
      company_name: "Alterra Academy",
      icon: alterra,
      iconBg: "#ffffff",
      date: "Aug 2021 - Jan 2022",
      points: [
        "Top 5 Graduate",
        "Acted as Team Lead on Final Project, got the best rating.",
        "Worked with techs such as Git, GitHub, React.js, Material UI, Golang, Echo and MySQL.",
        "Also used infra techs such as Docker, GitHub Actions, and AWS."
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
      name: "[Ongoing] Galunggung",
      description:
        "A Company Website for PT Galunggung Perkasa Husada (a Medical Device company based in Tasikmalaya). Frontend + Strapi CMS",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "javascript/typescript",
          color: "green-text-gradient",
        },
        {
          name: "strapi-cms",
          color: "blue-text-gradient",
        },
        {
          name: "neondb",
          color: "green-text-gradient",
        },
      ],
      image: galunggung,
      links: [
        {
          title: "Frontend",
          type: "github",
          icon: github,
          url: "https://github.com/daffaalex22/galunggung"
        },
        {
          title: "Live Demo",
          type: "external",
          icon: live,
          url: "https://galunggung.vercel.app"
        },
        {
          title: "CMS",
          type: "github",
          icon: github,
          url: "https://github.com/daffaalex22/galunggung-backend"
        },
        {
          title: "CMS",
          type: "external",
          icon: live,
          url: "https://galunggung-backend.onrender.com/admin"
        },
      ],
      source_code_link: "https://github.com/daffaalex22/galunggung",
      live_link: "https://galunggung.vercel.app"
    },
    {
      name: "[Ongoing] Virta",
      description:
        "An AI powered Virtual Staging Web App",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "javascript/typescript",
          color: "green-text-gradient",
        },
        {
          name: "ai",
          color: "blue-text-gradient",
        },
      ],
      image: virta,
      links: [
        {
          title: "Live Demo",
          type: "external",
          icon: live,
          url: "https://virtaai.vercel.app/"
        },
      ],
      source_code_link: "https://github.com/daffaalex22/galunggung",
      live_link: "https://galunggung.vercel.app"
    },
    {
      name: "Peak Post",
      description:
        "A News (blogging) app that showcase my profiency with Strapi CMS, GraphQL and Nextjs",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "javascript/typescript",
          color: "green-text-gradient",
        },
        {
          name: "strapi-cms",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "graphql",
          color: "blue-text-gradient",
        },
      ],
      image: peakPost,
      links: [
        {
          title: "Frontend",
          type: "github",
          icon: github,
          url: "https://github.com/daffaalex22/peak-post"
        },
        {
          title: "Live Demo",
          type: "external",
          icon: live,
          url: "https://peak-post.vercel.app/"
        },
        {
          title: "CMS",
          type: "github",
          icon: github,
          url: "https://github.com/daffaalex22/peak-post-strapi"
        },
        {
          title: "CMS",
          type: "external",
          icon: live,
          url: "https://peak-post-strapi.onrender.com/admin"
        }
      ],
      source_code_link: "https://github.com/daffaalex22/galunggung",
      live_link: "https://galunggung.vercel.app"
    },
    {
      name: "Rima Indonesia",
      description:
        "An app for finding any text's rhymes. I built this app using React and Firebase Firestore.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "shadcn",
          color: "blue-text-gradient",
        },
      ],
      image: rima,
      links: [
        {
          title: "Source Code",
          type: "github",
          icon: github,
          url: "https://github.com/daffaalex22/kamus-rima"
        },
        {
          title: "Live Demo",
          type: "external",
          icon: live,
          url: "https://kamus-rima.vercel.app"
        }
      ],
      source_code_link: "https://github.com/daffaalex22/kamus-rima",
      live_link: "https://kamus-rima.vercel.app"
    },
    {
      name: "Atomik",
      description:
        "Laravel Landing page for an event. Due to some issue with the internal stakeholders, event is postponed and cancelled.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image: atomik,
      links: [
        {
          title: "Source Code",
          type: "github",
          icon: github,
          url: "https://github.com/daffaalex22/atomik-event-laravel"
        },
        {
          title: "Live Demo",
          type: "external",
          icon: live,
          url: "https://atomik-event.vercel.app/"
        }
      ],
      source_code_link: "#",
      live_link: "#"
    },
    {
      name: "InEdu",
      description:
        "Fullstack web applications for a learning management system inspired by Udemy. I built this along two other team members during a coding bootcamp.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "golang",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
        {
          name: "RESTful-API",
          color: "blue-text-gradient",
        },
      ],
      image: inedu,
      links: [
        {
          title: "Frontend",
          type: "github",
          icon: github,
          url: "https://github.com/daffaalex22/LMS-Frontend"
        },
        {
          title: "Live Demo",
          type: "external",
          icon: live,
          url: "https://inedu-frontend.vercel.app"
        },
        {
          title: "Backend",
          type: "github",
          icon: github,
          url: "https://github.com/daffaalex22/LMS-Backend"
        },
        {
          title: "Live Demo",
          type: "external",
          icon: live,
          url: ""
        },
      ],
      source_code_link: "https://linktr.ee/daffaalexander",
      live_link: "https://inedu-frontend.vercel.app"
    },
    {
      name: "B25 - Blogging",
      description:
        "Blogging frontend apps that I built for an imaginary organisation. I used ReactJs and Hasura for the backend",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "WYSIWYG",
          color: "green-text-gradient",
        },
      ],
      image: b25,
      links: [
        {
          title: "Source Code",
          type: "github",
          icon: github,
          url: "https://github.com/daffaalex22/before25_alta-ver"
        },
        {
          title: "Live Demo",
          type: "external",
          icon: live,
          url: ""
        }
      ],
      source_code_link: "https://github.com/daffaalex22/before25_alta-ver",
      live_link: "https://before25-alterra.netlify.app/"
    },
    {
      name: "Job Directory",
      description:
        "A job directory RESTful API made using Go Programming Language. This is the first project that I've worked on.",
      tags: [
        {
          name: "golang",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "RESTful-API",
          color: "pink-text-gradient",
        },
      ],
      image: cleanarch,
      links: [
        {
          title: "Source Code",
          type: "github",
          icon: github,
          url: "https://github.com/daffaalex22/jobdir"
        },
        {
          title: "Live Demo",
          type: "external",
          icon: live,
          url: ""
        }
      ],
      source_code_link: "https://github.com/daffaalex22/jobdir",
      live_link: "https://job-directory-n9ak.onrender.com"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };