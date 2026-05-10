import { weddingConfig } from "@/lib/wedding-config";

export type CustomArtEntry = {
  customSrc: string | null;
  defaultSrc: string | null;
  size?: {
    className?: string;
  };
};

export const customArtConfig = {
  heroEmblem: {
    customSrc: null,
    defaultSrc: "/art/mandap-icon.svg",
    size: {
      className: "w-8 h-8",
    },
  },
  cardEmblem: {
    customSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/MD.png",
    defaultSrc: "/art/mandap-icon.svg",
    size: {
      className: "w-8 h-8",
    },
  },
  preloaderIcon: {
    customSrc: null,
    defaultSrc: null,
    size: {
      className: "w-8 h-8",
    },
  },
  brideIllustration: {
    customSrc: null,
    defaultSrc: weddingConfig.images.bride,
    size: {
      className: "w-[70px] h-[88px]",
    },
  },
  groomIllustration: {
    customSrc: null,
    defaultSrc: weddingConfig.images.groom,
    size: {
      className: "w-[70px] h-[88px]",
    },
  },
  envelopeIcon: {
    customSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/MD.png",
    defaultSrc: null,
    size: {
      className: "w-5 h-5",
    },
  },
  eventIconCalendar: {
    customSrc: null,
    defaultSrc: null,
  },
  eventIconParty: {
    customSrc: null,
    defaultSrc: null,
  },
} satisfies Record<string, CustomArtEntry>;

export type CustomArtKey = keyof typeof customArtConfig;

/*
Configurable visuals (single-file customization):
- Hero emblem art -> customArtConfig.heroEmblem
- Invitation card emblem art -> customArtConfig.cardEmblem
- Preloader motif art -> customArtConfig.preloaderIcon
- Bride illustration -> customArtConfig.brideIllustration
- Groom illustration -> customArtConfig.groomIllustration
- Envelope icon art -> customArtConfig.envelopeIcon
- Optional event icon art placeholders -> customArtConfig.eventIconCalendar, customArtConfig.eventIconParty
*/
