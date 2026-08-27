import { profile } from "@/data/profile";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || profile.website || "https://refdinal.com"
).replace(/\/+$/, "");

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  type = "website",
  alternates,
} = {}) {
  const canonical = absoluteUrl(path);
  const metadataBase = SITE_URL;
  return {
    metadataBase,
    title: title || profile.title,
    description: description || profile.tagline,
    alternates: {
      canonical,
      ...(alternates || {}),
    },
    openGraph: {
      title: title || profile.title,
      description: description || profile.tagline,
      url: canonical,
      siteName: profile.name,
      type,
      locale: "id_ID",
      images: image ? [makeOgImage(image, title)] : [makeOgImage(undefined, title)],
    },
    twitter: {
      card: "summary_large_image",
      title: title || profile.title,
      description: description || profile.tagline,
      images: image ? [makeOgImage(image, title)] : [makeOgImage(undefined, title)],
    },
  };
}

function makeOgImage(image, title) {
  if (image) return image;
  return {
    url: absoluteUrl("/opengraph-image"),
    width: 1200,
    height: 630,
    alt: title || profile.name,
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    image: absoluteUrl(profile.image),
    jobTitle: profile.role,
    description: profile.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Padang",
      addressRegion: "West Sumatra",
      addressCountry: "ID",
    },
    sameAs: Object.values(profile.social)
      .filter(Boolean)
      .map((u) => u)
      .concat(profile.email ? [`mailto:${profile.email}`] : []),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} — ${profile.role}`,
    url: SITE_URL,
    description: profile.tagline,
    inLanguage: "id-ID",
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: profile.name,
    url: SITE_URL,
    image: absoluteUrl(profile.image),
    description: profile.tagline,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Padang",
      addressRegion: "Sumatera Barat",
      addressCountry: "ID",
    },
    areaServed: profile.areaServed.map((name) => ({ "@type": "Place", name })),
    serviceType: profile.services,
    founder: { "@type": "Person", name: profile.name },
    sameAs: Object.values(profile.social).filter(Boolean),
  };
}

export function projectSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    creator: {
      "@type": "Person",
      name: profile.name,
      url: SITE_URL,
    },
    keywords: project.technologies.join(", "),
    ...(project.liveUrl ? { url: project.liveUrl } : {}),
  };
}
