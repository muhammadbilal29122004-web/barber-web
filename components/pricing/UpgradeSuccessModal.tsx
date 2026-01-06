"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface UpgradeSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UpgradeSuccessModal({ isOpen, onClose }: UpgradeSuccessModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Blur Overlay - Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-md bg-black/40"
        onClick={onClose}
      ></div>

      {/* Success Modal - Centered */}
      <div className="relative w-full max-w-md bg-[#0A0A0A] rounded-2xl shadow-2xl border border-[#0A0A0A] p-8 md:p-10 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
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
        </button>

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
        <h1 className="text-3xl font-semi-bold text-white text-center mb-2">
          Upgrade Successful!
        </h1>
        <p className="text-gray-300 text-center mb-8">
          You have officially unlocked Pro access. Dive into the exclusive content library now.
        </p>

        {/* Continue Button */}
        <Link
          href="/"
          onClick={onClose}
          className="block w-full bg-orange-500 text-white font-semi-bold py-3 rounded-full hover:bg-orange-600 transition-colors text-center"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

