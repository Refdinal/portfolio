import Link from "next/link";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ArrowRightIcon } from "@/components/Icons";

export function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-border bg-card p-2 shadow-sm transition-all hover:-translate-y-1 hover:border-inkwell/60 hover:shadow-xl"
    >
      <ProjectVisual
        title={project.title}
        category={project.category}
        image={project.image}
      />
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">
          {project.category}
        </p>
        <h3 className="mt-1 text-lg font-bold tracking-tight group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-obsidian/5 px-2.5 py-0.5 text-xs font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          View Project
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
