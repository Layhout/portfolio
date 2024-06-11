import { cubicBezier } from "framer-motion";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const easeOutQuart = cubicBezier(0.165, 0.84, 0.44, 1);
