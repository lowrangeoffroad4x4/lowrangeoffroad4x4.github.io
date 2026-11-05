import type { ThemeConfig, ThemePresetName } from "./types";

export const themes: Record<string, ThemeConfig> = {
  "obsidian-red": {
    name: "obsidian-red" as ThemePresetName,
    label: "Site Theme",
    description: "Selected site theme",
    tokens: {
  "background": "114 38% 95%",
  "foreground": "0 0% 7%",
  "card": "114 38% 91%",
  "card-foreground": "0 0% 7%",
  "primary": "102 27% 49%",
  "primary-foreground": "0 0% 0%",
  "secondary": "114 38% 88%",
  "muted": "114 38% 90%",
  "muted-foreground": "0 0% 7%",
  "border": "114 38% 79%",
  "radius": ".75rem",
  "card-shadow": "0 18px 50px rgba(20, 20, 30, .1)",
  "hero-gradient": "radial-gradient(circle at 78% 14%, hsl(102 27% 49% / .2), transparent 36%)",
  "background-pattern": "linear-gradient(hsl(0 0% 7% / .04) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 7% / .04) 1px, transparent 1px)",
  "font-sans": "\"Inter\", ui-sans-serif, system-ui, sans-serif",
  "font-heading": "\"Space Grotesk\", ui-sans-serif, system-ui, sans-serif",
  "heading-weight": "700",
  "heading-letter-spacing": "-0.04em"
},
  },
};
