import picto from "/pictodemo.png";
import portfolio from "../images/portfolio-demo.png";
// import defaultImage from "../images/default-project.png";
import pictofest from "../images/pictofest.png";
import pijet from "../images/pijet_landing.png";
import mcq from "../images/mcq.png";
export const projectsData = [
  {
    name: "PICTOFEST",
    description:
      "PICTOFEST is an art photography exhibition cum competition platform along with workshops and side events, organized by PICTOREAL PICT. The platform facilitates user management, entry/image submissions, online and offline voting, as well as workshop and side event registrations.",
    image: pictofest,
    code: "",
    deployment: "https://www.pictofest.in/",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Firebase",
    ],
    sysArch: "",
  },
  {
    name: "PIJET Official Website",
    description:
      "Contributed to the development of the official website for PICT’s International Journal of Engineering and Technology (PIJET) using ReactJS and Tailwind CSS. The website serves as a comprehensive platform to showcase the journal’s content, publications, and important information. Explore the website to get insights into the world of engineering and technology at PICT!",
    image: pijet,
    code: "",
    deployment: "https://www.pijet.org/",
    techStack: ["ReactJS", "Tailwind CSS"],
    sysArch: "",
    status: "In Progress",
  },
  {
    name: "College MCQ Platform",
    description:
      "A platform for colleges to conduct MCQ tests. Students can log in, view their performance, and take assigned tests. It includes a diverse question bank and allows teachers to create test slots with customizable parameters. Leaderboards are available post-test. User-friendly and scalable.",
    image: mcq,
    code: "https://github.com/samarthsm1100/College-MCQ-Client",
    deployment: "",
    techStack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Firebase",
      "PostgreSQL",
    ],
    sysArch: "",
  },
  {
    name: "PICTOREAL Main Website",
    description:
      "Contributed to the enhancement of the PICTOREAL website, the official magazine designing and publishing club of PICT, incorporating the 'Odyssey' theme for Vol 25. Utilized HTML, CSS, and BOOTSTRAP to revamp the frontend, introducing visually appealing animations and thematic elements. Addressed website bugs for a smoother user experience. The project reflects a collaborative effort in creating an engaging UI/UX for the community.",
    image: picto,
    code: "",
    deployment: "https://pictoreal.in/",
    techStack: ["HTML5", "CSS", "BOOTSTRAP"],
    sysArch: "",
  },
  {
    name: "Portfolio Website",
    description:
      "Created a simple and functional portfolio website using ReactJS and Tailwind CSS, hosted on Vercel. The site is designed to showcase my various projects and skills. Take a look to learn more about what I've been working on!",
    image: portfolio,
    code: "https://github.com/asp21k/asp21k-Portfolio",
    deployment: "https://www.asp21k-portfolio.vercel.app",
    techStack: ["HTML5", "CSS", "ReactJS", "TailwindCSS", "Vite"],
    sysArch: "",
  },
];
