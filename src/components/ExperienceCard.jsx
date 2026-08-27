import Link from "next/link";
import { formatDateRange } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/Icons";
import { getProjectBySlug } from "@/data/projects";

export function ExperienceCard({ item, showLink = true }) {
  const period = formatDateRange(item.startDate, item.endDate);
  const project = item.projectSlug ? getProjectBySlug(item.projectSlug) : null;

  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-inkwell/60 hover:shadow-xl">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold tracking-tight">{item.position}</h3>
          <p className="mt-0.5 text-muted">{item.company}</p>
        </div>
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
          {period}
        </span>
      </div>

      <p className="mt-3 text-sm text-muted">{item.summary}</p>

      <ul className="mt-4 space-y-1.5">
        {item.description.map((entry) => (
          <li key={entry} className="flex gap-2 text-sm">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>{entry}</span>
          </li>
        ))}
      </ul>

      {item.skills?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-obsidian/5 px-3 py-1 text-xs font-medium text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {showLink && project && (
        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          Lihat project {project.title}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      )}
    </article>
  );
}
