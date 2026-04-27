"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = true,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "h-[60px] rounded-[30px] font-bold text-[24px] text-white transition-opacity active:opacity-80 flex items-center justify-center cursor-pointer";

  const variants = {
    primary: "bg-[#e85b52]",
    ghost:   "bg-transparent border-2 border-[#e85b52] text-[#e85b52]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
