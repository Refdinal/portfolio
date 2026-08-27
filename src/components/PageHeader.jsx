export function PageHeader({ eyebrow, title, description, bg = "bg-paper" }) {
  return (
    <section className={bg}>
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        {eyebrow && (
          <p className="text-caption uppercase tracking-[0.16em] text-inkwell">{eyebrow}</p>
        )}
        <h1 className="mt-4 max-w-3xl font-bold leading-[0.95] tracking-[-0.02em] text-[clamp(2.5rem,7vw,5rem)]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-foreground/80">{description}</p>
        )}
      </div>
    </section>
  );
}
