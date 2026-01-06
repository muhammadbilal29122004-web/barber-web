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
}

export default function TutorialCard({
  id,
  title,
  description,
  thumbnail,
  author,
  duration,
  link = "#",
}: TutorialCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    // TODO: Add API call to save favorite when real data is integrated
  };

  return (
    <Link
      href={link}
      className="group bg-[#161616] rounded-lg border border-[#2C2C2C] overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-xl"
    >
      {/* Thumbnail with Play Button */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority={false}
        />

        {/* Favorite Icon - Top Left */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors"
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

        {/* Play Button Overlay - Centered */}
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
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
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

          {/* Duration */}
          <div className="flex items-center gap-1">
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
          </div>
        </div>
      </div>
    </Link>
  );
}

