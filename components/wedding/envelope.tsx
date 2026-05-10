"use client";

import { useState, useEffect, useCallback } from "react";
import { weddingConfig } from "@/lib/wedding-config";
import { invitationConfig } from "@/lib/invitation.config";
import { useResolvedArt } from "@/lib/custom-art";
import { EnvelopeIcon, SparkleIcon, NamasteIcon } from "./wedding-icons";

interface EnvelopeProps {
  isVisible: boolean;
  onComplete: () => void;
  onPlayMusic: () => void;
}

export function Envelope({ isVisible, onComplete, onPlayMusic }: EnvelopeProps) {
  const [phase, setPhase] = useState<"closed" | "flipping" | "revealed">("closed");
  const [isGone, setIsGone] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: number; color: string; duration: number; delay: number; size: number }>>([]);
  const { src: emblemSrc, onError: onEmblemError, entry: emblemEntry } = useResolvedArt("cardEmblem");

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
    if (phase === "closed") {
      setPhase("flipping");
      onPlayMusic();
    }
  }, [phase, onPlayMusic]);

  const handleFlipEnd = useCallback(() => {
    if (phase !== "flipping") return;

    setPhase("revealed");
    window.setTimeout(() => {
      setIsGone(true);
      window.setTimeout(onComplete, 520);
    }, 900);
  }, [phase, onComplete]);

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
        className="text-center z-10 p-3 w-full max-w-[320px]"
        style={{ perspective: "1000px" }}
      >
        {/* Card */}
        <div
          className={`w-[240px] h-[330px] mx-auto mb-3 relative max-w-[82vw] envelope-card ${phase !== "closed" ? "flipped" : ""}`}
          onClick={handleTap}
          onTransitionEnd={handleFlipEnd}
          role="button"
          aria-label="Open invitation"
        >
          {/* Front */}
          <div
            className="envelope-front rounded-2xl flex flex-col items-center justify-center p-5 overflow-hidden"
            style={{
              background: "linear-gradient(145deg, var(--rd), #2D1B20, var(--rd))",
              border: "2px solid var(--gold-accent)",
              boxShadow: "0 12px 45px rgba(0,0,0,.5)",
            }}
          >
            {/* Corner decorations */}
            <span className="absolute top-2 left-2 opacity-35" style={{ color: "var(--gold-accent)" }}>{invitationConfig.emojis.envelope.cornerSparkle}</span>
            <span className="absolute bottom-2 right-2 opacity-35" style={{ color: "var(--gold-accent)" }}>{invitationConfig.emojis.envelope.cornerSparkle}</span>

            {/* Emblem */}
            <div
              className="w-[55px] h-[55px] rounded-full flex items-center justify-center mb-2.5 relative"
              style={{
                border: "1.5px solid var(--gold-accent)",
                boxShadow: "0 0 20px rgba(201,169,110,.12)",
              }}
            >
              <img
                src={emblemSrc ?? "/art/mandap-icon.svg"}
                alt="Mandap venue"
                className={emblemEntry.size?.className ?? "w-8 h-8"}
                onError={onEmblemError}
              />
              <span
                className="absolute -inset-2 rounded-full animate-spin-cw"
                style={{
                  border: "1px dashed rgba(201,169,110,.1)",
                  animationDuration: "20s",
                }}
              />
            </div>

            <p className="font-accent text-[0.5rem] tracking-[3px] uppercase mb-2 font-semibold" style={{ color: "var(--gold-accent)", opacity: "0.95" }}>
              Wedding Invitation
            </p>

            <div className="font-display text-[1.7rem] text-white leading-tight font-bold">
              {bride}
              <span className="block text-lg my-[1px]" style={{ color: "var(--gold-accent)" }}>&</span>
              {groom}
            </div>

            <div className="w-[70px] h-[1px] my-2.5" style={{ background: "linear-gradient(90deg, transparent, var(--gold-accent), transparent)" }} />

            <p className="font-sans-alt text-[0.45rem] tracking-[2px] uppercase animate-pulse-opacity font-semibold" style={{ color: "var(--gold-border)", opacity: 0.75 }}>
              Tap to Begin
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
              border: "2px solid var(--gold-accent)",
              boxShadow: "0 12px 45px rgba(0,0,0,.5)",
            }}
          >
            <div className="mb-4 animate-glow flex justify-center">
              <img
                src={weddingConfig.swagatamIcons.namasteIconSrc || "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/preloader.png"}
                alt="Namaste Welcome"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <p className="font-display text-3xl mb-0.5 font-bold" style={{ color: "var(--charcoal)", fontWeight: "800" }}>
              Swaagatam
            </p>
            <p className="font-sans-alt text-[0.38rem] tracking-[2px] uppercase mb-2 font-semibold" style={{ color: "var(--gold-accent)", opacity: "0.95" }}>
              Welcome to our celebration
            </p>

            <div className="font-display text-[1.65rem] leading-tight font-bold" style={{ color: "var(--charcoal)", fontWeight: "700" }}>
              {bride}
              <span className="block text-base" style={{ color: "var(--gold-accent)" }}>&</span>
              {groom}
            </div>

            <div className="w-[60px] h-[1px] my-2" style={{ background: "linear-gradient(90deg, transparent, var(--gold-accent), transparent)" }} />

            <p className="font-body text-[0.72rem] italic text-center max-w-[170px] leading-relaxed font-medium" style={{ color: "var(--charcoal)" }}>
              Opening your invitation...
            </p>

            <p className="absolute bottom-2 font-sans-alt text-[0.38rem] tracking-[2px] uppercase animate-pulse-opacity font-semibold" style={{ color: "var(--gold-accent)", opacity: "0.9" }}>
              Please wait
            </p>
          </div>
        </div>

        {/* Instruction */}
        <p className="font-sans-alt text-[0.6rem] tracking-[2px] uppercase animate-pulse-opacity z-10 flex items-center justify-center gap-1.5 font-semibold" style={{ color: "var(--gold-accent)", opacity: "0.95" }}>
          <SparkleIcon className="w-3 h-3" aria={{ hidden: true }} />
          {phase === "closed" ? "Tap the card" : phase === "flipping" ? "Welcome unfolding" : "Entering celebration"}
          <SparkleIcon className="w-3 h-3" aria={{ hidden: true }} />
        </p>
      </div>
    </div>
  );
}
