import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const useVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = videoRef.current?.duration;
    if (duration) setVideoTime(duration);
  }, [videoRef.current?.duration]);

  const toggleVideo = useCallback(() => {
    if (!isPlaying) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const forward = () => {
    if (videoRef.current) videoRef.current.currentTime += 10;
  };

  const revert = () => {
    if (videoRef.current) videoRef.current.currentTime -= 10;
  };

  const fullScreen = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const updateProgress = () => {
      setCurrentTime(video.currentTime);
      setProgress((currentTime / videoTime) * 100);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, [videoTime, currentTime]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          forward();
          break;
        case 'ArrowLeft':
          revert();
          break;
        case ' ':
          e.preventDefault();
          toggleVideo();
          break;
        case 'f':
          fullScreen();
          break;
        default:
          return;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleVideo]);

  return useMemo(
    () => ({
      videoRef,
      actions: { fullScreen, revert, toggleVideo, forward },
      video: {
        isPlaying,
        currentTime,
        progress,
        videoTime,
      },
    }),
    [currentTime, isPlaying, progress, toggleVideo, videoTime]
  );
};
