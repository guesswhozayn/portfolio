import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function InteractiveCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Mouse position for spotlight
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setMouseX(e.clientX - left);
    setMouseY(e.clientY - top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative group overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 transition-all duration-200 ${className}`}
    >
      {/* Spotlight Effect Overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.08), transparent 80%)`,
        }}
      />
      
      {/* Dark mode highlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden dark:block"
        style={{
          background: `radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.05), transparent 80%)`,
        }}
      />

      <div className="relative z-20 h-full">
        {children}
      </div>
    </motion.div>
  );
}
