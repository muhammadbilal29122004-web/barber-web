"use client";

import React from "react";

interface PrimaryButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function PrimaryButton({
  onClick,
  type = "button",
  disabled = false,
  children,
  className = "",
  fullWidth = false,
}: PrimaryButtonProps) {
  const baseClasses = "bg-[#FE9A00] text-black font-bold py-3 rounded-full hover:bg-[#FE9A00] font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
}

