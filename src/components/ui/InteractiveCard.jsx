import { motion } from "framer-motion";

export default function InteractiveCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      <div className="relative z-20 h-full">
        {children}
      </div>
    </motion.div>
  );
}
