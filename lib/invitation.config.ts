import { weddingConfig } from "@/lib/wedding-config";

export const invitationConfig = {
    preloader: {
        text: {
            headline: "Two hearts, one love...",
            subline: "Loading your invitation",
        },
        colors: {
            headline: "#B89449",
            subline: "rgba(232,213,168,.72)",
            background: "linear-gradient(135deg, var(--rd), var(--rm))",
        },
        headline: {
            textShadow: "0 2px 8px rgba(47, 42, 38, 0.28), 0 0 16px rgba(184, 148, 73, 0.45), 0 0 30px rgba(184, 148, 73, 0.28)",
        },
        textStyles: {
            headlineSize: "1.6rem",
            sublineSize: "0.48rem",
            sublineLetterSpacing: "3px",
            sublineMarginTop: "0.25rem",
            initialOpacity: 0,
        },
        loader: {
            size: "w-[90px] h-[90px]",
            marginBottom: "mb-[18px]",
            ringAnimationDurations: {
                thirdRing: "1.8s",
            },
            namasteIconSize: "w-32 h-32",
        },
    },
    hero: {
        names: {
            fontSizeMobile: "64px",
            fontSizeDesktop: "72px",
            lineHeight: 1.15,
            ampersandFontSizeMobile: "34px",
            ampersandFontSizeDesktop: "38px",
            ampersandMarginYClass: "my-4",
        },
        background: {
            color: "var(--cream)",
            imageSize: "cover",
            imagePosition: "center",
            filter: "saturate(1.06) contrast(1.05)",
            parchmentOverlay: "rgba(251, 247, 242, 0.08)",
            vignette: "radial-gradient(ellipse at center, rgba(255,255,255,0) 58%, rgba(30, 22, 16, 0.14) 100%)",
        },
    },
    avatars: {
        sources: {
            bride: weddingConfig.images.bride,
            groom: weddingConfig.images.groom,
        },
        position: {
            containerClass: "fixed bottom-3 left-0 right-0 z-[3] flex justify-between items-end px-2 pointer-events-none transition-opacity duration-1000",
        },
        size: {
            widthClass: "w-[70px]",
            heightClass: "h-[88px]",
        },
        opacityClass: "opacity-100",
    },
    events: {
        iconSizeClass: "w-24 h-24",
    },
    emojis: {
        music: {
            playing: "🔊",
            paused: "🎵",
        },
        countdown: {
            celebrate: "🎊",
        },
        rsvp: {
            ornament: "✦ ✦ ✦",
            acceptLabel: "🎉 Accept",
            declineLabel: "😢 Decline",
            wishesLabel: "Wishes 💝",
            success: "✓",
        },
        events: {
            ornament: "✦ ✦ ✦",
        },
        envelope: {
            cornerSparkle: "✦",
        },
        footer: {
            shareText: "You are invited! 💒",
            copyAlert: "✨ Link copied!",
            ornament: "🪷 🌿 🪷 🌿 🪷",
        },
    },
    scratch: {
        brushSize: 16,
        threshold: 0.4,
        seal: {
            sizeClass: "w-[60px] h-[60px]",
            minWidthClass: "min-w-[56px]",
            maxWidthClass: "max-w-[84px]",
            containerGapClass: "gap-3",
            fill: "#F2ECE2",
            revealFill: "#FBF7F2",
            border: "1.5px solid #C8A75E",
            textColor: "var(--charcoal)",
        },
    },
    petals: {
        enabled: true,
        initialCount: 7,
        maxPetals: 14,
        keepRecentCount: 10,
        spawnIntervalMs: 1600,
        leftRangePercent: [0, 25] as const,
        rightRangePercent: [75, 100] as const,
        colors: ["#E85070", "#D44060", "#C83858", "#F06080", "#E04868"] as const,
        width: {
            base: 7,
            variance: 4,
        },
        height: {
            base: 8,
            variance: 4,
        },
        duration: {
            base: 7,
            variance: 6,
        },
        delay: {
            variance: 2,
        },
        drift: {
            d1Variance: 24,
            d1Offset: 12,
            d2Variance: 16,
            d2Offset: 8,
        },
        containerClass: "fixed inset-0 pointer-events-none z-[2] overflow-hidden",
    },
    decorations: {
        saveDate: {
            background: "linear-gradient(180deg, #FBF7F2 0%, #F3EEE7 40%, #FBF7F2 100%)",
            dotPattern: {
                opacityClass: "opacity-[0.02]",
                image: "radial-gradient(var(--gold-accent) .6px, transparent .6px)",
                size: "40px 40px",
            },
            frame: {
                outerBorder: "1.5px solid rgba(232,160,184,.15)",
                innerBorder: "1px solid rgba(201,169,110,.08)",
            },
        },
    },
    music: {
        source: weddingConfig.audio.bgMusic,
        loop: true,
        autoplay: false,
        controls: false,
        button: {
            className: "fixed top-3 right-3 z-[2000] w-[38px] h-[38px] rounded-full flex items-center justify-center text-base cursor-pointer transition-all duration-300 backdrop-blur-md hover:scale-105",
            background: "rgba(255,255,255,.88)",
            border: "1.5px solid var(--gold-accent)",
        },
    },
} as const;
