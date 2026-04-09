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
  SiDocker,
  SiJenkins,
  SiWebpack,
  SiVite,
  SiCesium,
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
  { title: "Cesium", icon: <SiCesium /> },
  { title: "HTML5", icon: <SiHtml5 /> },
  { title: "CSS3", icon: <SiCss3 /> },
  { title: "Git", icon: <SiGit /> },
  { title: "Docker", icon: <SiDocker /> },
  { title: "Jenkins", icon: <SiJenkins /> },
  { title: "Webpack", icon: <SiWebpack /> },
  { title: "Vite", icon: <SiVite /> },
  { title: "Zustand", icon: <SiRedux /> },
  { title: "Jest", icon: <SiJest /> },
];

export const experiences = [
  {
    title: "Multi-source Information Fusion Platform",
    desc: "Led development of a digital twin monitoring platform for coastal city engineering clusters. Implemented 3D model dynamic loading via page routing, built multi-dimensional risk warning system with Cesium (60fps, 40% memory reduction). Adopted Docker + Jenkins CI/CD pipeline with layered Docker builds, reducing total build time by 40%.",
    date: "2024.10 - 2025.06",
    company: "Shanghai Construction Group",
    tech: "Next.js + TypeScript + TailwindCSS + Echarts + Cesium",
  },
  {
    title: "Enterprise Digital Platform (Geega MES/APS/OTP)",
    desc: "Built Monorepo architecture with pnpm Workspace, unified React + Vue project management. Implemented kiwi + i18n automated translation pipeline. Achieved lightweight performance monitoring with LCP optimization of 30%. Integrated micro-app architecture supporting 5+ business lines with 30% shorter launch cycles.",
    date: "2025.09 - 2026.02",
    company: "Geely Holding Group (Guangyu Mingdao Digital Tech)",
    tech: "React + Vue + Rollup + pnpm + micro-app",
  },
];

export const portfolios = [
  {
    id: 1,
    color: "from-blue-300 to-violet-300",
    darkColor: "dark:from-blue-900/80 dark:to-violet-900/80",
    title: "Cloud-Edge-End Monitoring Platform",
    desc: "A multi-source information fusion integrated safety monitoring platform for coastal city engineering clusters. Features 3D model visualization with Cesium, real-time data dashboards with Echarts, and multi-dimensional risk warning system. Built with Next.js + TypeScript + TailwindCSS.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/sinclair2577",
    tags: ["Next.js", "Cesium", "Echarts", "Docker"],
  },
  {
    id: 2,
    color: "from-violet-300 to-purple-300",
    darkColor: "dark:from-violet-900/80 dark:to-purple-900/80",
    title: "sinc-cli",
    desc: "A custom CLI scaffolding tool based on personal IP, configuring the entire Web front-end workflow from development to deployment. Supports Vite, Next.js, and Vue project construction with automated build scripts and Rollup packaging.",
    img: "https://res.cloudinary.com/da6nwaqba/image/upload/v1756625617/project_glkhdw.png",
    link: "https://github.com/sinclair2577/si-cli",
    tags: ["Node.js", "Vite", "Rollup", "CLI"],
  },
  {
    id: 3,
    color: "from-purple-300 to-pink-300",
    darkColor: "dark:from-purple-900/80 dark:to-pink-900/80",
    title: "Enterprise Digital Platform",
    desc: "Geega MES, APS, OTP enterprise-level digital platforms supporting Web and H5 multi-terminal delivery. Built with Monorepo architecture, automated i18n translation, micro-app integration, and SpreadJS for Excel-like data editing.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/sinclair2577",
    tags: ["React", "Vue", "pnpm", "micro-app"],
  },
  {
    id: 4,
    color: "from-pink-300 to-red-300",
    darkColor: "dark:from-pink-900/80 dark:to-red-900/80",
    title: "Animated Portfolio",
    desc: "This personal portfolio website built with Next.js, Framer Motion, and Three.js. Features page transitions, 3D model rendering, scroll-driven animations, and a responsive design inspired by Awwwards-winning websites.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/sinclair2577/animated-portfolio",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
  },
];
