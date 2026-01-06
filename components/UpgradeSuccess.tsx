"use client";

import Link from "next/link";
import Image from "next/image";

export default function UpgradeSuccess() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 relative">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      {/* Success Card */}
      <div className="relative w-full max-w-md bg-[#0A0A0A] rounded-2xl shadow-2xl border border-[#0A0A0A] p-8 md:p-10">
        {/* Close Button */}
        <Link
          href="/"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-orange-500 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <Image
              src="/success.png"
              alt="Success"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Upgrade Successful!
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Your Pro Membership has been activated. Start exploring premium content now!
        </p>

        {/* Continue Button */}
        <Link
          href="/"
          className="block w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors text-center"
        >
          Continue to Home
        </Link>
      </div>
    </div>
  );
}
