import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { LocalBusinessSchema } from "@/components/seo/SchemaOrg";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Paso Truck Accident Lawyer | The Carter Law Firm, P.C.",
  description: "Injured in a truck accident in El Paso? The Carter Law Firm, P.C. fights for accident victims in TX, AZ & NM. Free consultation. No fee unless we win. Call (915) 621-1818.",
  metadataBase: new URL("https://www.carterlawwins.com"),
    openGraph: {
    siteName: "The Carter Law Firm, P.C.",
    type: "website",
    locale: "en_US",
    title: "El Paso Truck Accident Lawyer | The Carter Law Firm, P.C.",
    description: "Injured in a truck accident in El Paso? The Carter Law Firm, P.C. fights for accident victims in TX, AZ & NM. Free consultation. No fee unless we win. Call (915) 621-1818.",
    url: "https://www.carterlawwins.com",
    images: [
      {
        url: "https://www.carterlawwins.com/carter-logo-v2.png",
        width: 1200,
        alt: "The Carter Law Firm, P.C.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Paso Truck Accident Lawyer | The Carter Law Firm, P.C.",
    description: "Injured in a truck accident in El Paso? Free consultation. No fee unless we win. Call (915) 621-1818.",
    images: ["https://www.carterlawwins.com/carter-logo-v2.png"],
  },
  alternates: {
    canonical: "https://www.carterlawwins.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <LocalBusinessSchema />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
