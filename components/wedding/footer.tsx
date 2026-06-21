"use client";

import { weddingConfig } from "@/lib/wedding-config";
import { invitationConfig } from "@/lib/invitation.config";
import { LotusIcon, FoliageIcon, HeartIcon, ShareIcon } from "./wedding-icons";

export function Footer() {
  const { groom, bride, hashtag } = weddingConfig.couple;
  const customBackgroundImage = weddingConfig.images.footerBackground;
  const overlayOpacity = weddingConfig.footer.overlayOpacity;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${groom} & ${bride} Wedding`,
          text: invitationConfig.emojis.footer.shareText,
          url: window.location.href,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert(invitationConfig.emojis.footer.copyAlert);
      } catch {
        // Clipboard failed
      }
    }
  };

  return (
    <footer
      className="py-12 px-3 pb-[118px] text-center"
      style={{
        background: customBackgroundImage
          ? `linear-gradient(180deg, rgba(250,243,231,${overlayOpacity}) 0%, rgba(245,228,214,${Math.max(
              0,
              overlayOpacity - 0.08
            )}) 52%, rgba(250,243,231,${Math.min(1, overlayOpacity + 0.05)}) 100%), url('${customBackgroundImage}') center/cover no-repeat`
          : "linear-gradient(180deg, var(--ivory), var(--peach))",
      }}
    >
         <div className="text-2xl tracking-[8px] opacity-30 mb-4" style={{ color: "#A88346" }}>
           {invitationConfig.emojis.footer.ornament}
         </div>

         <h2
           className="font-display text-5xl mb-2 font-bold"
           style={{
             color: "#3A291E",
             fontWeight: "800",
             textShadow: "0 1px 0 rgba(255,255,255,0.75), 0 2px 10px rgba(90,40,20,0.18)",
           }}
         >
           {groom} & {bride}
         </h2>

         <p
           className="font-sans-alt text-sm tracking-[2px] mb-4 font-bold"
           style={{ color: "#7A5A2E", textShadow: "0 1px 3px rgba(255,255,255,0.55)" }}
         >
           {hashtag}
         </p>

         <p
           className="font-body text-[1rem] italic max-w-[380px] mx-auto mb-5 leading-relaxed font-semibold"
           style={{ color: "#3F322A", textShadow: "0 1px 3px rgba(255,255,255,0.45)" }}
         >
           &ldquo;Not by chance, but by grace🙏🏼✨&rdquo;
         </p>

         <button
           onClick={handleShare}
           className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-sans-alt text-[0.58rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 mb-4 font-bold"
           style={{
             background: "transparent",
             border: "1.6px solid var(--gold-accent)",
             color: "#7A5A2E",
             boxShadow: "0 3px 12px rgba(201,169,110,0.22)",
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.background = "var(--gold-accent)";
             e.currentTarget.style.color = "var(--w)";
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.background = "transparent";
             e.currentTarget.style.color = "#7A5A2E";
           }}
         >
           <ShareIcon className="w-4 h-4" aria={{ label: "Share icon" }} />
           Share Invitation
         </button>

         <div className="flex justify-center gap-3 tracking-[8px] opacity-35 mb-4" style={{ color: "#A88346" }}>
           <LotusIcon className="w-5 h-5" aria={{ hidden: true }} />
           <FoliageIcon className="w-5 h-5" aria={{ hidden: true }} />
           <LotusIcon className="w-5 h-5" aria={{ hidden: true }} />
           <FoliageIcon className="w-5 h-5" aria={{ hidden: true }} />
           <LotusIcon className="w-5 h-5" aria={{ hidden: true }} />
         </div>

         <p
           className="font-sans-alt text-[0.46rem] tracking-[2px] uppercase mt-3.5 flex items-center justify-center gap-1.5"
           style={{ color: "#6E5A47", fontWeight: 700, textShadow: "0 1px 2px rgba(255,255,255,0.45)" }}
         >
           Made with <HeartIcon className="w-3 h-3" aria={{ hidden: true }} /> for {groom} & {bride}
         </p>
    </footer>
  );
}
