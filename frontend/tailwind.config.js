/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    fontSize: {
      heading: [
        "1.5rem",
        {
          lineHeight: "2rem",
          fontWeight: "700",
        },
      ],
      subheading: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
        },
      ],
      body: [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "400",
        },
      ],
      "body-bold": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "700",
        },
      ],
      "body-small": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "400",
        },
      ],
      "body-small-bold": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "700",
        },
      ],
      caption: [
        "0.75rem",
        {
          lineHeight: "1rem",
          fontWeight: "400",
        },
      ],
      "caption-bold": [
        "0.75rem",
        {
          lineHeight: "1rem",
          fontWeight: "700",
        },
      ],
      button: [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "700",
        },
      ],
      "button-small": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "700",
        },
      ],
      "button-large": [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
        },
      ],
    },

    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "bg-primary": "#283132",
        "primary-light": "#283132d4",
        "secondary-primary": "#008640",
        "green-light": "#00864080",
        "base-primary": "#FFFFFF",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
