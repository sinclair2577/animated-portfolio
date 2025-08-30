"use client";
import { useEffect, useState, forwardRef, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useMotionValueEvent
} from "motion/react";
import AboutPage from "@/app/about/page";

const MotionTest = () => {
  const x = useMotionValue(0);
  const [isHide, setIsHide] = useState(true);
  // 自定义motion组件，确保不要在另一个React渲染函数中调用motion.create()，
  // 否则每次渲染都会重新创建，影响动画性能
  const About = motion.create(AboutPage, { forwardMotionProps: true });

  // 通过设置React状态来管理Variants
  const [status, setStatus] = useState("active");
  // Variants
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const variants1 = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { delay: index * 0.3 },
    }),
  };

  const iconVariants = {
    tap: {
      scale: 0.9,
    },
    hover: {
      scale: 1.2,
    },
  };
  const constraintsRef = useRef(null);
  useEffect(() => {
    // 在useEffect钩子中不会触发重新渲染;
    const timeout = setTimeout(() => x.set(100), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const [isOpen, setOpen] = useState(false);

  const { scrollX, scrollY, scrollXProgress, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollX, "change", (latest) => {
    console.log('Page scroll: ', latest)
  })
  return (
    <motion.div className="mx-auto w-full max-w-[1000px]">
      接下来学习motion基础组件，在Performance方面，使用motion values来更新style
      <motion.div
        style={{ x }}
        className="h-[100px] w-[100px] bg-red-500"
      ></motion.div>
      自定义的motion组件
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 0 }}
        transition={{ duration: 1 }}
        className="h-[100px] w-[100px] bg-stone-500"
      ></motion.div>
      动画的属性们： 首先是initial
      <AnimatePresence>
        {isHide && (
          <motion.div
            initial={{ boxShadow: "0px 0px #000" }}
            animate={{ boxShadow: "10px 10px #000" }}
            exit={{ opacity: 0 }}
            className="h-[100px] w-[100px] bg-red-400"
            onClick={() => setIsHide(!isHide)}
          ></motion.div>
        )}
      </AnimatePresence>
      值类型转换
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "20vw" }}
        className="mt-5 h-[100px] w-[100px] bg-red-500"
        style={{ x: -20 }}
      ></motion.div>
      独立动画在Gesture方面
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="block h-[100px] w-[100px] bg-red-500"
      ></motion.button>
      直接设置transform独特地提供硬件加速，设置变换原点origin
      <motion.li
        initial={{ transform: "translateX(-100px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ type: "spring" }}
        style={{ originX: 0.5 }}
        className="h-[100px] w-[100px] bg-red-500"
      ></motion.li>
      <h2 className="text-center">CSS variables</h2>
      <motion.ul
        initial={{ "--rotate": "0deg" }}
        animate={{ "--rotate": "360deg" }}
        transition={{ duration: 2 }}
      >
        <li style={{ transform: "rotate(var(--rotate))" }}>1</li>
        <li style={{ transform: "rotate(var(--rotate))" }}>2</li>
        <li style={{ transform: "rotate(var(--rotate))" }}>3</li>
      </motion.ul>
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
      <motion.div
        initial={{ x: [0, 100, 0] }}
        animate={{ x: [100, 0, 100] }}
        className="h-[100px] w-[100px] bg-red-500"
      ></motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
        whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
        whileInView={{ opacity: 1 }}
        className="h-[100px] w-[100px] bg-red-500"
      />
      使用Variants协调动画在整个DOM中传播
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ durantion: 2 }}
        className="h-[100px] w-[100px] bg-red-500"
      ></motion.div>
      <motion.div
        animate={status} // pass in our React state!
        variants={{
          inactive: { scale: 0.9, color: "text-gray-500" },
          active: { scale: 1, color: "text-blue-500" },
          complete: { scale: 1, color: "text-blue-500" },
        }}
        className="mt-5 h-[100px] w-[100px] bg-red-500"
      >
        Hello
      </motion.div>
      <button onClick={() => setStatus("inactive")}>Click me</button>
      {[1, 2, 3].map((item, index) => (
        <motion.div
          initial="hidden"
          animate="visible"
          whileInView="visible"
          custom={index}
          variants={variants1}
          className="mt-2 h-[100px] w-[100px] bg-red-500"
        />
      ))}
      <motion.button
        className="mt-2 h-[100px] w-[100px] bg-green-500"
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap="tap"
        variants={iconVariants}
        drag
      />
      通过useRef设置拖拽的限制区域
      <motion.div
        style={{
          width: 300,
          height: 300,
          backgroundColor: "red",
          borderRadius: 10,
        }}
        ref={constraintsRef}
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#ff0088",
            borderRadius: 10,
          }}
        ></motion.div>
      </motion.div>
      Focus 焦点控制
      <motion.a whileFocus={{ scale: 1.2 }} href="#">
        Hell
      </motion.a>
      <motion.div
        layout
        animate={{ opacity: 0.5 }}
        transition={{
          default: { ease: "linear" },
          layout: { duration: 0.3 },
        }}
        className="mt-2 h-[100px] w-[100px] bg-green-500"
      />
      {/* 组布局动画 */}
      <motion.div layout style={{ height: isOpen ? '100px' : '500px', width: '100px', backgroundColor: 'red' }} onClick={() => setOpen(!isOpen)}></motion.div>
      滚动动画
      <motion.div className="h-[1500px] w-[500px] bg-transparent border border-2 border-pink-500 scroll-auto"></motion.div>
    </motion.div>
  );
};

export default MotionTest;
