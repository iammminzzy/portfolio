import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

const clashDisplay = localFont({
  src: [
    {
      path: "./fonts/ClashDisplay-Bold.woff2",
      weight: "700",
    },
    {
      path: "./fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
    },
    {
      path: "./fonts/ClashDisplay-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/ClashDisplay-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/ClashDisplay-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/ClashDisplay-Extralight.woff2",
      weight: "200",
    },
  ],
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  title: "Minjee Son",
  description:
    "I'm a dedicated Front End Developer with a passion for creating exceptional user experiences. I have mainly used React and TypeScript throughout my career and am highly proficient in the foundational frontend languages of HTML, CSS, and JavaScript. I'm also a lifelong learner who embraces new challenges!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${clashDisplay.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
