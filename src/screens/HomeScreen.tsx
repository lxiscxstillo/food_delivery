"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/layout/BottomNav";
import SearchBar from "@/components/ui/SearchBar";
import CategoryPill from "@/components/ui/CategoryPill";
import FoodCard from "@/components/ui/FoodCard";
import { foods, categoryTabs } from "@/data/foods";
import { FoodCategory } from "@/types";

const AVATAR = "https://www.figma.com/api/mcp/asset/f8306890-9546-4bdc-8976-dded241cf527";

export default function HomeScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<FoodCategory>("Biryani");
  const [search, setSearch] = useState("");

  const visible = search
    ? foods.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
    : foods.filter((f) => f.category === activeCategory);

  const displayedFoods = visible.length > 0 ? visible : foods;

  return (
    <div
      className="w-full h-dvh overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 45% at 90% 0%, rgba(220,140,135,0.35) 0%, #fff5f4 55%)",
      }}
    >
      <div className="h-full overflow-y-auto scrollbar-hide pb-32">

        {/* ── Max-width column ─────────────────────────────────── */}
        <div className="max-w-2xl mx-auto px-5 pt-10">

          {/* ── Top bar ───────────────────────────────────────── */}
          <div className="flex items-center justify-between mb-7">
            {/* Avatar */}
            <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden flex-shrink-0">
              <Image src={AVATAR} alt="User" fill className="object-cover" unoptimized />
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5">
              <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
                <path
                  d="M6.5 0C3.462 0 1 2.462 1 5.5c0 4.143 5.5 11 5.5 11S12 9.643 12 5.5C12 2.462 9.538 0 6.5 0z"
                  stroke="#262525"
                  strokeWidth="1.6"
                  fill="none"
                />
                <circle cx="6.5" cy="5.5" r="1.8" stroke="#262525" strokeWidth="1.6" />
              </svg>
              <span className="font-semibold text-[19px] text-black">Canada</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="#262525" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>

            {/* Hamburger menu */}
            <button className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 active:scale-95 transition-transform">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M1 1h18M1 7h18M1 13h18" stroke="#262525" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* ── Headline ──────────────────────────────────────── */}
          <h1
            className="font-bold text-[clamp(24px,5.5vw,34px)] text-text-heading leading-tight mb-5"
            style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.1)" }}
          >
            Ready to order your<br />favourite food ?
          </h1>

          {/* ── Search bar ────────────────────────────────────── */}
          <div className="mb-5">
            <SearchBar onSearch={setSearch} />
          </div>
        </div>

        {/* ── Category pills — scrolls freely ───────────────── */}
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pl-5 pr-5 pb-1">
            {categoryTabs.map((cat) => (
              <CategoryPill
                key={cat.label}
                label={cat.label}
                image={cat.image}
                active={activeCategory === cat.label}
                onClick={() => {
                  setActiveCategory(cat.label as FoodCategory);
                  setSearch("");
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Popular Food grid ─────────────────────────────── */}
        <div className="max-w-2xl mx-auto px-5 mt-7">
          <div className="flex items-center justify-between mb-5">
            <span className="font-semibold text-[21px] text-black">Popular Food</span>
            <button className="font-medium text-[13px] text-text-secondary hover:text-primary transition-colors">
              See all
            </button>
          </div>

          {/* 2-col on mobile, 3 on md, 4 on lg — pt-5 gives room for overflowing images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 pt-5">
            {displayedFoods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                onClick={() => router.push(`/food/${food.id}`)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ── Floating bottom nav ───────────────────────────── */}
      <BottomNav />
    </div>
  );
}
