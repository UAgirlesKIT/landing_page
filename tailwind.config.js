/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{html,js}", "./index.html"];

export const theme = {
  colors: {
    transparent: "transparent",
    current: "currentColor",
    white: "#ffffff",
    main: "#F1DCFC",
    "btn-cl": "#FF66C4",
    "accent-cl": "#FF27AC",
  },
  extend: {
    fontFamily: {
      "roboto-slab": ["Roboto Slab", ...defaultTheme.fontFamily.serif],
    },
  },
};
export const plugins = [];
