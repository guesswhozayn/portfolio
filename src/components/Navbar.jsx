import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMoon, FiSun, FiSearch } from "react-icons/fi";
import { useDarkMode } from "../hooks/useDarkMode";
import { useState, useEffect } from "react";
import { usePortfolioStore } from "../store/useStore";

function NavItem({ children, isActive }) {
  return (
    <div
      className={`px-4 py-2 rounded-full flex items-center justify-center transition-colors text-sm font-medium ${
        isActive 
          ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" 
          : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      }`}
    >
      {children}
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const setCommandPaletteOpen = usePortfolioStore((state) => state.setCommandPaletteOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <nav className={`flex items-center space-x-1 px-4 py-2 backdrop-blur-md border rounded-full shadow-sm transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-zinc-950/95 border-zinc-200 dark:border-zinc-800/80 shadow-md"
          : "bg-white/70 dark:bg-zinc-900/40 border-zinc-200/50 dark:border-zinc-800/40"
      }`}>
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} className="relative group">
                <NavItem isActive={isActive}>
                  {item.name}
                </NavItem>
              </Link>
            );
          })}

          <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800 mx-2" />

          <button
            onClick={() => setCommandPaletteOpen(true)}
            className="relative p-2 rounded-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
            title="Open Search (⌘K)"
          >
            <FiSearch size={16} />
          </button>

          <button 
            onClick={toggleDarkMode}
            className="relative p-2 rounded-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {isDarkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </div>
      </nav>
    </motion.div>
  );
}
