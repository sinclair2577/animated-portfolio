"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { TextReveal } from "@/components/animations";
import { Marquee } from "@/components/animations";

const Model = dynamic(() => import("@/components/model"), { ssr: false });

const Homepage = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-[calc(100vh-6rem)]"
    >
      {/* Hero Section */}
      <div className="h-[calc(100vh-6rem)] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Model Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Model />
        </div>

        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 items-center justify-center">
          {/* Greeting */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm sm:text-base tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400"
          >
            Frontend Developer
          </motion.span>

          {/* Title with text reveal animation */}
          <TextReveal
            text="Hi, I'm Sinclair"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold justify-center"
            mode="char"
            delay={0.5}
            staggerDelay={0.04}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-500 text-center dark:text-white/70 max-w-lg leading-relaxed"
          >
            Specializing in React, Next.js &amp; TypeScript. Passionate about
            building high-performance web applications and crafting exceptional
            user experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex gap-4"
          >
            <button
              className="group relative px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium overflow-hidden transition-transform duration-300 hover:scale-105"
              onClick={() => router.push("/portfolio")}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <button
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-black dark:border-white font-medium transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              onClick={() => router.push("/contact")}
            >
              Contact Me
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="hidden lg:flex flex-col items-center gap-2 mt-8"
          >
            <span className="text-xs tracking-widest text-gray-400 uppercase">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center pt-1"
            >
              <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Section - 技术栈滚动展示 */}
      <div className="py-8 sm:py-12 border-y border-gray-200 dark:border-gray-800">
        <Marquee
          text="React  /  Next.js  /  TypeScript  /  TailwindCSS  /  Node.js  /  Vue.js  /  Framer Motion  /  Cesium  /  Docker  /  Jenkins  /"
          duration={25}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 dark:text-gray-800"
        />
      </div>
    </motion.div>
  );
};

export default Homepage;
