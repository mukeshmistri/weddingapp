"use client";

import { useEffect, useState } from "react";
import { weddingConfig } from "@/lib/wedding-config";
import Image from "next/image";
import { NamasteIcon, BrideGroomIcon } from "./wedding-icons";

interface SwagatamProps {
  isVisible: boolean;
  onEnter: () => void;
}

export function Swagatam({ isVisible, onEnter }: SwagatamProps) {
  const [isGone, setIsGone] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: number; color: string; duration: number; delay: number; size: number }>>([]);
  const [imageError, setImageError] = useState(false);

  const { bride, groom } = weddingConfig.couple;

  useEffect(() => {
    if (isVisible) {
      const colors = ["rgba(201,169,110,.4)", "rgba(255,215,0,.3)", "rgba(255,255,255,.18)"];
      const newSparkles = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 5 + 3,
        delay: Math.random() * 4,
        size: Math.random() * 3 + 1,
      }));
      setSparkles(newSparkles);
    }
  }, [isVisible]);

  const handleEnter = () => {
    setIsGone(true);
    setTimeout(onEnter, 200);
  };

  if (!isVisible && !isGone) return null;

  return (
    <div
      className={`fixed inset-0 z-[8000] flex flex-col items-center justify-center overflow-hidden transition-all duration-800
        ${isGone ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"}`}
      style={{ background: "linear-gradient(135deg, var(--rd), var(--rm))" }}
    >
      {/* Sparkles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full"
            style={{
              width: `${s.size}px`,
              height: `${s.size}px`,
              left: `${s.left}%`,
              background: s.color,
              animation: `fade-up ${s.duration}s linear infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="text-center z-10 animate-float-in p-4 w-full max-w-[340px]">
        {/* Namaste icon */}
        <div className="mb-1.5 animate-glow flex justify-center">
          <NamasteIcon className="w-12 h-12" aria={{ label: "Welcome hands" }} />
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl mb-1" style={{ color: "var(--gold-accent)" }}>
          Swaagatam!
        </h1>
        <p className="font-sans-alt text-[0.5rem] tracking-[3px] uppercase mb-3.5 opacity-50" style={{ color: "var(--gold-border)" }}>
          Welcome to the celebration of love
        </p>

        {/* Couple Photo */}
        <div
          className="w-[140px] h-[140px] mx-auto mb-3.5 rounded-full overflow-hidden relative"
          style={{
            border: "2.5px solid var(--gold-accent)",
            boxShadow: "0 0 28px rgba(201,169,110,.18)",
          }}
        >
          <span
            className="absolute -inset-[3px] rounded-full pointer-events-none z-10 animate-spin-cw"
            style={{
              border: "1px dashed rgba(201,169,110,.18)",
              animationDuration: "15s",
            }}
          />
          {!imageError ? (
            <Image
              src={weddingConfig.images.couplePhoto}
              alt={`${bride} & ${groom}`}
              fill
              className="object-cover object-[center_20%] scale-150"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <BrideGroomIcon className="w-20 h-20" aria={{ label: "Bride and groom" }} />
            </div>
          )}
        </div>

        {/* Names */}
        <p className="font-display text-2xl text-white mb-0.5">
          {bride} & {groom}
        </p>
        <p className="font-body text-sm italic mb-4.5 opacity-40 text-white">
          invite you to their wedding celebration
        </p>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          className="inline-block px-8 py-2.5 rounded-full font-accent text-[0.6rem] tracking-[2px] uppercase text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, var(--gold-accent), var(--gold-accent))",
            boxShadow: "0 4px 20px rgba(201,169,110,.28)",
          }}
        >
          Enter the Celebration
        </button>
      </div>
    </div>
  );
}
