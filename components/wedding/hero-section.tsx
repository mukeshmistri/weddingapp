"use client";

import { useEffect, useState } from "react";
import { weddingConfig } from "@/lib/wedding-config";
import { LotusIcon, WeddingRingIcon } from "./wedding-icons";

interface HeroSectionProps {
  isDateRevealed: boolean;
}

export function HeroSection({ isDateRevealed }: HeroSectionProps) {
  const [parallaxY, setParallaxY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const { bride, groom } = weddingConfig.couple;

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
        backgroundColor: "var(--cream)",
        backgroundImage: `url('${weddingConfig.images.heroBackground}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(253,248,240,.3), rgba(253,248,240,.08))",
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
          <LotusIcon className="w-10 h-10" aria={{ label: "Sacred lotus" }} />
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
          className="font-display text-5xl md:text-6xl leading-tight mb-1 opacity-0 animate-fade-up"
          style={{ color: "#1A1510", textShadow: "0 1px 4px rgba(255,255,255,.3)", animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          {bride}
          <span className="block text-2xl md:text-3xl -my-1" style={{ color: "#6B4A2E" }}>&</span>
          {groom}
        </h1>

        {/* Divider */}
        <div
          className="w-[120px] h-[1.5px] mx-auto my-2.5 relative opacity-0 animate-fade-up"
          style={{
            background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
            animationDelay: "1s",
            animationFillMode: "forwards",
          }}
        >
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-1.5"
            style={{ background: "rgba(253,248,240,.4)" }}
          >
            <WeddingRingIcon className="w-4 h-4" aria={{ label: "Wedding ring" }} />
          </span>
        </div>

        {/* Date */}
        <p
          className="font-accent text-base font-semibold tracking-[2px] opacity-0 animate-fade-up"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          <span className={`date-blur ${isDateRevealed ? "revealed" : ""}`}>
            {weddingConfig.dateDisplay}
          </span>
        </p>

        {/* Venue */}
        <p
          className="font-body text-base italic mt-1 opacity-0 animate-fade-up"
          style={{ color: "#5A4A3A", animationDelay: "1.4s", animationFillMode: "forwards" }}
        >
          {weddingConfig.venue.fullAddress}
        </p>
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
