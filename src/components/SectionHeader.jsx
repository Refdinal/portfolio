export function SectionHeader({ id, eyebrow, title, description, className = "" }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-wider text-inkwell">{eyebrow}</p>
      )}
      <h2 id={id} className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted">{description}</p>}
    </div>
  );
}
