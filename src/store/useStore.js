import { create } from "zustand";

export const usePortfolioStore = create((set) => {
  // Check initial dark mode state from localStorage or system preference
  const getInitialDarkMode = () => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  const initialDarkMode = getInitialDarkMode();
  
  // Set the initial theme class on the html document element
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;
    if (initialDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }

  return {
    isDarkMode: initialDarkMode,
    isCommandPaletteOpen: false,
    
    toggleDarkMode: () =>
      set((state) => {
        const nextDarkMode = !state.isDarkMode;
        if (typeof window !== "undefined") {
          const root = window.document.documentElement;
          if (nextDarkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
          } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
          }
        }
        return { isDarkMode: nextDarkMode };
      }),

    setCommandPaletteOpen: (isOpen) => set({ isCommandPaletteOpen: isOpen }),
    toggleCommandPalette: () =>
      set((state) => ({ isCommandPaletteOpen: !state.isCommandPaletteOpen })),
  };
});
