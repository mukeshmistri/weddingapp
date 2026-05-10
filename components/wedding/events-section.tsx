"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { weddingConfig, type Event } from "@/lib/wedding-config";
import { invitationConfig } from "@/lib/invitation.config";
import { useResolvedArt } from "@/lib/custom-art";
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
  const [iconImageError, setIconImageError] = useState(false);
  const { src: eventArtworkSrc } = useResolvedArt(event.artworkId);
  const iconSizeClass = event.iconSizeClass ?? invitationConfig.events.iconSizeClass;

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
          className="absolute inset-0 bg-white rounded-3xl overflow-hidden"
          style={{
            backgroundImage: eventArtworkSrc ? `url('${eventArtworkSrc}')` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* Overlay for text readability */}
          <div
            className="absolute inset-0 rounded-3xl backdrop-blur-md"
            style={{
              background: eventArtworkSrc ? 'rgba(245, 238, 228, 0.82)' : 'rgba(245, 238, 228, 0.5)',
            }}
          />

          {/* Top accent line */}
          <span
            className="absolute top-0 left-0 w-full h-[3px] z-10"
            style={{ 
              background: `linear-gradient(90deg, ${event.dressCode.colors[0]}, ${event.dressCode.colors[1]}, ${event.dressCode.colors[0]})` 
            }}
          />

          {/* Tap hint badge */}
          <div 
            className="absolute top-3 right-3 px-2 py-1 rounded-full flex items-center gap-1 animate-pulse z-20"
            style={{ background: "rgba(201,169,110,.1)" }}
          >
            <span className="text-[0.5rem] font-sans-alt tracking-wider uppercase" style={{ color: "var(--gold-accent)" }}>
              Tap for dress code
            </span>
            <TapFingerIcon className="w-4 h-4" />
          </div>

          {/* Main content */}
          <div className="absolute inset-0 px-4 py-6 pt-10 text-center h-full flex flex-col justify-center z-10 rounded-3xl">
            <div className="max-w-xs mx-auto w-full">
              <span className="block mb-3">
                {event.iconSrc && !iconImageError ? (
                  <img
                    src={event.iconSrc}
                    alt={event.name}
                    className={`${iconSizeClass} mx-auto object-contain`}
                    onError={() => setIconImageError(true)}
                  />
                ) : (
                  ICONS[event.icon] || <SparkleIcon className={`${iconSizeClass} mx-auto`} />
                )}
              </span>
              <h3 className="font-heading font-bold mb-1 text-zinc-800" style={{ fontSize: "clamp(1.25rem, 5vw, 1.875rem)" }}>
                {event.name}
              </h3>
              <p className="font-accent tracking-[2px] mb-3 font-semibold text-zinc-700" style={{ fontSize: "clamp(0.5rem, 2vw, 0.65rem)" }}>
                {event.date}
              </p>
              <p className="font-sans-alt mb-1 font-medium text-zinc-700" style={{ fontSize: "clamp(0.65rem, 2.5vw, 0.875rem)" }}>
                {event.time}
              </p>
              <p className="font-body font-bold mt-2 mb-1 text-zinc-800" style={{ fontSize: "clamp(0.875rem, 3vw, 1.125rem)" }}>
                {event.venue}
              </p>
              <p className="leading-snug mb-4 px-2 font-medium text-zinc-700" style={{ fontSize: "clamp(0.65rem, 2vw, 0.875rem)" }}>
                {event.address}
              </p>
            </div>

            {/* Map button */}
            <div className="flex justify-center">
              <button
                onClick={(e) => openMap(e, event.address)}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-sans-alt text-[0.55rem] tracking-[2px] uppercase transition-all duration-300 cursor-pointer hover:bg-[var(--gold-accent)] hover:text-white group font-semibold"
                style={{ background: "transparent", border: "1.5px solid var(--gold-accent)", color: "var(--gold-accent)" }}
              >
                <MapPinIcon className="w-3.5 h-3.5 group-hover:[&_path]:fill-white transition-all" />
                View Map
              </button>
            </div>
          </div>
        </div>

        {/* BACK SIDE - Dress Code */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(145deg, ${event.dressCode.colors[0]}15, white, ${event.dressCode.colors[1]}10)`,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
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
          <div className="px-5 py-6 pt-10 text-center h-full flex flex-col max-w-xs mx-auto w-full">
            <h3 className="font-heading font-bold mb-1 text-zinc-800" style={{ fontSize: "clamp(1rem, 4vw, 1.375rem)" }}>
              Dress Code
            </h3>
            <p className="font-sans-alt tracking-[2px] uppercase mb-3 font-semibold text-zinc-700" style={{ fontSize: "clamp(0.48rem, 2vw, 0.65rem)" }}>
              {event.name}
            </p>

            {/* Theme badge & color swatches */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="px-3 py-1.5 rounded-full"
                style={{ background: `${event.dressCode.colors[0]}20` }}
              >
                <p className="font-sans-alt font-semibold tracking-[1px]" style={{ fontSize: "clamp(0.55rem, 2vw, 0.75rem)", color: event.dressCode.colors[0] }}>
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
                className="p-3 rounded-lg backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,.8)" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <DressWomanIcon className="w-5 h-5" />
                  <span className="font-sans-alt font-bold tracking-[1.5px] uppercase text-zinc-800" style={{ fontSize: "clamp(0.45rem, 2vw, 0.625rem)" }}>
                    For Women
                  </span>
                </div>
                <p className="font-body leading-relaxed pl-7 text-zinc-700" style={{ fontSize: "clamp(0.7rem, 2.5vw, 0.875rem)" }}>
                  {event.dressCode.suggestions.women}
                </p>
              </div>

              {/* Men's suggestion */}
              <div 
                className="p-3 rounded-lg backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,.8)" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <DressManIcon className="w-5 h-5" />
                  <span className="font-sans-alt font-bold tracking-[1.5px] uppercase text-zinc-800" style={{ fontSize: "clamp(0.45rem, 2vw, 0.625rem)" }}>
                    For Men
                  </span>
                </div>
                <p className="font-body leading-relaxed pl-7 text-zinc-700" style={{ fontSize: "clamp(0.7rem, 2.5vw, 0.875rem)" }}>
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
        <h2 className="font-display text-5xl mb-1.5 reveal-element font-bold" style={{ color: "var(--charcoal)", fontWeight: "800" }}>
          Wedding Events
        </h2>
        <p className="font-sans-alt text-[0.58rem] tracking-[3px] uppercase mb-4 font-semibold" style={{ color: "var(--gold-accent)", opacity: "0.95" }}>
          Join Us in Celebration
        </p>
        <div className="text-center my-2 mb-3 text-base tracking-[8px] opacity-30" style={{ color: "var(--gold-accent)" }}>
          {invitationConfig.emojis.events.ornament}
        </div>

        {/* Tap instruction */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: "rgba(201,169,110,.1)", border: "1px solid rgba(201,169,110,.4)" }}
        >
          <TapFingerIcon className="w-5 h-5 animate-bounce-subtle" />
          <p className="font-body text-sm font-medium" style={{ color: "var(--charcoal-light)" }}>
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
