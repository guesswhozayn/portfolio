export default function StatusBadge({ className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0" />
      <span>Open to work</span>
    </div>
  );
}
