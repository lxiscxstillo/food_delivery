"use client";

import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Search your food",
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  return (
    <div className="relative h-[60px] w-full">
      {/* white pill */}
      <div className="absolute inset-0 bg-white rounded-[25px]" />

      {/* search icon */}
      <div className="absolute left-[18px] top-1/2 -translate-y-1/2 text-[#9e9e9e]">
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
        </svg>
      </div>

      {/* input */}
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSearch?.(e.target.value);
        }}
        placeholder={placeholder}
        className="absolute inset-0 bg-transparent pl-[52px] pr-[64px] text-[16px] font-normal text-[#262525] placeholder:text-[#9e9e9e] outline-none rounded-[25px]"
      />

      {/* filter button */}
      <button className="absolute right-0 top-0 h-[60px] w-[55px] bg-[#e85b52] rounded-[25px] flex items-center justify-center">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
          <path d="M1 1h18M5 9h10M9 17h2" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
