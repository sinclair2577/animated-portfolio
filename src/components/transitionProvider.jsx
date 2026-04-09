"use client";

import Navbar from "./navbar";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ScrollProgress } from "./animations";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  const pageNames = {
    "/": "Home",
    "/about": "About",
    "/portfolio": "Portfolio",
    "/contact": "Contact",
    "/blog": "Blog",
  };

  const displayName = pageNames[pathName] || pathName.substring(1);

  return (
    <AnimatePresence mode="wait">
      <div className="relative min-h-screen w-full">
        {/* 全局滚动进度条 */}
        <ScrollProgress />

        {/* 导航栏 */}
        <div className="relative z-20 h-24">
          <Navbar />
        </div>

        {/* 带过场动画的内容区域 */}
        <motion.div
          layout
          transition={{ duration: 2 }}
          key={pathName}
          className="relative min-h-screen w-full"
        >
          {/* 固定背景渐变 */}
          <motion.div
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
          />

          {/* 页面过渡遮罩 - 上方 */}
          <motion.div
            className="fixed z-40 h-screen w-full bg-gradient-to-b from-black to-gray-900"
            initial={{ height: "100vh" }}
            animate={{ height: "0vh" }}
            exit={{ height: "140vh" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            style={{ borderRadius: "0 0 50px 50px" }}
          />

          {/* 页面名称文字 */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 top-0 z-50 m-auto h-fit w-fit cursor-default"
            initial={{ opacity: 1, scale: 0.8 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-wider">
              {displayName}
            </span>
          </motion.div>

          {/* 页面过渡遮罩 - 下方 */}
          <motion.div
            className="fixed bottom-0 z-30 h-screen w-full bg-gradient-to-t from-black to-gray-900"
            initial={{ height: "140vh" }}
            animate={{
              height: "0vh",
              transition: { delay: 0.5, ease: [0.76, 0, 0.24, 1] },
            }}
            style={{ borderRadius: "50px 50px 0 0" }}
          />

          {/* 内容 */}
          <motion.div className="relative z-10">{children}</motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
