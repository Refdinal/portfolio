import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/seo";
import { profile } from "@/data/profile";

export const metadata = buildMetadata({
  title: "Kontak — Jasa IT, Web & Keamanan Siber Padang",
  description:
    "Hubungi Refdinal F, S.T. untuk jasa pembuatan website nagari & desa, pembuatan & perbaikan website, penanganan website kena hack, keamanan siber, konsultasi IT gratis, dan IT assessment di Padang, Bukittinggi, dan Sumatera Barat.",
  path: "/contact",
});

const cleanUrl = (u) => (u ? u.replace(/^https?:\/\//, "") : "");

const contacts = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: cleanUrl(profile.social.linkedin),
    href: profile.social.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: cleanUrl(profile.social.github),
    href: profile.social.github,
    Icon: GitHubIcon,
    external: true,
  },
].filter((contact) => Boolean(contact.href));

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Mari Terhubung"
        description="Silakan hubungi saya melalui salah satu kanal di bawah. Biasanya saya responsif terhadap email."
        bg="bg-persimmon"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <WhatsAppLink
            number={profile.whatsapp}
            message="Halo, saya ingin bertanya tentang layanan Anda."
            className="group rounded-2xl border border-border bg-paper p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-inkwell hover:shadow-xl"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-inkwell/20 text-inkwell">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-base font-bold">WhatsApp</h2>
            <p className="mt-1 break-all text-sm text-muted group-hover:text-inkwell">
              Chat via WhatsApp
            </p>
          </WhatsAppLink>

          {contacts.map(({ label, value, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-border bg-paper p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-inkwell hover:shadow-xl"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-inkwell/20 text-inkwell">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-bold">{label}</h2>
              <p className="mt-1 break-all text-sm text-muted group-hover:text-inkwell">{value}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-start gap-3">
          <WhatsAppLink
            number={profile.whatsapp}
            message="Halo, saya ingin bertanya tentang layanan Anda."
            className="inline-flex items-center justify-center gap-2 rounded-full bg-inkwell px-7 py-3 text-base font-medium text-on-accent shadow-lg shadow-inkwell/25 transition-colors hover:-translate-y-0.5 hover:bg-obsidian hover:text-paper hover:shadow-xl"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat WhatsApp
          </WhatsAppLink>
          <Button href={`mailto:${profile.email}`} size="lg">
            Kirim Email
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted">
          Lokasi: {profile.location} — melayani {profile.areaServed.slice(0, 3).join(", ")} dan sekitarnya.
        </p>
      </Container>
    </>
  );
}
