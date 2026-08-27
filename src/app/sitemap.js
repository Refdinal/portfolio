import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/experience", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
    { path: "/certificates", priority: 0.6, changeFrequency: "monthly" },
    { path: "/skills", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ];

  return [
    ...staticPages.map(({ path, priority, changeFrequency }) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...certificates.map((certificate) => ({
      url: absoluteUrl(`/certificate/${certificate.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    })),
  ];
}
