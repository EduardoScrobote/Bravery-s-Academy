/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "braves-red": "#c43f22",
        "braves-secondary": "#0b101d",
        pix: "#08bfb1",
      },
    },
    backgroundImage: {
      "main-bg": "url('/background-image.jpeg')",
      flame: "url('/fire-22.gif')",
    },
  },
};
