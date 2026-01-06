"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

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
      
      <div className="pt-16 min-h-screen flex">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-1/4 bg-[#0F0F0F] space-y-0 overflow-y-auto">
              {/* Course Content Section */}
              <div className="relative border-b border-gray-700 p-6">
                <div className="flex items-center gap-2 mb-3">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <h3 className="text-white font-semi-bold">Course Content</h3>
                </div>
                <p className="text-gray-400 text-sm">5 Pages : 2h 30m</p>
              </div>

              {/* Instructor Card */}
              <div className="p-6 border border-gray-700/50 rounded-[30px] bg-[#0F0F0F] mt-4 mx-2 overflow-visible">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden flex-shrink-0 ring-2 ring-[#FE9A00]">
                    <Image
                      src="/Jamesbond.png"
                      alt="Instructor"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 rounded-lg">
                    <p className="text-white text-sm mb-1">Instructor</p>
                    <h4 className="text-white font-semi-bold mb-2">
                      Devonne Wallbridge
                    </h4>
                    <Link
                      href="/instructors/devonne-wallbridge"
                      className="text-[#FE9A00] text-sm hover:underline transition-colors"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>

              {/* Lesson Navigation */}
              <div className="p-6">
                <div className="space-y-1">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        lesson.current
                          ? "bg-[#FE9A00]/20"
                          : "hover:bg-gray-700/50"
                      }`}
                    >
                      {/* Thick vertical yellow bar for active item */}
                      {lesson.current && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FE9A00] rounded-l-lg"></div>
                      )}
                      {lesson.completed ? (
                        <div className="w-6 h-6 rounded-full bg-[#FE9A00] flex items-center justify-center flex-shrink-0 shadow-sm">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-300 text-xs font-medium">
                            {lesson.number}
                          </span>
                        </div>
                      )}
                      <span className={`text-sm ${
                        lesson.completed || lesson.current
                          ? "text-white"
                          : "text-gray-400"
                      }`}>
                        {lesson.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-black">
              {/* Breadcrumbs */}
              <div className="px-8 pt-6 pb-4">
                <div className="text-gray-400 text-sm">
                  Library / <span className="text-white">{categoryTitle}</span>
                </div>
              </div>

              {/* Top Bar with Icons */}
              <div className="bg-[#2A2A2A] px-8 py-4 flex justify-end items-center gap-4">
                <button className="text-white hover:text-[#FE9A00] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </button>
                <button className="text-white hover:text-[#FE9A00] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              {/* Orange Line */}
              <div className="h-1 bg-[#FE9A00]"></div>
              
              {/* Content Area */}
              <div className="p-8">
                {/* Title with underline */}
                <div className="mb-8 max-w-3xl mx-auto">
                  <h1 className="text-4xl md:text-5xl font-semi-bold text-white mb-3">
                    Cutting
                  </h1>
                  <div className="w-20 h-1 bg-[#FE9A00]"></div>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto">
                  <p className="text-white leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-white leading-relaxed mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>

                  {/* Quote Block */}
                  <div className="bg-[#FE9A00]/5 border-l-4 border-[#FE9A00] pl-6 pr-6 py-4 my-6">
                    <p className="text-white text-lg mb-2">
                      "Design is not just what it looks like and feels like. Design is how it works."
                    </p>
                    <p className="text-[#FE9A00]">— Steve Jobs</p>
                  </div>

                  {/* Key Concepts */}
                  <div className="my-6">
                    <h2 className="text-2xl font-semi-bold text-white mb-4">
                      Key Concepts
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-white">
                      <li>
                        Understanding the fundamentals of design principles
                      </li>
                      <li>Learning to use professional tools effectively</li>
                      <li>
                        Developing your creative workflow and process
                      </li>
                      <li>
                        Building a strong foundation for advanced techniques
                      </li>
                    </ul>
                  </div>

                  <p className="text-white leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                {/* Page Navigation */}
                <div className="max-w-3xl mx-auto flex items-center justify-between mt-12 pt-6 border-t border-gray-700">
                  <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                    &lt; Previous
                  </button>
                  <span className="text-gray-400">Page 1 of 5</span>
                  <button className="px-6 py-3 bg-[#FE9A00] text-white rounded-lg hover:bg-[#E68900] transition-colors">
                    Next &gt;
                  </button>
                </div>
              </div>
          </main>
      </div>
    </div>
  );
}
