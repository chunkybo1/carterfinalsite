import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const alfaSlabOne = localFont({
  src: "../../public/AlfaSlabOne-Regular.ttf",
  variable: "--font-alfa-slab-one",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carter Law Firm | Champion for the Injured",
  description: "Texas, Arizona & New Mexico's Champion for the Injured. When you're hurt and overwhelmed, you need more than a lawyer—you need a fighter who treats you like family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${alfaSlabOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
