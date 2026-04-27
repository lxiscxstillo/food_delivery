import { ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
  variant?: "default" | "splash";
  className?: string;
}

export default function GradientBackground({
  children,
  variant = "default",
  className = "",
}: GradientBackgroundProps) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        background:
          variant === "splash"
            ? "radial-gradient(ellipse at top right, rgba(210,114,111,0) 0%, rgba(233,184,183,0.5) 30%, #ffffff 60%)"
            : "radial-gradient(ellipse at top right, rgba(209,163,160,1) 0%, rgba(232,209,208,1) 32%, #ffffff 65%)",
      }}
    >
      {children}
    </div>
  );
}
