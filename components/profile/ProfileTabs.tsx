"use client";

import { useState } from "react";

interface ProfileTabsProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function ProfileTabs({ activeTab = "edit-profile", onTabChange }: ProfileTabsProps) {
  const tabs = [
    { id: "edit-profile", label: "Edit Profile" },
    { id: "security", label: "Security" },
    { id: "payment", label: "Payment" },
    { id: "billing-history", label: "Billing History" },
  ];

  const handleTabClick = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="flex gap-0 mb-8 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.id;
        const isFirst = index === 0;
        const isLast = index === tabs.length - 1;
        
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              flex-1 px-6 py-3 text-sm font-medium transition-colors
              ${isActive 
                ? "bg-[#FE9A00] text-black font-bold rounded-full" 
                : "bg-transparent text-gray-400 hover:text-white"
              }
              ${isFirst && isActive ? "rounded-l-lg" : ""}
              ${isLast && isActive ? "rounded-r-lg" : ""}
              ${!isFirst && !isLast && isActive ? "" : ""}
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

