"use client";

import { weddingConfig } from "@/lib/wedding-config";
import { LotusIcon, FoliageIcon, HeartIcon, ShareIcon } from "./wedding-icons";

export function Footer() {
  const { bride, groom, hashtag } = weddingConfig.couple;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${bride} & ${groom} Wedding`,
          text: "You are invited! 💒",
          url: window.location.href,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("✨ Link copied!");
      } catch {
        // Clipboard failed
      }
    }
  };

  return (
    <footer
      className="py-12 px-3 pb-[118px] text-center"
      style={{ background: "linear-gradient(180deg, var(--ivory), var(--peach))" }}
    >
      <div className="text-2xl tracking-[8px] opacity-20 mb-4">
        🪷 🌿 🪷 🌿 🪷
      </div>

      <h2 className="font-display text-5xl mb-2" style={{ color: "var(--td)" }}>
        {bride} & {groom}
      </h2>

      <p className="font-sans-alt text-sm tracking-[2px] mb-4" style={{ color: "var(--gold)" }}>
        {hashtag}
      </p>

      <p className="font-body text-base italic max-w-[380px] mx-auto mb-4 leading-relaxed" style={{ color: "var(--tm)" }}>
        &ldquo;In all the world, there is no heart for me like yours.&rdquo;
      </p>

      <button
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full font-sans-alt text-[0.55rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 mb-4"
        style={{
          background: "transparent",
          border: "1px solid var(--gold)",
          color: "var(--gd)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--gold)";
          e.currentTarget.style.color = "var(--w)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--gd)";
        }}
      >
        <ShareIcon className="w-4 h-4" aria={{ label: "Share icon" }} />
        Share Invitation
      </button>

      <div className="flex justify-center gap-3 tracking-[8px] opacity-20 mb-4">
        <LotusIcon className="w-5 h-5" aria={{ hidden: true }} />
        <FoliageIcon className="w-5 h-5" aria={{ hidden: true }} />
        <LotusIcon className="w-5 h-5" aria={{ hidden: true }} />
        <FoliageIcon className="w-5 h-5" aria={{ hidden: true }} />
        <LotusIcon className="w-5 h-5" aria={{ hidden: true }} />
      </div>

      <p className="font-sans-alt text-[0.42rem] tracking-[2px] uppercase mt-3.5 flex items-center justify-center gap-1.5" style={{ color: "var(--tl)" }}>
        Made with <HeartIcon className="w-3 h-3" aria={{ hidden: true }} /> for {bride} & {groom}
      </p>
    </footer>
  );
}
