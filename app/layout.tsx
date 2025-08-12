import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.srttransportinc.com"),
  title: "SRT Transport Inc. | Reliable Freight & Logistics Services",
  description:
    "SRT Transport Inc. is a trusted Toronto-based trucking company providing reliable freight transportation across Canada and the U.S. On-time deliveries, modern fleet, and a commitment to safety & customer satisfaction.",
  keywords: [
    "SRT Transport Inc",
    "Toronto trucking company",
    "freight transportation",
    "logistics services",
    "Canada trucking",
    "Ontario freight",
    "cross-border shipping",
    "FTL",
    "LTL",
    "Toronto logistics",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "SRT Transport Inc. | Reliable Freight & Logistics Services",
    description:
      "Reliable trucking & logistics services from Toronto to destinations across Canada and the U.S. Modern fleet, professional drivers, and on-time delivery you can trust.",
    url: "https://www.srttransportinc.com",
    siteName: "SRT Transport Inc.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "SRT Transport Inc. Logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SRT Transport Inc. | Reliable Freight & Logistics Services",
    description:
      "Toronto-based trucking company providing safe, efficient freight transportation across Canada & the U.S.",
    images: ["/logo.png"],
  },
  authors: [{ name: "SRT Transport Inc." }],
  category: "Transportation",
  applicationName: "SRT Transport Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
