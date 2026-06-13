"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { weddingConfig } from "@/lib/wedding-config";
import { invitationConfig } from "@/lib/invitation.config";

interface EnvelopeProps {
  isVisible: boolean;
  onComplete: () => void;
  onPlayMusic: () => void;
}

export function Envelope({ isVisible, onComplete, onPlayMusic }: EnvelopeProps) {
  const [isGone, setIsGone] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [heroSrc, setHeroSrc] = useState("https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/MDLogov6.png");
  const [petals, setPetals] = useState<Array<{ id: number; left: number; duration: number; delay: number; drift: string }>>([]);
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: number; top: number; duration: number; delay: number; size: number }>>([]);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (isVisible) {
      setIsEntering(true);

      const nextPetals = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 7 + Math.random() * 5,
        delay: Math.random() * 3,
        drift: `${(Math.random() * 80 - 40).toFixed(0)}px`,
      }));

      const nextSparkles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: 6 + Math.random() * 88,
        top: 8 + Math.random() * 76,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2.2,
        size: 2 + Math.random() * 3,
      }));

      setPetals(nextPetals);
      setSparkles(nextSparkles);

      const enterTimer = window.setTimeout(() => setIsEntering(false), 1600);
      return () => window.clearTimeout(enterTimer);
    }
  }, [isVisible]);

  const triggerRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ripple = {
      id: Date.now(),
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    setRipples((prev) => [...prev, ripple]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((item) => item.id !== ripple.id));
    }, 700);
  }, []);

  const handleEnter = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    triggerRipple(event);
    onPlayMusic();
    setIsGone(true);
    window.setTimeout(onComplete, 560);
  }, [onComplete, onPlayMusic, triggerRipple]);

  if (!isVisible && !isGone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9000] overflow-hidden transition-all duration-700
        ${isGone ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"}`}
    >
      <div className="invite-wrapper">
        <div className="ambient-background" />
        <div className="ambient-vignette" />
        <div className="ambient-rays" />

        <div className="invite-petals" aria-hidden="true">
          {petals.map((p) => (
            <span
              key={p.id}
              className="invite-petal"
              style={{
                left: `${p.left}%`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                ["--petal-drift" as string]: p.drift,
              }}
            />
          ))}
        </div>

        <div className="invite-sparkles" aria-hidden="true">
          {sparkles.map((s) => (
            <span
              key={s.id}
              className="invite-sparkle"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                animationDuration: `${s.duration}s`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}
        </div>

        <section className={`hero-section ${isEntering ? "hero-entering" : ""}`}>
          <div className="mandala-wrapper">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />

            <button type="button" className="hero-couple-hitbox" onClick={triggerRipple} aria-label="Couple illustration">
              <Image
                src={heroSrc}
                alt="Couple Illustration"
                width={300}
                height={300}
                className="hero-couple"
                onError={() => setHeroSrc(weddingConfig.images.couplePhoto)}
                priority
              />

              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="hero-ripple"
                  style={{ left: ripple.x, top: ripple.y }}
                />
              ))}
            </button>
          </div>

          <div className="hero-invite-copy">
            <p className="hero-invite-family">Our Families</p>
            <p className="hero-invite-statement">
              joyfully invite you to witness<br />a union written in the stars
            </p>
            <span className="hero-invite-ornament">— A Wedding Celebration —</span>
          </div>
        </section>

        <div className={`cta-section ${isEntering ? "cta-entering" : ""}`}>
          <p className="enter-click-here">Click Here</p>
          <div
            className="cta-shimmer"
            aria-hidden="true"
          />
          <button
            type="button"
            className="enter-btn"
            onClick={handleEnter}
            onMouseDown={triggerRipple}
          >
            Enter Celebration
          </button>
        </div>
      </div>
      <div className="invite-ripple-layer" aria-hidden="true">
        {ripples.map((ripple) => (
          <span
            key={`bg-${ripple.id}`}
            className="hero-ripple bg-ripple"
            style={{ left: `calc(50% + ${ripple.x - 150}px)`, top: `calc(50% + ${ripple.y - 150}px)` }}
          />
        ))}
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          isGone ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "radial-gradient(circle at center, rgba(248,241,229,0.2), rgba(234,219,200,0.78))" }}
      />

    </div>
  );
}
