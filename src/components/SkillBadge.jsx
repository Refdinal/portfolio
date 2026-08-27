export function SkillBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-obsidian/5 px-3 py-1 text-sm font-medium text-foreground">
      {children}
    </span>
  );
}
