import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";
import { formatDate } from "@/lib/utils";

export function CertificateCard({ certificate }) {
  const dateLabel = formatDate(certificate.issueDate) || certificate.issueDate;

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm transition-all hover:-translate-y-1 hover:border-inkwell/60 hover:shadow-xl">
      <Link href={`/certificate/${certificate.slug}`} className="group">
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-obsidian/5">
          <Image
            src={certificate.image}
            alt={`Sertifikat: ${certificate.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
          />
        </div>
      </Link>

      <div className="flex min-w-0 flex-1 flex-col p-3">
        <h3 className="line-clamp-2 break-words text-base font-bold leading-snug tracking-tight">
          <Link
            href={`/certificate/${certificate.slug}`}
            className="transition-colors group-hover:text-inkwell"
          >
            {certificate.title}
          </Link>
        </h3>
        <p className="mt-1 break-words text-sm text-muted">{certificate.issuer}</p>

        <dl className="mt-4 space-y-1.5 text-sm">
          {dateLabel && (
            <div className="flex justify-between gap-4">
              <dt className="shrink-0 text-muted">Issued</dt>
              <dd className="min-w-0 break-words text-right">{dateLabel}</dd>
            </div>
          )}
          {certificate.credentialId && (
            <div className="flex justify-between gap-3">
              <dt className="shrink-0 text-muted">Credential ID</dt>
              <dd className="min-w-0 break-all text-right font-mono text-xs">
                {certificate.credentialId}
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-auto pt-5">
          <Link
            href={`/certificate/${certificate.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-inkwell hover:underline"
          >
            Lihat Sertifikat
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
