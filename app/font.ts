import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const DMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-DM-Sans",
});

export const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/ClashDisplay-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/ClashDisplay-Extralight.woff2",
      weight: "200",
    },
  ],
  variable: "--font-clash-display",
});
