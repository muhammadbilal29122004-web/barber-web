"use client";

import React from "react";

interface SecondaryButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function SecondaryButton({
  onClick,
  type = "button",
  disabled = false,
  children,
  className = "",
  fullWidth = false,
}: SecondaryButtonProps) {
  const baseClasses = "bg-black text-[#A1A1A1] rounded-full border border-[#2D2D2D] hover:bg-[#3a3a3a] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed";
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

