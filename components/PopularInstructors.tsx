"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    image: "/1.jpg",
  },
  {
    id: 2,
    name: "John Wick",
    skills: ["Classic Cuts", "Hair Styling", "Scissor Work"],
    image: "/2.jpg",
  },
  {
    id: 3,
    name: "James Will",
    skills: ["Modern Fades", "Beard Design", "Precision Cutting"],
    image: "/3.jpg",
  },
  {
    id: 4,
    name: "Michael Jack",
    skills: ["Advanced Techniques", "Clipper Mastery", "Style Consultation"],
    image: "/4.jpg",
  },
  {
    id: 5,
    name: "James",
    skills: ["Traditional Cuts", "Beard Grooming", "Customer Service"],
    image: "/5.jpg",
  },
];

export default function PopularInstructors() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % instructors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + instructors.length) % instructors.length);
  };

  // Get visible cards based on screen size
  const getVisibleCards = (numCards: number) => {
    const cards = [];
    const halfCards = Math.floor(numCards / 2);
    
    for (let i = -halfCards; i <= halfCards; i++) {
      if (cards.length < numCards) {
        const index = (currentIndex + i + instructors.length) % instructors.length;
        cards.push({ ...instructors[index], position: i });
      }
    }
    return cards;
  };

  return (
    <section className="py-12 sm:py-16 md:py-18 lg:py-20 bg-black overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-8 mb-8 sm:mb-10 md:mb-11 lg:mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 h-0.5 bg-[#FE9A00]"></div>
            <h2 className="text-[18px] font-bold text-[#FE9A00] uppercase" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700, lineHeight: '100%', letterSpacing: '0%' }}>
              Popular Instructors
            </h2>
          </div>
          <h3 className="text-[50px] font-normal text-white mb-3 sm:mb-4 px-4 text-center" style={{ fontFamily: 'Anton, sans-serif', lineHeight: '120%', letterSpacing: '0%', fontWeight: 400 }}>
            Learn From Professional Barbers
          </h3>
          <p className="text-[#A1A1A1] text-[16px] font-normal max-w-2xl mx-auto px-4 text-center" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}>
            Explore expert trainers who guide you through real techniques and
            practical, everyday barbering skills.
          </p>
        </div>
      </div>

        {/* Carousel Container - Full Width */}
        <div className="relative w-full">
          <div className="overflow-hidden">
            {/* Small screens: 1 card */}
            <div className="flex sm:hidden items-center justify-center">
              {getVisibleCards(1).map((instructor, idx) => {
                const isCenter = instructor.position === 0;
                return (
                  <div
                    key={`${instructor.id}-${idx}`}
                    className="w-full flex justify-center px-4"
                  >
                    <div className="relative rounded-[12px] overflow-hidden shadow-2xl border border-gray-700" style={{ width: '420px', height: '520px', borderWidth: '1px' }}>
                      <div className="relative w-full h-full overflow-hidden rounded-[12px]">
                        <Image
                          src={instructor.image}
                          alt={instructor.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 text-center" style={{ padding: '34px 25px' }}>
                          <h4 className="text-xl font-semi-bold text-white mb-2">
                            {instructor.name}
                          </h4>
                          <div className="flex items-center justify-center gap-1 mb-4 flex-wrap text-xs text-white">
                            {instructor.skills.map((skill, skillIdx) => (
                              <span key={skillIdx}>
                                {skill}
                                {skillIdx < instructor.skills.length - 1 && (
                                  <span className="text-[#FE9A00] mx-1">•</span>
                                )}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={`/instructors/${instructor.id}`}
                            className="inline-flex items-center justify-center bg-[#FE9A00] text-[#000000] rounded-full hover:bg-[#E68900] transition-colors h-[50px] px-[24px] text-[16px]"
                            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: '100%', letterSpacing: '0%' }}
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Medium screens (sm-md): 2 cards */}
            <div className="hidden sm:flex md:hidden items-center justify-center" style={{ gap: '10px' }}>
              {getVisibleCards(2).map((instructor, idx) => {
                const isCenter = instructor.position === 0;
                const scale = isCenter ? 1 : 0.9;
                const opacity = isCenter ? 1 : 0.7;
                
                return (
                  <div
                    key={`${instructor.id}-${idx}`}
                    className="flex-shrink-0 transition-all duration-500"
                    style={{
                      transform: `scale(${scale})`,
                      opacity: opacity,
                      width: "420px",
                    }}
                  >
                    <div className={`relative rounded-[12px] overflow-hidden border ${isCenter ? 'shadow-2xl border-[#FE9A00]' : 'shadow-xl border-gray-700'}`} style={{ width: '420px', height: '520px', borderWidth: '1px' }}>
                      <div className="relative w-full h-full overflow-hidden rounded-[12px]">
                        <Image
                          src={instructor.image}
                          alt={instructor.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 text-center" style={{ padding: '34px 25px' }}>
                          <h4 className="text-xl font-semi-bold text-white mb-2">
                            {instructor.name}
                          </h4>
                          {isCenter && (
                            <>
                              <div className="flex items-center justify-center gap-1 mb-3 flex-wrap text-sm text-white">
                                {instructor.skills.map((skill, skillIdx) => (
                                  <span key={skillIdx}>
                                    {skill}
                                    {skillIdx < instructor.skills.length - 1 && (
                                      <span className="text-[#FE9A00] mx-1">•</span>
                                    )}
                                  </span>
                                ))}
                              </div>
                              <Link
                                href={`/instructors/${instructor.id}`}
                                className="inline-flex items-center justify-center bg-[#FE9A00] text-[#000000] rounded-full hover:bg-[#E68900] transition-colors h-[50px] px-[24px] text-[16px]"
                                style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: '100%', letterSpacing: '0%' }}
                              >
                                View Profile
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Large screens (md-lg): 3 cards */}
            <div className="hidden md:flex lg:hidden items-center justify-center" style={{ gap: '10px' }}>
              {getVisibleCards(3).map((instructor, idx) => {
                const isCenter = instructor.position === 0;
                const scale = isCenter ? 1 : 0.85;
                const opacity = isCenter ? 1 : 0.7;
                const zIndex = isCenter ? 10 : 5;

                return (
                  <div
                    key={`${instructor.id}-${idx}`}
                    className="flex-shrink-0 transition-all duration-500"
                    style={{
                      transform: `scale(${scale})`,
                      opacity: opacity,
                      width: "420px",
                      zIndex: zIndex,
                    }}
                  >
                    <div className={`relative rounded-[12px] overflow-hidden border ${isCenter ? 'shadow-2xl border-[#FE9A00] brightness-110' : 'shadow-xl border-gray-700'}`} style={{ width: '420px', height: '520px', borderWidth: '1px' }}>
                      <div className="relative w-full h-full overflow-hidden rounded-[12px]">
                        <Image
                          src={instructor.image}
                          alt={instructor.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 text-center" style={{ padding: '34px 25px' }}>
                          <h4 className="text-xl font-semi-bold text-white mb-2">
                            {instructor.name}
                          </h4>
                          {isCenter && (
                            <>
                              <div className="flex items-center justify-center gap-1 mb-3 flex-wrap text-sm text-white">
                                {instructor.skills.map((skill, skillIdx) => (
                                  <span key={skillIdx}>
                                    {skill}
                                    {skillIdx < instructor.skills.length - 1 && (
                                      <span className="text-[#FE9A00] mx-1">•</span>
                                    )}
                                  </span>
                                ))}
                              </div>
                              <Link
                                href={`/instructors/${instructor.id}`}
                                className="inline-flex items-center justify-center bg-[#FE9A00] text-[#000000] rounded-full hover:bg-[#E68900] transition-colors h-[50px] px-[24px] text-[16px]"
                                style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: '100%', letterSpacing: '0%' }}
                              >
                                View Profile
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Extra Large screens (lg+): 5 cards */}
            <div className="hidden lg:flex items-center justify-center" style={{ gap: '10px' }}>
              {getVisibleCards(5).map((instructor, idx) => {
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
                      width: "420px",
                      zIndex: zIndex,
                    }}
                  >
                    <div className={`relative rounded-[12px] overflow-hidden border ${isCenter ? 'shadow-2xl border-[#FE9A00] brightness-110' : 'shadow-xl border-gray-700'}`} style={{ width: '420px', height: '520px', borderWidth: '1px' }}>
                      <div className="relative w-full h-full overflow-hidden rounded-[12px]">
                        <Image
                          src={instructor.image}
                          alt={instructor.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 text-center" style={{ padding: '34px 25px' }}>
                          <h4 className="text-2xl font-semi-bold text-white mb-2">
                            {instructor.name}
                          </h4>
                          {isCenter && (
                            <>
                              <div className="flex items-center justify-center gap-1 mb-4 flex-wrap text-sm text-white">
                                {instructor.skills.map((skill, skillIdx) => (
                                  <span key={skillIdx}>
                                    {skill}
                                    {skillIdx < instructor.skills.length - 1 && (
                                      <span className="text-[#FE9A00] mx-1">•</span>
                                    )}
                                  </span>
                                ))}
                              </div>
                              <Link
                                href={`/instructors/${instructor.id}`}
                                className="inline-flex items-center justify-center bg-[#FE9A00] text-[#000000] rounded-full hover:bg-[#E68900] transition-colors h-[50px] px-[24px] text-[16px]"
                                style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: '100%', letterSpacing: '0%' }}
                              >
                                View Profile
                              </Link>
                            </>
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
          <div className="flex items-center justify-center gap-4 sm:gap-5 mt-8 sm:mt-10 md:mt-12">
            <button
              onClick={prevSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2D2D2D] hover:bg-gray-700 flex items-center justify-center transition-colors shadow-lg"
              aria-label="Previous instructor"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FE9A00] hover:bg-[#E68900] flex items-center justify-center transition-colors shadow-lg"
              aria-label="Next instructor"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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

