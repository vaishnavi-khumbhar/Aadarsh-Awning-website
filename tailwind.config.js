/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#14396E",      // headline blue (from hero reference)
        blue: {
          DEFAULT: "#23609A", // primary button blue
          deep: "#285F8F",
          soft: "#4A86B8",
          light: "#6F9FC5",
        },
        gold: {
          DEFAULT: "#C8963E",
          muted: "#C89A45",
          champagne: "#E2C27A",
        },
        ivory: "#F8F4EC",
        cream: "#FBF9F4",
        beige: "#E9DFCF",
        charcoal: "#252525",
        grey: "#6D6D6D",
        ink: "#1E1D1B",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1280px" },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(20, 40, 70, 0.18)",
        card: "0 18px 40px -20px rgba(20, 40, 70, 0.28)",
      },
    },
  },
  plugins: [],
};
