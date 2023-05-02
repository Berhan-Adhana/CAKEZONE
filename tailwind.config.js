/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        primary: " #E88F2A",
        secondary: " #FAF3EB",
        light: " #FFFFFF",
        dark: " #2B2825",
        blue: "#0d6efd",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#d63384",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#ffc107",
        green: "#198754",
        teal: "#20c997",
        cyan: "#0dcaf0",
        white: "#fff",
        gray: "#6c757d",
        grayDark: "#343a40",

        success: "#198754",
        info: "#0dcaf0",
        warning: "#ffc107",
        danger: "#dc3545",

        //  font-sans-serif: "Open Sans", sans-serif;
        // --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        // --bs-gradient: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0));
      },
      backgroundImage: {
        statBg: "url['./src/assets/img/bg.jpg']",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
