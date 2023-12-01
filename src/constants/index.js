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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    dealls,
    inedu,
    b25,
    tripguide,
    threejs,
    go,
    mysql,
    postgresql,
    graphql,
    aws,
    pahamify,
    cleanarch,
    ongoing,
    alterra
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
      title: "Backend Software Engineer Intern",
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
      name: "[Ongoing] Kreanesia",
      description:
        "Ongoing Laravel App for Kreanesia event",
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
      image: ongoing,
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
          name: "restapi",
          color: "blue-text-gradient",
        },
      ],
      image: inedu,
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
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: cleanarch,
      source_code_link: "https://github.com/daffaalex22/jobdir",
      live_link: "https://job-directory-n9ak.onrender.com"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };