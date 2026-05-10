"use client";

// Comprehensive SVG Icon System for Wedding Invitation
// All icons replace emojis with elegant, hand-drawn vector art
// Wedding-themed with proper accessibility and scalability

// Base icon props type
interface IconProps {
  className?: string;
  aria?: {
    label?: string;
    hidden?: boolean;
  };
}

// SPIRITUAL & WELCOME ICONS

export function NamasteIcon({ className = "w-10 h-10", aria = { label: "Namaste hands" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="namasteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#8B7340" />
        </linearGradient>
      </defs>
      {/* Left hand */}
      <path
        d="M16 22 L14 32 Q14 40 20 44 Q24 46 26 40 L28 28 Z"
        fill="url(#namasteGrad)"
        className="animate-[pulse_2s_ease-in-out_infinite]"
      />
      {/* Right hand */}
      <path
        d="M48 22 L50 32 Q50 40 44 44 Q40 46 38 40 L36 28 Z"
        fill="url(#namasteGrad)"
        className="animate-[pulse_2s_ease-in-out_0.3s_infinite]"
      />
      {/* Center glow */}
      <circle cx="32" cy="34" r="10" fill="url(#namasteGrad)" opacity="0.15" className="animate-[scaleIn_1s_ease-out_forwards]" />
      {/* Decorative elements */}
      <circle cx="32" cy="14" r="3" fill="#C9A96E" opacity="0.6" className="animate-[scaleIn_0.8s_ease-out_0.2s_both]" />
    </svg>
  );
}

export function BrideGroomIcon({ className = "w-10 h-10", aria = { label: "Bride and groom" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="brideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2D7D5" />
          <stop offset="100%" stopColor="#E8A0B8" />
        </linearGradient>
        <linearGradient id="groomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B4A2E" />
          <stop offset="100%" stopColor="#4A3520" />
        </linearGradient>
      </defs>
      {/* Bride - left */}
      {/* Head */}
      <circle cx="16" cy="14" r="5" fill="url(#brideGrad)" className="animate-[scaleIn_0.5s_ease-out_forwards]" />
      {/* Hair/veil top */}
      <path d="M16 9 Q12 8 10 12 Q12 8 16 9" fill="#E8A0B8" opacity="0.8" className="animate-[fadeIn_0.5s_ease-out_0.1s_both]" />
      {/* Body */}
      <path d="M16 19 L14 36 Q14 38 16 38 Q18 38 18 36 L16 19 Z" fill="url(#brideGrad)" className="animate-[slideDown_0.5s_ease-out_0.2s_both]" />
      {/* Groom - right */}
      {/* Head */}
      <circle cx="48" cy="14" r="5" fill="url(#groomGrad)" className="animate-[scaleIn_0.5s_ease-out_0.1s_both]" />
      {/* Body */}
      <path d="M48 19 L46 36 Q46 38 48 38 Q50 38 50 36 L48 19 Z" fill="url(#groomGrad)" className="animate-[slideDown_0.5s_ease-out_0.3s_both]" />
      {/* Heart between them */}
      <path
        d="M28 24 Q32 20 36 24 L32 32 Z"
        fill="#E8A0B8"
        className="animate-[pulse_1.5s_ease-in-out_infinite]"
        style={{ transformOrigin: "32px 26px" }}
      />
    </svg>
  );
}

// JEWELRY & SYMBOL ICONS

export function WeddingRingIcon({ className = "w-10 h-10", aria = { label: "Diamond wedding ring" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#8B7340" />
        </linearGradient>
        <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </linearGradient>
      </defs>
      {/* Ring band - left */}
      <path d="M12 32 Q16 26 20 26" stroke="url(#goldGrad)" strokeWidth="3.5" fill="none" strokeLinecap="round" className="animate-[draw_0.8s_ease-out_forwards]" />
      {/* Ring band - right */}
      <path d="M44 26 Q48 26 52 32" stroke="url(#goldGrad)" strokeWidth="3.5" fill="none" strokeLinecap="round" className="animate-[draw_0.8s_ease-out_0.2s_both]" />
      {/* Diamond center */}
      <g className="animate-[scaleIn_0.6s_ease-out_0.3s_both]" style={{ transformOrigin: "32px 20px" }}>
        <path d="M32 14 L36 20 L32 26 L28 20 Z" fill="url(#diamondGrad)" />
        <circle cx="32" cy="20" r="2.5" fill="#ffffff" opacity="0.8" />
      </g>
      {/* Sparkles */}
      <circle cx="24" cy="16" r="1.5" fill="#D4AF37" className="animate-[pulse_1.5s_ease-in-out_infinite]" />
      <circle cx="40" cy="16" r="1.5" fill="#D4AF37" className="animate-[pulse_1.5s_ease-in-out_0.5s_infinite]" />
    </svg>
  );
}

export function HeartIcon({ className = "w-10 h-10", aria = { label: "Ornate wedding heart" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8A0B8" />
          <stop offset="100%" stopColor="#C97B7B" />
        </linearGradient>
      </defs>
      {/* Main heart shape */}
      <path
        d="M32 52 C12 40 8 30 8 22 C8 14 14 8 20 8 C24 8 28 11 32 16 C36 11 40 8 44 8 C50 8 56 14 56 22 C56 30 52 40 32 52 Z"
        fill="url(#heartGrad)"
        className="animate-[scaleIn_0.6s_ease-out_forwards]"
        style={{ transformOrigin: "32px 30px" }}
      />
      {/* Inner decorative pattern */}
      <circle cx="20" cy="20" r="2" fill="#ffffff" opacity="0.6" className="animate-[pulse_1.5s_ease-in-out_0.2s_infinite]" />
      <circle cx="44" cy="20" r="2" fill="#ffffff" opacity="0.6" className="animate-[pulse_1.5s_ease-in-out_0.4s_infinite]" />
    </svg>
  );
}

// FLORAL & NATURE ICONS

export function LotusIcon({ className = "w-10 h-10", aria = { label: "Sacred lotus flower" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="lotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2D7D5" />
          <stop offset="50%" stopColor="#E8A0B8" />
          <stop offset="100%" stopColor="#C97B7B" />
        </linearGradient>
        <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4D03F" />
          <stop offset="100%" stopColor="#F39C12" />
        </linearGradient>
      </defs>
      {/* Petals - outer ring */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse key={angle}
          cx="32" cy="18" rx="6" ry="12" fill="url(#lotusGrad)"
          style={{ 
            transform: `rotate(${angle}deg)`,
            transformOrigin: "32px 32px"
          }}
          className="animate-[bloom_1s_ease-out_forwards]"
          style={{
            transformOrigin: "32px 32px"
          }}
        />
      ))}
      {/* Center stamen */}
      <circle cx="32" cy="32" r="6" fill="url(#centerGrad)" className="animate-[scaleIn_0.8s_ease-out_0.4s_both]" />
    </svg>
  );
}

export function RoseIcon({ className = "w-10 h-10", aria = { label: "Rose flower" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2D7D5" />
          <stop offset="50%" stopColor="#E8A0B8" />
          <stop offset="100%" stopColor="#C97B7B" />
        </linearGradient>
        <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27AE60" />
          <stop offset="100%" stopColor="#1E8449" />
        </linearGradient>
      </defs>
      {/* Petals - spiraling */}
      <g className="animate-[scaleIn_0.8s_ease-out_forwards]" style={{ transformOrigin: "32px 20px" }}>
        <circle cx="32" cy="14" r="3" fill="url(#roseGrad)" opacity="0.9" />
        <circle cx="28" cy="16" r="4" fill="url(#roseGrad)" opacity="0.8" />
        <circle cx="26" cy="22" r="5" fill="url(#roseGrad)" opacity="0.7" />
        <circle cx="28" cy="28" r="5" fill="url(#roseGrad)" opacity="0.7" />
        <circle cx="32" cy="30" r="4" fill="url(#roseGrad)" opacity="0.8" />
        <circle cx="36" cy="28" r="5" fill="url(#roseGrad)" opacity="0.7" />
        <circle cx="38" cy="22" r="5" fill="url(#roseGrad)" opacity="0.7" />
        <circle cx="36" cy="16" r="4" fill="url(#roseGrad)" opacity="0.8" />
      </g>
      {/* Stem */}
      <path d="M32 30 Q30 42 28 52" stroke="url(#stemGrad)" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-[slideDown_0.6s_ease-out_0.3s_both]" />
      {/* Leaf */}
      <ellipse cx="26" cy="40" rx="4" ry="6" fill="url(#stemGrad)" className="animate-[fadeIn_0.5s_ease-out_0.4s_both]" />
    </svg>
  );
}

export function FoliageIcon({ className = "w-10 h-10", aria = { label: "Botanical foliage" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27AE60" />
          <stop offset="100%" stopColor="#1E8449" />
        </linearGradient>
      </defs>
      {/* Left branch */}
      <path d="M32 12 Q24 20 20 28" stroke="url(#leafGrad)" strokeWidth="2" fill="none" className="animate-[draw_0.6s_ease-out_forwards]" />
      {/* Left leaves */}
      <ellipse cx="26" cy="18" rx="4" ry="6" fill="url(#leafGrad)" className="animate-[fadeIn_0.5s_ease-out_0.2s_both]" />
      <ellipse cx="22" cy="26" rx="4" ry="6" fill="url(#leafGrad)" className="animate-[fadeIn_0.5s_ease-out_0.3s_both]" />
      {/* Center stem */}
      <path d="M32 12 L32 52" stroke="url(#leafGrad)" strokeWidth="2.5" fill="none" className="animate-[draw_0.6s_ease-out_0.1s_both]" />
      {/* Right branch */}
      <path d="M32 12 Q40 20 44 28" stroke="url(#leafGrad)" strokeWidth="2" fill="none" className="animate-[draw_0.6s_ease-out_0.2s_both]" />
      {/* Right leaves */}
      <ellipse cx="38" cy="18" rx="4" ry="6" fill="url(#leafGrad)" className="animate-[fadeIn_0.5s_ease-out_0.3s_both]" />
      <ellipse cx="42" cy="26" rx="4" ry="6" fill="url(#leafGrad)" className="animate-[fadeIn_0.5s_ease-out_0.4s_both]" />
      {/* Bottom leaves */}
      <ellipse cx="28" cy="46" rx="4" ry="6" fill="url(#leafGrad)" className="animate-[fadeIn_0.5s_ease-out_0.4s_both]" />
      <ellipse cx="36" cy="46" rx="4" ry="6" fill="url(#leafGrad)" className="animate-[fadeIn_0.5s_ease-out_0.5s_both]" />
    </svg>
  );
}

// ACTION & UI ICONS

export function LocationPinIcon({ className = "w-10 h-10", aria = { label: "Location pin" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8A0B8" />
          <stop offset="100%" stopColor="#C97B7B" />
        </linearGradient>
      </defs>
      {/* Pin shape */}
      <path
        d="M32 8 C24 8 18 14 18 22 C18 32 32 50 32 50 C32 50 46 32 46 22 C46 14 40 8 32 8 Z"
        fill="url(#pinGrad)"
        className="animate-[slideDown_0.6s_ease-out_forwards]"
      />
      {/* Center dot */}
      <circle cx="32" cy="22" r="4" fill="#ffffff" className="animate-[scaleIn_0.5s_ease-out_0.3s_both]" />
    </svg>
  );
}

export function PointingFingerIcon({ className = "w-10 h-10", aria = { label: "Pointing finger" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="fingerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2D7D5" />
          <stop offset="100%" stopColor="#E8A0B8" />
        </linearGradient>
      </defs>
      {/* Hand */}
      <g className="animate-[pulse_1.5s_ease-in-out_infinite]">
        {/* Pointing finger */}
        <rect x="30" y="6" width="4" height="28" rx="2" fill="url(#fingerGrad)" />
        {/* Finger tip */}
        <circle cx="32" cy="8" r="3" fill="url(#fingerGrad)" />
        {/* Other fingers folded */}
        <path d="M22 30 Q20 34 22 38" stroke="url(#fingerGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M32 30 Q32 36 34 40" stroke="url(#fingerGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M42 30 Q44 34 42 38" stroke="url(#fingerGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Palm */}
        <ellipse cx="32" cy="42" rx="10" ry="12" fill="url(#fingerGrad)" />
      </g>
    </svg>
  );
}

export function RefreshIcon({ className = "w-10 h-10", aria = { label: "Refresh or reset" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="refreshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#8B7340" />
        </linearGradient>
      </defs>
      {/* Arrow arc */}
      <path
        d="M14 32 A18 18 0 0 1 50 32"
        stroke="url(#refreshGrad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        className="animate-[rotate_2s_linear_infinite]"
        style={{ transformOrigin: "32px 32px" }}
      />
      {/* Arrow head */}
      <path
        d="M50 32 L46 28 L48 36 Z"
        fill="url(#refreshGrad)"
        className="animate-[rotate_2s_linear_infinite]"
        style={{ transformOrigin: "32px 32px" }}
      />
    </svg>
  );
}

export function ShareIcon({ className = "w-10 h-10", aria = { label: "Share invitation" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="shareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#8B7340" />
        </linearGradient>
      </defs>
      {/* Box/arrow up */}
      <g className="animate-[slideUp_0.6s_ease-in-out_infinite]">
        <path d="M32 8 L32 32" stroke="url(#shareGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M32 8 L26 14" stroke="url(#shareGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M32 8 L38 14" stroke="url(#shareGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* Bottom circles (recipients) */}
      <circle cx="16" cy="48" r="5" fill="url(#shareGrad)" opacity="0.6" className="animate-[pulse_1.5s_ease-in-out_0.2s_infinite]" />
      <circle cx="32" cy="48" r="5" fill="url(#shareGrad)" opacity="0.6" className="animate-[pulse_1.5s_ease-in-out_0.3s_infinite]" />
      <circle cx="48" cy="48" r="5" fill="url(#shareGrad)" opacity="0.6" className="animate-[pulse_1.5s_ease-in-out_0.4s_infinite]" />
    </svg>
  );
}

export function SparkleIcon({ className = "w-10 h-10", aria = { label: "Sparkle effect" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#C9A96E" />
        </linearGradient>
      </defs>
      {/* Center star */}
      <g className="animate-[scaleIn_0.5s_ease-out_forwards]" style={{ transformOrigin: "32px 32px" }}>
        <path d="M32 12 L36 24 L48 28 L36 32 L32 44 L28 32 L16 28 L28 24 Z" fill="url(#sparkleGrad)" />
      </g>
      {/* Surrounding sparkles */}
      {[0, 90, 180, 270].map((angle) => (
        <circle
          key={angle}
          cx={32 + Math.cos((angle * Math.PI) / 180) * 20}
          cy={32 + Math.sin((angle * Math.PI) / 180) * 20}
          r="2"
          fill="url(#sparkleGrad)"
          className="animate-[pulse_1s_ease-in-out_infinite]"
        />
      ))}
    </svg>
  );
}

// VENUE & CELEBRATION ICONS (Already in file, adding complementary ones)

export function MusicNoteIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="musicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>
      {/* Main note body */}
      <path
        d="M24 48V16L48 12V44"
        stroke="url(#musicGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        className="animate-[draw_1.5s_ease-out_forwards]"
      />
      {/* First oval */}
      <ellipse cx="18" cy="50" rx="8" ry="5" fill="url(#musicGrad)" className="animate-[fadeIn_0.5s_ease-out_0.5s_both]" />
      {/* Second oval */}
      <ellipse cx="42" cy="46" rx="8" ry="5" fill="url(#musicGrad)" className="animate-[fadeIn_0.5s_ease-out_0.7s_both]" />
      {/* Music sparkles */}
      <circle cx="52" cy="20" r="2" fill="#C9A96E" className="animate-[pulse_1.5s_ease-in-out_infinite]" />
      <circle cx="56" cy="28" r="1.5" fill="#C9A96E" className="animate-[pulse_1.5s_ease-in-out_0.3s_infinite]" />
      <circle cx="50" cy="32" r="1" fill="#C9A96E" className="animate-[pulse_1.5s_ease-in-out_0.6s_infinite]" />
    </svg>
  );
}

export function FlowerIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="petalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4D03F" />
          <stop offset="100%" stopColor="#F39C12" />
        </linearGradient>
        <linearGradient id="petalGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27AE60" />
          <stop offset="100%" stopColor="#1E8449" />
        </linearGradient>
      </defs>
      {/* Petals */}
      <ellipse cx="32" cy="18" rx="8" ry="14" fill="url(#petalGrad1)" className="animate-[scaleIn_0.5s_ease-out_0.1s_both]" style={{ transformOrigin: "32px 32px" }} />
      <ellipse cx="32" cy="18" rx="8" ry="14" fill="url(#petalGrad1)" className="animate-[scaleIn_0.5s_ease-out_0.2s_both]" style={{ transformOrigin: "32px 32px", transform: "rotate(60deg)" }} />
      <ellipse cx="32" cy="18" rx="8" ry="14" fill="url(#petalGrad1)" className="animate-[scaleIn_0.5s_ease-out_0.3s_both]" style={{ transformOrigin: "32px 32px", transform: "rotate(120deg)" }} />
      <ellipse cx="32" cy="18" rx="8" ry="14" fill="url(#petalGrad1)" className="animate-[scaleIn_0.5s_ease-out_0.4s_both]" style={{ transformOrigin: "32px 32px", transform: "rotate(180deg)" }} />
      <ellipse cx="32" cy="18" rx="8" ry="14" fill="url(#petalGrad1)" className="animate-[scaleIn_0.5s_ease-out_0.5s_both]" style={{ transformOrigin: "32px 32px", transform: "rotate(240deg)" }} />
      <ellipse cx="32" cy="18" rx="8" ry="14" fill="url(#petalGrad1)" className="animate-[scaleIn_0.5s_ease-out_0.6s_both]" style={{ transformOrigin: "32px 32px", transform: "rotate(300deg)" }} />
      {/* Center */}
      <circle cx="32" cy="32" r="8" fill="url(#petalGrad2)" className="animate-[scaleIn_0.5s_ease-out_0.7s_both]" />
      {/* Leaves */}
      <path d="M32 44 Q24 52 20 56 Q28 50 32 44" fill="url(#petalGrad2)" className="animate-[fadeIn_0.5s_ease-out_0.8s_both]" />
      <path d="M32 44 Q40 52 44 56 Q36 50 32 44" fill="url(#petalGrad2)" className="animate-[fadeIn_0.5s_ease-out_0.9s_both]" />
    </svg>
  );
}

export function MandapIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mandapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#C9A96E" />
        </linearGradient>
        <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#F39C12" />
          <stop offset="50%" stopColor="#E74C3C" />
          <stop offset="100%" stopColor="#C0392B" />
        </linearGradient>
      </defs>
      {/* Dome/canopy */}
      <path
        d="M8 24 Q32 4 56 24"
        stroke="url(#mandapGrad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        className="animate-[draw_0.8s_ease-out_forwards]"
      />
      {/* Pillars */}
      <rect x="10" y="24" width="4" height="28" rx="1" fill="url(#mandapGrad)" className="animate-[slideUp_0.5s_ease-out_0.3s_both]" />
      <rect x="50" y="24" width="4" height="28" rx="1" fill="url(#mandapGrad)" className="animate-[slideUp_0.5s_ease-out_0.3s_both]" />
      {/* Base platform */}
      <rect x="6" y="52" width="52" height="4" rx="2" fill="url(#mandapGrad)" className="animate-[fadeIn_0.5s_ease-out_0.5s_both]" />
      {/* Sacred fire */}
      <path
        d="M32 48 Q28 42 32 36 Q36 42 32 48"
        fill="url(#fireGrad)"
        className="animate-[flicker_0.5s_ease-in-out_infinite_alternate]"
      />
      <path
        d="M32 46 Q30 42 32 38 Q34 42 32 46"
        fill="#F1C40F"
        className="animate-[flicker_0.3s_ease-in-out_0.1s_infinite_alternate]"
      />
      {/* Decorative top element */}
      <circle cx="32" cy="12" r="4" fill="url(#mandapGrad)" className="animate-[scaleIn_0.5s_ease-out_0.6s_both]" />
      {/* Hanging decorations */}
      <circle cx="20" cy="28" r="2" fill="#C9A96E" className="animate-[swing_2s_ease-in-out_infinite]" />
      <circle cx="44" cy="28" r="2" fill="#C9A96E" className="animate-[swing_2s_ease-in-out_0.5s_infinite]" />
    </svg>
  );
}

export function PartyIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="champagneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D5A8" />
          <stop offset="100%" stopColor="#C9A96E" />
        </linearGradient>
      </defs>
      {/* Left champagne glass */}
      <path
        d="M18 20 L14 38 L18 38 L18 50 L22 50 L22 38 L26 38 L22 20 Z"
        fill="url(#glassGrad)"
        stroke="url(#champagneGrad)"
        strokeWidth="1.5"
        className="animate-[tiltLeft_2s_ease-in-out_infinite]"
        style={{ transformOrigin: "20px 50px" }}
      />
      {/* Right champagne glass */}
      <path
        d="M42 20 L38 38 L42 38 L42 50 L46 50 L46 38 L50 38 L46 20 Z"
        fill="url(#glassGrad)"
        stroke="url(#champagneGrad)"
        strokeWidth="1.5"
        className="animate-[tiltRight_2s_ease-in-out_infinite]"
        style={{ transformOrigin: "44px 50px" }}
      />
      {/* Bubbles - left glass */}
      <circle cx="18" cy="28" r="1.5" fill="#fff" opacity="0.8" className="animate-[rise_1.5s_ease-in-out_infinite]" />
      <circle cx="21" cy="32" r="1" fill="#fff" opacity="0.6" className="animate-[rise_1.5s_ease-in-out_0.3s_infinite]" />
      <circle cx="19" cy="35" r="1.2" fill="#fff" opacity="0.7" className="animate-[rise_1.5s_ease-in-out_0.6s_infinite]" />
      {/* Bubbles - right glass */}
      <circle cx="44" cy="28" r="1.5" fill="#fff" opacity="0.8" className="animate-[rise_1.5s_ease-in-out_0.2s_infinite]" />
      <circle cx="45" cy="32" r="1" fill="#fff" opacity="0.6" className="animate-[rise_1.5s_ease-in-out_0.5s_infinite]" />
      <circle cx="43" cy="35" r="1.2" fill="#fff" opacity="0.7" className="animate-[rise_1.5s_ease-in-out_0.8s_infinite]" />
      {/* Sparkles/stars around */}
      <path d="M32 8 L33 12 L37 12 L34 15 L35 19 L32 16 L29 19 L30 15 L27 12 L31 12 Z" fill="#C9A96E" className="animate-[sparkle_1s_ease-in-out_infinite]" />
      <circle cx="10" cy="14" r="2" fill="#C9A96E" className="animate-[pulse_1.5s_ease-in-out_0.2s_infinite]" />
      <circle cx="54" cy="14" r="2" fill="#C9A96E" className="animate-[pulse_1.5s_ease-in-out_0.4s_infinite]" />
      <circle cx="8" cy="44" r="1.5" fill="#C9A96E" className="animate-[pulse_1.5s_ease-in-out_0.6s_infinite]" />
      <circle cx="56" cy="44" r="1.5" fill="#C9A96E" className="animate-[pulse_1.5s_ease-in-out_0.8s_infinite]" />
    </svg>
  );
}

export function TapFingerIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fingerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>
      {/* Finger pointing */}
      <path
        d="M12 2C12 2 11 3 11 5V12M11 5C9.5 5 8 6 8 8V14C8 16 9 18 12 20C15 18 16 16 16 14V8C16 6 14.5 5 13 5V12"
        stroke="url(#fingerGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Tap ripples */}
      <circle cx="12" cy="6" r="3" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.5" className="animate-[ripple_1.5s_ease-out_infinite]" />
      <circle cx="12" cy="6" r="5" stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.3" className="animate-[ripple_1.5s_ease-out_0.3s_infinite]" />
    </svg>
  );
}

export function DressWomanIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>
      {/* Dress body */}
      <path
        d="M16 6 L12 10 L10 10 L6 28 L26 28 L22 10 L20 10 L16 6"
        fill="url(#dressGrad)"
        className="animate-[fadeIn_0.5s_ease-out_both]"
      />
      {/* Waist belt */}
      <rect x="10" y="14" width="12" height="2" rx="1" fill="#5D4E37" />
      {/* Neckline detail */}
      <path d="M12 10 Q16 13 20 10" stroke="#5D4E37" strokeWidth="1.5" fill="none" />
      {/* Sparkle */}
      <circle cx="14" cy="20" r="1" fill="#fff" opacity="0.7" className="animate-[pulse_2s_ease-in-out_infinite]" />
      <circle cx="18" cy="24" r="0.8" fill="#fff" opacity="0.5" className="animate-[pulse_2s_ease-in-out_0.5s_infinite]" />
    </svg>
  );
}

export function DressManIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2C3E50" />
          <stop offset="100%" stopColor="#1A252F" />
        </linearGradient>
      </defs>
      {/* Jacket body */}
      <path
        d="M8 8 L8 28 L24 28 L24 8 L20 8 L18 4 L14 4 L12 8 L8 8"
        fill="url(#suitGrad)"
        className="animate-[fadeIn_0.5s_ease-out_both]"
      />
      {/* Lapels */}
      <path d="M12 8 L16 16 L12 16" fill="#C9A96E" />
      <path d="M20 8 L16 16 L20 16" fill="#C9A96E" />
      {/* Shirt/collar */}
      <rect x="14" y="4" width="4" height="6" fill="#fff" />
      {/* Tie */}
      <path d="M16 8 L14 10 L16 20 L18 10 L16 8" fill="#8B0000" />
      {/* Buttons */}
      <circle cx="16" cy="22" r="1" fill="#C9A96E" />
      <circle cx="16" cy="26" r="1" fill="#C9A96E" />
    </svg>
  );
}

export function MapPinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="url(#pinGrad)"
      />
      <circle cx="12" cy="9" r="2.5" fill="#fff" />
    </svg>
  );
}

export function SparkleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill="#C9A96E"
        className="animate-[sparkle_1.5s_ease-in-out_infinite]"
      />
    </svg>
  );
}

export function HeelIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 18L4 12L8 12L14 8L20 8C21 8 22 9 22 10V12L20 18L18 18L18 14L8 14L6 18Z"
        fill="#C9A96E"
      />
      <path d="M6 18L6 20" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 14L19 20" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FlowerSmallIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" fill="#F8B4C0" />
      <circle cx="8" cy="12" r="4" fill="#F8B4C0" />
      <circle cx="16" cy="12" r="4" fill="#F8B4C0" />
      <circle cx="10" cy="16" r="4" fill="#F8B4C0" />
      <circle cx="14" cy="16" r="4" fill="#F8B4C0" />
      <circle cx="12" cy="12" r="3" fill="#C9A96E" />
    </svg>
  );
}

export function EnvelopeIcon({ className = "w-6 h-6", aria = { label: "Love letter envelope" } }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={aria.label} aria-hidden={aria.hidden}>
      <defs>
        <linearGradient id="envelopeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAE8E0" />
          <stop offset="100%" stopColor="#F5EDE0" />
        </linearGradient>
        <linearGradient id="envelopeStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8A0B8" />
          <stop offset="100%" stopColor="#C97B7B" />
        </linearGradient>
      </defs>
      {/* Envelope body */}
      <rect x="8" y="14" width="48" height="36" rx="2" fill="url(#envelopeGrad)" stroke="url(#envelopeStroke)" strokeWidth="1.5" className="animate-[fadeIn_0.5s_ease-out_forwards]" />
      {/* Flap left */}
      <path d="M8 14 L32 28 L8 32 Z" fill="url(#envelopeStroke)" opacity="0.8" className="animate-[slideUp_0.4s_ease-out_0.1s_both]" />
      {/* Flap right */}
      <path d="M56 14 L32 28 L56 32 Z" fill="url(#envelopeStroke)" opacity="0.8" className="animate-[slideUp_0.4s_ease-out_0.1s_both]" />
      {/* Center line */}
      <line x1="32" y1="14" x2="32" y2="28" stroke="url(#envelopeStroke)" strokeWidth="1" opacity="0.6" />
      {/* Heart accent */}
      <path
        d="M32 32 Q28 28 26 30 Q24 32 26 34 Q32 38 32 38 Q32 38 38 34 Q40 32 38 30 Q36 28 32 32 Z"
        fill="url(#envelopeStroke)"
        className="animate-[pulse_1.5s_ease-in-out_0.3s_infinite]"
        style={{ transformOrigin: "32px 34px" }}
      />
    </svg>
  );
}
