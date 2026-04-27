"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/layout/BottomNav";
import TopNav from "@/components/layout/TopNav";
import Button from "@/components/ui/Button";
import StarRating from "@/components/ui/StarRating";
import SizeSelector from "@/components/ui/SizeSelector";
import QuantityStepper from "@/components/ui/QuantityStepper";
import { FoodItem, SizeOption } from "@/types";

interface ProductDetailScreenProps {
  food: FoodItem;
}

export default function ProductDetailScreen({ food }: ProductDetailScreenProps) {
  const router = useRouter();
  const [size, setSize]         = useState<SizeOption>("Small");
  const [qty, setQty]           = useState(1);
  const [hearted, setHearted]   = useState(false);
  const [expanded, setExpanded] = useState(false);

  const screenTitle =
    food.category === "Biryani"  ? "Biriyani Bliss"  :
    food.category === "Pizza"    ? "Pizza Bliss"      :
    food.category === "Burger"   ? "Burger Bliss"     :
    food.category === "Sandwich" ? "Sandwhic Bliss"   :
    food.category;

  const specItems = [
    { label: "Price",    labelColor: "#898585", value: `$ ${food.price.toFixed(2)}`,       valueSize: "text-[24px]" },
    { label: "Calories", labelColor: "#7a7878", value: `${food.calories} Cal`,              valueSize: "text-[22px]" },
    { label: "Diameter", labelColor: "#7d7b7b", value: `${food.diameterCm.toFixed(2)} Cm`, valueSize: "text-[22px]" },
  ];

  return (
    <div
      className="relative flex flex-col"
      style={{
        minHeight: "100svh",
        background:
          "radial-gradient(ellipse at top right, rgba(209,163,160,1) 0%, rgba(232,209,208,1) 32%, #ffffff 65%)",
      }}
    >
      {/* ── Top nav ──────────────────────────────────────────── */}
      <TopNav
        title="Details"
        onBack={() => router.back()}
        hearted={hearted}
        onHeart={() => setHearted(!hearted)}
      />

      {/* ── Scrollable body ──────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-[160px]">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title + rating — above both columns */}
          <div className="mt-2 mb-5">
            <h1
              className="font-semibold text-[clamp(26px,5vw,36px)] text-[rgba(0,0,0,0.97)]"
              style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
            >
              {screenTitle}
            </h1>
            <div className="mt-1">
              <StarRating rating={food.rating} reviewCount={food.reviewCount} />
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-start">

            {/* ── LEFT column: specs + controls ──────────────── */}
            <div className="space-y-5 order-2 md:order-1">

              {/*
               * Spec items:
               * Mobile — stacked list (matches Figma exactly).
               * Desktop — horizontal cards for better visual grouping.
               */}
              <div className="flex flex-col gap-4 md:flex-row md:gap-3">
                {specItems.map(({ label, labelColor, value, valueSize }) => (
                  <div
                    key={label}
                    className="md:flex-1 md:bg-white/60 md:backdrop-blur-sm md:rounded-2xl md:p-4 md:text-center md:shadow-sm"
                  >
                    <p className="font-bold text-[20px] md:text-[14px]" style={{ color: labelColor }}>
                      {label}
                    </p>
                    <p className={`font-bold ${valueSize} text-[#262525]`}>{value}</p>
                  </div>
                ))}
              </div>

              {/* Quantity stepper */}
              <QuantityStepper
                value={qty}
                onIncrement={() => setQty((q) => q + 1)}
                onDecrement={() => setQty((q) => Math.max(1, q - 1))}
              />

              {/* Size selector */}
              <div>
                <p className="font-bold text-[20px] text-[#7d7b7b] mb-3">Size</p>
                <SizeSelector selected={size} onChange={setSize} />
              </div>

              {/* Description */}
              <p className="font-medium text-[18px] text-black leading-relaxed">
                {expanded ? food.description : food.description.slice(0, 140) + "..."}
                <button
                  className="font-extrabold ml-1 text-[#e85b52]"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "less_" : "more_"}
                </button>
              </p>

              {/* Add to Cart — in-flow on desktop */}
              <div className="hidden md:block pt-2">
                <Button onClick={() => router.push("/cart")}>Add to Cart</Button>
              </div>
            </div>

            {/* ── RIGHT column: hero image ──────────────────── */}
            <div className="order-1 md:order-2 relative flex justify-center md:justify-end">

              {/* Mobile: overflows right like Figma */}
              <div className="md:hidden relative h-[320px] w-full overflow-visible">
                <div className="absolute right-[-24px] top-0 w-[370px] max-w-[88vw] h-[340px]">
                  <Image
                    src={food.image}
                    alt={food.name}
                    fill
                    className="object-contain"
                    unoptimized
                    priority
                  />
                </div>
              </div>

              {/* Desktop: centered large image with generous height */}
              <div className="hidden md:block relative w-full h-[460px] md:sticky md:top-4">
                <Image
                  src={food.image}
                  alt={food.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Add to Cart sticky button — mobile only ──────────── */}
      <div
        className="md:hidden fixed left-0 right-0 z-40 px-6 py-4 bg-white/80 backdrop-blur-md border-t border-[#f0e0e0]"
        style={{ bottom: "80px" }}
      >
        <Button onClick={() => router.push("/cart")}>Add to Cart</Button>
      </div>

      {/* ── Fixed bottom nav ─────────────────────────────────── */}
      <BottomNav />
    </div>
  );
}
