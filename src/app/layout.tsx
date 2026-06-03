import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lair-psi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LAIR — Your Private Command Center",
  description:
    "LAIR helps you organize your routines, goals, tasks, and progress in one private digital space. A personal operating system for ambitious people.",
  keywords: [
    "personal command center",
    "productivity",
    "goals",
    "routines",
    "personal dashboard",
    "self improvement",
    "LAIR",
  ],
  openGraph: {
    title: "LAIR — Your Private Command Center",
    description:
      "Organize your routines, goals, tasks, and progress in one private digital space.",
    url: siteUrl,
    siteName: "LAIR",
    images: [
      {
        url: "/assets/images/lair-hero-poster.jpg",
        width: 1280,
        height: 720,
        alt: "LAIR — your private command center",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAIR — Your Private Command Center",
    description:
      "Organize your routines, goals, tasks, and progress in one private digital space.",
    images: ["/assets/images/lair-hero-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
