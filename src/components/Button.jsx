import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inkwell disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "bg-inkwell text-on-accent shadow-lg shadow-inkwell/25 hover:-translate-y-0.5 hover:bg-obsidian hover:text-paper hover:shadow-xl",
  secondary:
    "border border-obsidian/15 bg-paper/70 text-foreground shadow-sm backdrop-blur hover:border-inkwell hover:text-inkwell hover:-translate-y-0.5",
  ghost: "text-muted hover:text-inkwell",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5",
  lg: "px-7 py-3 text-base",
};

export function Button({
  href,
  variant = "secondary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href?.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href || "#"} className={classes} {...props}>
      {children}
    </Link>
  );
}
