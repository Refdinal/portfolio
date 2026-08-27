import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ExperienceCard } from "@/components/ExperienceCard";
import { buildMetadata } from "@/lib/seo";
import { experience } from "@/data/experience";

export const metadata = buildMetadata({
  title: "Experience",
  description:
    "Riwayat profesional Refdinal: pengalaman di information security, IT assessment, web development, data analysis, dan administrasi.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Pengalaman Profesional"
        description="Diurutkan mulai dari yang terbaru. Setiap peran menggambarkan tanggung jawab dan teknologi yang saya gunakan."
        bg="bg-candlelight"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {experience.map((item) => (
            <ExperienceCard key={`${item.company}-${item.position}`} item={item} showLink={false} />
          ))}
        </div>
      </Container>
    </>
  );
}
