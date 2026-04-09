"use client";
import { motion } from "motion/react";

/**
 * TextReveal - Awwwards 风格的文字逐字/逐词淡入动画
 * @param {string} text - 要显示的文本
 * @param {string} className - 额外的样式类
 * @param {"word"|"char"} mode - 动画模式：按词或按字符
 * @param {number} delay - 动画延迟（秒）
 * @param {number} staggerDelay - 每个元素的交错延迟（秒）
 */
const TextReveal = ({
  text,
  className = "",
  mode = "word",
  delay = 0,
  staggerDelay = 0.05,
  tag = "div",
}) => {
  const items = mode === "word" ? text.split(" ") : text.split("");
  const MotionTag = motion[tag] || motion.div;

  return (
    <MotionTag className={`flex flex-wrap ${className}`}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + index * staggerDelay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className={mode === "word" ? "mr-[0.3em]" : ""}
        >
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default TextReveal;
