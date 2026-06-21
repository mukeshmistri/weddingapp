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
    customSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/kalas.png",
    defaultSrc: "/art/mandap-icon.svg",
    size: {
      className: "w-8 h-8",
    },
  },
  cardEmblem: {
    customSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/MDLogov6.png",
    defaultSrc: "/art/mandap-icon.svg",
    size: {
      className: "w-8 h-8",
    },
  },
  preloaderIcon: {
    customSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/welcome.png",
    defaultSrc: null,
    size: {
      className: "w-32 h-32",
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
    customSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/MDLogov6.png",
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
  sangeetEvent: {
    customSrc: null,
    defaultSrc: null, // PLACEHOLDER: Add sangeet event illustration URL
    size: {
      className: "w-24 h-24",
    },
  },
  haldiEvent: {
    customSrc: null,
    defaultSrc: null, // PLACEHOLDER: Add haldi event illustration URL
    size: {
      className: "w-24 h-24",
    },
  },
  baratEvent: {
    customSrc: null,
    defaultSrc: null, // PLACEHOLDER: Add barat event illustration URL
    size: {
      className: "w-24 h-24",
    },
  },
  weddingEvent: {
    customSrc: null,
    defaultSrc: null, // PLACEHOLDER: Add wedding ceremony illustration URL
    size: {
      className: "w-24 h-24",
    },
  },
  receptionEvent: {
    customSrc: null,
    defaultSrc: null, // PLACEHOLDER: Add reception event illustration URL
    size: {
      className: "w-24 h-24",
    },
  },
  vidaiEvent: {
    customSrc: null,
    defaultSrc: null, // PLACEHOLDER: Add vidai event illustration URL
    size: {
      className: "w-24 h-24",
    },
  },
  upcomingEvent1: {
    customSrc: null,
    defaultSrc: null, // PLACEHOLDER: Add upcoming ceremony 1 illustration URL
    size: {
      className: "w-24 h-24",
    },
  },
  upcomingEvent2: {
    customSrc: null,
    defaultSrc: null, // PLACEHOLDER: Add upcoming ceremony 2 illustration URL
    size: {
      className: "w-24 h-24",
    },
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
