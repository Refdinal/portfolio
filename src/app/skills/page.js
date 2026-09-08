import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SkillBadge } from "@/components/SkillBadge";
import { buildMetadata } from "@/lib/seo";
import { skillCategories, skillLevels } from "@/data/skills";

export const metadata = buildMetadata({
  title: "Skills — Web Development & Information Security",
  description:
    "Kemampuan Refdinal F, S.T. di bidang web development (React, Node.js), information security (ISO/IEC 27001), IT assessment, dan IT governance.",
  path: "/skills",
});

function levelLabel(level) {
  return skillLevels.find((item) => item.label === level) || null;
}

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Kemampuan"
        description="Kemampuan saya dijelaskan bukan dengan angka persentase, melainkan berdasarkan seberapa sering dan sejauh apa saya menggunakannya."
        bg="bg-candlelight"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category) => {
            const level = levelLabel(category.level);
            return (
              <section key={category.name} className="rounded-2xl border border-border bg-paper p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-bold tracking-tight">{category.name}</h2>
                  {level && (
                    <span className="rounded-full bg-inkwell/10 px-3 py-1 text-xs font-medium text-inkwell">
                      {level.label}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-paper p-6 shadow-sm">
          <h2 className="text-lg font-bold tracking-tight">Skala Kemampuan</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {skillLevels.map((item) => (
              <div key={item.label} className="flex gap-3">
                <dt className="w-36 shrink-0 font-medium">{item.label}</dt>
                <dd className="text-muted">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </>
  );
}
