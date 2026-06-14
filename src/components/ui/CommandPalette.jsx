import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Home, 
  FileText, 
  Moon, 
  Sun, 
  Github, 
  Mail,
  Command as CommandIcon 
} from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const togglePalette = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        togglePalette();
      }
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [togglePalette]);

  const actions = [
    { id: "home", label: "Go to Home", icon: <Home className="w-4 h-4" />, action: () => navigate("/") },
    { id: "resume", label: "View Resume", icon: <FileText className="w-4 h-4" />, action: () => navigate("/resume") },
    { id: "theme", label: `Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode`, icon: isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />, action: toggleDarkMode },
    { id: "github", label: "Github Profile", icon: <Github className="w-4 h-4" />, action: () => window.open("https://github.com/guesswhozayn", "_blank") },
    { id: "contact", label: "Email Me", icon: <Mail className="w-4 h-4" />, action: () => window.location.href = "mailto:guesswhozayn@gmail.com" },
  ];

  const filteredActions = actions.filter(action => 
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-start justify-center pt-[15vh] z-[101] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-xl bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl pointer-events-auto overflow-hidden"
            >
              <div className="flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800">
                <Search className="w-5 h-5 text-zinc-400" />
                <input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="w-full h-14 px-3 bg-transparent text-zinc-900 dark:text-zinc-100 outline-none text-base"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  <span className="text-[10px] font-bold text-zinc-500">ESC</span>
                </div>
              </div>

              <div className="p-2 max-h-[60vh] overflow-y-auto">
                {filteredActions.length > 0 ? (
                  filteredActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => {
                        action.action();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors text-sm group"
                    >
                      <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
                        {action.icon}
                      </div>
                      <span className="flex-1 text-left">{action.label}</span>
                      <CommandIcon className="w-3 h-3 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-zinc-500 text-sm">No results found for &quot;{query}&quot;</p>
                  </div>
                )}
              </div>

              <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 border-top border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-[10px] font-bold text-zinc-500 shadow-sm">⌘</kbd>
                    <kbd className="px-1.5 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-[10px] font-bold text-zinc-500 shadow-sm">K</kbd>
                    <span className="text-[10px] text-zinc-400 ml-1">to open palette</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-[10px] text-zinc-400">Navigate:</span>
                   <kbd className="px-1.5 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-[10px] font-bold text-zinc-500 shadow-sm">↑</kbd>
                   <kbd className="px-1.5 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-[10px] font-bold text-zinc-500 shadow-sm">↓</kbd>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
