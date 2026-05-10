"use client";

import { useEffect, useState, useCallback } from "react";
import { invitationConfig } from "@/lib/invitation.config";

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
    const colors = invitationConfig.petals.colors;
    const isLeftSide = Math.random() < 0.5;
    const left = isLeftSide
      ? Math.random() * (invitationConfig.petals.leftRangePercent[1] - invitationConfig.petals.leftRangePercent[0]) + invitationConfig.petals.leftRangePercent[0]
      : Math.random() * (invitationConfig.petals.rightRangePercent[1] - invitationConfig.petals.rightRangePercent[0]) + invitationConfig.petals.rightRangePercent[0];
    return {
      id: Date.now() + Math.random(),
      left,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: Math.random() * invitationConfig.petals.width.variance + invitationConfig.petals.width.base,
      height: Math.random() * invitationConfig.petals.height.variance + invitationConfig.petals.height.base,
      rotation: Math.random() * 360,
      duration: Math.random() * invitationConfig.petals.duration.variance + invitationConfig.petals.duration.base,
      delay: Math.random() * invitationConfig.petals.delay.variance,
      d1: Math.random() * invitationConfig.petals.drift.d1Variance - invitationConfig.petals.drift.d1Offset,
      d2: Math.random() * invitationConfig.petals.drift.d2Variance - invitationConfig.petals.drift.d2Offset,
    };
  }, []);

  useEffect(() => {
    if (!isActive) return;

    // Initial petals
    const initialPetals = Array.from({ length: invitationConfig.petals.initialCount }, () => createPetal());
    setPetals(initialPetals);

    // Continuously add petals
    const interval = setInterval(() => {
      setPetals((prev) => {
        // Remove old petals to prevent memory issues
        const newPetals = prev.length > invitationConfig.petals.maxPetals ? prev.slice(-invitationConfig.petals.keepRecentCount) : prev;
        return [...newPetals, createPetal()];
      });
    }, invitationConfig.petals.spawnIntervalMs);

    return () => clearInterval(interval);
  }, [isActive, createPetal]);

  if (!isActive) return null;

  return (
    <div className={invitationConfig.petals.containerClass}>
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
