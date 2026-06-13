"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { weddingConfig, type Event } from "@/lib/wedding-config";
import { invitationConfig } from "@/lib/invitation.config";
import { useResolvedArt } from "@/lib/custom-art";
import {
  MusicNoteIcon,
  FlowerIcon,
  MandapIcon,
  PartyIcon,
  MapPinIcon,
  SparkleIcon,
} from "./wedding-icons";

const ICONS: Record<string, ReactNode> = {
  "musical-note": <MusicNoteIcon className="w-20 h-20" />,
  flower: <FlowerIcon className="w-20 h-20" />,
  church: <MandapIcon className="w-20 h-20" />,
  party: <PartyIcon className="w-20 h-20" />,
};

function EventCard({ event, isVisible }: { event: Event; isVisible: boolean }) {
  const [iconImageError, setIconImageError] = useState(false);
  const { src: eventArtworkSrc } = useResolvedArt(event.artworkId);
  const iconSizeClass = "w-24 h-24";

  const openMap = (e: React.MouseEvent, address: string) => {
    e.stopPropagation();
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, "_blank");
  };

  return (
    <div
      className={`relative cursor-pointer ${isVisible ? "event-card visible" : "event-card"}`}
      style={{ 
        height: "clamp(368px, 67vh, 432px)",
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 bg-white rounded-3xl overflow-hidden"
          style={{
            backgroundImage: eventArtworkSrc ? `url('${eventArtworkSrc}')` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* Overlay for text readability */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: eventArtworkSrc
                ? "linear-gradient(180deg, rgba(255,252,247,0.94) 0%, rgba(255,249,240,0.97) 35%, rgba(255,245,232,0.99) 100%)"
                : "rgba(255,250,242,0.98)",
            }}
          />

          {/* Top accent line */}
          <span
            className="absolute top-0 left-0 w-full h-[3px] z-10"
            style={{ 
              background: `linear-gradient(90deg, ${event.dressCode.colors[0]}, ${event.dressCode.colors[1]}, ${event.dressCode.colors[0]})` 
            }}
          />

          {/* Main content */}
          <div className="absolute inset-0 px-4.5 py-5 pt-5 text-center h-full flex flex-col justify-start z-10 rounded-3xl">
            <div className="max-w-sm mx-auto w-full">
              <span className="block mb-2.5">
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
              <h3 className="font-heading font-bold mb-1.5 text-zinc-900" style={{ fontSize: "clamp(1.5rem, 5.9vw, 2.2rem)", textShadow: "0 1px 0 rgba(255,255,255,0.75)" }}>
                {event.name}
              </h3>

              <div className="flex flex-col items-center justify-center gap-2 mb-3">
                <span
                  className="font-accent uppercase font-bold rounded-full px-4 py-1.5"
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "1.9px",
                    color: "#6B2D3C",
                    background: "linear-gradient(180deg, rgba(255,252,245,0.95), rgba(255,243,220,0.95))",
                    border: "1.6px solid rgba(201,169,110,0.72)",
                    boxShadow: "0 2px 10px rgba(201,169,110,0.22), inset 0 1px 0 rgba(255,255,255,0.55)",
                  }}
                >
                  Date: {event.date}
                </span>
                <span
                  className="font-accent uppercase font-bold rounded-full px-4 py-1.5"
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "1.9px",
                    color: "#3E5A42",
                    background: "linear-gradient(180deg, rgba(255,252,245,0.95), rgba(255,243,220,0.95))",
                    border: "1.6px solid rgba(201,169,110,0.72)",
                    boxShadow: "0 2px 10px rgba(201,169,110,0.22), inset 0 1px 0 rgba(255,255,255,0.55)",
                  }}
                >
                  Time: {event.time}
                </span>
              </div>

              <p className="font-body font-bold mt-0.5 mb-1 text-zinc-900" style={{ fontSize: "clamp(1.08rem, 3.5vw, 1.38rem)", textShadow: "0 1px 0 rgba(255,255,255,0.72)" }}>
                {event.venue}
              </p>

              <p className="font-sans-alt uppercase font-semibold mb-0.5" style={{ fontSize: "0.54rem", letterSpacing: "1.6px", color: "#8B6A36" }}>
                Location
              </p>
              <p className="leading-snug mb-3 px-2 font-semibold text-zinc-900" style={{ fontSize: "clamp(0.84rem, 2.4vw, 1rem)", lineHeight: 1.42 }}>
                {event.address}
              </p>
            </div>

            {/* Map button */}
            <div className="flex justify-center mt-auto pb-2">
              <button
                onClick={(e) => openMap(e, event.address)}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-sans-alt text-[0.68rem] tracking-[1.8px] uppercase transition-all duration-300 cursor-pointer hover:bg-[var(--gold-accent)] hover:text-white group font-semibold"
                style={{ background: "transparent", border: "1.5px solid var(--gold-accent)", color: "var(--gold-accent)" }}
              >
                <MapPinIcon className="w-4 h-4 group-hover:[&_path]:fill-white transition-all" />
                View Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EventsSection() {
  const customBackgroundImage = weddingConfig.images.eventsBackground;
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
      style={{
        background: customBackgroundImage
          ? `url('${customBackgroundImage}') center/cover no-repeat`
          : "linear-gradient(180deg, #F7F1E8 0%, #F3EEE7 45%, #F8F0E8 100%)",
      }}
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
      </div>
    </section>
  );
}
