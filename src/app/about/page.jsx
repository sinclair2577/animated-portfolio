"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll } from "motion/react";
import Brain from "@/components/brain";
import Image from "next/image";
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

const skills = [
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

const experiences = [
  {
    title: "Bachelor of Engineering in Software Engineering",
    desc: "Studied at East China Jiaotong University, focusing on core computer science, software engineering, and practical programming. Built a solid foundation through coursework and academic projects.",
    date: "2019.09 - 2023.06",
    company: "East China Jiaotong University",
  },
  {
    title: "Master of Engineering in Software Engineering",
    desc: "Currently pursuing a master's degree at East China Jiaotong University, specializing in advanced software engineering and innovative application development.",
    date: "2023.09 - 2026.06",
    company: "East China Jiaotong University",
  },
];

const AboutPage = () => {
  const containerRef = useRef();
  const skillsRef = useRef();
  const expRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const isSkillsInView = useInView(skillsRef);
  const isExpInView = useInView(expRef);

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      {/* Container */}
      <div className="w-full h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col gap-24 md:gap-32 lg:gap-48 lg:pr-0 xl:gap-64 2xl:gap-72 lg:w-2/3 xl:w-1/2">
          {/* Biography */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              I am Liu Yuhao (Sinclair), a passionate front-end developer with a
              full-time master's degree in software engineering, specializing in
              modern front-end technology stacks such as React, Next.js, and
              TypeScript. I have extensive hands-on experience in responsive
              design, performance optimization, and user experience design, and
              am capable of independently handling the entire development
              process from requirements analysis to project launch. Through
              multiple personal and team projects, I have gained deep practical
              knowledge in component-based development, state management, and
              the use of modern build tools. I am a fast learner, adept at
              quickly mastering new technologies and applying them to real-world
              development, with a strong focus on code quality and user
              experience. I continuously follow the latest trends in the
              front-end field and am committed to creating better product
              experiences through technology.
            </p>
            <span className="italic">
              Focused on front-end, passionate about innovation, and dedicated
              to delivering exceptional user experiences and technical
              excellence.
            </span>
            <div className="self-end">
              <Image src="/sinclair.svg" width={160} height={160}></Image>
            </div>
          </div>
          {/* Skills */}
          <div className="flex flex-col gap-12 justify-center">
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-200px" }}
              animate={isSkillsInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              ref={skillsRef}
            >
              SKILLS
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ x: "-200px" }}
              animate={isSkillsInView ? { x: 0 } : {}}
              ref={skillsRef}
            >
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="flex items-center gap-2 p-2 rounded-md text-lg font-bold bg-black text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.title}</span>
                </div>
              ))}
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3 }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Experience */}
          <div className="flex flex-col gap-12 pb-48">
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-200px" }}
              animate={isExpInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              ref={expRef}
            >
              Experience
            </motion.h1>
            {/* Experience Progress */}
            <motion.div
              className=""
              initial={{ x: "-200px" }}
              animate={isExpInView ? { x: 0 } : {}}
              ref={expRef}
            >
              {experiences.map((exp, index) => (
                <div key={exp.title} className="flex justify-between h-96">
                  {/* Left */}
                  <div className="w-1/3">
                    {index % 2 == 0 && (
                      <div>
                        <div className="bg-white rounded-md text-lg font-semibold p-2">
                          {exp.title}
                        </div>
                        <div className="text-md italic py-5">{exp.desc}</div>
                        <div className="text-red-400 font-semibold py-3">
                          {exp.date}
                        </div>
                        <div className="bg-white p-1 rounded font-semibold w-fit">
                          {exp.company}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center */}
                  <div className="w-1/6 h-full flex justify-center">
                    {/* Progress Line */}
                    <div className="w-1 h-full bg-gray-500 relative">
                      <div className="w-5 h-5 bg-white ring-4 ring-red-400 rounded-full absolute -left-2"></div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="w-1/3">
                    {index % 2 != 0 && (
                      <div>
                        <div className="bg-white rounded-md text-lg font-semibold p-2">
                          {exp.title}
                        </div>
                        <div className="text-md italic py-5">{exp.desc}</div>
                        <div className="text-red-400 font-semibold py-3">
                          {exp.date}
                        </div>
                        <div className="bg-white p-1 rounded font-semibold w-fit">
                          {exp.company}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* SVG Container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0  z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
