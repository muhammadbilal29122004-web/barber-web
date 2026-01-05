"use client";

import { useState } from "react";
import Link from "next/link";

interface Instructor {
  id: number;
  name: string;
  skills: string[];
  image: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Frank Castle",
    skills: ["Fades", "Beard Shaping", "Clipper Control"],
    image: "/instructors/frank-castle.jpg",
  },
  {
    id: 2,
    name: "John Wick",
    skills: ["Classic Cuts", "Hair Styling", "Scissor Work"],
    image: "/instructors/john-wick.jpg",
  },
  {
    id: 3,
    name: "James Will",
    skills: ["Modern Fades", "Beard Design", "Precision Cutting"],
    image: "/instructors/james-will.jpg",
  },
  {
    id: 4,
    name: "Michael Jack",
    skills: ["Advanced Techniques", "Clipper Mastery", "Style Consultation"],
    image: "/instructors/michael-jack.jpg",
  },
  {
    id: 5,
    name: "James",
    skills: ["Traditional Cuts", "Beard Grooming", "Customer Service"],
    image: "/instructors/james.jpg",
  },
];

export default function PopularInstructors() {
  const [currentIndex, setCurrentIndex] = useState(0); // Start with Frank Castle in center

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % instructors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + instructors.length) % instructors.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + instructors.length) % instructors.length;
      cards.push({ ...instructors[index], position: i });
    }
    return cards;
  };

  return (
    <section className="py-20 bg-black">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-orange-500"></div>
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Popular Instructors
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learn From Professional Barbers
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore expert trainers who guide you through real techniques and
            practical, everyday barbering skills.
          </p>
        </div>
      </div>

        {/* Carousel Container - Full Width */}
        <div className="relative w-full">
          <div className="overflow-x-visible overflow-y-visible">
            <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6">
              {getVisibleCards().map((instructor, idx) => {
                const isCenter = instructor.position === 0;
                const isEdge = Math.abs(instructor.position) === 2;
                const scale = isCenter ? 1 : isEdge ? 0.75 : 0.85;
                const opacity = isCenter ? 1 : isEdge ? 0.5 : 0.7;
                const zIndex = isCenter ? 10 : 5 - Math.abs(instructor.position);

                return (
                  <div
                    key={`${instructor.id}-${idx}`}
                    className="flex-shrink-0 transition-all duration-500 ease-in-out"
                    style={{
                      transform: `scale(${scale})`,
                      opacity: opacity,
                      width: isCenter ? "min(400px, 25vw)" : "min(350px, 22vw)",
                      zIndex: zIndex,
                    }}
                  >
                    <div className={`relative rounded-lg overflow-hidden ${isCenter ? 'shadow-2xl ring-2 ring-orange-500 ring-opacity-70 brightness-110' : 'shadow-xl'}`}>
                      {/* Instructor Image - Full Card */}
                      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
                        <img
                          src="/all in one.png"
                          alt={instructor.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        {/* Instructor Info - Overlaid at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                          <h4 className="text-2xl font-bold text-white mb-2">
                            {instructor.name}
                          </h4>
                          {/* Skills - Only show for center card */}
                          {isCenter && (
                            <div className="flex items-center justify-center gap-1 mb-4 flex-wrap text-sm text-white">
                              {instructor.skills.map((skill, skillIdx) => (
                                <span key={skillIdx}>
                                  {skill}
                                  {skillIdx < instructor.skills.length - 1 && (
                                    <span className="text-orange-500 mx-1">•</span>
                                  )}
                                </span>
                              ))}
                            </div>
                          )}
                          {/* View Profile Button - Only show for center card */}
                          {isCenter && (
                            <Link
                              href={`/instructors/${instructor.id}`}
                              className="inline-block bg-orange-500 text-white font-medium px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
                            >
                              View Profile
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Previous instructor"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-colors"
              aria-label="Next instructor"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
    </section>
  );
}

