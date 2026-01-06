"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface InstructorCardProps {
  id: number;
  name: string;
  skills: string[];
  image: string;
}

export default function InstructorCard({ id, name, skills, image }: InstructorCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    // TODO: Add API call to save favorite when real data is integrated
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-[#2C2C2C] hover:border-orange-500 transition-colors group">
      {/* Full Height Instructor Image */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority={false}
        />

        {/* Dark Overlay at Bottom for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        {/* Favorite Icon - Top Left */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors"
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

        {/* Content Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          {/* Instructor Name */}
          <h3 className="text-2xl font-bold text-white mb-2 text-center">
            {name}
          </h3>

          {/* Skills */}
          <p className="text-sm text-white mb-4 text-center">
            {skills.join(" • ")}
          </p>

          {/* View Profile Button */}
          <Link
            href={`/instructors/${id}`}
            className="block w-[50%] bg-orange-500 mx-auto text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition-colors text-center"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

