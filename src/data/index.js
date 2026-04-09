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
    slug: "sinc-cli",
    color: "from-red-300 to-blue-300",
    darkColor: "dark:from-red-900/90 dark:to-blue-900/90",
    title: "sinc-cli",
    subtitle: "Personal IP Custom Scaffolding Tool",
    desc: "Based on personal IP custom scaffolding, configure the entire process of Web front-end from development to deployment, mainly using vite, nextjs, and vue for project construction.",
    img: "/asserts/img/si-cli-screenshot.png",
    coverImage: "/asserts/img/si-cli-screenshot.png",
    gallery: [
      "/asserts/img/si-cli-screenshot.png",
      "/asserts/img/si-cli-screenshot.png",
      "/asserts/img/si-cli-screenshot.png",
    ],
    link: "https://github.com/sinclair2577/si-cli",
    demoLink: "https://sinclair2577.github.io/si-cli/",
    githubLink: "https://github.com/sinclair2577/si-cli",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Commander.js",
      "Inquirer",
    ],
    features: [
      "One-click project initialization with multiple templates",
      "Interactive CLI prompts for configuration",
      "Built-in dev server with hot reload",
      "Production build optimization",
      "Customizable templates for Vue/React/Next.js",
    ],
    highlights: [
      { label: "Templates", value: "3+" },
      { label: "Downloads", value: "1K+" },
      { label: "Stars", value: "50+" },
    ],
    challenges:
      "Creating a flexible template system that supports multiple frameworks while maintaining simplicity. Implemented dynamic template rendering and dependency installation logic.",
    outcomes:
      "Reduced project setup time from 30 minutes to under 3 minutes for typical projects.",
  },
  {
    id: 2,
    slug: "platform-large-screen",
    color: "from-blue-300 to-violet-300",
    darkColor: "dark:from-blue-900/90 dark:to-violet-900/90",
    title: "Platform Large Screen",
    subtitle: "Multi-source Information Fusion Safety Monitoring Platform",
    desc: "This project is dedicated to developing a multi-source information fusion integrated safety monitoring and control platform for typical coastal city engineering clusters. The platform innovatively adopts a cloud- edge - end collaborative technology architecture, deeply integrating IoT sensor data, BIM (Building Information Modeling), and GIS (Geographic Information System), to build a comprehensive solution that integrates data access, management, intelligent analysis, and visualization.",
    img: "/asserts/img/platform-large-screenshot.png",
    coverImage: "/asserts/img/platform-large-screenshot.png",
    gallery: [
      "/asserts/img/platform-large-screenshot.png",
      "/asserts/img/platform-large-screenshot.png",
      "/asserts/img/platform-large-screenshot.png",
    ],
    link: "https://lama.dev",
    demoLink: "https://platform-demo.example.com/",
    githubLink: "https://github.com/sinclair2577/platform",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Echarts",
      "Cesium",
      "MongoDB",
      "Docker",
    ],
    features: [
      "Real-time 3D visualization with Cesium",
      "IoT sensor data integration",
      "BIM model dynamic loading",
      "GIS spatial analysis",
      "Multi-dimensional risk warning system",
      "Cloud-edge-end collaborative architecture",
    ],
    highlights: [
      { label: "FPS", value: "60" },
      { label: "Memory", value: "-40%" },
      { label: "Build Time", value: "-40%" },
    ],
    challenges:
      "Achieving smooth 60fps rendering with complex 3D models and real-time sensor data. Implemented LOD (Level of Detail) optimization and intelligent data loading strategies.",
    outcomes:
      "Reduced memory usage by 40% while maintaining 60fps rendering. Automated CI/CD pipeline reduced build time by 40%.",
  },
];
