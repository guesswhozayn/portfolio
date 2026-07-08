import { usePortfolioStore } from "../store/useStore";

export function useDarkMode() {
  const isDarkMode = usePortfolioStore((state) => state.isDarkMode);
  const toggleDarkMode = usePortfolioStore((state) => state.toggleDarkMode);

  return { isDarkMode, toggleDarkMode };
}
