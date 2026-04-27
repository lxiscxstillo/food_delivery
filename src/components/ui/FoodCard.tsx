"use client";

import Image from "next/image";
import { FoodItem } from "@/types";
import StarRating from "./StarRating";

interface FoodCardProps {
  food: FoodItem;
  onClick?: () => void;
}

export default function FoodCard({ food, onClick }: FoodCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative bg-white rounded-card w-full overflow-visible pb-4 text-left cursor-pointer active:scale-[0.98] transition-transform"
    >
      {/* food image — overflows top of card */}
      <div className="relative h-30 w-4/5 mx-auto -mt-5">
        <Image
          src={food.image}
          alt={food.name}
          fill
          className="object-contain drop-shadow-md"
          unoptimized
        />
      </div>

      {/* info */}
      <div className="px-3 mt-2 space-y-1">
        <p className="font-semibold text-[13px] text-black leading-tight line-clamp-2">
          {food.name}
        </p>
        <StarRating rating={food.rating} size="sm" />
        <div className="flex items-center gap-1 text-[11px] font-semibold text-black flex-wrap">
          <span>{food.distanceKm} km</span>
          <span className="inline-block w-1 h-1 rounded-full bg-primary shrink-0" />
          <span>{food.deliveryMinutes} min delivery</span>
        </div>
      </div>
    </button>
  );
}
