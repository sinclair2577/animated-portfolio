"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { portfolios } from "@/data/index";
import { ScrollReveal } from "@/components/animations";

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        {/* Hero Title */}
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-12 bg-gray-400 dark:bg-gray-600" />
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
              Selected Projects
            </span>
            <div className="h-px w-12 bg-gray-400 dark:bg-gray-600" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-bold tracking-tight"
          >
            My <span className="text-gradient">Works</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-gray-500 dark:text-gray-400 text-center max-w-md"
          >
            Scroll horizontally to explore my projects
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center pt-1"
            >
              <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* Horizontal Scroll Section */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r " />
            {portfolios.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} ${item.darkColor}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 sm:gap-6 text-white px-4 sm:px-6 max-w-4xl">
                  {/* Project Number */}
                  <span className="text-sm tracking-[0.3em] uppercase opacity-60">
                    Project {String(item.id).padStart(2, "0")}
                  </span>

                  <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                    {item.title}
                  </h1>

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/20 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl aspect-video rounded-xl overflow-hidden group">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  </div>

                  <p className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-3xl text-sm sm:text-base lg:text-lg line-clamp-3 sm:line-clamp-4 opacity-90 leading-relaxed">
                    {item.desc}
                  </p>

                  <Link href={`/portfolio/${item.slug}`} className="flex justify-end">
                    <button className="group/btn flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-gray-800 dark:bg-gray-900 dark:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <span className="text-sm md:text-base">View Details</span>
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                      >
                        &rarr;
                      </motion.span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="h-screen w-screen gap-6 sm:gap-8 md:gap-12 flex flex-col justify-center items-center text-center px-4">
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center gap-6">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
              Interested?
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight">
              Let&apos;s work{" "}
              <span className="text-gradient">together</span>
            </h1>
          </div>
        </ScrollReveal>

        <div className="relative mt-8">
          <motion.svg
            animate={{ rotate: "360deg" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            viewBox="0 0 300 300"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="currentColor">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white dark:bg-white dark:text-black rounded-full flex justify-center items-center text-xs sm:text-sm md:text-base font-semibold transition-transform duration-300 hover:scale-110"
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
