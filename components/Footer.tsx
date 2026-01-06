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
    <footer className="bg-[#1a1a1a] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Column 1: Logo, Contact & Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-5 sm:mb-6">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#FE9A00] rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
              <span className="text-white text-base sm:text-lg font-semi-bold">Logoipsum</span>
            </Link>

            {/* Contact Details */}
            <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
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
                <span className="text-gray-300 text-sm sm:text-base">+65 6000 2324</span>
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
                <span className="text-gray-300 text-sm sm:text-base">abc123@email.com</span>
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
                <span className="text-gray-300 text-sm sm:text-base">Newyork, United States</span>
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
            <h3 className="text-white font-semi-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#FE9A00] transition-colors text-sm sm:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/learn"
                  className="text-gray-300 hover:text-[#FE9A00] transition-colors text-sm sm:text-base"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-gray-300 hover:text-[#FE9A00] transition-colors text-sm sm:text-base"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/study-tools"
                  className="text-gray-300 hover:text-[#FE9A00] transition-colors text-sm sm:text-base"
                >
                  Study Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quicklinks */}
          <div>
            <h3 className="text-white font-semi-bold text-base sm:text-lg mb-3 sm:mb-4">Quicklinks</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/instructors"
                  className="text-gray-300 hover:text-[#FE9A00] transition-colors text-sm sm:text-base"
                >
                  Instructors
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-[#FE9A00] transition-colors text-sm sm:text-base"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#FE9A00] transition-colors text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semi-bold text-base sm:text-lg mb-3 sm:mb-4">Newsletter</h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
              Get the latest articles, tips, and updates — straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-[#FE9A00] transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#FE9A00] text-white font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-[#E68900] transition-colors whitespace-nowrap text-sm sm:text-base"
              >
                Submit
              </button>
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
              © 2025 All Rights Reserved
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 order-1 md:order-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#FE9A00] rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
              <span className="text-white text-base sm:text-lg font-semi-bold">Logoipsum</span>
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

