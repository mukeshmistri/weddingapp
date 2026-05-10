"use client";

// High-definition decorative SVG elements for wedding invitation

export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 24"
      className={`w-48 h-6 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="#C9A96E" />
          <stop offset="50%" stopColor="#E8D5A8" />
          <stop offset="70%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path d="M0 12 H85" stroke="url(#dividerGrad)" strokeWidth="1" />
      <path d="M115 12 H200" stroke="url(#dividerGrad)" strokeWidth="1" />
      <g transform="translate(100, 12)">
        <path
          d="M0 -8 C4 -8 8 -4 8 0 C8 4 4 8 0 8 C-4 8 -8 4 -8 0 C-8 -4 -4 -8 0 -8"
          fill="none"
          stroke="#C9A96E"
          strokeWidth="1"
          style={{ animation: "spin-cw 8s linear infinite" }}
        />
        <circle cx="0" cy="0" r="2" fill="#C9A96E" />
      </g>
    </svg>
  );
}

export function FloralCorner({ position = "top-left", className = "" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"; className?: string }) {
  const rotations = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90)",
    "bottom-right": "rotate(180)",
    "bottom-left": "rotate(270)",
  };
  
  return (
    <svg
      viewBox="0 0 120 120"
      className={`w-24 h-24 ${className}`}
      style={{ transform: rotations[position] }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="floralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8B7340" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {/* Main vine */}
      <path
        d="M5 5 Q30 10 45 35 Q55 55 50 80 Q48 95 35 105"
        stroke="url(#floralGrad)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M25 15 Q35 10 40 20 Q35 25 25 15"
        fill="#C9A96E"
        fillOpacity="0.3"
        style={{ animation: "swing 3s ease-in-out infinite" }}
      />
      <path
        d="M40 30 Q55 25 55 40 Q45 45 40 30"
        fill="#C9A96E"
        fillOpacity="0.25"
        style={{ animation: "swing 3.5s ease-in-out infinite", animationDelay: "0.5s" }}
      />
      <path
        d="M50 55 Q65 55 60 70 Q50 70 50 55"
        fill="#C9A96E"
        fillOpacity="0.2"
        style={{ animation: "swing 4s ease-in-out infinite", animationDelay: "1s" }}
      />
      {/* Small flowers */}
      <g transform="translate(20, 25)" style={{ animation: "bloom 4s ease-in-out infinite" }}>
        <circle cx="0" cy="0" r="3" fill="#E8A0B8" fillOpacity="0.5" />
        <circle cx="0" cy="-4" r="2" fill="#F8D0D8" fillOpacity="0.4" />
        <circle cx="4" cy="0" r="2" fill="#F8D0D8" fillOpacity="0.4" />
        <circle cx="0" cy="4" r="2" fill="#F8D0D8" fillOpacity="0.4" />
        <circle cx="-4" cy="0" r="2" fill="#F8D0D8" fillOpacity="0.4" />
      </g>
    </svg>
  );
}

export function MandalaPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mandalaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#E8D5A8" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <g transform="translate(100, 100)">
        {/* Outer rings */}
        <circle r="95" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.1" fill="none" />
        <circle r="85" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.12" fill="none" />
        <circle r="70" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />
        
        {/* Petal pattern */}
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30})`}>
            <path
              d="M0 -60 Q15 -45 0 -30 Q-15 -45 0 -60"
              fill="url(#mandalaGrad)"
              stroke="#C9A96E"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
          </g>
        ))}
        
        {/* Inner pattern */}
        {[...Array(8)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 45})`}>
            <path
              d="M0 -40 Q10 -30 0 -20 Q-10 -30 0 -40"
              fill="#C9A96E"
              fillOpacity="0.08"
            />
          </g>
        ))}
        
        {/* Center */}
        <circle r="15" fill="url(#mandalaGrad)" />
        <circle r="8" fill="#C9A96E" fillOpacity="0.15" />
        <circle r="3" fill="#C9A96E" fillOpacity="0.25" />
      </g>
    </svg>
  );
}

export function LotusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`w-12 h-12 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lotusGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#E8A0B8" />
          <stop offset="100%" stopColor="#F8D0D8" />
        </linearGradient>
        <linearGradient id="lotusGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#E8D5A8" />
        </linearGradient>
      </defs>
      
      {/* Center petal */}
      <path
        d="M32 8 C38 18 38 32 32 45 C26 32 26 18 32 8"
        fill="url(#lotusGrad1)"
        style={{ animation: "bloom 3s ease-in-out infinite" }}
      />
      
      {/* Left petals */}
      <path
        d="M32 45 C20 40 12 30 16 18 C22 26 28 38 32 45"
        fill="url(#lotusGrad1)"
        fillOpacity="0.8"
        style={{ animation: "bloom 3s ease-in-out infinite", animationDelay: "0.2s" }}
      />
      <path
        d="M32 45 C14 42 4 28 10 14 C18 24 26 38 32 45"
        fill="url(#lotusGrad1)"
        fillOpacity="0.6"
        style={{ animation: "bloom 3s ease-in-out infinite", animationDelay: "0.4s" }}
      />
      
      {/* Right petals */}
      <path
        d="M32 45 C44 40 52 30 48 18 C42 26 36 38 32 45"
        fill="url(#lotusGrad1)"
        fillOpacity="0.8"
        style={{ animation: "bloom 3s ease-in-out infinite", animationDelay: "0.2s" }}
      />
      <path
        d="M32 45 C50 42 60 28 54 14 C46 24 38 38 32 45"
        fill="url(#lotusGrad1)"
        fillOpacity="0.6"
        style={{ animation: "bloom 3s ease-in-out infinite", animationDelay: "0.4s" }}
      />
      
      {/* Base */}
      <ellipse cx="32" cy="50" rx="18" ry="6" fill="url(#lotusGrad2)" fillOpacity="0.4" />
      
      {/* Center detail */}
      <circle cx="32" cy="32" r="4" fill="#C9A96E" fillOpacity="0.6" />
    </svg>
  );
}

export function RingsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`w-8 h-8 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D5A8" />
          <stop offset="50%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#8B7340" />
        </linearGradient>
      </defs>
      
      {/* Left ring */}
      <ellipse
        cx="18"
        cy="24"
        rx="10"
        ry="12"
        stroke="url(#ringGrad)"
        strokeWidth="3"
        fill="none"
        style={{ animation: "glow 2s ease-in-out infinite" }}
      />
      
      {/* Right ring */}
      <ellipse
        cx="30"
        cy="24"
        rx="10"
        ry="12"
        stroke="url(#ringGrad)"
        strokeWidth="3"
        fill="none"
        style={{ animation: "glow 2s ease-in-out infinite", animationDelay: "0.5s" }}
      />
      
      {/* Diamond */}
      <g transform="translate(30, 12)">
        <path
          d="M0 0 L3 4 L0 8 L-3 4 Z"
          fill="#E8D5A8"
          stroke="#C9A96E"
          strokeWidth="0.5"
          style={{ animation: "sparkle 1.5s ease-in-out infinite" }}
        />
      </g>
    </svg>
  );
}

export function HeartDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`w-8 h-8 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="heartDecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8A0B8" />
          <stop offset="100%" stopColor="#C97B7B" />
        </linearGradient>
      </defs>
      <path
        d="M20 35 C20 35 5 25 5 14 C5 8 10 4 16 4 C18.5 4 20 6 20 8 C20 6 21.5 4 24 4 C30 4 35 8 35 14 C35 25 20 35 20 35Z"
        fill="url(#heartDecGrad)"
        fillOpacity="0.8"
        style={{ animation: "hearts-pulse 2s ease-in-out infinite" }}
      />
    </svg>
  );
}

export function ScrollIndicator({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 40"
      className={`w-6 h-10 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="38"
        rx="11"
        stroke="#C9A96E"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="#C9A96E"
        style={{ animation: "bounce-arrow 2s ease-in-out infinite" }}
      />
    </svg>
  );
}

export function SparkleCluster({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`w-10 h-10 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Large sparkle */}
      <path
        d="M30 5 L32 25 L52 30 L32 35 L30 55 L28 35 L8 30 L28 25 Z"
        fill="#C9A96E"
        fillOpacity="0.6"
        style={{ animation: "sparkle 2s ease-in-out infinite" }}
      />
      {/* Small sparkles */}
      <path
        d="M15 15 L16 20 L21 21 L16 22 L15 27 L14 22 L9 21 L14 20 Z"
        fill="#E8D5A8"
        fillOpacity="0.5"
        style={{ animation: "sparkle 1.5s ease-in-out infinite", animationDelay: "0.3s" }}
      />
      <path
        d="M45 40 L46 44 L50 45 L46 46 L45 50 L44 46 L40 45 L44 44 Z"
        fill="#E8D5A8"
        fillOpacity="0.5"
        style={{ animation: "sparkle 1.5s ease-in-out infinite", animationDelay: "0.6s" }}
      />
    </svg>
  );
}

export function DiamondDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A96E]" />
      <svg viewBox="0 0 12 12" className="w-2 h-2" fill="#C9A96E">
        <rect x="6" y="0" width="6" height="6" transform="rotate(45 6 6)" fillOpacity="0.6" />
      </svg>
      <div className="w-12 h-px bg-gradient-to-r from-[#C9A96E] to-transparent" />
    </div>
  );
}

export function WavePattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 30"
      className={`w-full h-8 ${className}`}
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15 Q50 5 100 15 T200 15 T300 15 T400 15"
        stroke="#C9A96E"
        strokeWidth="1"
        strokeOpacity="0.2"
        fill="none"
      />
      <path
        d="M0 20 Q50 10 100 20 T200 20 T300 20 T400 20"
        stroke="#C9A96E"
        strokeWidth="0.5"
        strokeOpacity="0.15"
        fill="none"
      />
    </svg>
  );
}
