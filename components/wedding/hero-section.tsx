"use client";

import { useEffect, useState } from "react";
import { weddingConfig } from "@/lib/wedding-config";
import { invitationConfig } from "@/lib/invitation.config";
import { useResolvedArt } from "@/lib/custom-art";
import { LotusIcon } from "./wedding-icons";

interface HeroSectionProps {
  isDateRevealed: boolean;
}

export function HeroSection({ isDateRevealed }: HeroSectionProps) {
  void isDateRevealed;
  const [parallaxY, setParallaxY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const { bride, groom } = weddingConfig.couple;
  const { src: heroEmblemSrc, onError: onHeroEmblemError, entry: heroEmblemEntry } = useResolvedArt("heroEmblem");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxY(scrollY * 0.2);
      setOpacity(Math.max(0, 1 - scrollY / 550));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-2 pt-6 pb-[108px] relative overflow-hidden"
      style={{
        backgroundColor: invitationConfig.hero.background.color,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-[0]"
        style={{
          backgroundImage: `url('${weddingConfig.images.heroBackground}')`,
          backgroundSize: invitationConfig.hero.background.imageSize,
          backgroundPosition: invitationConfig.hero.background.imagePosition,
          filter: invitationConfig.hero.background.filter,
        }}
      />

      {/* Parchment wash */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: invitationConfig.hero.background.parchmentOverlay,
        }}
      />

      {/* Light vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: invitationConfig.hero.background.vignette,
        }}
      />

      {/* Content */}
      <div
        className="text-center relative z-[5]"
        style={{
          transform: `translateY(${parallaxY}px)`,
          opacity,
        }}
      >
        {/* Lotus flower */}
        <div className="flex justify-center mb-1.5 animate-bloom">
          {heroEmblemSrc ? (
            <img
              src={heroEmblemSrc}
              alt="Sacred lotus"
              className={heroEmblemEntry.size?.className ?? "w-10 h-10"}
              onError={onHeroEmblemError}
            />
          ) : (
            <LotusIcon className="w-10 h-10" aria={{ label: "Sacred lotus" }} />
          )}
        </div>

        {/* Subtitle */}
        <p
          className="font-sans-alt text-[0.7rem] font-medium tracking-[4px] uppercase mb-2.5 opacity-0 animate-fade-up"
          style={{ color: "#3D2E20", animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          The Wedding Of
        </p>

        {/* Names */}
        <h1
          className="font-display mb-1 opacity-0 animate-fade-up"
          style={{
            fontSize: invitationConfig.hero.names.fontSizeMobile,
            lineHeight: invitationConfig.hero.names.lineHeight,
            color: "#1A1510",
            textShadow: "0 1px 4px rgba(255,255,255,.3)",
            animationDelay: "0.8s",
            animationFillMode: "forwards",
            "--hero-name-desktop": invitationConfig.hero.names.fontSizeDesktop,
            "--hero-amp-desktop": invitationConfig.hero.names.ampersandFontSizeDesktop,
          } as React.CSSProperties}
        >
          {bride}
          <span
            className={`block ${invitationConfig.hero.names.ampersandMarginYClass}`}
            style={{
              fontSize: invitationConfig.hero.names.ampersandFontSizeMobile,
              color: "#6B4A2E",
              "--hero-amp-desktop": invitationConfig.hero.names.ampersandFontSizeDesktop,
            } as React.CSSProperties}
          >
            &
          </span>
          {groom}
        </h1>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-[78px] left-1/2 -translate-x-1/2 text-center opacity-0 animate-fade-up z-[5]"
        style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
      >
        <span className="block text-xl animate-bounce-arrow" style={{ color: "#6B4A2E" }}>↓</span>
        <span className="font-sans-alt text-[0.4rem] tracking-[2px] uppercase mt-0.5" style={{ color: "#7A6A5A" }}>
          Scroll
        </span>
      </div>
    </section>
  );
}
