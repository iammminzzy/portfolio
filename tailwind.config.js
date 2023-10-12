/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSm: "1024px",
        containerXs: "768px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleFont: ["var(--font-clash-display)", "sans-serif"],
        bodyFont: ["var(--font-DM-Sans)", "sans-serif"],
      },
      boxShadow: {
        headerShadow: "0 0px 35px -9px rgba(2,12,20,0.2)",
      },
      colors: {
        sectionColor: "rgb(255, 251, 235)",
        light: "#ffffff",
        dark: "#191919",
        pointYellow: "rgb(251 191 36)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    writingMode: ["rl"],
  },
};
