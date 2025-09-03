"use client";

import Navbar from "./navbar";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import MusicPlayer from '@/components/musicPlayer'

// 动画布局
const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div layout transition={{
        duration: 2
      }} key={pathName} className="relative min-h-screen w-full">
        {/* 固定背景渐变 */}
        <motion.div transition={{ duration: 0.5, ease: 'easeOut' }} className="fixed inset-0 bg-gradient-to-b from-blue-100 to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"></motion.div>
        <motion.div
          className="fixed z-40 h-screen w-full rounded-b-[100px] bg-black"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="fixed bottom-0 left-0 right-0 top-0 z-50 m-auto h-fit w-fit cursor-default text-8xl text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="fixed bottom-0 z-30 h-screen w-full rounded-t-[100px] bg-black"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        ></motion.div>
        {/* 导航栏 */}
        <div className="relative z-20 h-24">
          <Navbar />
        </div>
        {/* 内容 */}
        <motion.div
          className="relative z-10"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>

  );
};

export default TransitionProvider;
