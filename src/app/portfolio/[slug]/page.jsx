"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { portfolios } from "@/data/index";
import { ArrowLeft, ExternalLink, Github, Calendar, Star, Code, Zap, Target } from "lucide-react";
import { useEffect, useState, Suspense } from "react";

const ProjectDetailContent = () => {
  const params = useParams();
  const slug = params?.slug;
  const [project, setProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (slug) {
      const found = portfolios.find((p) => p.slug === slug);
      setProject(found);
    }
  }, [slug]);

  // 移除滚动控制，改为页面加载时直接显示
  // const { scrollYProgress } = useScroll();
  // const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  // const headerScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-blue-500 hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className={`relative h-[calc(100vh-6rem)] overflow-hidden bg-gradient-to-r ${project.color} ${project.darkColor}`}>
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-black/10 dark:bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-black/10 dark:bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black/20 dark:border-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black/10 dark:border-white/5 rounded-full" />
        </div>

        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center px-4"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-black/20 dark:bg-white/20 backdrop-blur-sm text-sm tracking-wider mb-4 text-black dark:text-white"
          >
            Project {String(project.id).padStart(2, "0")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center text-black dark:text-white"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl opacity-90 text-center max-w-2xl text-black dark:text-white"
          >
            {project.subtitle}
          </motion.p>
        </motion.div>

        {/* Back Button */}
        <Link
          href="/portfolio"
          className="absolute top-16 sm:top-20 left-4 sm:left-8 flex items-center gap-2 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors z-10"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Project Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {project.demoLink && (
            <Link
              href={project.demoLink}
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full font-medium hover:border-black dark:hover:border-white transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </Link>
          )}
        </motion.div>

        {/* Highlights */}
        {project.highlights && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12"
          >
            {project.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-gray-100 dark:bg-gray-900 rounded-2xl text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {highlight.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {highlight.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {project.desc}
          </p>
        </motion.div>

        {/* Tech Stack */}
        {project.techStack && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Features */}
        {project.features && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Key Features
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Challenges & Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid gap-6 sm:grid-cols-2 mb-12"
        >
          {project.challenges && (
            <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-500" />
                Challenges
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {project.challenges}
              </p>
            </div>
          )}
          {project.outcomes && (
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-green-500" />
                Outcomes
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {project.outcomes}
              </p>
            </div>
          )}
        </motion.div>

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Project Gallery</h2>

            {/* Main Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-900">
              <Image
                src={project.gallery[activeImageIndex]}
                alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative w-24 h-16 sm:w-32 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all ${activeImageIndex === index
                    ? "ring-2 ring-blue-500 ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                    }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>

          {project.id < portfolios.length && (
            <Link
              href={`/portfolio/${portfolios[project.id]?.slug}`}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Next Project
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectDetailPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    }>
      <ProjectDetailContent />
    </Suspense>
  );
};

export default ProjectDetailPage;
