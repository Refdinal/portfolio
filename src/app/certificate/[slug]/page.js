import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowRightIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/seo";
import { getCertificateBySlug, certificates } from "@/data/certificates";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return certificates.map((certificate) => ({ slug: certificate.slug }));
}

export async function generateMetadata({ params }, parent) {
  const { slug } = await params;
  const certificate = getCertificateBySlug(slug);
  if (!certificate) return {};

  const previousImages = (await parent).openGraph?.images || [];

  return buildMetadata({
    title: certificate.title,
    description: `Sertifikat ${certificate.title} oleh ${certificate.issuer}.`,
    path: `/certificate/${certificate.slug}`,
    type: "article",
  });
}

export default async function CertificatePage({ params }) {
  const { slug } = await params;
  const certificate = getCertificateBySlug(slug);
  if (!certificate) notFound();

  const dateLabel = formatDate(certificate.issueDate) || certificate.issueDate;

  return (
    <Container className="py-12 sm:py-16">
      <Link
        href="/certificates"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-inkwell"
      >
        <ArrowRightIcon className="h-4 w-4 -scale-x-100" />
        Semua sertifikat
      </Link>

      <header className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-inkwell">
          Certificate
        </p>
        <h1 className="mt-3 max-w-3xl font-bold leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,5vw,3.5rem)]">
          {certificate.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{certificate.issuer}</p>

        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
          {dateLabel && (
            <div className="flex items-center gap-2">
              <dt className="text-muted">Issued</dt>
              <dd className="font-medium">{dateLabel}</dd>
            </div>
          )}
          {certificate.credentialId && (
            <div className="flex items-center gap-2">
              <dt className="text-muted">Credential ID</dt>
              <dd className="font-mono text-xs">{certificate.credentialId}</dd>
            </div>
          )}
        </dl>
      </header>

      <div className="mt-10 space-y-8">
        {certificate.images.map((src, index) => (
          <figure key={src}>
            <div className="relative mx-auto aspect-[3/2] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-obsidian/5">
              <Image
                src={src}
                alt={`${certificate.title} — halaman ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain"
              />
            </div>
            {certificate.images.length > 1 && (
              <figcaption className="mt-3 text-center text-xs text-muted">
                Halaman {index + 1} dari {certificate.images.length}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Container>
  );
}
