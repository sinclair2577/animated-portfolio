"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import matter from "gray-matter";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const BlogPage = () => {
  const [mdData, setMdData] = useState();
  const [mdContent, setMdContent] = useState();
  useEffect(() => {
    fetch("/posts/react-concepts.md")
      .then((res) => res.text())
      .then((text) => {
        console.log(matter(text));
        setMdContent(matter(text).content);
        setMdData(matter(text).data);
      });
  }, []);

  const reformatDate = (fullDate) => {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  };

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen flex justify-center items-center"
    >
      <div className="">
        {mdData && (
          // 博客内容区域
          <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8">
            {/* 顶部封面图 */}
            <div className="w-full max-w-[533px] h-auto aspect-video mx-auto">
              <Image src={mdData.hero_image} width={533} height={300} className="w-full h-auto" />
            </div>

            {/* 标题与作者信息 */}
            <div className="w-full max-w-[768px] text-center my-5 ">
              <h1 className="text-xl sm:text-2xl md:text-3xl tracking-[3px] sm:tracking-[5px] font-bold">
                {mdData.title}
              </h1>
              <h3 className="text-base sm:text-lg md:text-xl text-gray-500 mt-2">
                {reformatDate(mdData.date)}
              </h3>
            </div>

            {/* 正文内容 */}
            <div className="w-full max-w-[800px] flex flex-col mx-auto px-4 sm:px-5">
              <ReactMarkdown>{mdContent}</ReactMarkdown>
            </div>

            {/* 作者信息 */}
            <h2 className="flex justify-between items-center w-full max-w-[800px] mx-auto pt-6 text-xs sm:text-sm text-gray-400 px-4">
              作者：{mdData.author}
            </h2>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BlogPage;
