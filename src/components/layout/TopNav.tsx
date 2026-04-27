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
    <div className="flex items-center justify-between px-[25px] pt-[35px] pb-2">
      {/* back button */}
      <button
        onClick={onBack}
        className="w-[60px] h-[60px] rounded-full bg-white/80 flex items-center justify-center shadow-sm active:scale-95 transition-transform"
      >
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
          <path d="M21 9H1M1 9L9 1M1 9l8 8" stroke="#262525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <span className="font-bold text-[24px] text-black">{title}</span>

      {/* heart button */}
      {showHeart ? (
        <button
          onClick={onHeart}
          className="w-[60px] h-[60px] rounded-full bg-white/80 flex items-center justify-center shadow-sm active:scale-95 transition-transform"
        >
          <svg width="24" height="22" viewBox="0 0 24 22" fill={hearted ? "#e85b52" : "none"}>
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
        <div className="w-[60px]" />
      )}
    </div>
  );
}
