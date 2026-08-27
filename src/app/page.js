import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SkillBadge } from "@/components/SkillBadge";
import { Button } from "@/components/Button";
import { ArrowRightIcon } from "@/components/Icons";
import { getFeaturedProjects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { buildMetadata } from "@/lib/seo";
import { profile } from "@/data/profile";

export const metadata = buildMetadata({
  title: "Refdinal — IT Professional | Web Development & Information Security",
  description: profile.tagline,
  path: "/",
});

const focusAreas = [
  { title: "Web Development", text: "Membangun website dan aplikasi dengan React.js dan Node.js." },
  { title: "Information Security", text: "Mendukung incident response dan security monitoring." },
  { title: "IT Assessment", text: "Mendukung evaluasi dan pengelolaan teknologi informasi." },
  { title: "IT Governance", text: "Mendukung dokumentasi dan kepatuhan ISO/IEC 27001." },
  { title: "Data Analysis", text: "Melakukan analisis dan visualisasi data untuk insight." },
];

const inner = "mx-auto w-full max-w-5xl px-4 sm:px-6";

export default function Home() {
  const featured = getFeaturedProjects();
  const recentExperience = experience.slice(0, 3);
  const skills = skillCategories.slice(0, 3).map((c) => c.items);
  const allSkills = [...new Set(skills.flat())];

  return (
    <>
      <Hero />

      <section className="bg-blush" aria-labelledby="what-i-do">
        <div className={`py-16 sm:py-20 ${inner}`}>
          <SectionHeader
            id="what-i-do"
            eyebrow="What I Do"
            title="Bidang yang saya tekuni"
            description="Saya bekerja di persimpangan antara pengembangan perangkat lunak dan pengelolaan keamanan informasi, selalu dengan pendekatan yang jujur dan berdasarkan pengalaman nyata."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map(({ title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-paper p-6 text-foreground shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-candlelight" aria-labelledby="featured-projects">
        <div className={`py-16 sm:py-20 ${inner}`}>
          <div className="flex items-end justify-between gap-4">
            <SectionHeader
              id="featured-projects"
              eyebrow="Projects"
              title="Featured Projects"
              description="Beberapa project yang paling mewakili pekerjaan dan pembelajaran saya."
            />
            <Link
              href="/projects"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-inkwell sm:inline-flex"
            >
              Semua project
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="experience">
        <div className={`py-16 sm:py-20 ${inner}`}>
          <div className="flex items-end justify-between gap-4">
            <SectionHeader
              id="experience"
              eyebrow="Experience"
              title="Pengalaman"
              description="Perjalanan profesional yang membentuk cara saya bekerja hari ini."
            />
            <Link
              href="/experience"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-inkwell sm:inline-flex"
            >
              Lihat semua
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-1">
            {recentExperience.map((item) => (
              <ExperienceCard key={`${item.company}-${item.position}`} item={item} showLink={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage" aria-labelledby="skills">
        <div className={`py-16 sm:py-20 ${inner}`}>
          <SectionHeader
            id="skills"
            eyebrow="Skills"
            title="Kemampuan"
            description="Teknologi dan keahlian yang saya gunakan dalam pekerjaan nyata."
          />
          <div className="mt-10 flex flex-wrap gap-2">
            {allSkills.map((skill) => (
              <SkillBadge key={skill}>{skill}</SkillBadge>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/skills" variant="primary">
              Lihat semua skill
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-inkwell text-on-accent" aria-labelledby="contact">
        <div className={`py-16 text-center sm:py-20 ${inner}`}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" id="contact">
            Mari terhubung
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-on-accent/80">
            Tertarik untuk berkolaborasi atau sekadar berdiskusi? Silakan hubungi saya.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href="/contact"
              className="border-transparent bg-paper text-obsidian hover:bg-obsidian hover:text-paper"
            >
              Hubungi Saya
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
