import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#121315",
        surface: "#121315",
        "surface-dim": "#121315",
        "surface-bright": "#38393a",
        "surface-container-lowest": "#0d0e0f",
        "surface-container-low": "#1b1c1d",
        "surface-container": "#1f2021",
        "surface-container-high": "#292a2b",
        "surface-container-highest": "#343536",
        "on-surface": "#e3e2e3",
        "on-surface-variant": "#c3c7cf",
        outline: "#8d9199",
        "outline-variant": "#42474e",
        primary: "#e5efff",
        "on-primary": "#063254",
        "primary-container": "#b2d5ff",
        "on-primary-container": "#395c80",
        secondary: "#cdc0ed",
        "secondary-container": "#4d4369",
        tertiary: "#ebf92c",
        "on-tertiary": "#2f3300"
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem"
      },
      spacing: {
        margin: "32px",
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "40px",
        gutter: "20px"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Space Grotesk", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      fontSize: {
        display: ["42px", { lineHeight: "1.05", letterSpacing: "0", fontWeight: "700" }],
        h1: ["28px", { lineHeight: "1.2", letterSpacing: "0", fontWeight: "600" }],
        h2: ["20px", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" }],
        "body-lg": ["15px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        caption: ["11px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        label: ["11px", { lineHeight: "1", letterSpacing: "0.08em", fontWeight: "500" }]
      },
      boxShadow: {
        glow: "0 0 34px rgba(178, 213, 255, 0.08)"
      }
    }
  },
  plugins: [forms]
};

export default config;
