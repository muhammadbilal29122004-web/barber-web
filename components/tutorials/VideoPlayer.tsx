"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, thumbnail, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update current time and handle errors
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handlePlay = () => {
      setIsPlaying(true);
      setShowThumbnail(false);
      setHasError(false);
      setErrorMessage(null);
    };
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    const handleError = () => {
      setHasError(true);
      setIsPlaying(false);
      setShowThumbnail(true);
      
      if (video.error) {
        switch (video.error.code) {
          case video.error.MEDIA_ERR_ABORTED:
            setErrorMessage("Video playback was aborted.");
            break;
          case video.error.MEDIA_ERR_NETWORK:
            setErrorMessage("Network error while loading video.");
            break;
          case video.error.MEDIA_ERR_DECODE:
            setErrorMessage("Video format not supported or corrupted.");
            break;
          case video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            setErrorMessage("Video source not supported or not accessible.");
            break;
          default:
            setErrorMessage("An error occurred while loading the video.");
        }
      } else {
        setErrorMessage("Unable to load video. Please check the video URL.");
      }
    };
    const handleLoadedData = () => {
      setHasError(false);
      setErrorMessage(null);
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);
    video.addEventListener("loadeddata", handleLoadedData);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
      video.removeEventListener("loadeddata", handleLoadedData);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Auto-hide controls
  useEffect(() => {
    if (isPlaying) {
      const hideControls = () => {
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current);
        }
        controlsTimeoutRef.current = setTimeout(() => {
          setShowControls(false);
        }, 3000);
      };

      hideControls();
      const video = videoRef.current;
      if (video) {
        video.addEventListener("mousemove", () => {
          setShowControls(true);
          hideControls();
        });
      }

      return () => {
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current);
        }
      };
    } else {
      setShowControls(true);
    }
  }, [isPlaying]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      try {
        await video.play();
      } catch (error) {
        console.error("Error playing video:", error);
        setHasError(true);
        setErrorMessage("Unable to play video. Please check your connection.");
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * duration;
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden group">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        poster={thumbnail}
        preload="metadata"
        playsInline
      />

      {/* Thumbnail Overlay */}
      {showThumbnail && (
        <div className="absolute inset-0 z-10">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Error Message */}
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 p-4 z-20">
              <svg
                className="w-12 h-12 text-red-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-white text-center mb-2 max-w-md">{errorMessage || "Video error occurred"}</p>
              {errorMessage?.includes("not supported") || errorMessage?.includes("not accessible") ? (
                <p className="text-gray-400 text-sm text-center mb-4 max-w-md">
                  This may be a CORS issue. Ensure your video server allows cross-origin requests.
                </p>
              ) : null}
              <button
                onClick={() => {
                  setHasError(false);
                  setErrorMessage(null);
                  const video = videoRef.current;
                  if (video) {
                    video.load();
                  }
                }}
                className="px-4 py-2 bg-[#FE9A00] text-white rounded hover:bg-[#E68900] transition-colors"
              >
                Retry
              </button>
            </div>
          )}
          {/* Play Button Overlay */}
          {!hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                onClick={togglePlay}
                className="w-20 h-20  rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                aria-label="Play video"
              >
                   <svg
                width="44"
                height="44"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3333 0C10.4533 0 0 10.4533 0 23.3333C0 36.2133 10.4533 46.6667 23.3333 46.6667C36.2133 46.6667 46.6667 36.2133 46.6667 23.3333C46.6667 10.4533 36.2133 0 23.3333 0ZM29.54 27.37L26.5533 29.0967L23.5667 30.8233C19.7167 33.04 16.5667 31.22 16.5667 26.7867V23.3333V19.88C16.5667 15.4233 19.7167 13.6267 23.5667 15.8433L26.5533 17.57L29.54 19.2967C33.39 21.5133 33.39 25.1533 29.54 27.37Z"
                  fill="white"
                />
              </svg>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Video Controls Overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent px-4 py-2.5 z-20 transition-opacity ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => {
          if (isPlaying) {
            if (controlsTimeoutRef.current) {
              clearTimeout(controlsTimeoutRef.current);
            }
            controlsTimeoutRef.current = setTimeout(() => {
              setShowControls(false);
            }, 3000);
          }
        }}
      >
        {/* Progress Bar */}
        <div className="mb-2.5">
          <div
            className="w-full h-1.5 bg-gray-700/50 rounded-full relative cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-[#FE9A00] rounded-full transition-all"
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-[#FE9A00] shadow-md cursor-pointer hover:scale-110 transition-transform"
              style={{ left: `${progressPercentage}%`, transform: "translate(-50%, -50%)" }}
            ></div>
          </div>
        </div>

        {/* Controls Row */}
        <div className="flex items-center gap-3 text-white text-sm">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="hover:text-orange-500 transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Time Display */}
          <span className="text-xs">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="hover:text-orange-500 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : volume < 0.5 ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.83 7l-1.41 1.41c1.17 1.17 1.17 3.07 0 4.24l1.41 1.41c1.56-1.56 1.56-4.09 0-5.66zm-2.12 2.12l-1.41 1.41c.39.39.39 1.02 0 1.41l1.41 1.41c.78-.78.78-2.05 0-2.83zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
          </div>

          <div className="flex-1"></div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="hover:text-orange-500 transition-colors"
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

