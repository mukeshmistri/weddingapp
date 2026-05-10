"use client";

import { useRef, useEffect, useCallback } from "react";
import { invitationConfig } from "@/lib/invitation.config";

interface MusicButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicButton({ isPlaying, onToggle }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(invitationConfig.music.source);
    audioRef.current.loop = invitationConfig.music.loop;
    
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
      className={`${invitationConfig.music.button.className} ${
        isPlaying ? "animate-music-pulse" : ""
      }`}
      style={{
        background: invitationConfig.music.button.background,
        border: invitationConfig.music.button.border,
      }}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? invitationConfig.emojis.music.playing : invitationConfig.emojis.music.paused}
    </button>
  );
}
