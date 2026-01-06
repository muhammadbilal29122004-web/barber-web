"use client";

import { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  activePage?: string;
  showUserIcons?: boolean;
}

export default function Header({ activePage = "home", showUserIcons = false }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Home", href: "/", key: "home" },
    { label: "Library", href: "/library", key: "library" },
    { label: "Tutorials", href: "/tutorials", key: "tutorials" },
    { label: "Instructors", href: "/instructors", key: "instructors" },
    { label: "Pricing", href: "/pricing", key: "pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Transparent overlay on hero image */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#FE9A00] rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-[#FE9A00] text-base sm:text-lg font-semi-bold">Logoipsum</span>
          </Link>

          {/* Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  item.key === activePage
                    ? "text-[#FE9A00]"
                    : "text-white hover:text-[#FE9A00]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#FE9A00] transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Right Side - User Icons or Auth Buttons (Desktop) */}
          {showUserIcons ? (
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              {/* Bell Icon */}
              <button className="text-white hover:text-[#FE9A00] transition-colors">
                <svg className="w-5 h-5 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              {/* Heart Icon */}
              <button className="text-white hover:text-[#FE9A00] transition-colors">
                <svg className="w-5 h-5 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              {/* Profile Picture with Dropdown */}
              <div className="relative">
                <button className="flex items-center gap-2">
                  <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full border-2 border-yellow-400 overflow-hidden">
                    <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                      <svg className="w-5 h-5 xl:w-6 xl:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
              <Link
                href="/auth/login"
                className="text-white text-sm font-medium hover:text-[#FE9A00] transition-colors whitespace-nowrap"
              >
                Login
              </Link>
              <Link
                href="/auth/signUp"
                className="bg-[#FE9A00] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#E68900] transition-colors whitespace-nowrap"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-14 sm:top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 sm:px-6 py-3 text-sm font-medium transition-colors ${
                    item.key === activePage
                      ? "text-[#FE9A00] bg-[#FE9A00]/10"
                      : "text-white hover:text-[#FE9A00] hover:bg-[#FE9A00]/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Auth Buttons */}
              {!showUserIcons && (
                <div className="flex flex-col gap-3 px-4 sm:px-6 mt-4 pt-4 border-t border-gray-800">
                  <Link
                    href="/auth/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-center text-white text-sm font-medium py-2 hover:text-[#FE9A00] transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/signUp"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-center bg-[#FE9A00] text-white text-sm font-medium py-2.5 rounded-full hover:bg-[#E68900] transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Mobile User Icons */}
              {showUserIcons && (
                <div className="flex items-center justify-center gap-6 px-4 sm:px-6 mt-4 pt-4 border-t border-gray-800">
                  <button className="text-white hover:text-[#FE9A00] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  <button className="text-white hover:text-[#FE9A00] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full border-2 border-yellow-400 overflow-hidden">
                      <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

