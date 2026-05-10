"use client";

import { useState } from "react";
import { weddingConfig } from "@/lib/wedding-config";
import Image from "next/image";

interface FloatingCoupleProps {
  isVisible: boolean;
}

export function FloatingCouple({ isVisible }: FloatingCoupleProps) {
  const [brideError, setBrideError] = useState(false);
  const [groomError, setGroomError] = useState(false);
  const { bride, groom } = weddingConfig.couple;

  return (
    <>
      {/* Floating couple characters */}
      <div
        className={`fixed bottom-2 left-0 right-0 z-[150] flex justify-between items-end px-1.5 pointer-events-none transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Bride */}
        <div className="w-[62px] h-[80px] relative animate-bounce-float">
          {!brideError ? (
            <Image
              src={weddingConfig.images.bride}
              alt={bride}
              fill
              className="object-contain object-bottom drop-shadow-sm"
              onError={() => setBrideError(true)}
            />
          ) : (
            <div className="text-3xl text-center">👰</div>
          )}
          <span
            className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 font-sans-alt text-[0.55rem] font-bold px-1.5 py-0.5 rounded-lg whitespace-nowrap tracking-wide"
            style={{ color: "#1a1a1a", background: "rgba(255,255,255,.9)" }}
          >
            {bride}
          </span>
        </div>

        {/* Groom */}
        <div className="w-[62px] h-[80px] relative animate-bounce-float" style={{ animationDelay: "0.5s" }}>
          {!groomError ? (
            <Image
              src={weddingConfig.images.groom}
              alt={groom}
              fill
              className="object-contain object-bottom drop-shadow-sm"
              onError={() => setGroomError(true)}
            />
          ) : (
            <div className="text-3xl text-center">🤵</div>
          )}
          <span
            className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 font-sans-alt text-[0.55rem] font-bold px-1.5 py-0.5 rounded-lg whitespace-nowrap tracking-wide"
            style={{ color: "#1a1a1a", background: "rgba(255,255,255,.9)" }}
          >
            {groom}
          </span>
        </div>
      </div>

      {/* Hearts trail */}
      <div
        className={`fixed bottom-[25px] left-0 right-0 h-[50px] z-[149] pointer-events-none flex items-center justify-center gap-1.5 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {["💕", "💗", "💖", "❤️", "💖", "💗", "💕"].map((heart, i) => (
          <span
            key={i}
            className="animate-hearts-pulse"
            style={{
              color: "#E8A0B0",
              opacity: i === 3 ? 0.5 : 0.3,
              fontSize: i === 3 ? "0.85rem" : i === 2 || i === 4 ? "0.65rem" : i === 1 || i === 5 ? "0.5rem" : "0.4rem",
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {heart}
          </span>
        ))}
      </div>
    </>
  );
}
