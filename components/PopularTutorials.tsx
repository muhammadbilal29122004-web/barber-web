"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { isLoggedIn } from "@/lib/auth";

interface Tutorial {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  progress?: number; // For logged-in users
}

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Low Fade Basics - Step-by-Step",
    description:
      "Learn how to create a clean low fade using simple, beginner-friendly techniques.",
    image: "/6.jpg",
    link: "/tutorials/low-fade-basics",
    progress: 60,
  },
  {
    id: 2,
    title: "Beard Line-Up & Detailing Guide",
    description:
      "Master precise beard shaping and clean line-ups with easy-to-follow guidance.",
    image: "/7.jpg",
    link: "/tutorials/beard-lineup",
    progress: 60,
  },
];

export default function PopularTutorials() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setLoggedIn(isLoggedIn());
    };
    
    // Check initial state
    checkAuth();
    
    // Listen for storage changes (other tabs)
    window.addEventListener('storage', checkAuth);
    
    // Listen for custom auth state change event (same tab)
    window.addEventListener('authStateChanged', checkAuth);
    
    // Also check on window focus (in case user logs in/out in another tab)
    window.addEventListener('focus', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authStateChanged', checkAuth);
      window.removeEventListener('focus', checkAuth);
    };
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#FE9A00]"></div>
            <h2 className="text-[18px] font-bold text-[#FE9A00] uppercase leading-none tracking-normal" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}>
              {loggedIn ? "Continue Learning" : "Popular Tutorials"}
            </h2>
          </div>
          <h3 className="text-[50px] font-normal text-white mb-4 text-center" style={{ fontFamily: 'Anton, sans-serif', lineHeight: '120%', letterSpacing: '0%', fontWeight: 400 }}>
            {loggedIn ? "Continue Your Learning" : "Tutorials Picked Just for You"}
          </h3>
          <p className="text-[#A1A1A1] text-[16px] font-normal max-w-2xl mx-auto text-center" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}>
            Personalized lessons based on what you've watched and the skills you
            want to improve.
          </p>
        </div>

        {/* Tutorial Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-[1330px] mx-auto">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col w-full"
            >
              <Link href={tutorial.link} className="flex flex-col h-full">
                {/* Image Container with Play Button */}
                <div className="relative w-full h-[350px] overflow-hidden">
                  <Image
                    src={tutorial.image}
                    alt={tutorial.title}
                    fill
                    className="object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-gray-900 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Heart Icon (only when logged in) */}
                  {loggedIn && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle favorite toggle
                      }}
                      className="absolute top-4 left-4 w-8 h-8 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
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
                  )}
                </div>

                {/* Gray Background Text Section */}
                <div className="bg-[#161616] hover:bg-[#202020] p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-semi-bold text-white mb-2 group-hover:text-[#FE9A00] transition-colors">
                    {tutorial.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {tutorial.description}
                  </p>
                  
                  {/* Progress Section (only when logged in) */}
                  {loggedIn && tutorial.progress !== undefined && (
                    <>
                      <div className="mb-2">
                        <span className="text-gray-400 text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                          {tutorial.progress}% Completed
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full mb-4 overflow-hidden">
                        <div
                          className="h-full bg-[#FE9A00] rounded-full transition-all"
                          style={{ width: `${tutorial.progress}%` }}
                        />
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = tutorial.link;
                        }}
                        className="mt-auto border border-[#FE9A00] text-white px-6 py-2 rounded-lg hover:bg-[#FE9A00] hover:text-black transition-colors text-center"
                        style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500 }}
                      >
                        Continue Learning
                      </button>
                    </>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

