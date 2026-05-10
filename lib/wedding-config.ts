export const weddingConfig = {
  couple: {
    bride: "Deeksha",
    groom: "Mukesh",
    hashtag: "#DeekshaWedsMukesh",
  },
  date: new Date("2026-07-20T10:00:00"),
  dateDisplay: "July 20, 2026",
  dateDisplayFull: "20th July, 2026",
  venue: {
    name: "Awesome Place",
    city: "Kolhapur",
    fullAddress: "Awesome Place, Kolhapur",
  },
  images: {
    couplePhoto: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/MDImage.png",
    bride: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/D2.png",
    groom: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/M2.png",
    heroBackground: "https://raw.githubusercontent.com/mukeshmistri/wedding-music/main/FirstPage.jpeg",
  },
  audio: {
    bgMusic: "https://github.com/mukeshmistri/wedding-music/raw/refs/heads/main/WeddingMusicDemo.mp3",
  },
  events: [
    {
      id: "sangeet",
      name: "Sangeet Night",
      icon: "musical-note",
      date: "July 18, 2026",
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
      name: "Haldi & Mehendi",
      icon: "flower",
      date: "July 19, 2026",
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
      date: "July 20, 2026",
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
      date: "July 20, 2026",
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
  ],
} as const;

export type Event = (typeof weddingConfig.events)[number];
