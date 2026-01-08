"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface UpgradeSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function UpgradeSuccessModal({
  isOpen,
  onClose,
  title = "Upgrade Successful!",
  description = "You have officially unlocked Pro access. Dive into the exclusive content library now.",
  ctaText = "Continue",
  ctaHref = "/",
}: UpgradeSuccessModalProps) {
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
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="Close"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_upgrade_modal)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2806 18.2194C19.5737 18.5124 19.5737 18.9876 19.2806 19.2806C18.9876 19.5737 18.5124 19.5737 18.2194 19.2806L12 13.0603L5.78062 19.2806C5.48757 19.5737 5.01243 19.5737 4.71938 19.2806C4.42632 18.9876 4.42632 18.5124 4.71938 18.2194L10.9397 12L4.71938 5.78062C4.42632 5.48757 4.42632 5.01243 4.71938 4.71938C5.01243 4.42632 5.48757 4.42632 5.78062 4.71938L12 10.9397L18.2194 4.71938C18.5124 4.42632 18.9876 4.42632 19.2806 4.71938C19.5737 5.01243 19.5737 5.48757 19.2806 5.78062L13.0603 12L19.2806 18.2194Z"
                fill="#737373"
              />
            </g>
            <defs>
              <clipPath id="clip0_upgrade_modal">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
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
          {title}
        </h1>
        <p className="text-gray-300 text-center mb-8">
          {description}
        </p>

        {/* Continue Button */}
        {ctaHref ? (
          <Link
            href={ctaHref}
            onClick={onClose}
            className="block w-full bg-[#FE9A00] text-black font-bold py-3 rounded-full hover:bg-[#FE9A00] transition-colors text-center"
          >
            {ctaText}
          </Link>
        ) : (
          <button
            type="button"
            onClick={onClose}
            className="block w-full bg-orange-500 text-white font-semi-bold py-3 rounded-full hover:bg-orange-600 transition-colors text-center"
          >
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
}

