import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiApacheecharts,
  SiHtml5,
  SiCss3,
  SiGit,
  SiRedux,
  SiJest,
} from "react-icons/si";

export const musics = [
  {
    title: "Come Around Me",
    artists: "Justin Bieber",
    coverUrl:
      "https://res.cloudinary.com/da6nwaqba/image/upload/v1756519236/come_around_me_xjaqil.jpg",
    externalUrl:
      "https://res.cloudinary.com/da6nwaqba/video/upload/v1756517455/M5000049uTDV38OVBG_hhfq2q.mp3",
    createdAt: new Date(),
  },
  {
    title: "Love Song",
    artists: "方大同",
    coverUrl:
      "https://res.cloudinary.com/da6nwaqba/image/upload/v1756519236/love_song_ragrgd.jpg",
    externalUrl:
      "https://res.cloudinary.com/da6nwaqba/video/upload/v1756517944/M500004bMWSV4F4x85_i37ajb.mp3",
    createdAt: new Date(),
  },
  {
    title: "Dead man",
    artists: "蔡徐坤",
    coverUrl:
      "https://res.cloudinary.com/da6nwaqba/image/upload/v1756519236/dead_man_d1nams.jpg",
    externalUrl:
      "https://res.cloudinary.com/da6nwaqba/video/upload/v1756517946/M500003kF8xn0K54o2_r0qqde.mp3",
    createdAt: new Date(),
  },
];

export const skills = [
  { title: "JavaScript", icon: <SiJavascript /> },
  { title: "TypeScript", icon: <SiTypescript /> },
  { title: "React.js", icon: <SiReact /> },
  { title: "Next.js", icon: <SiNextdotjs /> },
  { title: "Vue.js", icon: <SiVuedotjs /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss /> },
  { title: "Node.js", icon: <SiNodedotjs /> },
  { title: "Express.js", icon: <SiExpress /> },
  { title: "MongoDB", icon: <SiMongodb /> },
  { title: "Framer Motion", icon: <SiFramer /> },
  { title: "Echarts", icon: <SiApacheecharts /> },
  { title: "HTML5", icon: <SiHtml5 /> },
  { title: "CSS3", icon: <SiCss3 /> },
  { title: "Git", icon: <SiGit /> },
  { title: "Zustand", icon: <SiRedux /> },
  { title: "Jest", icon: <SiJest /> },
];

export const experiences = [
  {
    title: "Multi-source Information Fusion Platform",
    desc: "Developed a cloud-edge-end collaborative safety monitoring platform for coastal city engineering clusters. Integrated IoT, BIM, and GIS data for comprehensive visualization and intelligent analysis.",
    date: "2024.10 - 2025.06",
    company: "Shanghai Construction Group",
  },
  {
    title: "Enterprise-level Digital Platform Development",
    desc: "Participated in developing Geega MES, APS, OTP platforms. Built Monorepo architecture with pnpm, implemented i18n automation, micro-app integration, and performance optimization (LCP +30%).",
    date: "2025.09 - 2026.02",
    company: "Geely Holding Group",
  },
];
