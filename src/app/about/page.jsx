"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll } from "motion/react";
import Brain from "@/components/brain";
import Image from "next/image";
import { skills, experiences } from '@/data/index'


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
      className="h-[calc(100vh-6rem)]"
    >
      {/* Container */}
      <div className="w-full h-full overflow-scroll lg:flex scrollbar-hide" ref={containerRef}>
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col gap-24 md:gap-32 lg:gap-48 lg:pr-0 xl:gap-64 2xl:gap-72 lg:w-2/3 xl:w-1/2">
          {/* Biography */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              I am Liu Yuhao (Sinclair), a passionate frontend engineer pursuing a master's degree in software engineering at East China Jiaotong University. With expertise in React, Next.js, TypeScript, and modern web technologies, I have delivered enterprise-level solutions for major companies including Shanghai Construction Group and Geely Holding Group. My experience spans from cloud-edge-end collaborative platforms to large-scale digital transformation projects. I excel at performance optimization, building scalable architectures, and implementing innovative solutions that drive business impact.
            </p>
            <span className="italic">
              Focused on front-end, passionate about innovation, and dedicated
              to delivering exceptional user experiences and technical
              excellence.
            </span>
            <div className="self-end">
              <Image src="/sinclair.svg" width={160} height={160} ></Image>
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
              className='dark:fill-white'
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
                <div key={exp.title} className="flex justify-between min-h-80 lg:h-96 gap-4">
                  {/* Left */}
                  <div className="hidden lg:block w-1/3">
                    {index % 2 == 0 && (
                      <div>
                        <div className="bg-white rounded-md text-base lg:text-lg font-semibold p-2 dark:bg-black">
                          {exp.title}
                        </div>
                        <div className="text-sm lg:text-base italic py-3 lg:py-5">{exp.desc}</div>
                        <div className="text-red-400 font-semibold py-2 lg:py-3 text-sm">
                          {exp.date}
                        </div>
                        <div className="bg-white p-1 rounded font-semibold w-fit text-sm dark:bg-black">
                          {exp.company}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center */}
                  <div className="w-auto lg:w-1/6 h-full flex justify-center">
                    {/* Progress Line */}
                    <div className="w-1 h-full bg-gray-500 relative">
                      <div className="w-4 h-4 lg:w-5 lg:h-5 bg-white ring-4 ring-red-400 rounded-full absolute -left-1.5 lg:-left-2"></div>
                    </div>
                  </div>
                  {/* Right - Mobile/Tablet: Always show, Desktop: Alternate */}
                  <div className="w-full lg:w-1/3">
                    {(index % 2 != 0 || window.innerWidth < 1024) && (
                      <div>
                        <div className="bg-white rounded-md text-base lg:text-lg font-semibold p-2 dark:bg-black">
                          {exp.title}
                        </div>
                        <div className="text-sm lg:text-base italic py-3 lg:py-5">{exp.desc}</div>
                        <div className="text-red-400 font-semibold py-2 lg:py-3 text-sm">
                          {exp.date}
                        </div>
                        <div className="bg-white p-1 rounded font-semibold w-fit text-sm dark:bg-black">
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
