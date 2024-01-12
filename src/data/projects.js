
import picto from "/pictodemo.png";
import portfolio from "../images/portfolio-demo.png";
import defaultImage from "../images/default-project.png";


export const projectsData = [
  {
    name: "PICTOREAL Main Website",
    description:
    "Contributed to the enhancement of the PICTOREAL website, the official magazine designing and publishing club of PICT, incorporating the 'Odyssey' theme for Vol 25. Utilized HTML, CSS, and BOOTSTRAP to revamp the frontend, introducing visually appealing animations and thematic elements. Addressed website bugs for a smoother user experience. The project reflects a collaborative effort in creating an engaging UI/UX for the community.",
    image: picto,
    code: "",
    deployment: "https://pictoreal.in/",
    techStack: [
      "HTML5",
      "CSS",
      "BOOTSTRAP",
    ],
    sysArch: "",
  },
  {
    name: "Portfolio Website",
    description:
      "Created a simple and functional portfolio website using ReactJS and Tailwind CSS, hosted on Vercel. The site is designed to showcase my various projects and skills. Take a look to learn more about what I've been working on!",
    image: portfolio,
    code: "https://github.com/asp21k/asp21k-Portfolio",
    deployment:
      "www.asp21k-portfolio.vercel.app",
    techStack: [
      "HTML5",
      "CSS",
      "ReactJS",
      "TailwindCSS",
      "Vite"
    ],
    sysArch: "",
  },
  {
    name: "PICT-O-BLOGS",
    description:
      "Developing a blogging website for PICTOREAL club members to share their thoughts, experiences and learnings. The website is built using the MERN stack. The project is currently in progress, and will be deployed soon. Stay tuned for more updates! :)",
    image: defaultImage,
    code: "",
    deployment:
      "",
    techStack: [
      "ReactJS",
      "TailwindCSS",
      "Vite",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    sysArch: "",
    status: "In Progress"
  }
 
];
