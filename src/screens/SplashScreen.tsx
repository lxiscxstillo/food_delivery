"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { splashImages } from "@/data/foods";

export default function SplashScreen() {
  const router = useRouter();

  return (
    <div
      className="relative w-full h-dvh overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top right, rgba(210,114,111,0.45) 0%, rgba(233,184,183,0.6) 32%, #ffffff 65%)",
      }}
    >
      {/* ── Food circles ─────────────────────────────────────────────
          Positioned using a mix of vh + responsive clamp sizes so the
          layout feels natural on any screen width.
          Circles overflow the edges intentionally (like the design).
      ────────────────────────────────────────────────────────────── */}

      {/* Top-left — rotated dish, partially off-screen */}
      <div
        className="absolute rounded-full overflow-hidden bg-[#f0dedd]"
        style={{
          top: "5vh",
          left: "clamp(-80px, -6vw, -30px)",
          width: "clamp(150px, 21vw, 220px)",
          height: "clamp(150px, 21vw, 220px)",
          transform: "rotate(11.2deg)",
        }}
      >
        <div style={{ position: "absolute", inset: "-20%", transform: "rotate(-70deg)" }}>
          <Image src={splashImages[5]} alt="" fill className="object-contain" unoptimized />
        </div>
      </div>

      {/* Top-right — biryani, partially off-screen */}
      <div
        className="absolute rounded-full overflow-hidden bg-[#e8d0ce]"
        style={{
          top: "9vh",
          right: "clamp(-60px, -4vw, -20px)",
          width: "clamp(130px, 18vw, 195px)",
          height: "clamp(130px, 18vw, 195px)",
        }}
      >
        <Image src={splashImages[4]} alt="Biryani" fill className="object-cover" unoptimized />
      </div>

      {/* Center — large pizza */}
      <div
        className="absolute rounded-full overflow-hidden bg-[#f0dedd]"
        style={{
          top: "15vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(170px, 27vw, 270px)",
          height: "clamp(170px, 27vw, 270px)",
        }}
      >
        <Image src={splashImages[3]} alt="Pizza" fill className="object-cover" unoptimized />
      </div>

      {/* Middle-left — burger (large), partially off-screen */}
      <div
        className="absolute rounded-full overflow-hidden bg-[#f0dedd]"
        style={{
          top: "38vh",
          left: "clamp(-80px, -6vw, -30px)",
          width: "clamp(170px, 25vw, 250px)",
          height: "clamp(170px, 25vw, 250px)",
        }}
      >
        <Image src={splashImages[0]} alt="Burger" fill className="object-cover" unoptimized />
      </div>

      {/* Center-lower — momos (small) */}
      <div
        className="absolute rounded-full overflow-hidden bg-[#e8d0ce]"
        style={{
          top: "52vh",
          left: "37%",
          width: "clamp(110px, 16vw, 160px)",
          height: "clamp(110px, 16vw, 160px)",
        }}
      >
        <Image src={splashImages[2]} alt="Momos" fill className="object-cover" unoptimized />
      </div>

      {/* Right-mid — spring rolls, partially off-screen */}
      <div
        className="absolute rounded-full overflow-hidden bg-[#f0dedd]"
        style={{
          top: "41vh",
          right: "clamp(-60px, -4vw, -20px)",
          width: "clamp(130px, 18vw, 195px)",
          height: "clamp(130px, 18vw, 195px)",
        }}
      >
        <Image src={splashImages[1]} alt="Spring Roll" fill className="object-cover" unoptimized />
      </div>

      {/* ── Text + CTA pinned to bottom ────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center px-6 pb-[5vh]">
        <div className="text-center mb-[3vh] w-full max-w-100">
          <h1
            className="font-bold leading-tight mb-3 text-text-heading"
            style={{
              fontSize: "clamp(28px, 4.5vw, 40px)",
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            }}
          >
            Test the Joy of Delivery
          </h1>
          <p
            className="font-normal text-text-dark leading-snug"
            style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
          >
            Unlock a world of culinary delights,{" "}
            right at your fingertips
          </p>
        </div>

        <div className="w-full max-w-100">
          <Button onClick={() => router.push("/home")}>Get Started</Button>
        </div>

        {/* Home indicator bar */}
        <div className="mt-3 w-[36%] max-w-38.5 h-1.25 bg-black/20 rounded-full" />
      </div>
    </div>
  );
}
