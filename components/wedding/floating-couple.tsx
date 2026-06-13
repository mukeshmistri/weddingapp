"use client";

interface FloatingCoupleProps {
  isVisible: boolean;
}

export function FloatingCouple({ isVisible }: FloatingCoupleProps) {
  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-[1100] pointer-events-none transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Scroll up cue */}
      <div
        className="absolute left-2 bottom-0 flex flex-col items-center gap-1.5 px-2.5 py-2 rounded-xl opacity-95"
        style={{
          background: "rgba(255, 248, 236, 0.92)",
          border: "1px solid rgba(201,169,110,0.48)",
          boxShadow: "0 6px 16px rgba(107,45,60,0.2)",
        }}
      >
        <span className="text-2xl animate-bounce-subtle" style={{ color: "#6B2D3C", lineHeight: 1 }}>
          ↑
        </span>
        <span
          className="font-sans-alt text-[0.52rem] uppercase"
          style={{
            color: "#6B2D3C",
            fontWeight: 700,
            letterSpacing: "1.7px",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Scroll Up
        </span>
      </div>

      {/* Scroll down cue */}
      <div
        className="absolute right-2 bottom-0 flex flex-col items-center gap-1.5 px-2.5 py-2 rounded-xl opacity-95"
        style={{
          background: "rgba(255, 248, 236, 0.92)",
          border: "1px solid rgba(201,169,110,0.48)",
          boxShadow: "0 6px 16px rgba(107,45,60,0.2)",
        }}
      >
        <span className="text-2xl animate-bounce-subtle" style={{ color: "#6B2D3C", lineHeight: 1 }}>
          ↓
        </span>
        <span
          className="font-sans-alt text-[0.52rem] uppercase"
          style={{
            color: "#6B2D3C",
            fontWeight: 700,
            letterSpacing: "1.7px",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Scroll Down
        </span>
      </div>
    </div>
  );
}
