"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import CuttingContent from "@/components/CuttingContent";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function CategoryPage() {
  const params = useParams();
  const category = params?.category as string;
  const categoryTitle = category
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const lessons = [
    { id: 1, title: "Welcome", completed: true, current: false, number: null },
    { id: 2, title: "Introduction", completed: true, current: true, number: null },
    { id: 3, title: "Basic design theory", completed: false, current: false, number: 3 },
    { id: 4, title: "Tools & fundamentals", completed: false, current: false, number: 4 },
    { id: 5, title: "Summary", completed: false, current: false, number: 5 },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header activePage="library" showUserIcons={true} />
      <div className="flex flex-col items-center p-2 sm:p-4 pt-20 sm:pt-24">
        {/* Breadcrumb Navigation */}
        <div className="w-full max-w-[1240px] mb-4 sm:mb-6">
          <nav className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
            <Link href="/library" className="hover:text-[#FF9F0A] transition-colors">
              Library
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white">{categoryTitle || category}</span>
          </nav>
        </div>

        {/* Responsive Main Layout Unit */}
        <div className="w-full max-w-[1240px] flex flex-col lg:flex-row bg-[#0A0A0A] border border-[#222222] rounded-lg sm:rounded-[12px] lg:divide-x lg:divide-[#222222] shadow-2xl relative">

        {/* Responsive Sidebar */}
        <aside className="w-full lg:w-[299px] lg:min-w-[299px] lg:max-w-[299px] bg-[#111111] flex flex-col flex-shrink-0 border-b lg:border-b-0 lg:border-r border-[#222222]">
          {/* Course Content Header */}
          <div className="h-[80px] sm:h-[90px] lg:h-[101px] flex flex-col justify-center px-4 sm:px-6 lg:px-8 border-b border-[#222222]">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <svg
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FF9F0A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3   6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3 className="text-white font-semi-bold text-sm sm:text-[15px] lg:text-[16px]">Course Content</h3>
            </div>
            <p className="text-gray-500 text-[10px] sm:text-[11px] mt-1">5 Pages · 2h 30m</p>
          </div>

          {/* Sidebar Content Area - Responsive Padding & Gap */}
          <div className="flex-1 overflow-y-auto scrollbar-hide p-3 sm:p-4 flex flex-col gap-2 w-full lg:w-[299px]">
            {/* Instructor Card */}
            <div className="flex justify-center">
              <div className="w-full max-w-[257px] h-auto sm:h-[90px] lg:h-[104px] p-3 sm:p-4 rounded-lg bg-[#181818] border border-[#222222] flex items-center gap-2 sm:gap-3">
                <div className="relative flex-shrink-0">
                  <div className="h-[36px] w-[36px] sm:h-[42px] sm:w-[42px] rounded-full overflow-hidden ring-1 ring-[#FF9F0A] ring-offset-1 ring-offset-[#181818]">
                    <Image
                      src="/Jamesbond.png"
                      alt="Instructor"
                      width={42}
                      height={42}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-[7px] sm:text-[8px] uppercase tracking-wider font-semi-bold mb-0.5">Instructor</p>
                  <h4 className="text-white font-semi-bold text-[10px] sm:text-[11px] leading-tight truncate">Devonne Wallbridge</h4>
                  <Link
                    href="#"
                    className="text-[#FF9F0A] text-[8px] sm:text-[9px] font-semi-bold underline underline-offset-[2px] hover:opacity-80 transition-opacity block mt-1"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* Lesson List - Responsive spacing */}
            <div className="space-y-1.5 sm:space-y-2">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md transition-all cursor-pointer ${lesson.current
                    ? "bg-[#2C1F10] text-white"
                    : "hover:bg-[#181818] text-gray-400 font-normal"
                    }`}
                >
                  <div className="flex-shrink-0">
                    {lesson.completed || lesson.current ? (
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#FF9F0A] flex items-center justify-center">
                        <svg
                          className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white"
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
                    ) : (
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                        <span className="text-gray-400 text-[8px] sm:text-[9px] font-bold">
                          {lesson.number}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className={`text-[11px] sm:text-[12px] font-medium ${lesson.current || lesson.completed ? "text-white" : "text-gray-500"}`}>
                    {lesson.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Responsive Main Area */}
        <main className="flex-1 flex flex-col bg-[#0A0A0A] relative min-h-0">
          {/* Top Bar - Responsive Height */}
          <div className="h-[56px] sm:h-[60px] lg:h-[67px] flex items-center justify-between px-4 sm:px-5 lg:px-6 border-b border-[#222222] sticky top-0 bg-[#0A0A0A] z-20">
            {/* Progress Bar - Moved to Bottom */}
            <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#1A1A1A]">
              <div className="h-full bg-[#FF9F0A] w-[20%] shadow-[0_0_8px_rgba(255,159,10,0.4)]"></div>
            </div>

            <div></div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#222222] bg-[#111111] flex items-center justify-center text-gray-400 hover:text-white transition-all">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </button>
              <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#222222] bg-[#111111] flex items-center justify-center text-gray-400 hover:text-white transition-all">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Article Content Area - Full Width */}
          <div className="flex-1 flex flex-col w-full">
            <div className="py-4 md:py-6 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
              <CuttingContent />
            </div>

            {/* Footer Navigation - Responsive Grid Style */}
            <div className="border-t border-[#1A1A1A] bg-[#0A0A0A] mt-auto w-full">
              <div className="flex items-center px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 gap-2 sm:gap-4">
                {/* Left Section */}
                <div className="flex-1 flex justify-start">
                  <button className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full bg-[#141414] text-gray-400 font-medium text-xs sm:text-[12px] lg:text-[13px] border border-[#222222] hover:bg-[#1A1A1A] transition-all">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden sm:inline">Previous</span>
                  </button>
                </div>

                {/* Center Section */}
                <div className="flex-shrink-0 text-gray-600 text-xs sm:text-[12px] lg:text-[13px] font-medium px-2 sm:px-4">
                  <span className="hidden sm:inline">Page </span>1<span className="hidden sm:inline"> of 5</span>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex justify-end">
                  <button className="flex items-center gap-1.5 sm:gap-2 px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 rounded-full bg-[#FF9F0A] text-black font-bold text-xs sm:text-[12px] lg:text-[13px] hover:bg-[#E68A00] transition-all active:scale-95 shadow-lg shadow-[#FF9F0A]/10">
                    <span className="hidden sm:inline">Next</span>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

        {/* Reviews Section - Separate Unit */}
        <div className="w-full max-w-[1240px] mt-12 mb-20 px-4 sm:px-6 lg:px-8">
          <Reviews />
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </div>
  );
}
