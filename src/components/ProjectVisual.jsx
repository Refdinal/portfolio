import Image from "next/image";

const fields = ["bg-persimmon", "bg-blush", "bg-candlelight", "bg-sage"];

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function ProjectVisual({ title, category, image, className = "" }) {
  const field = fields[hashString(title) % fields.length];

  if (image) {
    return (
      <div className={`relative aspect-video overflow-hidden rounded-2xl border border-border ${className}`}>
        <Image
          src={image}
          alt={`Screenshot — ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex aspect-video flex-col items-start justify-end rounded-2xl p-5 ${field} ${className}`}
    >
      <span className="rounded-full bg-obsidian/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground">
        {category}
      </span>
      <h3 className="mt-3 text-xl font-bold tracking-tight">{title}</h3>
    </div>
  );
}
