"use client";

import { useState, useEffect, useCallback } from "react";
import { weddingConfig } from "@/lib/wedding-config";
import { MandapIcon, EnvelopeIcon, SparkleIcon } from "./wedding-icons";

interface EnvelopeProps {
  isVisible: boolean;
  onComplete: () => void;
  onPlayMusic: () => void;
}

export function Envelope({ isVisible, onComplete, onPlayMusic }: EnvelopeProps) {
  const [tapState, setTapState] = useState(0); // 0 = initial, 1 = flipped, 2 = done
  const [isGone, setIsGone] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: number; color: string; duration: number; delay: number; size: number }>>([]);

  const { bride, groom } = weddingConfig.couple;

  useEffect(() => {
    if (isVisible) {
      const colors = ["rgba(201,169,110,.4)", "rgba(255,215,0,.3)", "rgba(255,255,255,.18)"];
      const newSparkles = Array.from({ length: 22 }, (_, i) => ({
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

  const handleTap = useCallback(() => {
    if (tapState === 0) {
      setTapState(1);
    } else if (tapState === 1) {
      setTapState(2);
      setIsGone(true);
      onPlayMusic();
      setTimeout(onComplete, 600);
    }
  }, [tapState, onComplete, onPlayMusic]);

  if (!isVisible && !isGone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9000] flex items-center justify-center overflow-hidden transition-all duration-800
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

      {/* Envelope wrapper */}
      <div
        className="text-center cursor-pointer z-10 p-3 w-full max-w-[300px]"
        style={{ perspective: "1000px" }}
        onClick={handleTap}
      >
        {/* Card */}
        <div
          className={`w-[240px] h-[330px] mx-auto mb-3 relative max-w-[82vw] envelope-card ${tapState >= 1 ? "flipped" : ""}`}
        >
          {/* Front */}
          <div
            className="envelope-front rounded-2xl flex flex-col items-center justify-center p-5 overflow-hidden"
            style={{
              background: "linear-gradient(145deg, var(--rd), #2D1B20, var(--rd))",
              border: "2px solid var(--gold)",
              boxShadow: "0 12px 45px rgba(0,0,0,.5)",
            }}
          >
            {/* Corner decorations */}
            <span className="absolute top-2 left-2 opacity-35" style={{ color: "var(--gold)" }}>✦</span>
            <span className="absolute bottom-2 right-2 opacity-35" style={{ color: "var(--gold)" }}>✦</span>

            {/* Emblem */}
            <div
              className="w-[55px] h-[55px] rounded-full flex items-center justify-center mb-2.5 relative"
              style={{
                border: "1.5px solid var(--gold)",
                boxShadow: "0 0 20px rgba(201,169,110,.12)",
              }}
            >
              <MandapIcon className="w-8 h-8" aria={{ label: "Mandap venue" }} />
              <span
                className="absolute -inset-2 rounded-full animate-spin-cw"
                style={{
                  border: "1px dashed rgba(201,169,110,.1)",
                  animationDuration: "20s",
                }}
              />
            </div>

            <p className="font-accent text-[0.5rem] tracking-[3px] uppercase mb-2" style={{ color: "var(--gold)" }}>
              Wedding Invitation
            </p>

            <div className="font-display text-[1.7rem] text-white leading-tight">
              {bride}
              <span className="block text-lg my-[1px]" style={{ color: "var(--gold)" }}>&</span>
              {groom}
            </div>

            <div className="w-[70px] h-[1px] my-2.5" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />

            <p className="font-sans-alt text-[0.45rem] tracking-[2px] uppercase animate-pulse-opacity" style={{ color: "var(--gl)", opacity: 0.5 }}>
              Tap to Open
            </p>

            {/* Seal */}
            <div
              className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10"
              style={{
                background: "radial-gradient(circle at 40% 40%, #c0392b, #8b1a1a)",
                boxShadow: "0 3px 10px rgba(0,0,0,.4)",
                border: "1.5px solid rgba(201,169,110,.2)",
              }}
            >
              <EnvelopeIcon className="w-5 h-5" aria={{ label: "Love letter" }} />
            </div>
          </div>

          {/* Back */}
          <div
            className="envelope-back rounded-2xl flex flex-col items-center justify-center p-5 overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #fdf8f0, #f5ede0)",
              border: "2px solid var(--gold)",
              boxShadow: "0 12px 45px rgba(0,0,0,.5)",
            }}
          >
            <p className="font-display text-xl mb-0.5" style={{ color: "var(--td)" }}>
              You&apos;re Invited!
            </p>
            <p className="font-sans-alt text-[0.38rem] tracking-[2px] uppercase mb-2" style={{ color: "var(--gold)" }}>
              Please join us
            </p>

            <div className="font-display text-[1.8rem] leading-tight" style={{ color: "var(--td)" }}>
              {bride}
              <span className="block text-base" style={{ color: "var(--gold)" }}>&</span>
              {groom}
            </div>

            <div className="w-[60px] h-[1px] my-2" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />

            <p className="font-body text-[0.72rem] italic text-center max-w-[170px] leading-relaxed" style={{ color: "var(--tm)" }}>
              &ldquo;Together with our families, we invite you to celebrate our wedding day&rdquo;
            </p>

            <p className="absolute bottom-2 font-sans-alt text-[0.38rem] tracking-[2px] uppercase animate-pulse-opacity" style={{ color: "var(--gold)" }}>
              ↓ Tap again ↓
            </p>
          </div>
        </div>

        {/* Instruction */}
        <p className="font-sans-alt text-[0.6rem] tracking-[2px] uppercase animate-pulse-opacity z-10 flex items-center justify-center gap-1.5" style={{ color: "var(--gold)" }}>
          <SparkleIcon className="w-3 h-3" aria={{ hidden: true }} />
          Tap the card
          <SparkleIcon className="w-3 h-3" aria={{ hidden: true }} />
        </p>
      </div>
    </div>
  );
}
