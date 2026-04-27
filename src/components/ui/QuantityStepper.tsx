"use client";

interface QuantityStepperProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
}

export default function QuantityStepper({
  value,
  onIncrement,
  onDecrement,
  min = 1,
}: QuantityStepperProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onDecrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="w-[36px] h-[36px] rounded-full bg-[#e85b52] flex items-center justify-center text-white font-semibold text-[22px] leading-none disabled:opacity-40 active:scale-95 transition-transform"
      >
        -
      </button>

      <span className="w-[34px] text-center font-semibold text-[16px] text-black">
        {String(value).padStart(2, "0")}
      </span>

      <button
        onClick={onIncrement}
        aria-label="Increase quantity"
        className="w-[36px] h-[36px] rounded-full bg-[#e85b52] flex items-center justify-center text-white font-semibold text-[22px] leading-none active:scale-95 transition-transform"
      >
        +
      </button>
    </div>
  );
}
