import {
  backend,
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
  carrent,
  jobit,
  tripguide,
  threejs,
  logo1,
  drive,
  go,
  bdsi,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "BDSI",
    icon: bdsi,
    iconBg: "#383E56",
    date: "07/2021 - 08/2022",
    points: [
      " Responsible for the design, development and maintenance of the application, in collaboration with a team of developers.",
      "Created an intuitive user interface for instructors, trainees, and administrative staff, making it easier to manage classes, book reservations, and track candidate progress.",
      "Implemented automated reporting features to provide accurate statistical data and analysis to the management team.",
      
    ],
  },
 
  
  {
    title: "Full stack Developer",
    company_name: "GoMyCode",
    icon: go,
    iconBg: "#E6DEDD",
    date: "01/2022 - 06/2022",
    points: [
      "Work closely with the management team and stakeholders to understand business requirements and existing processes, in order to propose effective solutions.",
      "Integration of communication modules, facilitating collaboration between teachers, students and parents, thanks to features such as notifications and instant messaging.",
      "Successful deployment of the application and training of end users to ensure smooth adoption and maximize the effectiveness of the management tool.",
      "Ongoing maintenance of the app, resolving issues quickly, updating features and ensuring it meets the ever-changing needs of the school.",
    ],
  },
];

const testimonials = [
  
];

const projects = [
  {
    name: "DriveSmart Institute",
    description:
      "Complete development of a driving school management application to automate administrative processes and optimize overall efficiency.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:drive,
  },
  {
    name: "Smart-School",
    description:
      "Design, development and deployment of a tailor-made management application to meet the specific needs of a renowned private school.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image:logo1,
  },
 
];

export { services, technologies, experiences, testimonials, projects };
