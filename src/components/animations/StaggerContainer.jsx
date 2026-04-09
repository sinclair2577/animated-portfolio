"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

/**
 * StaggerContainer - 子元素交错入场动画容器
 * @param {React.ReactNode} children - 子元素
 * @param {number} staggerDelay - 每个子元素的交错延迟
 * @param {string} className - 额外样式
 */
const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = "",
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerItem - 配合 StaggerContainer 使用的子元素
 */
const StaggerItem = ({ children, className = "" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export { StaggerContainer, StaggerItem };
