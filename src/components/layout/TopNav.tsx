"use client";

interface TopNavProps {
  title?: string;
  onBack?: () => void;
  showHeart?: boolean;
  hearted?: boolean;
  onHeart?: () => void;
}

export default function TopNav({
  title = "Details",
  onBack,
  showHeart = true,
  hearted = false,
  onHeart,
}: TopNavProps) {
  return (
    <div className="flex items-center justify-between px-[25px] pt-[28px] pb-[10px]">
      {/* back button */}
      <button
        onClick={onBack}
        aria-label="Back"
        className="w-[54px] h-[54px] rounded-full bg-white/80 flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.08)] active:scale-95 transition-transform"
      >
        <svg width="20" height="16" viewBox="0 0 22 18" fill="none" aria-hidden="true">
          <path d="M21 9H1M1 9L9 1M1 9l8 8" stroke="#262525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <span className="font-bold text-[22px] text-black">{title}</span>

      {/* heart button */}
      {showHeart ? (
        <button
          onClick={onHeart}
          aria-label={hearted ? "Remove from wishlist" : "Add to wishlist"}
          className="w-[54px] h-[54px] rounded-full bg-white/80 flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.08)] active:scale-95 transition-transform"
        >
          <svg width="22" height="20" viewBox="0 0 24 22" fill={hearted ? "#e85b52" : "none"} aria-hidden="true">
            <path
              d="M12 21C12 21 2 14 2 7.5A5.5 5.5 0 0112 4.74 5.5 5.5 0 0122 7.5C22 14 12 21 12 21z"
              stroke="#e85b52"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : (
        <div className="w-[54px]" />
      )}
    </div>
  );
}
