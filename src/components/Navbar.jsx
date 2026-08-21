import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About Me", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Project", path: "/#work" },
    { name: "Clients", path: "/#clients" },
    { name: "Resume", path: "/zain_resume.pdf", isDownload: true },
    { name: "FAQ", path: "/#faq" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div 
        className={`fixed top-0 left-0 right-0 z-50 pointer-events-auto transition-colors duration-300 text-white ${
          isOpen ? "bg-black" : "mix-blend-difference"
        }`}
      >
        <nav className="w-full px-8 py-8 flex items-center justify-between text-[13px] font-medium tracking-tight">
          <Link 
            to="/" 
            className="text-[18px] font-bold tracking-tight hover:opacity-70 transition-opacity"
            onClick={handleLinkClick}
          >
            Zain
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-12">
            <div className="flex items-center gap-2">
              {navItems.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2">
                  {item.isDownload ? (
                    <a 
                      href={item.path} 
                      download
                      className="hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="hover:opacity-70 transition-opacity"
                    >
                      {item.name}
                    </Link>
                  )}
                  {index < navItems.length - 1 && <span className="text-white/50">,</span>}
                </div>
              ))}
            </div>
            <Link to="/#faq" className="hover:opacity-70 transition-opacity uppercase tracking-wider text-[11px] font-bold flex items-center gap-2">
              CONTACT ME <span className="text-[14px] font-light">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="block sm:hidden text-white focus:outline-none cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40 pt-32 px-8 flex flex-col justify-start gap-8 sm:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold tracking-tight">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  {item.isDownload ? (
                    <a 
                      href={item.path} 
                      download
                      onClick={handleLinkClick}
                      className="text-white/80 hover:text-white transition-colors block py-2 border-b border-white/5"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.path} 
                      onClick={handleLinkClick}
                      className="text-white/80 hover:text-white transition-colors block py-2 border-b border-white/5"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.05 + 0.1 }}
              className="mt-auto mb-16"
            >
              <Link 
                to="/#faq" 
                onClick={handleLinkClick}
                className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest text-center block transition-all duration-300 shadow-lg"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
