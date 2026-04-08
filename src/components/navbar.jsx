"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  RiGithubFill,
  RiWechatFill,
  RiQqFill,
  RiFacebookBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"
import { Moon, Sun, Music } from "lucide-react"
import { usePathname } from 'next/navigation'
import { links } from '@/router/index'
import MusicPlayer from "./musicPlayer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme()
  const pathName = usePathname();

  // 控制音乐播放器展开与折叠内容
  const [isHovered, setIsHovered] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  // 处理主题变化
  const handleThemeChange = () => {
    setTheme(prev => {
      return theme == 'light' ? 'dark' : 'light'
    })
  }

  const handleClickNavLink = () => {
    setIsHovered(false)
  }

  return (
    <div className="w-full h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 text-xl ">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Link href={link.url} className={`rounded p-1 ${pathName == link.url && 'bg-black text-white dark:bg-white dark:text-black'}`} key={link.title} onClick={handleClickNavLink}> {link.title}</ Link>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex w-1/4 justify-center">
        <Link
          href="/"
          className="bg-black dark:bg-white text-xs sm:text-sm font-semibold rounded-md p-1 flex justify-center items-center gap-1"
        >
          <span className="text-white dark:text-black hidden sm:inline">Sinclair</span>
          <span className="w-8 sm:w-12 h-6 sm:h-8 rounded bg-white text-black dark:bg-black dark:text-white flex justify-center items-center text-xs">
            .site
          </span>
        </Link>
      </div>

      {/* Social */}
      <div className="hidden md:flex md:justify-end items-center gap-2 md:gap-3 lg:gap-4 w-1/3">
        <Link href="https://github.com/sinclair2577">
          <RiGithubFill className="size-6 md:size-8 lg:size-10 xl:size-12" />
        </Link>
        <Link href="/">
          <RiWechatFill className="size-6 md:size-8 lg:size-10 xl:size-12" />
        </Link>
        <Link href="/">
          <RiQqFill className="size-6 md:size-8 lg:size-10 xl:size-12" />
        </Link>
        <Link href="/">
          <RiFacebookBoxFill className="size-6 md:size-8 lg:size-10 xl:size-12" />
        </Link>
        <Link href="https://x.com/liyho197936">
          <RiTwitterFill className="size-6 md:size-8 lg:size-10 xl:size-12" />
        </Link>

      </div>
      <div className="flex relative">
        {/* Extra Content */}
        <div className="flex relative gap-2 mx-5">
          <div className="">
            <Button
              className="w-8 h-8 p-1 items-center rounded-2xl flex relative focus:outline-none"
            >
              <motion.div
                transition={{
                  type: "spring",
                  visualDuration: 0.2,
                  bounce: 0.2,
                }}
                onClick={() => setIsHovered(!isHovered)}
              >
                <Music className="w-7 h-7 p-1 items-center scale-100 rotate-0 transition-all" />
              </motion.div>
            </Button>
            <MusicPlayer isHovered={isHovered} />
          </div>
          <Button className={` w-16 h-8 p-1 items-center rounded-2xl  flex relative focus:outline-none ${theme == 'light' ? 'justify-start' : 'justify-end'}`} onClick={handleThemeChange}>
            <motion.div layout className="w-7 h-7  rounded-full flex items-center justify-center " transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
            }}>
              {theme == 'light' ? <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all  dark:scale-0 dark:-rotate-90" /> : <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />}
            </motion.div>
          </Button>
        </div>


        {/* Responsive Menu */}
        <div className="md:hidden flex w-25 gap-5 relative">
          {/* Menu Button */}
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 rounded bg-black dark:bg-white origin-right"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 rounded bg-black dark:bg-white"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 rounded bg-black dark:bg-white origin-right"
            ></motion.div>
          </button>
          {/* Menu list */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl z-40"
            >
              {links.map((link) => (
                <motion.div variants={listItemVariants} key={link.title} className="cursor-pointer">
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Navbar;
