"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "000",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isComplete, setIsComplete] = useState(false);
  const prevTimeRef = useRef<TimeLeft>(timeLeft);

  const calculateTimeLeft = useCallback(() => {
    const diff = targetDate.getTime() - new Date().getTime();

    if (diff <= 0) {
      setIsComplete(true);
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      days: String(days).padStart(3, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }, [targetDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      prevTimeRef.current = timeLeft;
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, timeLeft]);

  const TimeBlock = ({ value, label, prevValue }: { value: string; label: string; prevValue: string }) => {
    const changed = value !== prevValue;

    return (
      <div
        className="flex flex-col items-center rounded-xl px-2 py-2.5 min-w-[55px]"
        style={{ background: "rgba(232,160,184,.04)", border: "1px solid rgba(232,160,184,.1)" }}
      >
        <span
          className={`font-heading text-4xl font-bold leading-none transition-all duration-250 ${
            changed ? "scale-105" : ""
          }`}
          style={{ color: changed ? "#B8965A" : "#2B2116" }}
        >
          {value}
        </span>
        <span className="font-sans-alt text-[0.35rem] tracking-[2px] uppercase mt-1" style={{ fontSize: "11px", color: "#A08D73" }}>
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex justify-center gap-1.5 flex-wrap">
        <TimeBlock value={timeLeft.days} label="Days" prevValue={prevTimeRef.current.days} />
        <span className="font-heading text-2xl self-center" style={{ color: "#C9A56B", opacity: 0.5 }}>:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" prevValue={prevTimeRef.current.hours} />
        <span className="font-heading text-2xl self-center" style={{ color: "#C9A56B", opacity: 0.5 }}>:</span>
        <TimeBlock value={timeLeft.minutes} label="Minutes" prevValue={prevTimeRef.current.minutes} />
        <span className="font-heading text-2xl self-center" style={{ color: "#C9A56B", opacity: 0.5 }}>:</span>
        <TimeBlock value={timeLeft.seconds} label="Seconds" prevValue={prevTimeRef.current.seconds} />
      </div>
    </div>
  );
}
