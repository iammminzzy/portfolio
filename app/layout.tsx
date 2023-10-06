import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
