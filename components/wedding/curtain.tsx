"use client";

import { useEffect, useState } from "react";

interface CurtainProps {
  isOpen: boolean;
  onComplete: () => void;
}

export function Curtain({ isOpen, onComplete }: CurtainProps) {
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsGone(true);
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onComplete]);

  if (isGone) return null;

  return (
    <div
      className={`fixed inset-0 z-[7000] flex overflow-hidden pointer-events-none transition-all duration-1000 ${isOpen ? "curtain-open" : ""}`}
      style={{ transitionDelay: isOpen ? "1.5s" : "0s" }}
    >
      <div
        className="curtain-left w-1/2 h-full origin-left"
        style={{ background: "var(--rd)" }}
      />
      <div
        className="curtain-right w-1/2 h-full origin-right"
        style={{ background: "var(--rd)" }}
      />
    </div>
  );
}
