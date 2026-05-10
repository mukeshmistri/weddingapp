export const weddingConfig = {
  couple: {
    bride: "Deeksha",
    groom: "Mukesh",
    hashtag: "#DeekshaWedsMukesh",
  },
  date: new Date("2026-08-09T10:00:00"),
  dateDisplay: "August 9, 2026",
  dateDisplayFull: "9th August, 2026",
  venue: {
    name: "Awesome Place",
    city: "Kolhapur",
    fullAddress: "Awesome Place, Kolhapur",
  },
  images: {
    couplePhoto: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/MDImage.png",
    bride: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/D2.png",
    groom: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/M2.png",
    heroBackground: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/InviteFirstPageV3.png",
  },
  audio: {
    bgMusic: "https://github.com/mukeshmistri/wedding-music/raw/refs/heads/main/WeddingMusicDemo.mp3",
  },
  swagatamIcons: {
    namasteIconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/preloader.png", // set this to a PNG URL or local /art path for custom namaste icon
    brideGroomIconSrc: null, // set this to a PNG URL or local /art path for custom bride/groom icon
  },
  events: [
    {
      id: "sangeet",
      name: "Sangeet Night",
      icon: "musical-note",
      iconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/sangeet.png", // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "sangeetEvent",
      date: "August 8, 2026",
      time: "7:00 PM Onwards",
      venue: "Royal Ballroom",
      address: "Awesome Place, Kolhapur",
      dressCode: {
        theme: "Glam & Glitter",
        colors: ["#C9A96E", "#1C1510", "#C97B7B"],
        suggestions: {
          women: "Sequined lehenga or shimmery saree in gold, rose, or jewel tones",
          men: "Designer kurta with embroidered jacket or Indo-western ensemble",
        },
      },
    },
    {
      id: "haldi-mehendi",
      name: "Haldi",
      icon: "flower",
      iconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/Haldi.png", // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "haldiEvent",
      date: "August 8, 2026",
      time: "11 AM - 5 PM",
      venue: "Garden Pavilion",
      address: "Awesome Place, Kolhapur",
      dressCode: {
        theme: "Yellow & Green Festive",
        colors: ["#F4D03F", "#27AE60", "#F39C12"],
        suggestions: {
          women: "Yellow or green traditional outfit - saree, lehenga, or suit",
          men: "Yellow kurta with white pajama or pastel colored kurta set",
        },
      },
    },
    {
      id: "wedding",
      name: "Wedding Ceremony",
      icon: "church",
      iconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/Wedding.png", // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "weddingEvent",
      date: "August 9, 2026",
      time: "10 AM - 2 PM",
      venue: "The Grand Mandap",
      address: "Awesome Place, Kolhapur",
      dressCode: {
        theme: "Royal Traditional",
        colors: ["#8B0000", "#C9A96E", "#800020"],
        suggestions: {
          women: "Traditional silk saree or bridal lehenga in red, maroon, or gold",
          men: "Sherwani or bandhgala in maroon, gold, or ivory",
        },
      },
    },
    {
      id: "reception",
      name: "Reception",
      icon: "party",
      iconSrc: null, // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "receptionEvent",
      date: "August 9, 2026",
      time: "7:00 PM Onwards",
      venue: "Crystal Hall",
      address: "Awesome Place, Kolhapur",
      dressCode: {
        theme: "Elegant Evening",
        colors: ["#2C3E50", "#C9A96E", "#E8D5A8"],
        suggestions: {
          women: "Designer gown, cocktail saree, or elegant lehenga in pastels or jewel tones",
          men: "Tuxedo, suit, or designer Indo-western in navy, black, or charcoal",
        },
      },
    },
    {
      id: "coming-soon-1",
      name: "Upcoming Ceremony",
      icon: "party",
      iconSrc: null, // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "upcomingEvent1",
      date: "To be announced",
      time: "Details coming soon",
      venue: "Information will be shared",
      address: "Information will be shared",
      dressCode: {
        theme: "To be announced",
        colors: ["#C9A96E", "#E8D5A8", "#2F2A26"],
        suggestions: {
          women: "Details coming soon",
          men: "Details coming soon",
        },
      },
    },
    {
      id: "coming-soon-2",
      name: "More Celebrations",
      icon: "musical-note",
      iconSrc: null, // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "upcomingEvent2",
      date: "To be announced",
      time: "Details coming soon",
      venue: "Information will be shared",
      address: "Information will be shared",
      dressCode: {
        theme: "To be announced",
        colors: ["#C9A96E", "#E8D5A8", "#2F2A26"],
        suggestions: {
          women: "Details coming soon",
          men: "Details coming soon",
        },
      },
    },
  ],
} as const;

export type Event = (typeof weddingConfig.events)[number];
