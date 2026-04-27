"use client";

import Image from "next/image";
import { FoodCategory } from "@/types";

interface CategoryPillProps {
  label: FoodCategory;
  image: string;
  active?: boolean;
  onClick?: () => void;
}

export default function CategoryPill({
  label,
  image,
  active = false,
  onClick,
}: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={`
        shrink-0 flex items-center gap-2 h-13 pl-1 pr-4
        rounded-[30px] transition-all duration-200 active:scale-95
        ${active ? "bg-[#e85b52] text-white" : "bg-white text-text-primary"}
      `}
    >
      <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
        <Image src={image} alt={label} fill className="object-cover" unoptimized />
      </div>
      <span
        className={`text-[16px] leading-none whitespace-nowrap ${
          active ? "font-bold" : "font-semibold"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
