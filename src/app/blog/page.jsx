"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import matter from "gray-matter";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ScrollReveal } from "@/components/animations";

const BlogPage = () => {
  const [mdData, setMdData] = useState();
  const [mdContent, setMdContent] = useState();
  useEffect(() => {
    fetch("/posts/react-concepts.md")
      .then((res) => res.text())
      .then((text) => {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen flex justify-center py-8 sm:py-12"
    >
      <div className="w-full max-w-4xl">
        {mdData && (
          <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full text-center mb-8"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-gray-400 dark:bg-gray-600" />
                <span className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
                  Blog Post
                </span>
                <div className="h-px w-12 bg-gray-400 dark:bg-gray-600" />
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-bold mb-4">
                {mdData.title}
              </h1>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{mdData.author}</span>
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <span>{reformatDate(mdData.date)}</span>
              </div>
            </motion.div>

            {/* Cover Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full max-w-[640px] aspect-video mx-auto mb-10 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={mdData.hero_image}
                width={640}
                height={360}
                className="w-full h-auto object-cover"
                alt={mdData.title || "Blog post cover image"}
              />
            </motion.div>

            {/* Divider */}
            <div className="divider-animated w-full max-w-[800px] mb-10" />

            {/* Article Content */}
            <ScrollReveal variant="fadeUp" delay={0.2} className="w-full">
              <div className="w-full max-w-[800px] flex flex-col mx-auto px-4 sm:px-5 prose prose-gray dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-purple-500">
                <ReactMarkdown>{mdContent}</ReactMarkdown>
              </div>
            </ScrollReveal>

            {/* Footer */}
            <div className="divider-animated w-full max-w-[800px] mt-10 mb-6" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-between items-center w-full max-w-[800px] mx-auto text-xs sm:text-sm text-gray-400 px-4 pb-12"
            >
              <span>Author: {mdData.author}</span>
              <span>{reformatDate(mdData.date)}</span>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BlogPage;
