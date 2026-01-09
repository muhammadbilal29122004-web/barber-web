"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="flex items-center justify-between h-[100px] py-[20px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.7792 28.1901C18.4706 28.381 19.1988 28.4837 19.9508 28.4838C20.6529 28.4838 21.335 28.3948 21.985 28.2277L18.8296 40L14.8973 38.9468L17.7792 28.1901Z" fill="#FE9A00" />
              <path d="M28.9453 37.8805L25.0116 38.9337L22.1325 28.1887C23.5335 27.8004 24.7825 27.0456 25.7711 26.0359L28.9453 37.8805Z" fill="#FE9A00" />
              <path d="M14.0654 25.9679C15.0337 26.9803 16.2609 27.7435 17.6403 28.151L9.01186 36.7795L6.13281 33.9005L14.0654 25.9679Z" fill="#FE9A00" />
              <path d="M36.6435 30.9881L33.763 33.8672L25.8507 25.9534C26.8274 24.9273 27.539 23.6463 27.8762 22.2208L36.6435 30.9881Z" fill="#FE9A00" />
              <path d="M12.024 22.2106C12.354 23.6142 13.0485 24.878 14.0003 25.897L2.1195 29.0799L1.06626 25.1476L12.024 22.2106Z" fill="#FE9A00" />
              <path d="M25.0926 1.05324L22.1412 12.0674L30.8521 3.35648L33.7312 6.23553L25.6785 14.2882L37.7445 11.0561L38.7977 14.9884L27.798 17.9355L39.864 21.169L38.8108 25.1027L27.8877 22.1759C28.0236 21.586 28.096 20.9712 28.0961 20.34C28.0961 15.8425 24.4497 12.1964 19.9523 12.1962C15.4547 12.1962 11.8084 15.8424 11.8084 20.34C11.8085 20.9753 11.8807 21.5941 12.0182 22.1875L0 18.967L1.05324 15.0333L12.053 17.9803L3.22049 9.14786L6.09954 6.26881L14.1522 14.3215L10.9201 2.2555L14.8524 1.20226L17.8458 12.3698L21.1589 0L25.0926 1.05324Z" fill="#FE9A00" />
            </svg>
            <span className="text-[#FE9A00]" style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '18px', lineHeight: '21.41px', fontWeight: 600 }}>Logoipsum</span>
          </Link>

          {/* Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-[30px] absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors whitespace-nowrap ${item.key === activePage
                  ? "text-[#FE9A00]"
                  : "text-white hover:text-[#FE9A00]"
                  }`}
                style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}
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
              <button className="text-white hover:text-[#FE9A00] transition-colors" >
                <Link href="/favourites">
                  <svg className="w-5 h-5 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </Link>
              </button>
              {/* Vertical Separator */}
              <div className="h-6 w-px bg-white/30"></div>
              {/* Profile Picture with Dropdown */}
              <div className="relative">
                <button className="flex items-center gap-2">
                  <div className="relative w-9 h-9 xl:w-10 xl:h-10 rounded-full border-2 border-yellow-400/80 ring-1 ring-yellow-400/40 overflow-hidden">
                    <Link href="/my-account">
                      <Image
                        src="/Jamesbond.png"
                        alt="User Avatar"
                        fill
                        className="object-cover"
                      />
                    </Link>
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
                className="text-white hover:text-[#FE9A00] transition-colors whitespace-nowrap"
                style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}
              >
                Login
              </Link>
              <Link
                href="/auth/signUp"
                className="bg-[#FE9A00] text-[#000000] px-[20px] py-[13px] h-[45px] rounded-[50px] hover:bg-[#E68900] transition-colors whitespace-nowrap inline-flex items-center justify-center"
                style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[100px] left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 sm:px-6 py-3 transition-colors ${item.key === activePage
                    ? "text-[#FE9A00] bg-[#FE9A00]/10"
                    : "text-white hover:text-[#FE9A00] hover:bg-[#FE9A00]/5"
                    }`}
                  style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}
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
                    className="text-center text-white py-2 hover:text-[#FE9A00] transition-colors"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/signUp"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-center bg-[#FE9A00] text-[#000000] px-[20px] py-[13px] h-[45px] rounded-[50px] hover:bg-[#E68900] transition-colors inline-flex items-center justify-center"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}
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
                  <div className="h-6 w-px bg-white/30"></div>
                  <button className="flex items-center gap-2">
                    <div className="relative w-10 h-10 rounded-full border-2 border-yellow-400/80 ring-1 ring-yellow-400/40 overflow-hidden">
                      <Image
                        src="/Jamesbond.png"
                        alt="User Avatar"
                        fill
                        className="object-cover"
                      />
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

