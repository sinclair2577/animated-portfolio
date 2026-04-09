"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll } from "motion/react";
import Brain from "@/components/brain";
import Image from "next/image";
import { skills, experiences } from "@/data/index";
import { ScrollReveal } from "@/components/animations";
import { StaggerContainer, StaggerItem } from "@/components/animations";

const AboutPage = () => {
  const containerRef = useRef();
  const skillsRef = useRef();
  const expRef = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const isExpInView = useInView(expRef, { once: true });

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-[calc(100vh-6rem)]"
    >
      {/* Container */}
      <div
        className="w-full h-full overflow-scroll lg:flex scrollbar-hide"
        ref={containerRef}
      >
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col gap-24 md:gap-32 lg:gap-48 lg:pr-0 xl:gap-64 2xl:gap-72 lg:w-2/3 xl:w-1/2">
          {/* Biography */}
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="flex flex-col gap-8 justify-center">
              {/* Section Label */}
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gray-400 dark:bg-gray-600" />
                <span className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
                  About Me
                </span>
              </div>

              <h1 className="font-bold text-3xl sm:text-4xl tracking-tight">
                BIOGRAPHY
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                I am{" "}
                <strong className="text-black dark:text-white">
                  Liu Yuhao (Sinclair)
                </strong>
                , a passionate frontend engineer pursuing a master&apos;s degree
                in Software Engineering at{" "}
                <strong className="text-black dark:text-white">
                  East China Jiaotong University
                </strong>
                . With expertise in React, Next.js, TypeScript, and modern web
                technologies, I have delivered enterprise-level solutions for
                major companies including Shanghai Construction Group and Geely
                Holding Group.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                My experience spans from cloud-edge-end collaborative platforms
                to large-scale digital transformation projects. I excel at
                performance optimization, building scalable architectures, and
                implementing innovative solutions that drive business impact.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">
                    2+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Years Experience
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">
                    5+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Projects Delivered
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">
                    JCR 2
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Research Paper
                  </div>
                </div>
              </div>

              <span className="italic text-gray-500 dark:text-gray-400 border-l-2 border-purple-500 pl-4">
                Focused on front-end, passionate about innovation, and dedicated
                to delivering exceptional user experiences and technical
                excellence.
              </span>

              <div className="self-end">
                <Image
                  src="/sinclair.svg"
                  width={160}
                  height={160}
                  alt="Sinclair signature"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="flex flex-col gap-8 justify-center">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gray-400 dark:bg-gray-600" />
                <span className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
                  Education
                </span>
              </div>

              <h1 className="font-bold text-3xl sm:text-4xl tracking-tight">
                EDUCATION
              </h1>

              <div className="glass rounded-xl p-6 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold">
                    East China Jiaotong University
                  </h3>
                  <span className="text-sm text-purple-500 font-semibold">
                    2019.09 - 2026.06
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">
                  Software Engineering (Master&apos;s Degree)
                </p>
                <div className="divider-animated my-4" />
                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Research:{" "}
                    <em>
                      Railway Fastener Defect Detection Using RFD-DETR: A
                      Lightweight Real-Time Transformer-Based Approach
                    </em>{" "}
                    (JCR Q2)
                  </p>
                  <p>Patent: CN120259287A</p>
                  <p>
                    Awards: Software Designer Certificate, Provincial
                    Scholarship (2 consecutive years), CET-6
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Skills */}
          <div className="flex flex-col gap-8 justify-center">
            <ScrollReveal variant="fadeLeft">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-gray-400 dark:bg-gray-600" />
                <span className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
                  Tech Stack
                </span>
              </div>
              <h1 className="font-bold text-3xl sm:text-4xl tracking-tight">
                SKILLS
              </h1>
            </ScrollReveal>

            <StaggerContainer
              className="flex flex-wrap gap-3"
              staggerDelay={0.06}
              ref={skillsRef}
            >
              {skills.map((skill) => (
                <StaggerItem key={skill.title}>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white dark:hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
                    <span className="text-lg sm:text-xl">{skill.icon}</span>
                    <span>{skill.title}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Skill Categories */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="glass rounded-xl p-5">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-purple-500 mb-3">
                    Frontend
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    React, Next.js (SSR/ISR), Vue.js, TypeScript, TailwindCSS,
                    Hooks, Dynamic Forms
                  </p>
                </div>
                <div className="glass rounded-xl p-5">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-blue-500 mb-3">
                    Performance
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Core Web Vitals (LCP, FID), Lighthouse, Code Splitting, Lazy
                    Loading
                  </p>
                </div>
                <div className="glass rounded-xl p-5">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-green-500 mb-3">
                    Engineering
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Webpack/Vite/Rollup, Monorepo (pnpm), Docker + Jenkins
                    CI/CD
                  </p>
                </div>
                <div className="glass rounded-xl p-5">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-orange-500 mb-3">
                    AI-Driven Dev
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Cursor IDE + MCP, OpenAPI Code Generation, Agent Skills,
                    GitHub Copilot
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3 }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              className="dark:fill-white"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              />
              <path d="M12 6V14" stroke="#000000" strokeWidth="1" />
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1" />
            </motion.svg>
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-8 pb-48">
            <ScrollReveal variant="fadeLeft">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-gray-400 dark:bg-gray-600" />
                <span className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
                  Work History
                </span>
              </div>
              <h1 className="font-bold text-3xl sm:text-4xl tracking-tight">
                EXPERIENCE
              </h1>
            </ScrollReveal>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isExpInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              ref={expRef}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isExpInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="flex justify-between min-h-80 lg:h-96 gap-4"
                >
                  {/* Left */}
                  <div className="hidden lg:block w-1/3">
                    {index % 2 === 0 && (
                      <div className="glass rounded-xl p-4 card-hover">
                        <div className="bg-white/80 dark:bg-black/80 rounded-lg text-base lg:text-lg font-semibold p-3">
                          {exp.title}
                        </div>
                        <div className="text-sm lg:text-base italic py-3 lg:py-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                          {exp.desc}
                        </div>
                        <div className="text-purple-500 font-semibold py-2 text-sm">
                          {exp.date}
                        </div>
                        <div className="inline-block bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full font-medium text-sm">
                          {exp.company}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center - Timeline */}
                  <div className="w-auto lg:w-1/6 h-full flex justify-center">
                    <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500 relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isExpInView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.3, type: "spring" }}
                        className="w-4 h-4 lg:w-5 lg:h-5 bg-white ring-4 ring-purple-500 rounded-full absolute -left-[7px] lg:-left-[9px] shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Right */}
                  <div className="w-full lg:w-1/3">
                    {(index % 2 !== 0 || isMobile) && (
                      <div className="glass rounded-xl p-4 card-hover">
                        <div className="bg-white/80 dark:bg-black/80 rounded-lg text-base lg:text-lg font-semibold p-3">
                          {exp.title}
                        </div>
                        <div className="text-sm lg:text-base italic py-3 lg:py-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                          {exp.desc}
                        </div>
                        <div className="text-purple-500 font-semibold py-2 text-sm">
                          {exp.date}
                        </div>
                        <div className="inline-block bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full font-medium text-sm">
                          {exp.company}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* SVG Container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
