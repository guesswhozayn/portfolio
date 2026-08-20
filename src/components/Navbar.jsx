import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "About Me", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Project", path: "#work" },
    { name: "FAQ", path: "#faq" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-auto mix-blend-difference text-white">
      <nav className="w-full px-8 py-8 flex items-center justify-between text-[13px] font-medium tracking-tight">
        <Link to="/" className="text-[18px] font-bold tracking-tight hover:opacity-70 transition-opacity">
          Zain
        </Link>
        <div className="hidden sm:flex items-center gap-12">
          <div className="flex items-center gap-2">
            {navItems.map((item, index) => (
              <div key={item.name} className="flex items-center gap-2">
                <a 
                  href={item.path} 
                  className="hover:opacity-70 transition-opacity"
                >
                  {item.name}
                </a>
                {index < navItems.length - 1 && <span className="text-white/50">,</span>}
              </div>
            ))}
          </div>
          <a href="#faq" className="hover:opacity-70 transition-opacity uppercase tracking-wider text-[11px] font-bold flex items-center gap-2">
            CONTACT ME <span className="text-[14px] font-light">→</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
