"use client";

import { useEffect, useState } from "react";
import { NamasteIcon } from "./wedding-icons";
import { invitationConfig } from "@/lib/invitation.config";
import { useResolvedArt } from "@/lib/custom-art";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isGone, setIsGone] = useState(false);
  const { src: preloaderIconSrc, onError: onPreloaderIconError, entry: preloaderIconEntry } = useResolvedArt("preloaderIcon");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGone(true);
      setTimeout(onComplete, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center transition-all duration-1000
        ${isGone ? "opacity-0 invisible" : "opacity-100 visible"}`}
      style={{
        background: invitationConfig.preloader.colors.background,
      }}
    >
      <div className="text-center relative z-10">
        {/* Spinner */}
        <div className={`${invitationConfig.preloader.loader.size} mx-auto ${invitationConfig.preloader.loader.marginBottom} relative`}>
          <div className="ring animate-spin-cw" />
          <div className="ring animate-spin-ccw" />
          <div className="ring animate-spin-cw" style={{ animationDuration: invitationConfig.preloader.loader.ringAnimationDurations.thirdRing }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow">
            {preloaderIconSrc ? (
              <img
                src={preloaderIconSrc}
                alt="Namaste"
                className={preloaderIconEntry.size?.className ?? invitationConfig.preloader.loader.namasteIconSize}
                onError={onPreloaderIconError}
              />
            ) : (
              <NamasteIcon className={invitationConfig.preloader.loader.namasteIconSize} aria={{ label: "Namaste" }} />
            )}
          </div>
        </div>

        {/* Text */}
        <p
          className="font-display animate-fade-up"
          style={{
            fontSize: invitationConfig.preloader.textStyles.headlineSize,
            opacity: invitationConfig.preloader.textStyles.initialOpacity,
            color: invitationConfig.preloader.colors.headline,
            textShadow: invitationConfig.preloader.headline.textShadow,
            animationDelay: "0.4s",
            animationFillMode: "forwards",
          }}
        >
          {invitationConfig.preloader.text.headline}
        </p>
        <p
          className="font-sans-alt animate-fade-up"
          style={{
            fontSize: invitationConfig.preloader.textStyles.sublineSize,
            letterSpacing: invitationConfig.preloader.textStyles.sublineLetterSpacing,
            textTransform: "uppercase",
            marginTop: invitationConfig.preloader.textStyles.sublineMarginTop,
            opacity: invitationConfig.preloader.textStyles.initialOpacity,
            color: invitationConfig.preloader.colors.subline,
            animationDelay: "0.7s",
            animationFillMode: "forwards",
          }}
        >
          {invitationConfig.preloader.text.subline}
        </p>
      </div>
    </div>
  );
}
