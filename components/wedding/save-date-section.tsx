"use client";

import { useState, useCallback, useEffect } from "react";
import { weddingConfig } from "@/lib/wedding-config";
import { ScratchCard } from "./scratch-card";
import { Countdown } from "./countdown";
import { LocationPinIcon, PointingFingerIcon, SparkleIcon, RefreshIcon } from "./wedding-icons";

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
    
    // Create burst effect
    const cardEl = document.getElementById(`scratch-${card}`);
    if (cardEl) {
      const rect = cardEl.getBoundingClientRect();
      burst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  }, []);

  useEffect(() => {
    if (allRevealed) {
      setTimeout(() => {
        setShowFullDate(true);
        setShowCountdown(true);
        onAllRevealed();
        createConfetti();
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
      style={{ background: "linear-gradient(180deg, #FFF5F0 0%, #FAE8E0 30%, #FFF0EC 60%, #FFF5F0 100%)" }}
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--gold) .6px, transparent .6px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Frame */}
      <div
        className="absolute top-[22px] bottom-[22px] left-[22px] right-[22px] rounded-2xl pointer-events-none z-[1]"
        style={{ border: "1.5px solid rgba(232,160,184,.15)" }}
      >
        <span
          className="absolute inset-2 rounded-xl"
          style={{ border: "1px solid rgba(201,169,110,.08)" }}
        />
      </div>

      {/* Content */}
      <div className="text-center w-full max-w-[580px] relative z-[2] mx-auto">
        <h2 className="font-display text-5xl md:text-6xl leading-tight mb-1" style={{ color: "var(--td)" }}>
          Save the Date
        </h2>
        <p className="font-sans-alt text-[0.52rem] tracking-[3px] uppercase mb-1 opacity-65" style={{ color: "var(--gold)" }}>
          Scratch each heart to reveal
        </p>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-2 mb-4 opacity-35">
          <div className="w-[45px] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, var(--gold))" }} />
          <div className="w-[5px] h-[5px] rotate-45 rounded-sm" style={{ background: "var(--gold)" }} />
          <div className="w-[45px] h-[1px]" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
        </div>

        {/* Hidden date */}
        <p className="font-accent text-sm tracking-[2px] mb-4.5" style={{ color: "var(--gd)" }}>
          ✦{" "}
          <span className={`date-blur ${allRevealed ? "revealed" : ""}`} style={{ color: "var(--gd)" }}>
            {weddingConfig.dateDisplayFull}
          </span>{" "}
          ✦
        </p>

        {/* Instructions */}
        {!allRevealed && (
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-5"
            style={{ background: "rgba(232,160,184,.06)", border: "1px solid rgba(232,160,184,.12)" }}
          >
            <span className="inline-flex animate-wiggle">
              <PointingFingerIcon className="w-5 h-5" aria={{ label: "Tap here" }} />
            </span>
            <span className="text-[0.48rem] tracking-[2px] uppercase opacity-65" style={{ color: "var(--gd)" }}>
              {remainingCount === 3
                ? "Scratch all 3 hearts!"
                : `${remainingCount} heart${remainingCount > 1 ? "s" : ""} left!`}
            </span>
            <span className="inline-flex">
              <SparkleIcon className="w-4 h-4" aria={{ label: "Sparkle" }} />
            </span>
          </div>
        )}

        {/* Scratch cards */}
        <div className="flex justify-center items-start gap-4 flex-wrap mx-auto mb-5 max-w-[420px]">
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

        {/* Revealed date display */}
        {showFullDate && (
          <div className="mx-auto my-3 text-center animate-reveal-scale">
            <div className="flex items-center justify-center gap-1.5 mb-1 opacity-30">
              <div className="w-[30px] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, var(--gold))" }} />
              <div className="w-1 h-1 rotate-45 rounded-sm" style={{ background: "var(--gold)" }} />
              <div className="w-[30px] h-[1px]" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
            </div>
            <p className="font-display text-3xl mb-0.5" style={{ color: "var(--td)" }}>
              {weddingConfig.dateDisplayFull}
            </p>
            <p className="font-body text-[0.72rem] italic flex items-center justify-center gap-1" style={{ color: "var(--tl)" }}>
              <LocationPinIcon className="w-4 h-4" aria={{ label: "Location" }} />
              {weddingConfig.venue.fullAddress}
            </p>
            <div className="flex items-center justify-center gap-1.5 mt-1 opacity-30">
              <div className="w-[30px] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, var(--gold))" }} />
              <div className="w-1 h-1 rotate-45 rounded-sm" style={{ background: "var(--gold)" }} />
              <div className="w-[30px] h-[1px]" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
            </div>
          </div>
        )}

        {/* Countdown */}
        {showCountdown && <Countdown targetDate={weddingConfig.date} />}

        {/* Reset button */}
        {allRevealed && (
          <button
            onClick={resetAll}
            className="mt-3 px-5 py-1.5 rounded-full font-sans-alt text-[0.42rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 opacity-50 hover:opacity-100 inline-flex items-center gap-1.5"
            style={{ background: "transparent", border: "1px solid rgba(201,169,110,.18)", color: "var(--gd)" }}
          >
            <RefreshIcon className="w-4 h-4" aria={{ label: "Refresh" }} />
            Reveal Again
          </button>
        )}
      </div>
    </section>
  );
}

// Helper functions
function burst(cx: number, cy: number) {
  const colors = ["#C9A96E", "#FFD700", "#FF8888", "#E8A0B8", "#DDA0DD"];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    const angle = (Math.PI * 2 / 18) * i;
    const distance = 35 + Math.random() * 50;
    p.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      left: ${cx}px;
      top: ${cy}px;
      width: ${3 + Math.random() * 3}px;
      height: ${3 + Math.random() * 3}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? "50%" : "1px"};
    `;
    document.body.appendChild(p);

    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    let t = 0;

    const animate = () => {
      t += 0.03;
      if (t > 1) {
        p.remove();
        return;
      }
      p.style.transform = `translate(${tx * t}px, ${ty * t + 90 * t * t}px) scale(${1 - t * 0.6})`;
      p.style.opacity = String(1 - t);
      requestAnimationFrame(animate);
    };
    animate();
  }
}

function createConfetti() {
  const colors = ["#C9A96E", "#F2D7D5", "#E8A0B8", "#E8D5A8", "#FFD700"];
  for (let i = 0; i < 35; i++) {
    const c = document.createElement("div");
    c.style.cssText = `
      position: fixed;
      top: -8px;
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 5 + 2}px;
      height: ${Math.random() * 5 + 2}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
      z-index: 9999;
      pointer-events: none;
      animation: confetti-fall ${Math.random() * 2 + 1.5}s ease forwards;
      animation-delay: ${Math.random() * 0.3}s;
    `;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}
