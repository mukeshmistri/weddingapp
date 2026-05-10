"use client";

import { useRef, useEffect, useCallback, useState } from "react";

interface ScratchCardProps {
  id: string;
  value: string;
  label: string;
  onReveal: () => void;
  isRevealed: boolean;
}

const BRUSH_SIZE = 26;
const THRESHOLD = 0.36;

export function ScratchCard({ id, value, label, onReveal, isRevealed }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [progress, setProgress] = useState(0);

  const getColors = (cardId: string) => {
    const colorMap: Record<string, [string, string]> = {
      day: ["#E8A0B8", "#C9A96E"],
      month: ["#D4A0C0", "#D4AF37"],
      year: ["#E0A8B0", "#C9A96E"],
    };
    return colorMap[cardId] || colorMap.day;
  };

  const lighten = (hex: string, amount: number) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const r = Math.min(255, (num >> 16) + amount);
    const g = Math.min(255, ((num >> 8) & 255) + amount);
    const b = Math.min(255, (num & 255) + amount);
    return `rgb(${r},${g},${b})`;
  };

  const drawHeartPath = (ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number) => {
    ctx.moveTo(cx, cy + s * 0.56);
    ctx.bezierCurveTo(cx - s * 0.02, cy + s * 0.46, cx - s * 0.78, cy + s * 0.14, cx - s * 0.78, cy - s * 0.1);
    ctx.bezierCurveTo(cx - s * 0.78, cy - s * 0.46, cx - s * 0.28, cy - s * 0.6, cx, cy - s * 0.26);
    ctx.bezierCurveTo(cx + s * 0.28, cy - s * 0.6, cx + s * 0.78, cy - s * 0.46, cx + s * 0.78, cy - s * 0.1);
    ctx.bezierCurveTo(cx + s * 0.78, cy + s * 0.14, cx + s * 0.02, cy + s * 0.46, cx, cy + s * 0.56);
    ctx.closePath();
  };

  const paintHeart = useCallback((ctx: CanvasRenderingContext2D, W: number, H: number) => {
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.beginPath();
    drawHeartPath(ctx, W / 2, H / 2 + 3, W * 0.42);
    ctx.clip();

    const [c1, c2] = getColors(id);
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, c1);
    g.addColorStop(0.3, lighten(c1, 18));
    g.addColorStop(0.5, c2);
    g.addColorStop(0.75, lighten(c1, 10));
    g.addColorStop(1, c2);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    const sh = ctx.createLinearGradient(0, 0, W, H);
    sh.addColorStop(0, "rgba(255,255,255,0)");
    sh.addColorStop(0.35, "rgba(255,255,255,.28)");
    sh.addColorStop(0.5, "rgba(255,255,255,.4)");
    sh.addColorStop(0.65, "rgba(255,255,255,.15)");
    sh.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = sh;
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = "rgba(255,255,255,.88)";
    ctx.shadowColor = "rgba(0,0,0,.2)";
    ctx.shadowBlur = 3;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `600 ${W * 0.09}px Montserrat, sans-serif`;
    ctx.fillText("SCRATCH", W / 2, H / 2 - 1);
    ctx.shadowBlur = 0;

    const emojis: Record<string, string> = { day: "💍", month: "🌹", year: "✨" };
    ctx.font = `${W * 0.05}px serif`;
    ctx.globalAlpha = 0.35;
    ctx.fillText(emojis[id] || "💍", W / 2, H / 2 + 11);
    ctx.globalAlpha = 1;
    ctx.restore();
  }, [id]);

  const checkReveal = useCallback((ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const imageData = ctx.getImageData(0, 0, W, H).data;
    let cleared = 0;
    for (let i = 3; i < imageData.length; i += 4) {
      if (imageData[i] < 128) cleared++;
    }
    const percentage = cleared / (imageData.length / 4);
    setProgress(Math.round((percentage / THRESHOLD) * 100));

    if (percentage >= THRESHOLD && !isRevealed) {
      // Sweep animation
      let r = 0;
      const maxRadius = Math.sqrt(W * W + H * H) / 2 + 8;
      const sweep = () => {
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
        r += maxRadius * 0.05;
        if (r < maxRadius) {
          requestAnimationFrame(sweep);
        } else {
          ctx.clearRect(0, 0, W, H);
        }
      };
      sweep();
      onReveal();
    }
  }, [isRevealed, onReveal]);

  const scratch = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, BRUSH_SIZE, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    // Create sparkle
    if (Math.random() > 0.55) {
      createSparkle(clientX, clientY);
    }

    checkReveal(ctx, canvas.width, canvas.height);
  }, [isRevealed, checkReveal]);

  const createSparkle = (x: number, y: number) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle animate-sparkle-pop";
    sparkle.textContent = ["✨", "⭐", "💫"][Math.floor(Math.random() * 3)];
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 550);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    paintHeart(ctx, canvas.width, canvas.height);
  }, [paintHeart, isRevealed]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas || isRevealed) return;

      const ctx = canvas.getContext("2d");
      const parent = canvas.parentElement;
      if (!ctx || !parent) return;

      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      paintHeart(ctx, canvas.width, canvas.height);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [paintHeart, isRevealed]);

  return (
    <div className="flex flex-col items-center gap-1.5 flex-1 min-w-[95px] max-w-[135px]">
      <div
        className={`relative w-[125px] h-[115px] rounded-lg transition-transform duration-300 ${
          isRevealed ? "cursor-default" : "cursor-crosshair hover:-translate-y-0.5"
        }`}
      >
        {/* Glow effect */}
        <span
          className="absolute top-1/2 left-1/2 w-[100px] h-[90px] rounded-full pointer-events-none animate-heart-glow"
          style={{ background: "radial-gradient(ellipse, rgba(232,160,184,.1), transparent 70%)" }}
        />

        {/* Revealed content */}
        <div
          className="absolute inset-0 z-[1] flex items-center justify-center heart-path"
          style={{ background: "linear-gradient(135deg, rgba(255,245,240,.96), rgba(250,232,224,.96))" }}
        >
          <span
            className={`font-heading text-4xl font-bold leading-none transition-all duration-800 ${
              isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-60"
            }`}
            style={{ color: "var(--td)" }}
          >
            {value}
          </span>
        </div>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 z-[2] w-full h-full touch-none ${isRevealed ? "pointer-events-none" : ""}`}
          onMouseDown={(e) => {
            if (isRevealed) return;
            setIsDrawing(true);
            scratch(e.clientX, e.clientY);
          }}
          onMouseMove={(e) => {
            if (!isDrawing || isRevealed) return;
            scratch(e.clientX, e.clientY);
          }}
          onMouseUp={() => setIsDrawing(false)}
          onMouseLeave={() => setIsDrawing(false)}
          onTouchStart={(e) => {
            e.preventDefault();
            if (isRevealed) return;
            setIsDrawing(true);
            scratch(e.touches[0].clientX, e.touches[0].clientY);
          }}
          onTouchMove={(e) => {
            e.preventDefault();
            if (!isDrawing || isRevealed) return;
            scratch(e.touches[0].clientX, e.touches[0].clientY);
          }}
          onTouchEnd={() => setIsDrawing(false)}
        />

        {/* Progress indicator */}
        <span
          className={`absolute bottom-2 left-1/2 -translate-x-1/2 z-[3] font-sans-alt text-[0.35rem] tracking-wide whitespace-nowrap pointer-events-none transition-opacity duration-400 ${
            isRevealed ? "opacity-0" : ""
          }`}
          style={{ color: "rgba(139,115,64,.4)" }}
        >
          {progress > 0 ? `${Math.min(progress, 100)}%` : "👆"}
        </span>

        {/* Badge */}
        <span
          className={`absolute -top-px right-px z-[3] font-sans-alt text-[0.3rem] tracking-wide px-1.5 py-0.5 rounded-lg pointer-events-none transition-all duration-400 ${
            isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          style={{ background: "var(--gold)", color: "var(--w)" }}
        >
          ✓
        </span>
      </div>

      {/* Label */}
      <span className="font-sans-alt text-[0.48rem] tracking-[3px] uppercase opacity-45" style={{ color: "var(--gold)" }}>
        {label}
      </span>
    </div>
  );
}
