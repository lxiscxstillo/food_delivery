interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}

export default function StarRating({ rating, reviewCount, size = "md" }: StarRatingProps) {
  const starCount = 5;
  const filled = Math.round(rating);
  const iconSize = size === "sm" ? "w-3 h-3" : "w-4 h-4";

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {Array.from({ length: starCount }).map((_, i) => (
          <svg
            key={i}
            className={`${iconSize} ${i < filled ? "text-[#e85b52]" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.17c.969 0 1.372 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118L10 15.347l-3.374 2.45c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.636 9.393c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69L9.049 2.927z" />
          </svg>
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-[#898585] font-bold text-[14px]">
          {rating.toFixed(1)} ({reviewCount} review)
        </span>
      )}
    </div>
  );
}
