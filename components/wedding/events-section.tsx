"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { weddingConfig, type Event } from "@/lib/wedding-config";
import { invitationConfig } from "@/lib/invitation.config";
import { RotateCcw } from "lucide-react";
import {
  MusicNoteIcon,
  FlowerIcon,
  MandapIcon,
  PartyIcon,
  TapFingerIcon,
  DressWomanIcon,
  DressManIcon,
  MapPinIcon,
  SparkleIcon,
  HeelIcon,
  FlowerSmallIcon,
} from "./wedding-icons";

const ICONS: Record<string, ReactNode> = {
  "musical-note": <MusicNoteIcon className="w-14 h-14" />,
  flower: <FlowerIcon className="w-14 h-14" />,
  church: <MandapIcon className="w-14 h-14" />,
  party: <PartyIcon className="w-14 h-14" />,
};

function ColorSwatch({ color }: { color: string }) {
  return (
    <div
      className="w-6 h-6 rounded-full border-2 border-white shadow-md"
      style={{ background: color }}
      title={color}
    />
  );
}

function EventCard({ event, isVisible }: { event: Event; isVisible: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const openMap = (e: React.MouseEvent, address: string) => {
    e.stopPropagation();
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, "_blank");
  };

  return (
    <div
      className={`relative cursor-pointer ${isVisible ? "event-card visible" : "event-card"}`}
      style={{ 
        perspective: "1000px",
        height: "340px",
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Card container with flip transform */}
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT SIDE - Event Details */}
        <div
          className="absolute inset-0 bg-white rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            border: "1px solid rgba(201,169,110,.08)",
            boxShadow: "0 3px 18px rgba(0,0,0,.04)",
          }}
        >
          {/* Top accent line */}
          <span
            className="absolute top-0 left-0 w-full h-[3px]"
            style={{ 
              background: `linear-gradient(90deg, ${event.dressCode.colors[0]}, ${event.dressCode.colors[1]}, ${event.dressCode.colors[0]})` 
            }}
          />

          {/* Tap hint badge */}
          <div 
            className="absolute top-3 right-3 px-2 py-1 rounded-full flex items-center gap-1 animate-pulse"
            style={{ background: "rgba(201,169,110,.1)" }}
          >
            <span className="text-[0.5rem] font-sans-alt tracking-wider uppercase" style={{ color: "var(--gold-accent)" }}>
              Tap for dress code
            </span>
            <TapFingerIcon className="w-4 h-4" />
          </div>

          {/* Main content */}
          <div className="px-4 py-6 pt-10 text-center h-full flex flex-col justify-center">
            <span className="block mb-3">{ICONS[event.icon] || <SparkleIcon className="w-14 h-14" />}</span>
            <h3 className="font-heading text-2xl mb-1" style={{ color: "var(--charcoal)" }}>
              {event.name}
            </h3>
            <p className="font-accent text-[0.65rem] tracking-[2px] mb-3" style={{ color: "var(--gold-accent)" }}>
              {event.date}
            </p>
            <p className="font-sans-alt text-[0.72rem] mb-1" style={{ color: "var(--charcoal-light)" }}>
              {event.time}
            </p>
            <p className="font-body text-lg font-semibold mt-2 mb-1" style={{ color: "var(--charcoal)" }}>
              {event.venue}
            </p>
            <p className="text-[0.75rem] leading-snug mb-4 px-2" style={{ color: "var(--charcoal-muted)" }}>
              {event.address}
            </p>

            {/* Map button */}
            <div className="flex justify-center">
              <button
                onClick={(e) => openMap(e, event.address)}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-sans-alt text-[0.55rem] tracking-[2px] uppercase transition-all duration-300 cursor-pointer hover:bg-[var(--gold-accent)] hover:text-white group"
                style={{ background: "transparent", border: "1px solid var(--gold-accent)", color: "var(--gold-accent)" }}
              >
                <MapPinIcon className="w-3.5 h-3.5 group-hover:[&_path]:fill-white transition-all" />
                View Map
              </button>
            </div>
          </div>
        </div>

        {/* BACK SIDE - Dress Code */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(145deg, ${event.dressCode.colors[0]}15, white, ${event.dressCode.colors[1]}10)`,
            border: "1px solid rgba(201,169,110,.15)",
            boxShadow: "0 3px 18px rgba(0,0,0,.04)",
          }}
        >
          {/* Top accent line */}
          <span
            className="absolute top-0 left-0 w-full h-[3px]"
            style={{ 
              background: `linear-gradient(90deg, ${event.dressCode.colors[1]}, ${event.dressCode.colors[0]}, ${event.dressCode.colors[1]})` 
            }}
          />

          {/* Back button hint */}
          <div 
            className="absolute top-3 right-3 px-2 py-1 rounded-full flex items-center gap-1"
            style={{ background: "rgba(201,169,110,.15)" }}
          >
            <RotateCcw className="w-3 h-3" style={{ color: "var(--gold-accent)" }} />
            <span className="text-[0.5rem] font-sans-alt tracking-wider uppercase" style={{ color: "var(--gold-accent)" }}>
              Tap to flip back
            </span>
          </div>

          {/* Dress code content */}
          <div className="px-5 py-6 pt-10 text-center h-full flex flex-col">
            <h3 className="font-heading text-xl mb-1" style={{ color: "var(--charcoal)" }}>
              Dress Code
            </h3>
            <p className="font-sans-alt text-[0.55rem] tracking-[2px] uppercase mb-3" style={{ color: "var(--gold-accent)" }}>
              {event.name}
            </p>

            {/* Theme badge & color swatches */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="px-3 py-1.5 rounded-full"
                style={{ background: `${event.dressCode.colors[0]}20` }}
              >
                <p className="font-sans-alt text-[0.65rem] font-semibold tracking-[1px]" style={{ color: event.dressCode.colors[0] }}>
                  {event.dressCode.theme}
                </p>
              </div>
              <div className="flex gap-1.5">
                {event.dressCode.colors.map((color, i) => (
                  <ColorSwatch key={i} color={color} />
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="flex-1 flex flex-col justify-center gap-4 text-left">
              {/* Women's suggestion */}
              <div 
                className="p-3 rounded-lg"
                style={{ background: "rgba(255,255,255,.7)" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <DressWomanIcon className="w-5 h-5" />
                  <span className="font-sans-alt text-[0.55rem] font-bold tracking-[1.5px] uppercase" style={{ color: "var(--gold-accent)" }}>
                    For Women
                  </span>
                </div>
                <p className="font-body text-[0.82rem] leading-relaxed pl-7" style={{ color: "var(--charcoal-light)" }}>
                  {event.dressCode.suggestions.women}
                </p>
              </div>

              {/* Men's suggestion */}
              <div 
                className="p-3 rounded-lg"
                style={{ background: "rgba(255,255,255,.7)" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <DressManIcon className="w-5 h-5" />
                  <span className="font-sans-alt text-[0.55rem] font-bold tracking-[1.5px] uppercase" style={{ color: "var(--gold-accent)" }}>
                    For Men
                  </span>
                </div>
                <p className="font-body text-[0.82rem] leading-relaxed pl-7" style={{ color: "var(--charcoal-light)" }}>
                  {event.dressCode.suggestions.men}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EventsSection() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-event-id");
            if (id) {
              setVisibleCards((prev) => new Set([...prev, id]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    cardsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="events"
      className="min-h-screen flex items-center justify-center px-3 py-10 pb-[118px] relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--ivory), #F8F0E8, var(--ivory))" }}
    >
      <div className="max-w-[800px] w-full text-center relative z-[2]">
        <h2 className="font-display text-5xl mb-1.5 reveal-element" style={{ color: "var(--charcoal)" }}>
          Wedding Events
        </h2>
        <p className="font-sans-alt text-[0.58rem] tracking-[3px] uppercase mb-4" style={{ color: "var(--gold-accent)" }}>
          Join Us in Celebration
        </p>
        <div className="text-center my-2 mb-3 text-base tracking-[8px] opacity-30" style={{ color: "var(--gold-accent)" }}>
          {invitationConfig.emojis.events.ornament}
        </div>

        {/* Tap instruction */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: "rgba(201,169,110,.08)", border: "1px dashed rgba(201,169,110,.3)" }}
        >
          <TapFingerIcon className="w-5 h-5 animate-bounce-subtle" />
          <p className="font-body text-sm" style={{ color: "var(--charcoal-light)" }}>
            Tap any card to see the dress code
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
          {weddingConfig.events.map((event) => (
            <div
              key={event.id}
              ref={(el) => {
                if (el) cardsRef.current.set(event.id, el);
              }}
              data-event-id={event.id}
            >
              <EventCard event={event} isVisible={visibleCards.has(event.id)} />
            </div>
          ))}
        </div>

        {/* General dress code tips */}
        <div
          className="mt-8 p-5 rounded-xl max-w-lg mx-auto"
          style={{
            background: "rgba(255,255,255,.6)",
            border: "1px solid rgba(201,169,110,.12)",
          }}
        >
          <h3 className="font-heading text-base font-bold mb-3" style={{ color: "var(--charcoal)" }}>
            General Tips
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-left">
            <div className="flex items-center gap-2">
              <SparkleIcon className="w-4 h-4" />
              <p className="font-body text-[0.75rem]" style={{ color: "var(--charcoal-light)" }}>
                Traditional attire preferred
              </p>
            </div>
            <div className="flex items-center gap-2">
              <HeelIcon className="w-4 h-4" />
              <p className="font-body text-[0.75rem]" style={{ color: "var(--charcoal-light)" }}>
                Comfortable footwear
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FlowerSmallIcon className="w-4 h-4" />
              <p className="font-body text-[0.75rem]" style={{ color: "var(--charcoal-light)" }}>
                Avoid white or off-white
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
