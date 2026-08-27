import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-candlelight text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm">© {new Date().getFullYear()} {profile.name}</p>
          <p className="mt-1 text-xs text-obsidian/70">{profile.tagline}</p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <SocialLinks />
          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-obsidian/70">
            <Link href="/" className="transition-colors hover:text-obsidian">Home</Link>
            <Link href="/about" className="transition-colors hover:text-obsidian">About</Link>
            <Link href="/projects" className="transition-colors hover:text-obsidian">Projects</Link>
            <Link href="/skills" className="transition-colors hover:text-obsidian">Skills</Link>
            <Link href="/contact" className="transition-colors hover:text-obsidian">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
