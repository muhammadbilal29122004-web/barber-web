"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import { useRouter } from "next/navigation";

interface InstructorCardProps {
  id: number;
  name: string;
  skills: string[];
  image: string;
}

export default function InstructorCard({ id, name, skills, image }: InstructorCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
const router = useRouter();
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

        {/* Content Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          {/* Instructor Name */}
          <h3 className="text-2xl font-semi-bold text-white mb-2 text-center">
            {name}
          </h3>

          {/* Skills */}
          <p className="text-sm text-white mb-4 text-center">
            {skills.join(" • ")}
          </p>

          {/* View Profile Button */}
          <PrimaryButton onClick={() => router.push(`/instructors/${id}`)} className="block w-[50%] mx-auto">
          View Profile

          </PrimaryButton>
         
        </div>
      </div>
    </div>
  );
}

