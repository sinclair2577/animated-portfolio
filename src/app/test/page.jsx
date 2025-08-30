"use client";
import { useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";

const Test = () => {
  const [hide, setHide] = useState(false);
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 2 } }}
      className="mx-auto flex h-[200vh] w-full max-w-[800px] flex-col"
    >
      <p>
        学习Motion for
        React，它是唯一一个混合引擎的库，这意味着它既提供原生浏览器动画的硬件加速性能，又提供JavaScript动画的无限潜力。
      </p>
      核心组件：``` motion.div ``` 通过initial属性和animate属性设置动画。
      在下面这里我们通过Gestures通过手势识别扩展React事件系统
      <motion.div
        whileHover={{ scale: 1.1 }} // 悬停
        whileTap={{ scale: 0.95 }} // 点击
        onHoverStart={() => console.log("您悬浮在该盒子上！")} // 开始悬浮在盒子上的事件处理
        className="h-[100px] w-[100px] bg-purple-500"
      ></motion.div>
      接着是Scroll
      animations滚动动画，Motion支持两种类型的滚动动画：滚动触发和滚动链接。
      <div className="h-screen"></div>
      <motion.div
        initial={{ backgroundColor: "rgb(0,255,0)", opacity: 0 }}
        whileInView={{ backgroundColor: "rgb(255,0,0)", opacity: 1 }}
        className="h-[100px] w-[100px] bg-blue-500"
      ></motion.div>
      接下来实现一个滚动链接的进度条
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0, // transform-origin
          backgroundColor: "#ff0088",
        }}
      ></motion.div>
      Layout布局动画
      <motion.div
        layout
        className="h-[100px] w-[100px] bg-yellow-500"
      ></motion.div>
      退出动画，使用AnimatePresence包装motion组件，访问exit属性。
      <AnimatePresence>
        {hide && (
          <motion.div
            exit={{ opacity: 0 }}
            className="h-[100px] w-[100px] bg-green-500"
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div>
        <button
          className="w-[100px] rounded-sm border-none bg-blue-200"
          onClick={() => setHide(!hide)}
        >
          Hide
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Test;
