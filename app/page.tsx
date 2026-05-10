"use client";

import { useState, useCallback } from "react";
import { Preloader } from "@/components/wedding/preloader";
import { Envelope } from "@/components/wedding/envelope";
import { Swagatam } from "@/components/wedding/swagatam";
import { Curtain } from "@/components/wedding/curtain";
import { MusicButton } from "@/components/wedding/music-button";
import { NavDots } from "@/components/wedding/nav-dots";
import { FloatingCouple } from "@/components/wedding/floating-couple";
import { RosePetals } from "@/components/wedding/rose-petals";
import { HeroSection } from "@/components/wedding/hero-section";
import { SaveDateSection } from "@/components/wedding/save-date-section";
import { EventsSection } from "@/components/wedding/events-section";

import { RSVPSection } from "@/components/wedding/rsvp-section";
import { Footer } from "@/components/wedding/footer";

type AppStage = "preloader" | "envelope" | "swagatam" | "curtain" | "main";

export default function WeddingInvitation() {
  const [stage, setStage] = useState<AppStage>("preloader");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isDateRevealed, setIsDateRevealed] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  // Stage transitions
  const handlePreloaderComplete = useCallback(() => {
    setStage("envelope");
  }, []);

  const handleEnvelopeComplete = useCallback(() => {
    setStage("swagatam");
  }, []);

  const handlePlayMusic = useCallback(() => {
    setIsMusicPlaying(true);
  }, []);

  const handleEnterCelebration = useCallback(() => {
    setStage("curtain");
  }, []);

  const handleCurtainComplete = useCallback(() => {
    setStage("main");
    setShowMainContent(true);
  }, []);

  const handleToggleMusic = useCallback(() => {
    setIsMusicPlaying((prev) => !prev);
  }, []);

  const handleDateRevealed = useCallback(() => {
    setIsDateRevealed(true);
  }, []);

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

      {/* Swagatam (Welcome) */}
      <Swagatam isVisible={stage === "swagatam"} onEnter={handleEnterCelebration} />

      {/* Curtain */}
      <Curtain isOpen={stage === "curtain" || stage === "main"} onComplete={handleCurtainComplete} />

      {/* Main content - always rendered but opacity controlled */}
      <div className={`transition-opacity duration-1000 ${showMainContent ? "opacity-100" : "opacity-0"}`}>
        {/* Rose petals */}
        <RosePetals isActive={showMainContent} />

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
        <RSVPSection />
        <Footer />
      </div>
    </main>
  );
}
