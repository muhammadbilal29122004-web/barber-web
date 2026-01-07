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

        {/* Completion Checkmark - Top Left */}
        {isCompleted && !isLocked && (
          <div className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}

        {/* Favorite Icon - Top Right */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors"
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            className={`w-4 h-4 transition-colors ${
              isFavorited ? "text-orange-500 fill-orange-500" : "text-white"
            }`}
            fill={isFavorited ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
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
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-300 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-gray-900 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
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

