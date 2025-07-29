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
    fetch("/posts/markdown.md")
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
          <div className="flex flex-col items-center max-w-screen">
            {/* 顶部封面图 */}
            <div className="w-[533px] h-[300px] mx-auto">
              <Image src={mdData.hero_image} width={533} height={300} />
            </div>

            {/* 标题与作者信息 */}
            <div className="max-w-[768px] text-center my-5 ">
              <h1 className="text-2xl tracking-[5px] font-bold">
                {mdData.title}
              </h1>
              <h3 className="text-xl text-gray-500">
                {reformatDate(mdData.date)}
              </h3>
            </div>

            {/* 正文内容 */}
            <div className="max-w-[800px] flex flex-col mx-auto px-5">
              <ReactMarkdown>{mdContent}</ReactMarkdown>
            </div>

            {/* 作者信息 */}
            <h2 className="flex justify-between items-center w-full max-w-[800px] mx-auto pt-6 text-sm text-gray-400">
              作者：{mdData.author}
            </h2>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BlogPage;
