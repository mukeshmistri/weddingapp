"use client";

import { useEffect, useState, useCallback } from "react";

interface Petal {
  id: number;
  left: number;
  color: string;
  width: number;
  height: number;
  rotation: number;
  duration: number;
  delay: number;
  d1: number;
  d2: number;
}

interface RosePetalsProps {
  isActive: boolean;
}

export function RosePetals({ isActive }: RosePetalsProps) {
  const [petals, setPetals] = useState<Petal[]>([]);

  const createPetal = useCallback((): Petal => {
    const colors = ["#E85070", "#D44060", "#C83858", "#F06080", "#E04868"];
    return {
      id: Date.now() + Math.random(),
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: Math.random() * 4 + 7,
      height: Math.random() * 4 + 8,
      rotation: Math.random() * 360,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 2,
      d1: Math.random() * 55 - 28,
      d2: Math.random() * 35 - 18,
    };
  }, []);

  useEffect(() => {
    if (!isActive) return;

    // Initial petals
    const initialPetals = Array.from({ length: 12 }, () => createPetal());
    setPetals(initialPetals);

    // Continuously add petals
    const interval = setInterval(() => {
      setPetals((prev) => {
        // Remove old petals to prevent memory issues
        const newPetals = prev.length > 20 ? prev.slice(-15) : prev;
        return [...newPetals, createPetal()];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, createPetal]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute -top-[22px] opacity-50 animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            ["--d1" as string]: `${petal.d1}px`,
            ["--d2" as string]: `${petal.d2}px`,
          }}
        >
          <div
            className="rose-petal"
            style={{
              width: `${petal.width}px`,
              height: `${petal.height}px`,
              background: petal.color,
              transform: `rotate(${petal.rotation}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
