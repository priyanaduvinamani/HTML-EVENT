import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "World Mosaic | One World. Many Cultures. One Celebration.",
  description:
    "A two-day international multicultural festival bringing people together to experience cultures through traditional performances, music, dance, food, art, crafts, exhibitions and interactive activities.",
  keywords: [
    "World Mosaic",
    "multicultural festival",
    "cultural festival",
    "international festival",
    "music dance food art",
  ],
  openGraph: {
    title: "World Mosaic | International Multicultural Festival",
    description:
      "One World. Many Cultures. One Celebration. Experience cultures through performances, music, dance, food, art and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
