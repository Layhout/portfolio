import { THEMES } from "@/lib/constants";
import { useCallback, useEffect, useRef, useState } from "react";

export default function useTheme() {
  const [themesToggle, setThemesToggle] = useState(THEMES.LIGHT);

  const themeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let localTheme = localStorage.getItem("theme");

    if (!localTheme && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localTheme = THEMES.DARK;
    }

    handleChangeThemeClass(localTheme || THEMES.LIGHT);
    localStorage.setItem("theme", localTheme || THEMES.LIGHT);
    setThemesToggle(localTheme || THEMES.LIGHT);

    const controller = new AbortController();

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", catchThemeChanges, { signal: controller.signal });

    function catchThemeChanges(event: MediaQueryListEvent) {
      const newTheme = event.matches ? THEMES.DARK : THEMES.LIGHT;
      handleChangeThemeClass(newTheme);
      localStorage.setItem("theme", newTheme);
      setThemesToggle(newTheme);
    }

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeThemeClass = useCallback((newTheme: (typeof THEMES)[keyof typeof THEMES]) => {
    document.documentElement.classList.remove(THEMES.DARK);
    document.documentElement.classList.remove(THEMES.LIGHT);
    document.documentElement.classList.add(newTheme);
  }, []);

  const handleChangeTheme = useCallback(() => {
    const newTheme = themesToggle === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    localStorage.setItem("theme", newTheme);
    handleChangeThemeClass(newTheme);
    setThemesToggle(newTheme);
  }, [handleChangeThemeClass, themesToggle]);

  return {
    themesToggle,
    themeBtnRef,
    handleChangeTheme,
  };
}
