import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ServeWell — Health & Fitness with a Servant's Heart | Dr San, London",
    template: "%s — ServeWell",
  },
  description:
    "Professional health & fitness coaching in London and online. Strength to serve — personal training, nutrition, recovery and community wellness with a missionary heart.",
  keywords: ["personal trainer", "health coach", "fitness", "London", "nutrition", "wellbeing", "online coaching"],
  openGraph: {
    title: "ServeWell — Strength to Serve",
    description: "Professional health & fitness with a servant's heart. London & online.",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-ink font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
