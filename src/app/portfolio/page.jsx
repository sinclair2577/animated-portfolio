"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
const portfolios = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    darkColor: "dark:from-red-900/90 dark:to-blue-900/90",
    title: "sinc-cli",
    desc: "Based on personal IP custom scaffolding, configure the entire process of Web front-end from development to deployment, mainly using vite, nextjs, and vue for project construction.",
    img: "https://res.cloudinary.com/da6nwaqba/image/upload/v1756625617/project_glkhdw.png",
    link: "https://github.com/sinclair2577/si-cli",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    darkColor: "dark:from-blue-900/90 dark:to-violet-900/90",
    title: "platform large screen",
    desc: "This project is dedicated to developing a multi-source information fusion integrated safety monitoring and control platform for typical coastal city engineering clusters. The platform innovatively adopts a cloud- edge - end collaborative technology architecture, deeply integrating IoT sensor data, BIM (Building Information Modeling), and GIS (Geographic Information System), to build a comprehensive solution that integrates data access, management, intelligent analysis, and visualization. By establishing standardized monitoring target models and data models, the system achieves unified data management throughout the entire life cycle of key structures such as foundation pits and tunnels.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    darkColor: "dark:from-violet-900/90 dark:to-purple-900/90",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    darkColor: "dark:from-purple-900/90 dark:to-red-900/90",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center px-4">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x: x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 dark:from-purple-900/90 dark:to-red-900/90" />
            {portfolios.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} ${item.darkColor}`}
                key={item.id}
              >
                <div className="flex flex-col gap-6 sm:gap-8 text-white px-4 sm:px-6">
                  <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold">
                    {item.title}
                  </h1>
                  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl aspect-video">
                    <Image src={item.img} alt="" fill className="object-cover" />
                  </div>
                  <p className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl text-sm sm:text-base lg:text-lg line-clamp-4 sm:line-clamp-5">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 dark:bg-gray-800 dark:text-white font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* 尾部 */}
      <div className="h-screen w-screen gap-8 sm:gap-12 md:gap-16 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: "360deg" }}
            transition={{ duration: 8, repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex justify-center items-center text-xs sm:text-sm md:text-base"
            href="/contact"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;