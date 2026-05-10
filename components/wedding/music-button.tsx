"use client";

import { useRef, useEffect, useCallback } from "react";
import { weddingConfig } from "@/lib/wedding-config";

interface MusicButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicButton({ isPlaying, onToggle }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(weddingConfig.audio.bgMusic);
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleToggle = useCallback(() => {
    onToggle();
  }, [onToggle]);

  return (
    <button
      onClick={handleToggle}
      className={`fixed top-3 right-3 z-[2000] w-[38px] h-[38px] rounded-full flex items-center justify-center text-base cursor-pointer transition-all duration-300 backdrop-blur-md hover:scale-105 ${
        isPlaying ? "animate-music-pulse" : ""
      }`}
      style={{
        background: "rgba(255,255,255,.88)",
        border: "1.5px solid var(--gold)",
      }}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? "🔊" : "🎵"}
    </button>
  );
}
