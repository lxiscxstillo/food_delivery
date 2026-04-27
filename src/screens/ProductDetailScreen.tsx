"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import Button from "@/components/ui/Button";
import SizeSelector from "@/components/ui/SizeSelector";
import QuantityStepper from "@/components/ui/QuantityStepper";
import { FoodItem, SizeOption } from "@/types";

interface ProductDetailScreenProps {
  food: FoodItem;
}

function RatingMeta({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-[6px]">
      <svg width="12" height="12" viewBox="0 0 20 20" fill="#e85b52" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.17c.969 0 1.372 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118L10 15.347l-3.374 2.45c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.636 9.393c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
      <span className="text-[#898585] font-bold text-[14px]">
        {rating.toFixed(1)} ({reviewCount} review)
      </span>
    </div>
  );
}

function truncateText(text: string, max: number) {
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd();
}

export default function ProductDetailScreen({ food }: ProductDetailScreenProps) {
  const router = useRouter();
  const [size, setSize] = useState<SizeOption>("Small");
  const [qty, setQty] = useState(1);
  const [hearted, setHearted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const screenTitle =
    food.category === "Biryani"
      ? "Biriyani Bliss"
      : food.category === "Pizza"
        ? "Pizza Bliss"
        : food.category === "Burger"
          ? "Burger Bliss"
          : food.category === "Sandwich"
            ? "Sandwich Bliss"
            : food.category;

  const specs = useMemo(
    () => [
      { label: "Price", value: `$ ${food.price.toFixed(2)}`, valueClass: "text-[24px]" },
      { label: "Calories", value: `${food.calories} Cal`, valueClass: "text-[22px]" },
      { label: "Diameter", value: `${food.diameterCm.toFixed(2)} Cm`, valueClass: "text-[22px]" },
    ],
    [food]
  );

  const description = expanded ? food.description : `${truncateText(food.description, 150)}...`;

  return (
    <div
      className="relative w-full h-dvh overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top right, rgba(209,163,160,1) 0%, rgba(232,209,208,1) 32%, #ffffff 65%)",
      }}
    >
      <div className="h-full overflow-y-auto scrollbar-hide">
        <div className="mx-auto w-full max-w-[1120px]">
          <TopNav
            title="Details"
            onBack={() => router.back()}
            hearted={hearted}
            onHeart={() => setHearted((h) => !h)}
          />

          <div className="px-[25px] pb-[calc(120px+env(safe-area-inset-bottom))]">
            <h1
              className="font-semibold text-[26px] text-[rgba(0,0,0,0.97)]"
              style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
            >
              {screenTitle}
            </h1>

            <div className="mt-[6px]">
              <RatingMeta rating={food.rating} reviewCount={food.reviewCount} />
            </div>

            {/* Two-column layout on mobile; optimized left column on desktop */}
            <div className="mt-[18px] grid grid-cols-[154px_1fr] gap-x-[14px] items-start md:grid-cols-[240px_1fr] md:gap-x-[28px]">
              {/* Specs + quantity */}
              <div className="col-start-1 row-start-1">
                <div className="space-y-[14px]">
                  {specs.map((spec) => (
                    <div key={spec.label}>
                      <p className="font-bold text-[14px] text-[#898585]">{spec.label}</p>
                      <p className={`font-bold ${spec.valueClass} text-[#262525] leading-none`}>
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-[18px]">
                  <QuantityStepper
                    value={qty}
                    onIncrement={() => setQty((q) => q + 1)}
                    onDecrement={() => setQty((q) => Math.max(1, q - 1))}
                  />
                </div>
              </div>

              {/* Hero image */}
              <div className="col-start-2 row-start-1 relative min-w-0">
                <div className="relative h-[260px] md:h-[440px] overflow-visible">
                  <div className="absolute right-[-24px] top-[-10px] w-[330px] max-w-[78vw] h-[300px] md:right-[-10px] md:top-[-18px] md:w-[560px] md:h-[500px]">
                    <Image
                      src={food.image}
                      alt={food.name}
                      fill
                      priority
                      unoptimized
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Size (full width on mobile, left column on desktop) */}
              <div className="col-span-2 row-start-2 mt-[6px] md:col-span-1 md:col-start-1">
                <p className="font-bold text-[16px] text-[#7d7b7b] mb-[10px]">Size</p>
                <SizeSelector selected={size} onChange={setSize} />
              </div>

              {/* Description (full width on mobile, left column on desktop) */}
              <p className="col-span-2 row-start-3 mt-[16px] font-medium text-[13px] leading-[19px] text-black md:col-span-1 md:col-start-1">
                {description}
                <button
                  type="button"
                  className="font-extrabold ml-1 text-black"
                  onClick={() => setExpanded((e) => !e)}
                >
                  {expanded ? "less_" : "more_"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart bar (mobile + desktop) */}
      <div className="fixed left-0 right-0 bottom-0 z-40 bg-white/80 backdrop-blur-md border-t border-[#f0e0e0]">
        <div className="mx-auto w-full max-w-[1120px] px-[25px] pt-[14px] pb-[calc(env(safe-area-inset-bottom)+16px)]">
          <Button
            onClick={() => router.push("/cart")}
            className="h-[56px] rounded-[28px] text-[20px]"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
