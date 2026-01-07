"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface TutorialCardProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  author: {
    name: string;
    avatar: string;
  };
  duration: string;
  link?: string;
  isLocked?: boolean;
  progress?: number; // 0-100
  isCompleted?: boolean;
}

export default function TutorialCard({
  id,
  title,
  description,
  thumbnail,
  author,
  duration,
  link = "#",
  isLocked = false,
  progress,
  isCompleted = false,
}: TutorialCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    // TODO: Add API call to save favorite when real data is integrated
  };

  const handleLockedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Navigate to pricing page or show upgrade modal
  };

  const CardContent = (
    <div className="group bg-[#161616] rounded-lg border border-[#2C2C2C] overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-xl">
      {/* Thumbnail with Play Button */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
            isLocked ? "blur-sm" : ""
          }`}
          priority={false}
        />

        {/* Favorite Icon - Top Left */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-[#FFFFFF33]/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors"
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-colors ${
              isFavorited ? "fill-orange-500" : "fill-none"
            }`}
          >
            <path
              d="M10.3254 17.0271C10.0473 17.1253 9.58908 17.1253 9.3109 17.0271C6.93817 16.2171 1.63635 12.838 1.63635 7.11075C1.63635 4.58256 3.67363 2.53711 6.18544 2.53711C7.67453 2.53711 8.99181 3.25711 9.81817 4.36984C10.6445 3.25711 11.97 2.53711 13.4509 2.53711C15.9627 2.53711 18 4.58256 18 7.11075C18 12.838 12.6982 16.2171 10.3254 17.0271Z"
              stroke={isFavorited ? "#FE9A00" : "white"}
              strokeWidth="1.22727"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Locked Overlay */}
        {isLocked && (
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-20">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <p className="text-white font-medium text-sm">Get Premium to Unlock</p>
            </div>
          </div>
        )}

        {/* Play Button Overlay - Centered (only if not locked) */}
        {!isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <div className="w-[47px] h-[47px] flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                width="34"
                height="34"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3333 0C10.4533 0 0 10.4533 0 23.3333C0 36.2133 10.4533 46.6667 23.3333 46.6667C36.2133 46.6667 46.6667 36.2133 46.6667 23.3333C46.6667 10.4533 36.2133 0 23.3333 0ZM29.54 27.37L26.5533 29.0967L23.5667 30.8233C19.7167 33.04 16.5667 31.22 16.5667 26.7867V23.3333V19.88C16.5667 15.4233 19.7167 13.6267 23.5667 15.8433L26.5533 17.57L29.54 19.2967C33.39 21.5133 33.39 25.1533 29.54 27.37Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semi-bold text-white mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Author and Duration */}
        <div className="flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs text-gray-400 truncate max-w-[120px]">
              {author.name}
            </span>
          </div>

          {/* Duration or Progress */}
          <div className="flex items-center gap-1">
            {progress !== undefined && progress > 0 && !isCompleted ? (
              <>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span className="text-xs text-gray-400">{progress}% Completed</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs text-gray-400">{duration}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // If locked, wrap in a div instead of Link, or make it non-clickable
  if (isLocked) {
    return (
      <div onClick={handleLockedClick} className="cursor-pointer">
        {CardContent}
      </div>
    );
  }

  return (
    <Link href={link}>
      {CardContent}
    </Link>
  );
}

