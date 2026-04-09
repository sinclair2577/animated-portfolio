"use client";
import { motion } from "motion/react";

/**
 * Marquee - Awwwards 风格的无限滚动文字跑马灯
 * @param {string} text - 滚动文字
 * @param {number} duration - 一次完整滚动的时间（秒）
 * @param {string} className - 额外样式
 * @param {boolean} reverse - 是否反向滚动
 */
const Marquee = ({
  text,
  duration = 20,
  className = "",
  reverse = false,
}) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{
          x: reverse ? ["0%", "50%"] : ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        <span className="inline-block pr-8">{text}</span>
        <span className="inline-block pr-8">{text}</span>
        <span className="inline-block pr-8">{text}</span>
        <span className="inline-block pr-8">{text}</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
