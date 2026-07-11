export const weddingConfig = {
  couple: {
    bride: "Deeksha",
    groom: "Mukesh",
    hashtag: "#MukeshKiDeeksha",
  },
  date: new Date("2026-07-19T10:00:00"),
  dateDisplay: "July 19, 2026",
  dateDisplayFull: "19th July, 2026",
  venue: {
    name: "Anthurium Adventure Resort & Agro Park",
    city: "Pune",
    fullAddress: "Anthurium Adventure Resort & Agro Park, Pune",
  },
  images: {
    couplePhoto: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/MDLogov7.png",
    //bride: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/Deekshav1.png",
    //groom: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/Mukeshv1.png",
    heroBackground: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/InvitePage1v2.png",
    saveDateBackground: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/InvitePage2v3.png", // set to a raw GitHub URL from https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/
    eventsBackground: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/InvitePage3v4.png", // set to a raw GitHub URL from https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/
    footerBackground: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/InvitePage4v4.png", // set to a raw GitHub URL from https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/
  },
  audio: {
    bgMusic: "https://github.com/mukeshmistri/wedding-music/raw/refs/heads/main/WeddingMusicDemo.mp3",
  },
  footer: {
    // 0 = fully transparent overlay, 1 = fully opaque overlay
    overlayOpacity: 0.9,
  },
  swagatamIcons: {
    namasteIconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/preloader.png", // set this to a PNG URL or local /art path for custom namaste icon
    brideGroomIconSrc: null, // set this to a PNG URL or local /art path for custom bride/groom icon
  },
  events: [
    {
      id: "engagement",
      name: "Engagement",
      icon: "party",
      iconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/Engagementv3.png", // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "upcomingEvent1",
      date: "18th July 2026",
      time: "11 AM Onwards",
      venue: "Banquet Hall",
      address: "Anthurium Adventure Resort & Agro Park, Pune",
      dressCode: {
        theme: "Elegant Celebration",
        colors: ["#C9A96E", "#8E6D4F", "#E8D5A8"],
        suggestions: {
          women: "Traditional festive attire",
          men: "Festive traditional attire",
        },
      },
    },
    {
      id: "haldi",
      name: "Haldi",
      icon: "flower",
      iconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/Haldiv2.png", // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "haldiEvent",
      date: "18th July 2026",
      time: "3:30 PM Onwards",
      venue: "Poolside Deck",
      address: "Anthurium Adventure Resort & Agro Park, Pune",
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
      id: "sangeet",
      name: "Sangeet",
      icon: "musical-note",
      iconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/Sangeetv2.png", // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "sangeetEvent",
      date: "18th July 2026",
      time: "7 PM Onwards",
      venue: "Poolside Pavilion",
      address: "Anthurium Adventure Resort & Agro Park, Pune",
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
      id: "barat",
      name: "Barat",
      icon: "horse",
      iconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/Barat.png", // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "baratEvent",
      date: "19th July 2026",
      time: "10 AM Onwards",
      venue: "Royal Caravan Gateway",
      address: "Anthurium Adventure Resort & Agro Park, Pune",
      dressCode: {
        theme: "Festive Procession",
        colors: ["#F4D03F", "#C97B7B", "#8E6D4F"],
        suggestions: {
          women: "Bright traditional attire with elegant accessories",
          men: "Festive kurta or sherwani with a matching stole",
        },
      },
    },
    {
      id: "akshata",
      name: "Akshata",
      icon: "church",
      iconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/Akshadav1.png", // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "weddingEvent",
      date: "19th July 2026",
      time: "12:24 PM",
      venue: "Poolside Pavilion",
      address: "Anthurium Adventure Resort & Agro Park, Pune",
      dressCode: {
        theme: "Sacred Ceremony",
        colors: ["#8B0000", "#C9A96E", "#800020"],
        suggestions: {
          women: "Traditional saree or lehenga",
          men: "Traditional kurta or sherwani",
        },
      },
    },
    {
      id: "saptapadi",
      name: "Saptapadi",
      icon: "church",
      iconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/Saptapadi.png", // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "receptionEvent",
      date: "19th July 2026",
      time: "01:00 PM Onwards",
      venue: "Banquet Hall",
      address: "Anthurium Adventure Resort & Agro Park, Pune",
      dressCode: {
        theme: "Traditional Wedding",
        colors: ["#7B3F00", "#C9A96E", "#A67C52"],
        suggestions: {
          women: "Traditional saree or festive ethnic wear",
          men: "Sherwani or traditional kurta set",
        },
      },
    },
    {
      id: "vidai",
      name: "Vidai",
      icon: "home",
      iconSrc: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/Vidai.png", // set this to a PNG URL or local /art path
      iconSizeClass: "w-24 h-24",
      artworkId: "vidaiEvent",
      date: "19th July 2026",
      time: "4 PM Onwards",
      venue: "Dream Home Journey",
      address: "Pune",
      dressCode: {
        theme: "Graceful Farewell",
        colors: ["#C9A96E", "#1C1510", "#F4D03F"],
        suggestions: {
          women: "Elegant traditional attire befitting a loving farewell",
          men: "Classic kurta or kurta set with a warm finishing touch",
        },
      },
    },
  ],
} as const;

export type Event = (typeof weddingConfig.events)[number];
