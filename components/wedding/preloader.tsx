"use client";

import { useEffect, useState } from "react";
import { NamasteIcon } from "./wedding-icons";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGone(true);
      setTimeout(onComplete, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center transition-all duration-1000
        ${isGone ? "opacity-0 invisible" : "opacity-100 visible"}`}
      style={{
        background: "linear-gradient(135deg, var(--rd), var(--rm))",
      }}
    >
      <div className="text-center relative z-10">
        {/* Spinner */}
        <div className="w-[90px] h-[90px] mx-auto mb-[18px] relative">
          <div className="ring animate-spin-cw" />
          <div className="ring animate-spin-ccw" />
          <div className="ring animate-spin-cw" style={{ animationDuration: "1.8s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow">
            <NamasteIcon className="w-8 h-8" aria={{ label: "Namaste" }} />
          </div>
        </div>

        {/* Text */}
        <p
          className="font-display text-2xl opacity-0 animate-fade-up"
          style={{ color: "var(--gold)", animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Two hearts, one love...
        </p>
        <p
          className="font-sans-alt text-[0.45rem] tracking-[3px] uppercase mt-1 opacity-0 animate-fade-up"
          style={{ color: "rgba(232,213,168,.35)", animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          Loading your invitation
        </p>
      </div>
    </div>
  );
}
