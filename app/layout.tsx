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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Video Assessment Coach",
  description:
    "Turn recorded performances into focused, evidence-linked feedback and actionable next steps.",
  openGraph: {
    title: "Video Assessment Coach",
    description:
      "See the moment. Shape what’s next with focused, evidence-linked video feedback.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Video Assessment Coach — See the moment. Shape what’s next.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Assessment Coach",
    description:
      "See the moment. Shape what’s next with focused, evidence-linked video feedback.",
    images: ["/og.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
