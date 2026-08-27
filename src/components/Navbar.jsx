import Link from "next/link";
import { MainNav } from "@/components/MainNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowRightIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

function ContactBadge() {
  return (
    <Link
      href="/contact"
      className="hidden -rotate-6 items-center gap-1.5 rounded-full border border-obsidian/15 bg-paper px-4 py-2 text-sm font-medium text-obsidian shadow-sm transition-all hover:rotate-0 hover:border-inkwell hover:text-inkwell hover:shadow-md md:inline-flex"
    >
      Contact
      <ArrowRightIcon className="h-4 w-4" />
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 py-3 sm:px-6">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-border bg-background/80 px-4 shadow-sm backdrop-blur-lg sm:px-5">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-inkwell text-sm font-bold text-on-accent shadow-sm">
            {profile.firstName.charAt(0)}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <div className="flex items-center gap-1.5">
          <MainNav />
          <ContactBadge />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
