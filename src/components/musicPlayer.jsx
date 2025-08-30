"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  FiPlayCircle,
  FiPauseCircle,
  FiHeart,
  FiShare,
  FiArrowRight,
  FiArrowLeft,
  FiMusic,
} from "react-icons/fi";
import { Slider } from "@/components/ui/slider";
import { motion } from "motion/react";
import { musics } from '@/data'

const MusicPlayer = () => {
  // 控制展开与折叠内容
  const [isHovered, setIsHovered] = useState(false);
  // 管理播放状态
  const [currentMusic, setCurrentMusic] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayTime, setCurrentPlayTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  // 添加加载状态
  const [isLoading, setIsLoading] = useState(false);

  // 使用Ref管理音频实例，使其不会在组件重新渲染后创建新的实例
  const audioRef = useRef(null);

  useEffect(() => {

    initialMusic()
    // 添加事件监听器
    audioRef.current.addEventListener("loadeddata", handleLoadedData);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener('playing', () => {
      console.log('开始播放')
    })

    // 清理函数
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("loadeddata", handleLoadedData);
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const initialMusic = () => {
    // 清除现有的音频实例
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // 创建新的音频实例
    audioRef.current = new Audio(musics[currentMusic].externalUrl);
    audioRef.current.autoplay = true
    audioRef.current.preload = "auto";
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    // 监听音频加载事件
    audioRef.current.addEventListener('canplaythrough', () => {
      setIsLoading(false);
      // 如果之前是播放状态，切换后继续播放
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.error("播放失败:", err);
          setIsPlaying(false);
        });
      }
    });

    // 监听音频加载错误事件
    audioRef.current.addEventListener('error', (err) => {
      console.error("音频加载失败:", err);
      setIsLoading(false);
      setIsPlaying(false);
    });
  }

  // 播放暂停处理
  const handlePlayMusic = () => {
    if (!audioRef.current) {
      return;
    } else {
      setIsPlaying(!isPlaying);
      // 如果当前音乐暂停
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  const handleTimeUpdate = () => {
    setCurrentPlayTime(audioRef.current.currentTime);
  };

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

  // 时间数据格式化
  const timeFormat = (time) => {
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(Math.floor(time % 60)).padStart(2, "0");
    return `${min}:${seconds}`;
  };

  // 切换下一首歌曲
  const handleNextMusic = () => {
    setCurrentMusic(prev => {
      const nextIndex = prev + 1 >= musics.length ? 0 : prev + 1
      return nextIndex
    })
    resetAudioState()
  }

  // 切换上一首歌曲
  const handlePrevMusic = () => {
    setCurrentMusic(prev => {
      const prevIndex = prev - 1 < 0 ? musics.length - 1 : prev - 1
      return prevIndex
    })
    resetAudioState()
  }

  // 重置音频状态
  const resetAudioState = () => {
    // 设置加载状态为true
    setIsLoading(true);
    // 清除现有的音频实例
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null;
    }
    setCurrentPlayTime(0);
    setDuration(0)
  }

  return (
    <>
      <motion.div className="relative h-full w-full">
        {/* 触发元素 */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed right-0 top-1/3 -translate-y-1/2"
        >
          <button
            onClick={() => setIsHovered(!isHovered)}
            className="flex h-12 w-12 items-center justify-center rounded-l-lg bg-[#eff3f6] shadow-lg transition-all hover:bg-gray-200"
          >
            <FiMusic className="h-6 w-6 text-gray-600" />
          </button>
        </motion.div>
        {isHovered && (
          <motion.div
            initial={{ x: 100, scale: 0, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute right-10 top-1/2 z-10 box-border h-[15rem] w-[10rem] rounded-xl bg-[#eff3f6] p-3 shadow-xl"
          >
            {/* 头部区域 */}
            <div className="relative flex h-[7.5rem] w-full justify-between">
              {/* 图片 */}
              <div className="h-[100px] w-[100px] -translate-x-5 rounded-md shadow-md shadow-gray-700">
                <img
                  className="h-full w-full rounded-md bg-center object-cover"
                  src={musics[currentMusic].coverUrl}
                ></img>
              </div>

              {/* 控制器 */}
              <div className="flex h-[7.5rem] flex-col items-center gap-2 text-sm text-gray-400">
                <button className="hover:text-gray-600">
                  <FiShare />
                </button>
                <button className="hover:text-gray-600" onClick={() => handlePrevMusic()} disabled={isLoading}>
                  <FiArrowLeft />
                </button>
                <button className="hover:text-gray-600" onClick={() => handleNextMusic()} disabled={isLoading}>
                  <FiArrowRight />
                </button>
                <button
                  className="rounded-full text-4xl text-white drop-shadow filter transition-all hover:text-gray-700 hover:drop-shadow-sm"
                  onClick={handlePlayMusic} disabled={isLoading}
                >
                  {isPlaying ? <FiPauseCircle /> : <FiPlayCircle />}
                </button>
              </div>
            </div>

            {/* 底部区域 */}
            <div className="relative w-full">
              {/* 歌名 */}
              <div className="text-md text-[#434954]">{musics[currentMusic].title}</div>
              {/* 歌手 */}
              <span className="text-sm text-[#d1d6e5]">{musics[currentMusic].artists}</span>
              {/* 进度条 */}
              <div className="flex flex-col">
                <span className="self-end text-xs text-[#d1d6e5]">
                  {timeFormat(duration) || "99:99"}
                </span>
                <Slider
                  className="my-1 h-1 bg-[#d1d6e5]"
                  value={[currentPlayTime]}
                  max={duration || 100}
                  step={0.1}
                  onValueChange={handleProgressChange}
                  onValueCommit={handleProgressCommit}
                />
                <span className="text-[0.5rem] text-[#434954]">
                  {timeFormat(currentPlayTime) || "00:00"}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default MusicPlayer;
