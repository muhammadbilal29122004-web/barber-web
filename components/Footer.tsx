"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#1a1a1a] text-white w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Column 1: Logo, Contact & Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center mb-5 sm:mb-6">
              <span className="text-white text-base sm:text-lg font-semi-bold">Logoipsum</span>
            </Link>

            {/* Contact Details */}
            <div className="space-y-3 mb-5 sm:mb-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-[#D3D3D3] text-[16px] font-normal" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '100%', letterSpacing: '0px' }}>+65 6000 2324</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span 
                  className="text-[#D3D3D3] text-[16px] font-normal"
                  style={{ 
                    fontFamily: 'Urbanist, sans-serif', 
                    fontWeight: 400, 
                    fontSize: '16px',
                    lineHeight: '100%', 
                    letterSpacing: '0px',
                    color: 'rgba(211, 211, 211, 1)'
                  }}
                >
                  abc123@email.com
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-[#D3D3D3] text-[16px] font-normal" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '100%', letterSpacing: '0px' }}>Newyork, United States</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#FE9A00] hover:bg-[#FE9A00] transition-colors"
                aria-label="Facebook"
              >
                <span className="text-white text-xs sm:text-sm font-semi-bold">f</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#FE9A00] hover:bg-[#FE9A00] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#FE9A00] hover:bg-[#FE9A00] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#FE9A00] hover:bg-[#FE9A00] transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#FFFFFF] text-[18px] font-medium mb-3 sm:mb-4" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: '100%', letterSpacing: '-3%' }}>Quick links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#D3D3D3] hover:text-[#FE9A00] transition-colors text-[16px] font-normal"
                  style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '150%', letterSpacing: '0px' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/library"
                  className="text-[#D3D3D3] hover:text-[#FE9A00] transition-colors text-[16px] font-normal"
                  style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '150%', letterSpacing: '0%', textAlign: 'center' }}
                >
                  Library
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-[#D3D3D3] hover:text-[#FE9A00] transition-colors text-[16px] font-normal"
                  style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '150%', letterSpacing: '0px' }}
                >
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quicklinks */}
          <div>
            <h3 className="text-[#FFFFFF] text-[18px] font-medium mb-3 sm:mb-4" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: '100%', letterSpacing: '-3%' }}>Quick links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/instructors"
                  className="text-[#D3D3D3] hover:text-[#FE9A00] transition-colors text-[16px] font-normal"
                  style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '150%', letterSpacing: '0px' }}
                >
                  Instructors
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-[#D3D3D3] hover:text-[#FE9A00] transition-colors text-[16px] font-normal"
                  style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '150%', letterSpacing: '0px' }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#D3D3D3] hover:text-[#FE9A00] transition-colors text-[16px] font-normal"
                  style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '150%', letterSpacing: '0px' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-[#FFFFFF] text-[18px] font-medium mb-3 sm:mb-4" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: '100%', letterSpacing: '-3%' }}>Newsletter</h3>
            <p className="text-[#D3D3D3] text-[16px] font-normal mb-3 sm:mb-4" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '100%', letterSpacing: '0px' }}>
              Get the latest articles
              <br />
              straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="relative flex items-center w-full">
              <div className="w-full max-w-[403px] h-[57px] rounded-full border border-[#333333] bg-[#1A1A1A] flex items-center p-1.5 focus-within:border-[#FE9A00] transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="flex-1 bg-transparent px-4 py-2 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none min-w-0 font-urbanist"
                  required
                />
                <button
                  type="submit"
                  className="w-[96px] h-[43px] bg-[#FE9A00] text-black font-semi-bold rounded-full hover:bg-[#E68A00] transition-all transform active:scale-95 flex items-center justify-center text-sm font-urbanist flex-shrink-0"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Copyright */}
            <div className="text-gray-300 text-xs sm:text-sm order-2 md:order-1">
              © 2025 All Rights Reserved.
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 order-1 md:order-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7792 28.1901C18.4706 28.381 19.1988 28.4837 19.9508 28.4838C20.6529 28.4838 21.335 28.3948 21.985 28.2277L18.8296 40L14.8973 38.9468L17.7792 28.1901Z" fill="#FE9A00"/>
                <path d="M28.9453 37.8805L25.0116 38.9337L22.1325 28.1887C23.5335 27.8004 24.7825 27.0456 25.7711 26.0359L28.9453 37.8805Z" fill="#FE9A00"/>
                <path d="M14.0654 25.9679C15.0337 26.9803 16.2609 27.7435 17.6403 28.151L9.01186 36.7795L6.13281 33.9005L14.0654 25.9679Z" fill="#FE9A00"/>
                <path d="M36.6435 30.9881L33.763 33.8672L25.8507 25.9534C26.8274 24.9273 27.539 23.6463 27.8762 22.2208L36.6435 30.9881Z" fill="#FE9A00"/>
                <path d="M12.024 22.2106C12.354 23.6142 13.0485 24.878 14.0003 25.897L2.1195 29.0799L1.06626 25.1476L12.024 22.2106Z" fill="#FE9A00"/>
                <path d="M25.0926 1.05324L22.1412 12.0674L30.8521 3.35648L33.7312 6.23553L25.6785 14.2882L37.7445 11.0561L38.7977 14.9884L27.798 17.9355L39.864 21.169L38.8108 25.1027L27.8877 22.1759C28.0236 21.586 28.096 20.9712 28.0961 20.34C28.0961 15.8425 24.4497 12.1964 19.9523 12.1962C15.4547 12.1962 11.8084 15.8424 11.8084 20.34C11.8085 20.9753 11.8807 21.5941 12.0182 22.1875L0 18.967L1.05324 15.0333L12.053 17.9803L3.22049 9.14786L6.09954 6.26881L14.1522 14.3215L10.9201 2.2555L14.8524 1.20226L17.8458 12.3698L21.1589 0L25.0926 1.05324Z" fill="#FE9A00"/>
              </svg>
              <span className="text-[#FE9A00] text-base sm:text-lg font-semi-bold">Logoipsum</span>
            </Link>

            {/* Legal Links */}
            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm order-3">
              <Link
                href="/privacy"
                className="hover:text-[#FE9A00] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/terms"
                className="hover:text-[#FE9A00] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

