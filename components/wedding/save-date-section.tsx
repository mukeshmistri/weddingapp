"use client";

import { useState, useCallback, useEffect } from "react";
import { weddingConfig } from "@/lib/wedding-config";
import { ScratchCard } from "./scratch-card";
import { Countdown } from "./countdown";
import { RefreshIcon } from "./wedding-icons";

interface SaveDateSectionProps {
  onAllRevealed: () => void;
}

// Adjust this to move content up/down on the page.
// 0% = top, 50% = center, lower % = higher on page.
const CONTENT_TOP = "40%";

export function SaveDateSection({ onAllRevealed }: SaveDateSectionProps) {
  const weddingDate = weddingConfig.date;
  const customBackgroundImage = weddingConfig.images.saveDateBackground;
  const [revealed, setRevealed] = useState({
    day: false,
    month: false,
    year: false,
  });
  const [showCountdown, setShowCountdown] = useState(false);
  const [showFullDate, setShowFullDate] = useState(false);

  const allRevealed = revealed.day && revealed.month && revealed.year;
  const remainingCount = [revealed.day, revealed.month, revealed.year].filter((r) => !r).length;

  const dayValue = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(weddingDate);
  const monthValue = new Intl.DateTimeFormat("en-US", { month: "long" }).format(weddingDate);
  const yearValue = String(weddingDate.getFullYear());

  const dayNumber = weddingDate.getDate();
  const dayMod10 = dayNumber % 10;
  const dayMod100 = dayNumber % 100;
  const ordinal =
    dayMod10 === 1 && dayMod100 !== 11
      ? "st"
      : dayMod10 === 2 && dayMod100 !== 12
        ? "nd"
        : dayMod10 === 3 && dayMod100 !== 13
          ? "rd"
          : "th";

  const dynamicDateDisplayFull = `${dayNumber}${ordinal} ${monthValue}, ${yearValue}`;

  const millisUntilWedding = weddingDate.getTime() - Date.now();
  const daysUntilWedding = Math.max(0, Math.ceil(millisUntilWedding / (1000 * 60 * 60 * 24)));
  const contextualMessage = allRevealed
    ? daysUntilWedding === 0
      ? "Today is the day. See you at the celebration."
      : `${daysUntilWedding} day${daysUntilWedding === 1 ? "" : "s"} to go for our royal celebration.`
    : "Reveal all three seals to unlock the wedding date.";

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
      className="relative overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Layer 1 – background */}
      <div className="absolute inset-0 z-[0] pointer-events-none">
        {customBackgroundImage ? (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${customBackgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, #F7F1E8 0%, #F3EEE7 45%, #F8F0E8 100%)" }}
          />
        )}
      </div>

      {/* Layer 2 – content */}
      <div
        className="absolute z-[2] text-center"
        style={{
          top: CONTENT_TOP,
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "520px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: allRevealed ? "12px" : "20px",
          padding: "20px",
          paddingBottom: "120px",
        }}
      >
        <h2
          className="font-display leading-tight font-bold"
          style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", color: "#2B2116", letterSpacing: "-0.5px" }}
        >
          Save the Date
        </h2>

        <p
          className="font-sans-alt uppercase font-semibold"
          style={{
            fontSize: allRevealed ? "0.52rem" : "0.9rem",
            letterSpacing: allRevealed ? "1px" : "3px",
            color: allRevealed ? "#6B5B4A" : "#B8965A",
          }}
        >
          {allRevealed ? contextualMessage : "Scratch each seal to reveal"}
        </p>

        {allRevealed ? (
          <>
            <p
              className="font-display font-bold"
              style={{
                fontSize: "clamp(2.4rem, 10vw, 3.5rem)",
                color: "#3F6F5A",
                fontWeight: "600",
                letterSpacing: "-0.5px",
                opacity: showFullDate ? 1 : 0,
                transition: "opacity 0.5s",
              }}
            >
              {dynamicDateDisplayFull}
            </p>

            <div
              style={{
                width: "100%",
                opacity: showCountdown ? 1 : 0,
                transition: "opacity 0.5s",
              }}
            >
              <Countdown targetDate={weddingDate} />
            </div>

            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 rounded-full font-sans-alt uppercase font-semibold cursor-pointer transition-opacity duration-300 opacity-70 hover:opacity-100"
              style={{
                fontSize: "0.42rem",
                letterSpacing: "2px",
                padding: "6px 16px",
                background: "transparent",
                border: "1.5px solid rgba(184,150,90,.5)",
                color: "#B8965A",
              }}
            >
              <RefreshIcon className="w-4 h-4" aria={{ label: "Refresh" }} />
              Reveal Again
            </button>
          </>
        ) : (
          <>
            <p
              className="font-sans-alt uppercase font-semibold"
              style={{ fontSize: "0.95rem", letterSpacing: "2px", color: "#6B5B4A" }}
            >
              {remainingCount === 3
                ? "Scratch all 3 seals!"
                : `${remainingCount} seal${remainingCount > 1 ? "s" : ""} left`}
            </p>

            <div className="flex justify-center items-start flex-wrap" style={{ gap: "24px", maxWidth: "420px" }}>
              <ScratchCard
                id="day"
                value={dayValue}
                label="Day"
                onReveal={() => handleReveal("day")}
                isRevealed={revealed.day}
              />
              <ScratchCard
                id="month"
                value={monthValue}
                label="Month"
                onReveal={() => handleReveal("month")}
                isRevealed={revealed.month}
              />
              <ScratchCard
                id="year"
                value={yearValue}
                label="Year"
                onReveal={() => handleReveal("year")}
                isRevealed={revealed.year}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
