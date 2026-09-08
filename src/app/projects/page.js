import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";

export const metadata = buildMetadata({
  title: "Projects — Web Development & Information Security",
  description:
    "Kumpulan project Refdinal F, S.T.: pembuatan website nagari & instansi dan aplikasi internal IT assessment — dikerjakan di Padang & Sumatera Barat.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        description="Project nyata yang pernah saya kerjakan, disertai penjelasan masalah, solusi, dan hal yang saya pelajari."
        bg="bg-sage"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </>
  );
}
