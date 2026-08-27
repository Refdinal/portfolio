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
  title:
    "Refdinal F, S.T. — IT Consultant Padang & Web Developer | Web Development, Information Security, IT Assessment",
  description:
    "Refdinal F, S.T., IT professional & IT consultant di Padang, Sumatera Barat. Melayani jasa pembuatan website nagari & desa, pembuatan website, perbaikan website, penanganan website kena hack, jasa keamanan siber, konsultasi IT gratis, IT assessment, dan analisis data untuk wilayah Padang, Bukittinggi, dan Sumatera Barat.",
  path: "/",
});

const focusAreas = [
  {
    title: "Jasa Pembuatan Website Nagari & Desa",
    text: "Website informasi nagari/desa: profil, berita, data, dan agenda — seperti project Kamang Tangah Anam Suku.",
  },
  {
    title: "Jasa Pembuatan Website & Web Development",
    text: "Website instansi dan usaha dengan React.js, Node.js, dan PostgreSQL, dari desain hingga deployment.",
  },
  {
    title: "Perbaikan & Pemulihan Website",
    text: "Membantu memperbaiki website yang error, bermasalah, atau terkena serangan dan mengembalikannya seperti semula.",
  },
  {
    title: "Jasa Keamanan Siber (Cyber Security)",
    text: "Penanganan website yang kena hack, incident response, security monitoring, dan penguatan keamanan situs Anda.",
  },
  {
    title: "Konsultasi IT Gratis Dahulu",
    text: "Diskusikan dulu kebutuhan website atau sistem Anda secara gratis sebelum memutuskan langkah berikutnya.",
  },
  {
    title: "IT Consultant & IT Assessment",
    text: "Menilai pengelolaan teknologi informasi organisasi dan menyusun rekomendasi perbaikan yang bisa ditindaklanjuti.",
  },
  {
    title: "Information Security & Governance",
    text: "Security monitoring, dokumentasi ISO/IEC 27001, dan tata kelola keamanan informasi.",
  },
  {
    title: "Data Analysis",
    text: "Analisis dan visualisasi data untuk membantu pengambilan keputusan.",
  },
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
            eyebrow="Layanan"
            title="Jasa IT, Web Development & Keamanan Siber"
            description="Melayani jasa pembuatan website, perbaikan website rusak atau kena hack, keamanan siber, IT consultancy, IT assessment, dan analisis data untuk wilayah Padang, Bukittinggi, dan Sumatera Barat — mengutamakan pengalaman nyata dan hasil yang bisa dibuktikan."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map(({ title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-paper p-6 text-foreground shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-paper p-6 text-foreground shadow-sm">
            <h3 className="text-base font-bold">
              Berbasis di Padang, melayani Sumatera Barat
            </h3>
            <p className="mt-2 text-sm text-muted">
              Melayani jasa pembuatan website nagari, desa, instansi & usaha, perbaikan
              website, penanganan website kena hack, jasa keamanan siber, serta konsultasi
              IT gratis dahulu untuk wilayah {profile.areaServed.join(", ")}.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.areaServed.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-inkwell/10 px-3 py-1 text-xs font-medium text-inkwell"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <Button href="/contact" variant="primary" size="sm">
                Konsultasi Gratis
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
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
