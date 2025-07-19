import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

  return (
    <div className="absolute w-full px-8 py-16 top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-20">
        <nav className="h-20 flex justify-between items-center py-4">
          <Link
            to="/"
            onClick={() => handleNavLinkClick("/", "#home")}
            className={`text-6xl border-4 ${borderColorClass} ${textColorClass} rounded-3xl ${hoverBorderColorClass} ${hoverTextColorClass} transition-colors duration-300 cursor-pointer`}
          >
            {" </> "}
          </Link>

          {/* Separator Line */}
          <span
            className={`hidden md:inline-block flex-1 mx-8 h-[1px] ${lineBgClass}`}
          ></span>

          {/* Desktop Navigation Links */}
          <ul
            className={`hidden md:inline-flex gap-6 text-lg font-small ${textColorClass}`}
          >
            <li>
              <button
                onClick={() => handleNavLinkClick("/", "#home")}
                className={`${hoverTextColorClass} transition duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick("/", "#about")}
                className={`${hoverTextColorClass} transition duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit`}
              >
                About
              </button>
            </li>
            <li>
              <Link
                to="/resume"
                className={`${hoverTextColorClass} transition duration-200`}
              >
                Resume
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick("/", "#projects")}
                className={`${hoverTextColorClass} transition duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick("/", "#contact")}
                className={`${hoverTextColorClass} transition duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit`}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button (Hamburger Icon) */}
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black text-white bg-opacity-95 flex flex-col items-center justify-center z-40 animate-fade-in">
          {/* Close button for mobile menu */}
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
          {/* Mobile navigation links */}
          <ul className="flex flex-col gap-8 text-3xl font-medium">
            <li>
              <button
                onClick={() => handleNavLinkClick("/", "#home")}
                className="hover:text-blue-600 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick("/", "#about")}
                className="hover:text-blue-600 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit"
              >
                About
              </button>
            </li>
            <li>
              <Link
                to="/resume"
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Resume
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick("/", "#projects")}
                className="hover:text-blue-600 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick("/", "#contact")}
                className="hover:text-blue-600 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 font-inherit"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
