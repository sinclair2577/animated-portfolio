"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  FiPlayCircle,
  FiPauseCircle,
  FiArrowRight,
  FiArrowLeft,
  FiVolume2,
  FiVolumeX
} from "react-icons/fi";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { musics } from '@/data'
import { timeFormat } from '@/lib/utils'

const MusicPlayer = ({ isHovered }) => {

  // 管理播放状态
  const [currentMusicIdx, setCurrentMusicIdx] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayTime, setCurrentPlayTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // 添加加载状态
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current
    setIsLoaded(false);
    audio.addEventListener('play', () => {
      setIsLoaded(true);
      setIsPlaying(true)
    })
  }, [currentMusicIdx]);


  const handlePlayMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentPlayTime(audioRef.current.currentTime)
  }

  const handleLoadedMetaData = () => {
    audioRef.current.play();
    setIsPlaying(false)
    setDuration(audioRef.current.duration)
    setIsLoaded(true);
  }

  // 处理进度值滑块移动时事件
  const handleProgressChange = useCallback((value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentPlayTime(value[0]);
    }
  }, []);

  // 处理进度值滑块结束移动事件
  const handleProgressCommit = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentPlayTime(value[0]);
    }
  };

  // 切换上一首歌曲
  const handlePlayPrev = () => {
    if (currentMusicIdx === 0) {
      setCurrentMusicIdx(musics.length - 1)
    } else {
      setCurrentMusicIdx(currentMusicIdx - 1)
    }
  }

  // 切换下一首歌曲
  const handlePlayNext = () => {
    if (currentMusicIdx === musics.length - 1) {
      setCurrentMusicIdx(0)
    } else {
      setCurrentMusicIdx(currentMusicIdx + 1)
    }

  }

  // 音量控制
  const handleVolumeChange = () => {
    if (isMuted) {
      audioRef.current.muted = false
    } else {
      audioRef.current.muted = true
    }
    setIsMuted(!isMuted)
  }

  return (
    <>
      <motion.div className="absolute top-full left-0 w-full mt-5 z-25">
        <audio ref={audioRef} src={musics[currentMusicIdx].externalUrl} onLoadedMetadata={handleLoadedMetaData} onTimeUpdate={handleTimeUpdate} />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: -100, scale: 0, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -100, scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute right-10 top-1/2 z-10 box-border h-[15rem] w-[10rem] rounded-xl bg-[#eff3f6] dark:bg-[#0f172a] p-3 shadow-xl"
            >
              {/* 头部区域 */}
              <div className="relative flex h-[7.5rem] w-full justify-between">
                {/* 图片 */}
                <motion.div initial={{ transform: 'translateX(-20px)' }} className="h-[100px] w-[100px] rounded-md shadow-md shadow-gray-700 dark:shadow-black/40 cursor-pointer relative overflow-hidden" onClick={handlePlayMusic}>
                  {isLoaded ? <Image
                    className="rounded-md object-cover"
                    src={musics[currentMusicIdx].coverUrl}
                    alt={musics[currentMusicIdx].title}
                    fill
                  /> : <Skeleton className='w-full h-full rounded-md' />}

                </motion.div>

                {/* 控制器 */}
                <div className="flex h-[7.5rem] flex-col items-center gap-2 text-sm text-gray-400 dark:text-gray-400">
                  <button className="hover:text-gray-600 dark:hover:text-gray-200" onClick={() => handlePlayPrev()} >
                    <FiArrowLeft />
                  </button>
                  <button className="hover:text-gray-600 dark:hover:text-gray-200" onClick={() => handlePlayNext()} >
                    <FiArrowRight />
                  </button>
                  <button className="hover:text-gray-600 dark:hover:text-gray-200" onClick={() => handleVolumeChange()}>
                    {isMuted ? <FiVolumeX /> : <FiVolume2 />}
                  </button>

                  <button
                    className="rounded-full text-4xl text-white drop-shadow filter transition-all cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 hover:drop-shadow-sm"
                    onClick={handlePlayMusic}
                  >
                    {isPlaying ? <FiPauseCircle /> : <FiPlayCircle />}
                  </button>
                </div>
              </div>

              {/* 底部区域 */}
              <div className="relative w-full h-full">
                {isLoaded ?
                  (
                    <>
                      <div className="text-md text-[#434954] dark:text-slate-200 whitespace-nowrap overflow-hidden text-ellipsis">{musics[currentMusicIdx].title}</div>
                      <span className="text-sm text-[#d1d6e5] dark:text-slate-400">{musics[currentMusicIdx].artists}</span>
                    </>
                  )
                  : (
                    <>
                      <Skeleton className=" w-4/5 h-7 mb-2" />
                      <Skeleton className="w-3/5 h-5" />
                    </>
                  )
                }

                {/* 进度条 */}
                <div className="flex flex-col">
                  <span className="self-end text-xs text-[#d1d6e5] dark:text-slate-500">
                    {isLoaded ? timeFormat(duration) : <Skeleton className="w-8 h-4" />}
                  </span>
                  <Slider
                    className="my-1 h-1 bg-[#d1d6e5] dark:bg-slate-700"
                    value={[currentPlayTime]}
                    max={duration || 100}
                    step={0.1}
                    onValueChange={handleProgressChange}
                    onValueCommit={handleProgressCommit}
                  />
                  <span className="text-xs py-1 text-[#434954] dark:text-slate-300">
                    {isLoaded ? timeFormat(currentPlayTime) : <Skeleton className="w-8 h-3" />}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence >

      </motion.div >
    </>
  );
};

export default MusicPlayer;
