import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))", input: "hsl(var(--input))", ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" }
      },
      boxShadow: { glow: "0 0 80px rgba(99,102,241,.24)" },
      transitionProperty: { colors: "color, background-color, border-color, text-decoration-color, fill, stroke", opacity: "opacity", transform: "transform", shadow: "box-shadow" },
      transitionDuration: { DEFAULT: "200ms", 300: "300ms", 500: "500ms" },
      transitionTimingFunction: { DEFAULT: "ease-in-out", smooth: "cubic-bezier(0.4, 0, 0.2, 1)" }
    }
  },
  plugins: []
};
export default config;
