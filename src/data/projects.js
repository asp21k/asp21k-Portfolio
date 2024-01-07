import chatapp from "../images/chat-app.png";
import defaultImage from "../images/default-project.png";
import ecotech from "../images/ecotech.png";
import fastnfresh from "../images/fast-n-fresh.jpg";
import noteitdown from "../images/note-it-down.jpg";
import radiance from "../images/radiance21.jpg";

export const projectsData = [
  {
    name: "EcoTech",
    description:
      "EcoTech is a one stop e-waste management solution. It was developed as a part of the WCE Hackathon. It consists of a mobile app, the admin dashboard, the recycler's dashboard, a machine learning model and the related backend microservices.",
    image: ecotech,
    code: "https://github.com/EcoTech-WCE-Hackathon/EcoTech",
    techStack: [
      "Flutter",
      "Next JS",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    sysArch: "https://sysArch.burhanuddinmerchant.me/ecotech.html",
  },
  {
    name: "Fast 'n fresh",
    description:
      "An E-commerce grocery delivery application with a focus on simplicity and speed. Has separate login for the user, the admin and the delivery boy.",
    image: fastnfresh,
    code: "https://github.com/Fast-n-fresh/fast-n-fresh-app",
    deployment:
      "https://github.com/Fast-n-fresh/fast-n-fresh-app/releases/download/v1.0-beta/app-release.apk",
    techStack: [
      "Flutter",
      "NodeJS",
      "MongoDB",
      "Docker",
      "Cloudinary",
      "Terraform",
    ],
    sysArch: "https://sysarch.burhanuddinmerchant.me/fnf.html",
  },
  {
    name: "Radiance '21 App",
    description:
      "A registration app for the events conducted in Radiance '21 and deployed it on Play Store. Hosted by PICT ACM Student Chapter - Women in Computing, Radiance is a high spirited event consisting of various technical and non-technical events.",
    image: radiance,
    // website: "https://radiance21.in/",
    deployment:
      "https://play.google.com/store/apps/details?id=com.pasc.radiance2021",
    techStack: ["Flutter", "NodeJS", "Firebase Cloud Messaging"],
  },
  {
    name: "Chat App",
    description:
      "A room / group chat app that can handle bi-directional conversations. Has a facility to share location. Can handle multiple rooms at a time.",
    image: chatapp,
    code: "https://github.com/RohinBhat/node-chat-app",
    deployment: "https://baron-chat-app.herokuapp.com/",
    techStack: [
      "NodeJS",
      "ExpressJS",
      "Socket.io",
      "HTML",
      "CSS",
      "Handlebars",
    ],
  },
  {
    name: "Task Manager API",
    description:
      "A Task Manager REST API with basic CRUD operations for users and their tasks created with Node JS. Follows Model-View-Controller (MVC) Architecture",
    image: defaultImage,
    code: "https://github.com/RohinBhat/task-manager-api",
    deployment: "https://baron-task-manager-api.herokuapp.com/",
    techStack: ["NodeJS", "ExpressJS", "MongoDB"],
  },
  {
    name: "Note It Down",
    description:
      "A Note-taking app along with a to-do list (Tasks) functionality, Note It Down is an app developed for Android devices using Firebase in the backend.",
    image: noteitdown,
    code: "https://github.com/RohinBhat/NoteItDown",
    techStack: ["Android", "Firebase"],
  },
];
