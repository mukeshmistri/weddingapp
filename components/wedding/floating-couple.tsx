"use client";

import { weddingConfig } from "@/lib/wedding-config";
import { invitationConfig } from "@/lib/invitation.config";
import { useResolvedArt } from "@/lib/custom-art";

interface FloatingCoupleProps {
  isVisible: boolean;
}

export function FloatingCouple({ isVisible }: FloatingCoupleProps) {
  const { bride, groom } = weddingConfig.couple;
  const { src: brideSrc, onError: onBrideError, entry: brideEntry } = useResolvedArt("brideIllustration");
  const { src: groomSrc, onError: onGroomError, entry: groomEntry } = useResolvedArt("groomIllustration");

  return (
    <>
      {/* Small corner accents */}
      <div
        className={`${invitationConfig.avatars.position.containerClass} ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Bride */}
        <div className={`${brideEntry.size?.className ?? `${invitationConfig.avatars.size.widthClass} ${invitationConfig.avatars.size.heightClass}`} relative ${invitationConfig.avatars.opacityClass}`}>
          {brideSrc ? (
            <img
              src={brideSrc}
              alt={bride}
              className="w-full h-full object-contain object-bottom"
              onError={onBrideError}
            />
          ) : (
            <div className="w-4 h-4 rounded-full mx-auto mt-4" style={{ background: "rgba(107, 100, 94, 0.35)" }} />
          )}
        </div>

        {/* Groom */}
        <div className={`${groomEntry.size?.className ?? `${invitationConfig.avatars.size.widthClass} ${invitationConfig.avatars.size.heightClass}`} relative ${invitationConfig.avatars.opacityClass}`}>
          {groomSrc ? (
            <img
              src={groomSrc}
              alt={groom}
              className="w-full h-full object-contain object-bottom"
              onError={onGroomError}
            />
          ) : (
            <div className="w-4 h-4 rounded-full mx-auto mt-4" style={{ background: "rgba(107, 100, 94, 0.35)" }} />
          )}
        </div>
      </div>
    </>
  );
}
