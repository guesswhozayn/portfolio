import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const onMouseMoveTilt = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        handleMouseMove(e);
        onMouseMoveTilt(e);
      }}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 transition-colors duration-200 ${className}`}
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
