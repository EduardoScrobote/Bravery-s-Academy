/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "main-bg": "url('/background-image.jpeg')",
      flame: "url('/fire-22.gif')",
    },
  },
};
