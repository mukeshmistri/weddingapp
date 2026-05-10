"use client";

import { useEffect, useState, useCallback } from "react";

const SECTIONS = ["hero", "save-date", "events", "rsvp"] as const;

export function NavDots() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    let current = "hero";

    SECTIONS.forEach((id) => {
      const section = document.getElementById(id);
      if (section && scrollY >= section.offsetTop - 200) {
        current = id;
      }
    });

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-[999] flex-col gap-2.5 hidden md:flex">
      {SECTIONS.map((section) => (
        <button
          key={section}
          onClick={() => scrollTo(section)}
          className={`nav-dot w-2 h-2 rounded-full cursor-pointer ${
            activeSection === section ? "active" : ""
          }`}
          style={{
            border: "1.5px solid var(--gold-accent)",
            background: activeSection === section ? "var(--gold-accent)" : "transparent",
          }}
          aria-label={`Scroll to ${section}`}
        />
      ))}
    </div>
  );
}
