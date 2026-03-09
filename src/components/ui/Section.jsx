import { motion } from "framer-motion";

export default function Section({ title, children, className = "" }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {title && (
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 pb-3 border-b border-zinc-200 dark:border-zinc-800">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}
