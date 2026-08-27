import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRightIcon, ExternalIcon } from "@/components/Icons";
import { buildMetadata, projectSchema } from "@/lib/seo";
import { getProjectBySlug, projects } from "@/data/projects";

const fields = ["bg-persimmon", "bg-blush", "bg-candlelight", "bg-sage"];

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }, parent) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.image,
    type: "article",
  });
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const field = fields[hashString(project.slug) % fields.length];
  const counter = `${String(index + 1).padStart(2, "0")}/${String(projects.length).padStart(2, "0")}`;

  return (
    <>
      <header className={field}>
        <Container className="py-16 sm:py-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-obsidian/70 transition-colors hover:text-obsidian"
          >
            <ArrowRightIcon className="h-4 w-4 -scale-x-100" />
            Semua project
          </Link>

          <p className="mt-6 text-caption uppercase tracking-[0.16em] text-obsidian/70">
            {project.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-bold leading-[0.95] tracking-[-0.02em] text-[clamp(2.5rem,7vw,5rem)]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-obsidian/80">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-obsidian/10 px-3 py-1 text-xs font-medium text-obsidian"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </header>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <ProjectVisual
              title={project.title}
              category={project.category}
              image={project.image}
            />

            <div className="space-y-12">
              {project.sections.map(({ heading, body, bullets }, i) => (
                <section key={heading}>
                  <h2 className="text-2xl font-bold tracking-tight">
                    <span className="mr-2 text-muted">{String(i + 1).padStart(2, "0")}</span>
                    {heading}
                  </h2>
                  {body && <p className="mt-3 text-muted">{body}</p>}
                  {bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-inkwell" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Button href={project.liveUrl} variant="primary">
                    Live Demo
                    <ExternalIcon className="h-4 w-4" />
                  </Button>
                )}
                {project.githubUrl && (
                  <Button href={project.githubUrl}>
                    GitHub
                    <ExternalIcon className="h-4 w-4" />
                  </Button>
                )}
              </div>
            )}
          </div>

          <aside className="space-y-5 lg:col-span-1">
            <div className="rounded-2xl border border-border bg-paper p-6 shadow-sm">
              <h2 className="text-sm font-medium uppercase tracking-wider text-inkwell">
                Detail
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Kategori</dt>
                  <dd className="text-right">{project.category}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Teknologi</dt>
                  <dd className="text-right">{project.technologies.join(", ")}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-paper p-6 shadow-sm">
              <p className="text-sm text-muted">Ingin tahu konteks pengalaman saya?</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link href="/experience" className="text-sm font-medium text-inkwell hover:underline">
                  Lihat pengalaman →
                </Link>
                <Link href="/contact" className="text-sm font-medium text-inkwell hover:underline">
                  Hubungi saya →
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <nav aria-label="Project pagination" className="mt-20 flex items-center justify-between border-t border-border pt-6">
          <Link
            href={`/projects/${previous.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-inkwell"
          >
            <ArrowRightIcon className="h-4 w-4 -scale-x-100" />
            {previous.title}
          </Link>

          <span className="font-mono text-sm text-muted">{counter}</span>

          <Link
            href={`/projects/${next.slug}`}
            aria-label={`Next project: ${next.title}`}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-inkwell text-on-accent transition-colors hover:bg-obsidian hover:text-paper"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </nav>
      </Container>

      <JsonLd data={projectSchema(project)} />
    </>
  );
}
