"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface FavouriteCourseCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function FavouriteCourseCard({
  id,
  title,
  description,
  image,
  link,
}: FavouriteCourseCardProps) {
  const [isFavorited, setIsFavorited] = useState(true);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    // TODO: Add API call to save favorite when real data is integrated
  };

  return (
    <Link
      href={link}
      className="group bg-[#1D1D1D] rounded-lg border border-[#2C2C2C] overflow-hidden hover:border-orange-500 transition-all duration-300 hover:shadow-xl flex flex-col"
    >
      {/* Course Image */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
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
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-semi-bold text-white mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Start Learning Button */}
        <button className="w-full border border-[#FE9A00] bg-[#2A2A2A] text-[#FE9A00] font-medium py-3 rounded-full hover:bg-[#E68900] transition-colors text-center">
          Start Learning
        </button>
      </div>
    </Link>
  );
}

