import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";

const socials = [
  { label: "GitHub", href: profile.social.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.social.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
];

export function SocialLinks({ className = "" }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {socials
        .filter(({ href }) => Boolean(href))
        .map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-obsidian/15 bg-paper/70 text-muted transition-colors hover:border-inkwell hover:text-inkwell"
          >
            <Icon className="h-4.5 w-4.5" />
          </a>
        ))}
    </div>
  );
}
