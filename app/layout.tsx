import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Playfair_Display, Cormorant_Garamond, Montserrat, Great_Vibes, Cinzel } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wedding Invitation - Deeksha & Mukesh",
  description:
    "You are cordially invited to celebrate the wedding of Deeksha",
  keywords: ["wedding", "invitation", "Deeksha", "Mukesh", "celebration", "love"],
  authors: [{ name: "Deeksha & Mukesh" }],
  openGraph: {
    title: "Wedding Invitation - Deeksha & Mukesh",
    description: "Join us in celebrating our special day!",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C9A96E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`bg-[#FBF7F0] ${playfairDisplay.variable} ${cormorantGaramond.variable} ${montserrat.variable} ${greatVibes.variable} ${cinzel.variable}`}
    >
      <body className="font-body antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
