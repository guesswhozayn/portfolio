import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isResumePage = location.pathname === "/resume";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const textColorClass = isResumePage ? "text-black" : "text-white";
  const borderColorClass = isResumePage ? "border-black" : "border-white";
  const hoverTextColorClass = isResumePage
    ? "hover:text-blue-600"
    : "hover:text-blue-400";
  const hoverBorderColorClass = isResumePage
    ? "hover:border-blue-600"
    : "hover:border-blue-400";
  const lineBgClass = isResumePage ? "bg-gray-400" : "bg-gray-500";

  const handleNavLinkClick = (path, hash, isExternalLink = false) => {
    if (isExternalLink) {
      return;
    }

    if (location.pathname === path) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path + hash);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="absolute w-full px-8 py-16 top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-20">
        <nav className="h-20 flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              onClick={() => handleNavLinkClick("/", "#home")}
              className={`text-6xl border-4 ${borderColorClass} ${textColorClass} rounded-3xl ${hoverBorderColorClass} ${hoverTextColorClass} transition-colors duration-300 cursor-pointer`}
            >
              {" </> "}
            </Link>
          </motion.div>

          <motion.span
            className={`hidden md:inline-block flex-1 mx-8 h-[1px] ${lineBgClass}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.span>

          <motion.ul
            className={`hidden md:inline-flex gap-6 text-lg font-small ${textColorClass}`}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.li variants={navItemVariants}>
              <button
                onClick={() => handleNavLinkClick("/", "#home")}
                className={`${hoverTextColorClass} transition duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit`}
              >
                Home
              </button>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <button
                onClick={() => handleNavLinkClick("/", "#about")}
                className={`${hoverTextColorClass} transition duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit`}
              >
                About
              </button>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <Link
                to="/resume"
                className={`${hoverTextColorClass} transition duration-200`}
              >
                Resume
              </Link>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <button
                onClick={() => handleNavLinkClick("/", "#projects")}
                className={`${hoverTextColorClass} transition duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit`}
              >
                Projects
              </button>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <button
                onClick={() => handleNavLinkClick("/", "#contact")}
                className={`${hoverTextColorClass} transition duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit`}
              >
                Contact
              </button>
            </motion.li>
          </motion.ul>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${textColorClass} hover:text-blue-400 focus:outline-none`}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black text-white bg-opacity-95 flex flex-col items-center justify-center z-40"
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <motion.ul
              className="flex flex-col gap-8 text-3xl font-medium"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.li variants={linkVariants}>
                <button
                  onClick={() => handleNavLinkClick("/", "#home")}
                  className="hover:text-blue-600 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit"
                >
                  Home
                </button>
              </motion.li>
              <motion.li variants={linkVariants}>
                <button
                  onClick={() => handleNavLinkClick("/", "#about")}
                  className="hover:text-blue-600 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit"
                >
                  About
                </button>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link
                  to="/resume"
                  className="hover:text-blue-600 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Resume
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <button
                  onClick={() => handleNavLinkClick("/", "#projects")}
                  className="hover:text-blue-600 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit"
                >
                  Projects
                </button>
              </motion.li>
              <motion.li variants={linkVariants}>
                <button
                  onClick={() => handleNavLinkClick("/", "#contact")}
                  className="hover:text-blue-600 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit"
                >
                  Contact
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
