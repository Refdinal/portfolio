import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CertificateCard } from "@/components/CertificateCard";
import { buildMetadata } from "@/lib/seo";
import { certificates } from "@/data/certificates";

export const metadata = buildMetadata({
  title: "Certificates",
  description: "Sertifikat dan sertifikasi pendidikan maupun pelatihan yang pernah diperoleh Refdinal.",
  path: "/certificates",
});

export default function CertificatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certificates"
        title="Sertifikat"
        description="Kumpulan sertifikat yang menunjang kemampuan teknis dan profesional saya."
        bg="bg-blush"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard key={`${certificate.title}-${certificate.credentialId}`} certificate={certificate} />
          ))}
        </div>
      </Container>
    </>
  );
}
