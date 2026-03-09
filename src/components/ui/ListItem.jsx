export default function ListItem({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-6">
      <span className="text-base font-semibold text-zinc-900 dark:text-white sm:w-32 shrink-0">
        {label}
      </span>
      <span className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {value}
      </span>
    </div>
  );
}
