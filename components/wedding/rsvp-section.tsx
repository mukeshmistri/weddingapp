"use client";

import { useState, useCallback, type FormEvent } from "react";
import { invitationConfig } from "@/lib/invitation.config";

export function RSVPSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    guests: "2",
    message: "",
  });

  const createConfetti = useCallback(() => {
    const colors = ["#C9A96E", "#F2D7D5", "#E8A0B8", "#E8D5A8", "#FFD700"];
    for (let i = 0; i < 35; i++) {
      const c = document.createElement("div");
      c.style.cssText = `
        position: fixed;
        top: -8px;
        left: ${Math.random() * 100}%;
        width: ${Math.random() * 5 + 2}px;
        height: ${Math.random() * 5 + 2}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
        z-index: 9999;
        pointer-events: none;
        animation: confetti-fall ${Math.random() * 2 + 1.5}s ease forwards;
        animation-delay: ${Math.random() * 0.3}s;
      `;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      // Send RSVP to API
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.error}`);
        return;
      }

      const result = await response.json();
      
      // Show success message
      createConfetti();
      setIsSubmitted(true);
      console.log("RSVP submitted successfully:", result);
    } catch (error) {
      console.error("Failed to submit RSVP:", error);
      alert("Failed to submit RSVP. Please try again.");
    }
  };

  return (
    <section
      id="rsvp"
      className="min-h-screen flex items-center justify-center px-2.5 py-10 pb-[118px] relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F8EFE6, #FBF7F2)" }}
    >
      <div className="max-w-[460px] w-full text-center relative z-[2]">
        <h2 className="font-display text-5xl mb-1.5" style={{ color: "var(--green-accent)" }}>
          RSVP
        </h2>
        <p className="font-sans-alt text-[0.58rem] tracking-[3px] uppercase mb-6" style={{ color: "var(--charcoal-light)" }}>
          Kindly Respond
        </p>
        <div className="text-center my-2 mb-5 text-base tracking-[8px] opacity-30" style={{ color: "var(--gold-accent)" }}>
          {invitationConfig.emojis.rsvp.ornament}
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            {/* Name */}
            <div className="text-left">
              <label className="block font-sans-alt text-[0.52rem] tracking-[2px] uppercase mb-1" style={{ color: "var(--charcoal)" }}>
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg font-body text-base outline-none transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,.7)",
                  border: "1px solid rgba(201,169,110,.12)",
                  color: "var(--charcoal)",
                }}
              />
            </div>

            {/* Email */}
            <div className="text-left">
              <label className="block font-sans-alt text-[0.52rem] tracking-[2px] uppercase mb-1" style={{ color: "var(--charcoal-light)" }}>
                Email
              </label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg font-body text-base outline-none transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,.7)",
                  border: "1px solid rgba(201,169,110,.12)",
                  color: "var(--charcoal)",
                }}
              />
            </div>

            {/* Phone */}
            <div className="text-left">
              <label className="block font-sans-alt text-[0.52rem] tracking-[2px] uppercase mb-1" style={{ color: "var(--charcoal-light)" }}>
                Phone
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg font-body text-base outline-none transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,.7)",
                  border: "1px solid rgba(201,169,110,.12)",
                  color: "var(--charcoal)",
                }}
              />
            </div>

            {/* Attendance */}
            <div className="text-left">
              <label className="block font-sans-alt text-[0.52rem] tracking-[2px] uppercase mb-1" style={{ color: "var(--charcoal-light)" }}>
                Attend?
              </label>
              <div className="flex gap-2">
                <label
                  className={`flex-1 block py-2.5 text-center rounded-lg cursor-pointer transition-all duration-300 font-body text-base ${
                    formData.attendance === "yes" ? "text-white" : ""
                  }`}
                  style={{
                    background: formData.attendance === "yes" ? "var(--green-accent)" : "rgba(255,255,255,.6)",
                    border: formData.attendance === "yes" ? "2px solid var(--green-accent)" : "2px solid var(--gold-border)",
                  }}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    required
                    className="sr-only"
                    onChange={() => setFormData({ ...formData, attendance: "yes" })}
                  />
                  {invitationConfig.emojis.rsvp.acceptLabel}
                </label>
                <label
                  className={`flex-1 block py-2.5 text-center rounded-lg cursor-pointer transition-all duration-300 font-body text-base ${
                    formData.attendance === "no" ? "text-white" : ""
                  }`}
                  style={{
                    background: formData.attendance === "no" ? "var(--charcoal-muted)" : "rgba(255,255,255,.6)",
                    border: formData.attendance === "no" ? "2px solid var(--charcoal-muted)" : "2px solid var(--gold-border)",
                  }}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    className="sr-only"
                    onChange={() => setFormData({ ...formData, attendance: "no" })}
                  />
                  {invitationConfig.emojis.rsvp.declineLabel}
                </label>
              </div>
            </div>

            {/* Guests */}
            <div className="text-left">
              <label className="block font-sans-alt text-[0.52rem] tracking-[2px] uppercase mb-1" style={{ color: "var(--charcoal-light)" }}>
                Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg font-body text-base outline-none transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,.7)",
                  border: "1px solid rgba(201,169,110,.12)",
                  color: "var(--charcoal)",
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>

            {/* Message */}
            <div className="text-left">
              <label className="block font-sans-alt text-[0.52rem] tracking-[2px] uppercase mb-1" style={{ color: "var(--charcoal-light)" }}>
                {invitationConfig.emojis.rsvp.wishesLabel}
              </label>
              <textarea
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg font-body text-base outline-none transition-all duration-300 resize-y min-h-[85px]"
                style={{
                  background: "rgba(255,255,255,.7)",
                  border: "1px solid rgba(201,169,110,.12)",
                  color: "var(--charcoal)",
                }}
              />
            </div>

            <button
              type="submit"
              className="inline-block px-10 py-3 rounded-full font-accent text-[0.72rem] tracking-[2px] uppercase text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 mt-2.5"
              style={{
                background: "linear-gradient(135deg, var(--green-accent), #3D5540)",
                boxShadow: "0 3px 14px rgba(79, 111, 82, 0.25)",
              }}
            >
              Send RSVP
            </button>
          </form>
        ) : (
          <div className="text-center py-5 animate-fade-up">
            <span className="text-5xl block mb-2.5">{invitationConfig.emojis.rsvp.success}</span>
            <h3 className="font-display text-3xl mb-1" style={{ color: "var(--green-accent)" }}>
              Thank You!
            </h3>
            <p className="text-base" style={{ color: "var(--charcoal-light)" }}>
              Your RSVP received with love.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
