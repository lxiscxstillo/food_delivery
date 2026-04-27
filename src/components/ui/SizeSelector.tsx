"use client";

import { SizeOption } from "@/types";

interface SizeSelectorProps {
  selected: SizeOption;
  onChange: (size: SizeOption) => void;
}

const sizes: SizeOption[] = ["Small", "Medium", "Large"];

export default function SizeSelector({ selected, onChange }: SizeSelectorProps) {
  return (
    <div className="flex gap-[10px]">
      {sizes.map((size) => {
        const isActive = size === selected;
        return (
          <button
            key={size}
            onClick={() => onChange(size)}
            className={`
              h-[32px] flex-1 rounded-[16px] font-bold text-[14px] text-black
              transition-all active:scale-95
              ${isActive ? "bg-[rgba(232,91,82,0.75)]" : "bg-[#ede4e4]"}
            `}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
