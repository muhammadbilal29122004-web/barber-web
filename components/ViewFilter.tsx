"use client";

interface ViewFilterProps {
  value: string;
  onChange: (value: string) => void;
  options?: string[];
}

export default function ViewFilter({ 
  value, 
  onChange, 
  options = ["All", "Popular", "Newest", "Rating"]
}: ViewFilterProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none sm:text-center bg-[#161616] border border-[#2C2C2C] rounded-full px-4 py-3 pr-10 text-[#A1A1A1] focus:outline-none focus:border-orange-500 transition-colors cursor-pointer w-full"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#161616]">
            {option}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-5 h-5 text-[#A1A1A1]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

