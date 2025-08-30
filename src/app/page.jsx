"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import axios from "axios";
import { CldImage } from 'next-cloudinary'
import { getCldImageUrl } from 'next-cloudinary';

const Model = dynamic(() => import("@/components/model"), { ssr: false });

const Homepage = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="h-[calc(100vh-6rem)]"
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* Model Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Model />
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl font-bold">
            My Name is <strong className="inline-block ">Sinclair</strong>.
          </h1>
          {/* DESC */}
          <p className="text-gray-500 text-center dark:text-white/80">
            {" "}
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* Buttons */}
          <div className="flex gap-4">
            <button
              className="p-4 rounded-lg ring-black ring-1 bg-black text-white dark:bg-white dark:text-black dark:ring-white"
              onClick={() => router.push("/portfolio")}
            >
              View My Work
            </button>
            <button
              className="p-4 rounded-lg ring-black ring-1 dark:ring-white"
              onClick={() => router.push("/contact")}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
