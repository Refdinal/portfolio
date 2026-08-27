# Plan Website Personal Portfolio

## 1. Tujuan Project

Membangun website pribadi/portfolio profesional yang menampilkan:

- Profil pribadi
- Pengalaman kerja
- Pengalaman freelance
- Project yang pernah dibuat
- Skill
- Sertifikat
- Tulisan/artikel jika nantinya diperlukan
- Kontak dan social profile

Website ditujukan sebagai **personal branding dan portfolio profesional**, terutama untuk bidang:

- Web Development
- Information Technology
- Information Security
- IT Assessment
- IT Governance
- Data Analysis

Website harus menampilkan kemampuan secara **jujur dan proporsional**, tanpa mengklaim diri sebagai expert atau specialist jika belum sesuai dengan pengalaman.

---

# 2. Positioning Website

Positioning utama:

> **IT Professional dengan pengalaman di Web Development, Information Security, IT Assessment, dan Data Analysis.**

Fokus profesional:

- Web Development
- Information Security
- IT Assessment
- IT Governance
- Data Analysis

Teknologi yang pernah digunakan:

- JavaScript
- React.js
- Node.js
- Python
- PostgreSQL

---

# 3. Teknologi

## Framework

Gunakan:

- Next.js
- React
- Javascript murni jangan typescript

Gunakan **App Router**.

Contoh:

```text
src/app/
```

Jangan menggunakan Pages Router kecuali ada kebutuhan khusus.

---

## Styling

Gunakan:

- Tailwind CSS

Prinsip:

- Responsive
- Mobile-first
- Minimalis
- Profesional
- Cepat
- Tidak terlalu banyak animasi

---

## Deployment

Target deployment:

> **Vercel**

Website harus dapat langsung di-deploy menggunakan GitHub → Vercel.

Jangan membuat konfigurasi yang bergantung pada VPS tertentu.

---

# 4. Arsitektur Website

Gunakan static-first architecture.

Konten portfolio seperti:

- Experience
- Projects
- Skills
- Certificates

disimpan sebagai data lokal/TypeScript atau MDX.

Tidak perlu database untuk versi pertama.

Contoh:

```text
src/
├── app/
├── components/
├── data/
├── lib/
└── types/
```

---

# 5. Struktur Halaman

Gunakan struktur:

```text
/
├── /about
├── /experience
├── /projects
├── /projects/[slug]
├── /certificates
└── /contact
```

Optional untuk fase berikutnya:

```text
/blog
/blog/[slug]
```

Blog jangan dibuat dulu jika belum ada konten yang cukup.

---

# 6. Homepage

Homepage adalah halaman terpenting.

Tujuan homepage:

1. Menjelaskan siapa saya.
2. Menjelaskan bidang yang saya tekuni.
3. Menampilkan pengalaman utama.
4. Menampilkan project terbaik.
5. Mengarahkan pengunjung ke LinkedIn/GitHub.
6. Membantu Google memahami identitas dan keahlian saya.

---

## Hero Section

Contoh:

```text
Halo, saya Refdinal.

IT Professional dengan pengalaman di Web Development,
Information Security, IT Assessment, dan Data Analysis.

Saya senang mempelajari teknologi melalui project nyata
dan membangun solusi yang dapat membantu menyelesaikan
permasalahan praktis.

[ Lihat Project ] [ Tentang Saya ]
```

Jangan menggunakan:

```text
Cybersecurity Expert
Senior Software Engineer
Full Stack Expert
ISO 27001 Specialist
```

kecuali memang sudah sesuai dengan pengalaman.

---

# 7. About Page

Halaman `/about`.

Isi:

## Tentang Saya

Menjelaskan:

- Latar belakang IT
- Pengalaman programming
- Pengalaman freelance
- Pekerjaan saat ini
- Ketertarikan terhadap information security
- Ketertarikan terhadap IT governance
- Ketertarikan terhadap software development

---

## Perjalanan Profesional

Visualisasi sederhana:

```text
Administration
      ↓
Government Field Projects
      ↓
Web Development
      ↓
Data Analysis
      ↓
Information Security & IT Assessment
```

Tujuannya menunjukkan perkembangan karier secara natural.

---

# 8. Experience Page

Halaman:

```text
/experience
```

Urutkan berdasarkan pengalaman terbaru.

## 1. Manggala Informatika Ahli Pertama

Mulai:

> 1 Juni 2025 – Sekarang

Deskripsi:

- Mendukung kegiatan information security.
- Mendukung incident response dan incident recovery.
- Security monitoring.
- Pengelolaan dokumentasi untuk audit dan assessment.
- Dokumentasi terkait ISO/IEC 27001.
- Mendukung kegiatan IT assessment.
- Mengembangkan aplikasi internal untuk mendukung assessment dan pengelolaan informasi.

Jangan menampilkan informasi internal atau rahasia instansi.

---

## 2. Project-Based Virtual Intern — Big Data Analyst

PT Kimia Farma Tbk

Oktober 2024

Fokus:

- Data analysis
- Data cleaning
- Data transformation
- Data visualization
- Dashboard
- Business insights

---

## 3. Freelance Web Developer

Agustus 2023 – November 2023

Project:

> Website Kamang Tangah Anam Suku

Fokus:

- Web development
- JavaScript
- React.js
- Node.js
- Database
- Requirement gathering
- Deployment
- Maintenance

---

## 4. Tenaga Fasilitator Lapangan

Kementerian PUPR

Mei 2021 – Desember 2023

Fokus:

- Pengumpulan data lapangan
- Koordinasi
- Implementasi program pemerintah
- Pelaporan

---

## 5. Administration Staff

PT Annisya Konsultan

Maret 2019 – November 2020

Fokus:

- Dokumentasi administrasi
- DED
- BOQ/RAB
- Dokumen tender
- Administrasi project

---

# 9. Projects Page

Halaman:

```text
/projects
```

Project harus menjadi salah satu bagian utama website.

Setiap project memiliki halaman detail:

```text
/projects/[slug]
```

Contoh:

```text
/projects/kamang-tangah-anam-suku
/projects/sikawal
/projects/kimia-farma-big-data-analysis
```

---

# 10. Struktur Detail Project

Setiap project menggunakan struktur:

```text
Project Title

Overview

Problem

Solution

My Role

Technology

Key Features

Challenges

What I Learned

Screenshots

Live Demo

GitHub
```

Tidak semua bagian wajib ada jika memang tidak relevan.

---

# 11. Project — Kamang Tangah Anam Suku

Kategori:

> Web Development

Deskripsi:

Website informasi untuk Nagari Kamang Tangah Anam Suku yang dikembangkan sebagai project freelance.

Teknologi:

- JavaScript
- React.js
- Node.js
- PostgreSQL

Fitur yang dapat ditampilkan:

- Informasi nagari
- Berita/informasi
- Data nagari
- Event
- CMS/admin
- Database

Tambahkan:

- Screenshot
- Link website
- GitHub jika public

---

# 12. Project — SIKAWAL

Kategori:

> Information Management / IT Assessment

Deskripsi:

Aplikasi internal yang dikembangkan untuk membantu pengelolaan dokumen, assessment, audit, dan proses informasi.

Fitur:

- Document management
- Metadata
- Workflow
- Review
- Approval
- Audit trail

Jangan mempublikasikan:

- Dokumen pemerintah
- Data sensitif
- Credential
- API key
- Internal IP
- Hasil assessment yang bersifat rahasia
- Informasi keamanan internal

Gunakan mock data untuk screenshot.

---

# 13. Project — Kimia Farma

Kategori:

> Data Analysis

Isi:

- Dataset
- Data cleaning
- Data analysis
- Visualization
- Dashboard
- Business insights

Tambahkan screenshot dashboard.

---

# 14. Skills Page

Halaman:

```text
/skills
```

Gunakan kategori.

## Core Skills

- Web Development
- JavaScript
- Information Security
- IT Governance
- IT Assessment

## Web Development

- JavaScript
- React.js
- Node.js
- PostgreSQL

## Data

- Python
- Pandas
- Data Analysis
- Data Visualization

## Information Security

- Information Security
- Incident Response
- Security Monitoring
- ISO/IEC 27001
- IT Risk Management

Jangan menggunakan progress bar seperti:

```text
JavaScript 90%
Cybersecurity 85%
```

Lebih baik menggunakan deskripsi:

- Familiar
- Working Knowledge
- Experienced
- Currently Learning

---

# 15. Certificates Page

Halaman:

```text
/certificates
```

Setiap certificate card:

```text
Nama Sertifikat
Organisasi
Tanggal
Credential ID

[View Credential]
[View Certificate]
```

Jika tersedia, gunakan URL verifikasi resmi dari penerbit.

---

# 16. Contact Page

Halaman:

```text
/contact
```

Tampilkan:

- Email
- LinkedIn
- GitHub

Contact form optional.

Jika menggunakan contact form:

- Validasi input
- Rate limiting
- Honeypot anti-spam
- Server-side validation

Jangan mengekspos API key.

---

# 17. Navigation

Desktop:

```text
Home
About
Experience
Projects
Certificates
Contact
```

Tambahkan:

- GitHub
- LinkedIn
- Theme toggle

Mobile menggunakan hamburger menu.

Navbar harus sticky tetapi tidak mengganggu konten.

---

# 18. Design

Gaya:

> Minimalist Professional Technology Portfolio

Karakter desain:

- Bersih
- Modern
- Profesional
- Banyak whitespace
- Typography kuat
- Card sederhana
- Animasi ringan

Hindari:

- Hacker aesthetic
- Matrix background
- Neon berlebihan
- Animasi berlebihan
- Stock photo teknologi
- Tampilan seperti website perusahaan cybersecurity

Website harus terasa sebagai **personal portfolio**, bukan landing page perusahaan.

---

# 19. Dark Mode

Implementasikan:

- Light mode
- Dark mode

Gunakan Tailwind dark mode.

Pastikan:

- Kontras teks baik
- Tidak terlalu gelap
- Border tetap terlihat
- Code/screenshot tetap mudah dibaca

Gunakan system preference sebagai default.

---

# 20. SEO — PRIORITAS UTAMA

SEO harus dirancang sejak awal.

Jangan hanya mengandalkan homepage.

Setiap halaman harus memiliki metadata sendiri.

---

# 21. Metadata

Gunakan Next.js Metadata API.

Homepage:

```text
Title:
Refdinal — IT Professional | Web Development & Information Security

Description:
Portfolio pribadi Refdinal, IT professional dengan pengalaman di
web development, information security, IT assessment, IT governance,
dan data analysis.
```

Setiap project harus memiliki:

- Unique title
- Unique description
- Canonical URL
- Open Graph metadata

---

# 22. URL SEO Friendly

Gunakan:

```text
/projects/sikawal
/projects/kamang-tangah-anam-suku
/projects/kimia-farma-big-data-analysis
```

Hindari:

```text
/project?id=123
/project/1
/project?project_id=123
```

Gunakan slug yang:

- lowercase
- menggunakan hyphen
- deskriptif
- stabil

---

# 23. Sitemap

Buat:

```text
/app/sitemap.ts
```

Sitemap harus memasukkan:

- Homepage
- About
- Experience
- Projects
- Project detail
- Certificates
- Contact

Jika blog ditambahkan, semua artikel harus otomatis masuk sitemap.

---

# 24. Robots.txt

Buat:

```text
/app/robots.ts
```

Allow:

```text
/
```

Disallow halaman internal jika ada.

Contoh:

```text
/admin
/api
```

Jangan memblokir halaman portfolio yang ingin di-index Google.

---

# 25. Canonical URL

Set canonical URL untuk halaman yang dapat di-index.

Contoh:

```text
https://domain.com/projects/sikawal
```

Canonical harus konsisten.

---

# 26. Open Graph

Setiap halaman penting harus memiliki OG image.

Contoh:

```text
og:image
```

Project dapat memiliki OG image sendiri.

Contoh:

```text
/projects/sikawal
→ sikawal-og.png
```

---

# 27. Structured Data

Implementasikan JSON-LD.

## Person Schema

Untuk identitas:

- Name
- URL
- Image
- Job title
- SameAs

Social profiles:

- LinkedIn
- GitHub

---

## WebSite Schema

Gunakan:

```text
WebSite
```

untuk website utama.

---

## CreativeWork / SoftwareApplication

Gunakan secara selektif untuk project yang memang memenuhi kriterianya.

Jangan membuat schema hanya untuk mengejar SEO.

Structured data harus sesuai dengan konten yang benar-benar terlihat di halaman.

---

# 28. Semantic HTML

Gunakan HTML semantic:

```html
<header>
  <nav>
    <main>
      <section>
        <article>
          <footer></footer>
        </article>
      </section>
    </main>
  </nav>
</header>
```

Jangan membuat semua halaman hanya menggunakan:

```html
<div></div>
```

Gunakan heading secara berurutan:

```text
H1
 ├── H2
 │    └── H3
 └── H2
```

Setiap halaman harus memiliki satu H1 utama.

---

# 29. Internal Linking

Setiap halaman harus saling terhubung.

Contoh:

Experience:

> Manggala Informatika → lihat Project SIKAWAL

Project:

> SIKAWAL → lihat pengalaman terkait

About:

> Web Development → lihat project Kamang Tangah Anam Suku

Gunakan anchor text yang deskriptif.

Hindari:

> Click here

Lebih baik:

> Lihat project SIKAWAL

---

# 30. Image SEO

Gunakan:

- Next.js Image
- WebP/AVIF jika memungkinkan
- Width/height
- Lazy loading
- Descriptive filename
- Alt text

Contoh filename:

```text
sikawal-dashboard.webp
kimia-farma-dashboard.webp
kamang-tangah-anam-suku.webp
```

Hindari:

```text
IMG_1234.jpg
Screenshot1.png
image-final-final.png
```

---

# 31. Performance SEO

Target:

> Lighthouse Performance ≥ 90

Optimalkan:

- LCP
- CLS
- INP

Hindari JavaScript client yang tidak diperlukan.

Gunakan Server Components sebagai default.

Gunakan `"use client"` hanya jika diperlukan.

---

# 32. Font Optimization

Gunakan:

```text
next/font
```

Jangan menggunakan Google Fonts dengan `<link>` eksternal jika tidak diperlukan.

Tujuan:

- Mengurangi layout shift
- Mengoptimalkan loading
- Mengurangi external requests

---

# 33. JavaScript Optimization

Prinsip:

> Server-first.

Jangan menjadikan seluruh aplikasi:

```text
"use client"
```

Gunakan client component hanya untuk:

- Theme toggle
- Interactive menu
- Animation
- Form
- Interactive UI

Content portfolio sebaiknya tetap Server Component.

---

# 34. Accessibility

Target:

> Lighthouse Accessibility ≥ 90

Implementasikan:

- Semantic HTML
- Keyboard navigation
- Focus state
- Alt text
- Proper labels
- Color contrast
- ARIA hanya jika diperlukan

---

# 35. Google Search Console

Setelah deployment:

1. Tambahkan domain ke Google Search Console.
2. Verifikasi domain.
3. Submit sitemap.

Sitemap:

```text
/sitemap.xml
```

Periksa:

- Pages indexed
- Pages not indexed
- Crawl errors
- Search queries
- Performance
- Core Web Vitals

---

# 36. Google Analytics

Optional:

> Google Analytics 4

Jika digunakan:

Track:

- Page views
- Project clicks
- LinkedIn clicks
- GitHub clicks
- Certificate clicks
- Contact submissions

Jangan memasang tracking yang tidak diperlukan.

---

# 37. Social Profile Integration

Tambahkan link:

- LinkedIn
- GitHub

Jika memiliki:

- Email
- Portfolio project
- Other professional profiles

Gunakan social profile yang benar-benar aktif.

---

# 38. Security

Jangan pernah memasukkan:

```text
API_KEY
DATABASE_URL
PASSWORD
JWT_SECRET
PRIVATE_KEY
```

ke repository.

Gunakan:

```text
.env.local
```

dan:

```text
.env.example
```

untuk dokumentasi variable.

Tambahkan `.env*` yang sensitif ke `.gitignore`.

---

# 39. Environment Variables

Contoh:

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_ID=
```

Variable rahasia jangan menggunakan prefix:

```text
NEXT_PUBLIC_
```

karena variable tersebut dapat dikirim ke browser.

---

# 40. Git Repository

Gunakan GitHub.

Repository:

```text
personal-portfolio
```

Branch:

```text
main
```

Gunakan commit yang jelas:

```text
feat: add project detail page
feat: add experience section
fix: improve mobile navigation
seo: add sitemap and metadata
perf: optimize project images
```

---

# 41. Vercel Deployment

Workflow:

```text
Local Development
       ↓
GitHub
       ↓
Vercel
       ↓
Production
```

Setelah repository dibuat:

1. Push project ke GitHub.
2. Import repository ke Vercel.
3. Set environment variables.
4. Deploy.
5. Hubungkan custom domain.
6. Aktifkan HTTPS.
7. Test production.
8. Submit sitemap ke Google Search Console.

---

# 42. Domain

Gunakan domain pribadi jika tersedia.

Contoh:

```text
refdinal.com
```

atau domain lain yang merepresentasikan nama pribadi.

Hindari domain yang terlalu panjang.

---

# 43. Content Strategy

Website tidak hanya menjadi CV online.

Jika memungkinkan, tambahkan konten berdasarkan pengalaman nyata.

Contoh artikel:

```text
Pengalaman Membuat Website Nagari dengan React dan Node.js

Membangun Aplikasi untuk Mendukung IT Assessment

Belajar Information Security dari Pekerjaan Sehari-hari

Mengenal ISO 27001 dari Perspektif Praktis

Membangun Dashboard Analisis Data dengan Python

Pengalaman Mengembangkan Aplikasi Internal
```

Artikel harus berdasarkan pengalaman nyata.

Jangan membuat artikel hanya untuk mengejar keyword.

---

# 44. Blog — Fase Berikutnya

Blog dapat dibuat menggunakan MDX.

Struktur:

```text
/blog
/blog/[slug]
```

Setiap artikel:

- Title
- Description
- Published date
- Updated date
- Author
- Cover image
- Category
- Tags
- Reading time

SEO metadata otomatis dibuat berdasarkan frontmatter.

---

# 45. Data Structure

Gunakan TypeScript.

Contoh experience:

```text
Experience {
  company
  position
  startDate
  endDate
  location
  description[]
  skills[]
}
```

Project:

```text
Project {
  title
  slug
  description
  category
  technologies[]
  image
  featured
  liveUrl
  githubUrl
  content
}
```

Certificate:

```text
Certificate {
  title
  issuer
  issueDate
  credentialId
  credentialUrl
  image
}
```

---

# 46. Komponen

Buat reusable components:

```text
components/
├── Navbar
├── Footer
├── Hero
├── SectionHeader
├── ExperienceCard
├── ProjectCard
├── CertificateCard
├── SkillBadge
├── SocialLinks
├── Button
├── ThemeToggle
└── MobileMenu
```

Jangan membuat komponen terlalu besar.

---

# 47. Struktur Folder

Rekomendasi:

```text
src/
├── app/
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── certificates/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── layout.tsx
│   └── not-found.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── ExperienceCard.tsx
│   └── CertificateCard.tsx
│
├── data/
│   ├── profile.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── certificates.ts
│   └── skills.ts
│
├── lib/
│   ├── seo.ts
│   └── utils.ts
│
└── types/
    └── index.ts
```

---

# 48. Homepage SEO Structure

Homepage:

```text
H1
  ↓
Introduction
  ↓
What I Do
  ↓
Featured Projects
  ↓
Experience
  ↓
Skills
  ↓
Certificates
  ↓
Contact
```

Jangan memasukkan terlalu banyak informasi di homepage.

Homepage harus menjadi pintu masuk menuju halaman detail.

---

# 49. Featured Projects

Homepage menampilkan 3 project utama:

### 1. SIKAWAL

Information Management / IT Assessment

### 2. Kamang Tangah Anam Suku

Web Development

### 3. Kimia Farma Big Data Analysis

Data Analysis

Setiap card memiliki:

```text
Project title
Short description
Technology
View Project
```

---

# 50. SEO Keyword Strategy

Target keyword harus berdasarkan pengalaman nyata.

Primary keywords:

```text
IT Professional
Web Development
Information Security
IT Assessment
IT Governance
JavaScript
React.js
Node.js
Data Analysis
```

Secondary keywords:

```text
Information Security Management
ISO 27001
Incident Response
Security Monitoring
Python
PostgreSQL
```

Jangan melakukan keyword stuffing.

---

# 51. Local / Personal Branding SEO

Jika relevan, website dapat menyebut:

> IT Professional in Padang, West Sumatra, Indonesia

Namun jangan membuat halaman lokasi hanya untuk SEO.

Gunakan informasi lokasi secara natural di:

- About
- Experience
- Contact

---

# 52. E-E-A-T

Website harus memperkuat pengalaman nyata.

Tampilkan:

- Pengalaman kerja
- Project
- Sertifikat
- GitHub
- LinkedIn
- Screenshot project
- Penjelasan kontribusi

Hindari klaim yang tidak dapat dibuktikan.

Tujuannya agar website menunjukkan:

> Experience → Projects → Evidence → Skills

---

# 53. Privacy

Jangan tampilkan:

- NIK
- Nomor HP pribadi jika tidak diperlukan
- Alamat rumah
- Dokumen pribadi
- Data internal instansi
- Informasi confidential
- Credential pemerintah

Untuk project pemerintah, gunakan informasi yang memang boleh dipublikasikan.

---

# 54. Testing

Sebelum production:

## Functional

- [ ] Semua link bekerja
- [ ] Navigation bekerja
- [ ] Mobile menu bekerja
- [ ] Dark mode bekerja
- [ ] Contact form bekerja jika ada
- [ ] Project detail bekerja
- [ ] Certificate link bekerja

## SEO

- [ ] Metadata
- [ ] Title
- [ ] Description
- [ ] Canonical
- [ ] Sitemap
- [ ] Robots
- [ ] Structured data
- [ ] Open Graph

## Performance

- [ ] Lighthouse
- [ ] Mobile performance
- [ ] Image optimization
- [ ] Font optimization
- [ ] Bundle size

## Security

- [ ] Tidak ada secret di GitHub
- [ ] Tidak ada API key
- [ ] Tidak ada database credential
- [ ] Tidak ada data confidential

---

# 55. Lighthouse Target

Target minimum:

```text
Performance       ≥ 90
Accessibility     ≥ 90
Best Practices    ≥ 90
SEO               ≥ 95
```

Target bukan sekadar mendapatkan angka tinggi.

Prioritas:

1. Content
2. Accessibility
3. Performance
4. SEO
5. Visual effects

---

# 56. Definition of Done

Website versi pertama dianggap selesai jika:

- [ ] Next.js App Router
- [ ] TypeScript
- [ ] Tailwind CSS
- [ ] Responsive
- [ ] Light/Dark mode
- [ ] Homepage
- [ ] About
- [ ] Experience
- [ ] Projects
- [ ] Project detail
- [ ] Certificates
- [ ] Contact
- [ ] LinkedIn
- [ ] GitHub
- [ ] Metadata SEO
- [ ] Sitemap
- [ ] Robots.txt
- [ ] Canonical URL
- [ ] Open Graph
- [ ] Person Schema
- [ ] Website Schema
- [ ] Optimized images
- [ ] Accessibility
- [ ] Lighthouse audit
- [ ] GitHub repository
- [ ] Vercel deployment
- [ ] Custom domain
- [ ] Google Search Console
- [ ] Sitemap submitted
- [ ] No sensitive information exposed

---

# 57. Development Priority

Jangan mengerjakan semua fitur sekaligus.

Urutan:

## Phase 1 — Foundation

- Next.js
- TypeScript
- Tailwind
- Layout
- Navbar
- Footer
- Theme

## Phase 2 — Content

- Home
- About
- Experience
- Projects
- Certificates
- Contact

## Phase 3 — Project Detail

- Dynamic project pages
- Screenshots
- Technologies
- GitHub
- Live demo

## Phase 4 — SEO

- Metadata
- Sitemap
- Robots
- Canonical
- Open Graph
- JSON-LD
- Internal linking

## Phase 5 — Performance

- Image optimization
- Font optimization
- Server Components
- Bundle optimization
- Lighthouse

## Phase 6 — Deployment

- GitHub
- Vercel
- Domain
- HTTPS
- Google Search Console
- Analytics

## Phase 7 — Content Growth

- Blog
- Technical notes
- Project case studies
- Learning journey

---

# 58. Prinsip Utama Project

Website harus mengikuti prinsip:

> **Simple, Fast, Honest, Searchable, and Evidence-Based.**

Jangan membuat website terlihat lebih hebat daripada pengalaman sebenarnya.

Lebih baik menunjukkan:

> "Saya pernah membuat ini."

daripada mengatakan:

> "Saya ahli dalam hal ini."

Project nyata, pengalaman nyata, dan pembelajaran nyata harus menjadi inti personal branding website.
