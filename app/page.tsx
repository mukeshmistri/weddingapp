"use client";

import { useState, useCallback, useEffect } from "react";
import { Preloader } from "@/components/wedding/preloader";
import { Envelope } from "@/components/wedding/envelope";
import { Curtain } from "@/components/wedding/curtain";
import { MusicButton } from "@/components/wedding/music-button";
import { NavDots } from "@/components/wedding/nav-dots";
import { FloatingCouple } from "@/components/wedding/floating-couple";
import { RosePetals } from "@/components/wedding/rose-petals";
import { HeroSection } from "@/components/wedding/hero-section";
import { SaveDateSection } from "@/components/wedding/save-date-section";
import { EventsSection } from "@/components/wedding/events-section";
import { invitationConfig } from "@/lib/invitation.config";
import { Footer } from "@/components/wedding/footer";

type AppStage = "preloader" | "envelope" | "curtain" | "main";

export default function WeddingInvitation() {
  const [stage, setStage] = useState<AppStage>("preloader");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isDateRevealed, setIsDateRevealed] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [showScrollGuide, setShowScrollGuide] = useState(false);

  // Stage transitions
  const handlePreloaderComplete = useCallback(() => {
    setStage("envelope");
  }, []);

  const handleEnvelopeComplete = useCallback(() => {
    setStage("curtain");
  }, []);

  const handlePlayMusic = useCallback(() => {
    setIsMusicPlaying(true);
  }, []);

  const handleCurtainComplete = useCallback(() => {
    setStage("main");
    setShowMainContent(true);
    setShowScrollGuide(true);
  }, []);

  const handleToggleMusic = useCallback(() => {
    setIsMusicPlaying((prev) => !prev);
  }, []);

  const handleDateRevealed = useCallback(() => {
    setIsDateRevealed(true);
  }, []);

  useEffect(() => {
    if (!showMainContent || !showScrollGuide) {
      return;
    }

    const hideGuide = () => setShowScrollGuide(false);

    window.addEventListener("wheel", hideGuide, { passive: true });
    window.addEventListener("touchstart", hideGuide, { passive: true });
    window.addEventListener("keydown", hideGuide);
    window.addEventListener("scroll", hideGuide, { passive: true });
    window.addEventListener("pointerdown", hideGuide);

    return () => {
      window.removeEventListener("wheel", hideGuide);
      window.removeEventListener("touchstart", hideGuide);
      window.removeEventListener("keydown", hideGuide);
      window.removeEventListener("scroll", hideGuide);
      window.removeEventListener("pointerdown", hideGuide);
    };
  }, [showMainContent, showScrollGuide]);

  return (
    <main className="min-h-screen" style={{ background: "var(--ivory)" }}>
      {/* Preloader */}
      {stage === "preloader" && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Envelope */}
      <Envelope
        isVisible={stage === "envelope"}
        onComplete={handleEnvelopeComplete}
        onPlayMusic={handlePlayMusic}
      />

      {/* Curtain */}
      <Curtain isOpen={stage === "curtain" || stage === "main"} onComplete={handleCurtainComplete} />

      {/* Main content - always rendered but opacity controlled */}
      <div className={`transition-opacity duration-1000 ${showMainContent ? "opacity-100" : "opacity-0"}`}>
        {/* Rose petals */}
        <RosePetals isActive={showMainContent && invitationConfig.petals.enabled} />

        {/* Music button */}
        <MusicButton isPlaying={isMusicPlaying} onToggle={handleToggleMusic} />

        {/* Navigation dots */}
        <NavDots />

        {/* Floating couple characters */}
        <FloatingCouple isVisible={showMainContent} />

        {/* Sections */}
        <HeroSection isDateRevealed={isDateRevealed} />
        <SaveDateSection onAllRevealed={handleDateRevealed} />
        <EventsSection />
        <Footer />
      </div>

      {showMainContent && showScrollGuide && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[1001] pointer-events-none">
          <div
            className="px-4 py-2.5 rounded-full border shadow-lg animate-pulse-soft"
            style={{
              background: "rgba(255, 248, 236, 0.92)",
              borderColor: "rgba(201,169,110,0.45)",
              boxShadow: "0 8px 22px rgba(107,45,60,0.22)",
            }}
          >
            <p className="font-sans-alt text-[0.58rem] tracking-[2px] uppercase flex items-center gap-2" style={{ color: "#6B2D3C", fontWeight: 700 }}>
              <span className="animate-bounce-subtle">⬇</span>
              Scroll Down / Swipe Up
              <span className="animate-bounce-subtle">⬇</span>
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
