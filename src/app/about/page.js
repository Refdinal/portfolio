import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { buildMetadata } from "@/lib/seo";
import { profile } from "@/data/profile";

export const metadata = buildMetadata({
  title: "Tentang — IT Professional Padang, Sumatera Barat",
  description:
    "Kenali Refdinal F, S.T.: web developer & IT security consultant di Padang, Sumatera Barat. Berpengalaman di web development, information security, IT assessment, dan IT governance.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Tentang Saya"
        description="Latar belakang, perjalanan, dan hal-hal yang sedang saya pelajari."
        bg="bg-blush"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 text-base leading-relaxed lg:col-span-3">
            {profile.bio.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-xl" : "text-muted"}>
                {paragraph}
              </p>
            ))}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-paper p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-base font-bold">Software Development</h3>
                <p className="mt-2 text-sm text-muted">
                  Senang membangun aplikasi yang benar-benar dipakai orang. Berawal dari
                  project freelance dan berlanjut ke aplikasi internal.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-paper p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-base font-bold">Information Security & IT Governance</h3>
                <p className="mt-2 text-sm text-muted">
                  Mendukung keamanan informasi, incident response, dan dokumentasi ISO/IEC
                  27001 dalam pekerjaan sehari-hari.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/experience" className="text-sm font-medium text-inkwell hover:underline">
                Riwayat pengalaman →
              </Link>
              <Link href="/skills" className="text-sm font-medium text-inkwell hover:underline">
                Kemampuan saya →
              </Link>
              <Link href="/projects/kamang-tangah-anam-suku" className="text-sm font-medium text-inkwell hover:underline">
                Project web development →
              </Link>
            </div>

            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Hubungi Saya
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-paper p-6 shadow-sm">
              <h2 className="text-sm font-medium uppercase tracking-wider text-inkwell">
                Perjalanan Profesional
              </h2>
              <ol className="mt-5 space-y-5">
                {profile.journey.map((step, index) => (
                  <li key={step.label} className="relative pl-6">
                    {index < profile.journey.length - 1 && (
                      <span className="absolute left-2 top-3 h-full w-px bg-border" aria-hidden="true" />
                    )}
                    <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-inkwell bg-paper" aria-hidden="true" />
                    <div>
                      <p className="font-medium">{step.label}</p>
                      <p className="text-sm text-muted">{step.period}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm text-muted">Lokasi: {profile.location}</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
