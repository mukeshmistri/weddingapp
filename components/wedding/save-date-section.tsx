"use client";

import { useState, useCallback, useEffect } from "react";
import { weddingConfig } from "@/lib/wedding-config";
import { invitationConfig } from "@/lib/invitation.config";
import { ScratchCard } from "./scratch-card";
import { Countdown } from "./countdown";
import { PointingFingerIcon, SparkleIcon, RefreshIcon } from "./wedding-icons";

interface SaveDateSectionProps {
  onAllRevealed: () => void;
}

export function SaveDateSection({ onAllRevealed }: SaveDateSectionProps) {
  const [revealed, setRevealed] = useState({
    day: false,
    month: false,
    year: false,
  });
  const [showCountdown, setShowCountdown] = useState(false);
  const [showFullDate, setShowFullDate] = useState(false);

  const allRevealed = revealed.day && revealed.month && revealed.year;
  const remainingCount = [revealed.day, revealed.month, revealed.year].filter((r) => !r).length;

  const handleReveal = useCallback((card: "day" | "month" | "year") => {
    setRevealed((prev) => ({ ...prev, [card]: true }));
  }, []);

  useEffect(() => {
    if (allRevealed) {
      setTimeout(() => {
        setShowFullDate(true);
        setShowCountdown(true);
        onAllRevealed();
      }, 900);
    }
  }, [allRevealed, onAllRevealed]);

  const resetAll = () => {
    setRevealed({ day: false, month: false, year: false });
    setShowCountdown(false);
    setShowFullDate(false);
  };

  return (
    <section
      id="save-date"
      className="min-h-screen flex items-center justify-center px-2.5 py-[50px] pb-[108px] relative overflow-hidden"
      style={{ background: invitationConfig.decorations.saveDate.background }}
    >
      {/* Dot pattern background - reduced density by 50% */}
      <div
        className={`absolute inset-0 ${invitationConfig.decorations.saveDate.dotPattern.opacityClass} pointer-events-none`}
        style={{
          backgroundImage: invitationConfig.decorations.saveDate.dotPattern.image,
          backgroundSize: invitationConfig.decorations.saveDate.dotPattern.size,
        }}
      />

      {/* Frame */}
      <div
        className="absolute top-[22px] bottom-[22px] left-[22px] right-[22px] rounded-2xl pointer-events-none z-[1]"
        style={{ border: invitationConfig.decorations.saveDate.frame.outerBorder }}
      >
        <span
          className="absolute inset-2 rounded-xl"
          style={{ border: invitationConfig.decorations.saveDate.frame.innerBorder }}
        />
      </div>

      {/* Content */}
      <div className="text-center w-full max-w-[580px] relative z-[2] mx-auto">
        <h2 className="font-display text-5xl md:text-6xl leading-tight mb-1 font-bold" style={{ color: "var(--charcoal)", fontWeight: "800", letterSpacing: "-0.5px" }}>
          Save the Date
        </h2>
        <p className="font-sans-alt text-[0.52rem] tracking-[3px] uppercase mb-2 font-semibold" style={{ color: "var(--gold-accent)", opacity: "0.95" }}>
          Scratch each seal to reveal
        </p>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-2 mb-7 opacity-35">
          <div className="w-[45px] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, var(--gold-accent))" }} />
          <div className="w-[5px] h-[5px] rotate-45 rounded-sm" style={{ background: "var(--gold-accent)" }} />
          <div className="w-[45px] h-[1px]" style={{ background: "linear-gradient(90deg, var(--gold-accent), transparent)" }} />
        </div>

        {/* Instructions */}
        {!allRevealed && (
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(232,160,184,.06)", border: "1px solid rgba(232,160,184,.12)" }}
          >
            <span className="inline-flex animate-wiggle">
              <PointingFingerIcon className="w-5 h-5" aria={{ label: "Tap here" }} />
            </span>
            <span className="text-[0.48rem] tracking-[2px] uppercase font-semibold" style={{ color: "var(--charcoal)", opacity: "0.85" }}>
              {remainingCount === 3
                ? "Scratch all 3 seals!"
                : `${remainingCount} seal${remainingCount > 1 ? "s" : ""} left!`}
            </span>
            <span className="inline-flex">
              <SparkleIcon className="w-4 h-4" aria={{ label: "Sparkle" }} />
            </span>
          </div>
        )}

        {/* Scratch cards */}
        <div
          className={`flex justify-center items-start gap-4 flex-wrap mx-auto mb-6 max-w-[420px] transition-all duration-700 ${
            allRevealed ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
          }`}
          style={{
            transform: allRevealed ? "translateY(-20px)" : "translateY(0)",
            transitionProperty: "opacity, transform",
          }}
        >
          <div id="scratch-day">
            <ScratchCard
              id="day"
              value="20"
              label="Day"
              onReveal={() => handleReveal("day")}
              isRevealed={revealed.day}
            />
          </div>
          <div id="scratch-month">
            <ScratchCard
              id="month"
              value="July"
              label="Month"
              onReveal={() => handleReveal("month")}
              isRevealed={revealed.month}
            />
          </div>
          <div id="scratch-year">
            <ScratchCard
              id="year"
              value="2026"
              label="Year"
              onReveal={() => handleReveal("year")}
              isRevealed={revealed.year}
            />
          </div>
        </div>

        {/* Revealed date display - single authoritative date */}
        {showFullDate && (
          <div
            className="mx-auto my-6 text-center animate-reveal-scale transition-all duration-700"
            style={{
              transform: allRevealed ? "translateY(0)" : "translateY(30px)",
              opacity: allRevealed ? 1 : 0,
            }}
          >
            <div className="flex items-center justify-center gap-1.5 mb-3 opacity-30">
              <div className="w-[45px] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, var(--gold-accent))" }} />
              <div className="w-1 h-1 rotate-45 rounded-sm" style={{ background: "var(--gold-accent)" }} />
              <div className="w-[45px] h-[1px]" style={{ background: "linear-gradient(90deg, var(--gold-accent), transparent)" }} />
            </div>
            <p className="font-display text-5xl md:text-6xl mb-2 font-bold" style={{ color: "var(--green-accent)", fontWeight: "800", letterSpacing: "-0.5px" }}>
              {weddingConfig.dateDisplayFull}
            </p>
            <div className="flex items-center justify-center gap-1.5 opacity-30">
              <div className="w-[45px] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, var(--gold-accent))" }} />
              <div className="w-1 h-1 rotate-45 rounded-sm" style={{ background: "var(--gold-accent)" }} />
              <div className="w-[45px] h-[1px]" style={{ background: "linear-gradient(90deg, var(--gold-accent), transparent)" }} />
            </div>
          </div>
        )}

        {/* Countdown */}
        {showCountdown && (
          <div className="mt-8 transition-all duration-700 animate-reveal-scale">
            <Countdown targetDate={weddingConfig.date} />
          </div>
        )}

        {/* Reset button */}
        {allRevealed && (
          <button
            onClick={resetAll}
            className="mt-6 px-5 py-1.5 rounded-full font-sans-alt text-[0.42rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 opacity-75 hover:opacity-100 inline-flex items-center gap-1.5 animate-reveal-scale font-semibold"
            style={{ background: "transparent", border: "1.5px solid rgba(201,169,110,.35)", color: "var(--gold-accent)" }}
          >
            <RefreshIcon className="w-4 h-4" aria={{ label: "Refresh" }} />
            Reveal Again
          </button>
        )}
      </div>
    </section>
  );
}
