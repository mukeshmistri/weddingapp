"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { invitationConfig } from "@/lib/invitation.config";

interface ScratchCardProps {
  id: string;
  value: string;
  label: string;
  onReveal: () => void;
  isRevealed: boolean;
}

const BRUSH_SIZE = invitationConfig.scratch.brushSize;
const THRESHOLD = invitationConfig.scratch.threshold;

export function ScratchCard({ id, value, label, onReveal, isRevealed }: ScratchCardProps) {
  void id;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const paintSeal = useCallback((ctx: CanvasRenderingContext2D, W: number, H: number) => {
    ctx.clearRect(0, 0, W, H);
    ctx.save();

    const centerX = W / 2;
    const centerY = H / 2;
    const sealRadius = Math.min(W, H) * 0.38;

    // Draw circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, sealRadius, 0, Math.PI * 2);
    ctx.clip();

    // Neutral parchment fill only.
    ctx.fillStyle = invitationConfig.scratch.seal.fill;
    ctx.fillRect(0, 0, W, H);

    ctx.restore();
  }, []);

  const checkReveal = useCallback((ctx: CanvasRenderingContext2D, W: number, H: number) => {
    const imageData = ctx.getImageData(0, 0, W, H).data;
    let cleared = 0;
    for (let i = 3; i < imageData.length; i += 4) {
      if (imageData[i] < 128) cleared++;
    }
    const percentage = cleared / (imageData.length / 4);

    if (percentage >= THRESHOLD && !isRevealed) {
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

    checkReveal(ctx, canvas.width, canvas.height);
  }, [isRevealed, checkReveal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    paintSeal(ctx, canvas.width, canvas.height);
  }, [paintSeal, isRevealed]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas || isRevealed) return;

      const ctx = canvas.getContext("2d");
      const parent = canvas.parentElement;
      if (!ctx || !parent) return;

      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      paintSeal(ctx, canvas.width, canvas.height);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [paintSeal, isRevealed]);

  return (
    <div className={`flex flex-col items-center ${invitationConfig.scratch.seal.containerGapClass} flex-1 ${invitationConfig.scratch.seal.minWidthClass} ${invitationConfig.scratch.seal.maxWidthClass}`}>
      <div
        className={`relative ${invitationConfig.scratch.seal.sizeClass} rounded-full transition-transform duration-300 ${
          isRevealed ? "cursor-default" : "cursor-crosshair hover:-translate-y-0.5"
        }`}
        style={{
          background: invitationConfig.scratch.seal.fill,
          border: invitationConfig.scratch.seal.border,
        }}
      >
        <div
          className="absolute inset-0 z-[1] flex items-center justify-center rounded-full"
          style={{
            background: invitationConfig.scratch.seal.revealFill,
          }}
        >
          <span
            className={`font-heading text-2xl font-bold transition-all duration-800 ${
              isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ color: invitationConfig.scratch.seal.textColor }}
          >
            {value}
          </span>
        </div>

        <canvas
          ref={canvasRef}
          className={`absolute inset-0 z-[2] w-full h-full touch-none rounded-full ${
            isRevealed ? "pointer-events-none" : ""
          }`}
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

      </div>

      <p className="font-sans-alt text-[0.5rem] tracking-[1.5px] uppercase" style={{ color: "var(--charcoal-light)" }}>
        {label}
      </p>
    </div>
  );
}
