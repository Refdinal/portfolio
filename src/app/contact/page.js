import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/seo";
import { profile } from "@/data/profile";

export const metadata = buildMetadata({
  title: "Kontak — Refdinal F, S.T.",
  description:
    "Hubungi Refdinal F, S.T., Manggala Informatika Ahli Pertama di Dinas Kominfo Kota Padang — terbuka untuk diskusi, berbagi, maupun kolaborasi profesional.",
  path: "/contact",
});

const cleanUrl = (u) => (u ? u.replace(/^https?:\/\//, "") : "");

const faqs = [
  {
    question: "Apakah Anda menerima kolaborasi di luar pekerjaan utama?",
    answer:
      "Ya, selama tidak mengganggu pekerjaan saya sebagai ASN. Kolaborasi bersifat part-time dan dikerjakan di luar jam kerja (Senin–Jumat, 07.30–16.30 WIB).",
  },
  {
    question: "Jenis pekerjaan apa yang Anda terima?",
    answer:
      "Pembuatan aplikasi, perbaikan aplikasi, penanganan insiden keamanan, uji keamanan (security assessment), konsultasi awal, dan analisis data.",
  },
  {
    question: "Jenis pekerjaan apa yang tidak Anda terima?",
    answer:
      "Pekerjaan full-time atau perjanjian ketat yang berpotensi mengganggu pekerjaan utama saya sebagai ASN.",
  },
  {
    question: "Siapa saja yang bisa bekerja sama?",
    answer:
      "Siapa saja — instansi pemerintah, pemerintah nagari/desa, usaha, maupun perorangan.",
  },
  {
    question: "Bagaimana alur kolaborasinya?",
    answer:
      "Dimulai dari konsultasi untuk memahami kebutuhan. Setelah itu saya sampaikan solusi digital dan penawaran berisi rencana serta ruang lingkup pekerjaan, lalu dikerjakan sampai selesai.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran dilakukan setelah pekerjaan selesai dan Anda puas dengan hasilnya. Tidak ada pembayaran di awal.",
  },
  {
    question: "Apakah ada garansi dan maintenance?",
    answer:
      "Kesalahan yang berasal dari sisi pengerjaan saya beri garansi hingga 1 tahun. Untuk maintenance lanjutan dapat dibicarakan sesuai kebutuhan.",
  },
  {
    question: "Bagaimana kerahasiaan data dan dokumen saya?",
    answer:
      "Data dan dokumen Anda dijaga kerahasiaannya. Bila diperlukan, dapat dibuat perjanjian kerahasiaan (NDA) sebelum pekerjaan dimulai, dan studi kasus hanya ditampilkan tanpa menyebut nama instansi.",
  },
  {
    question: "Bagaimana dengan biaya?",
    answer:
      "Biaya dibicarakan terlebih dahulu setelah ruang lingkup pekerjaan jelas, sehingga tidak ada kejutan di tengah pengerjaan.",
  },
  {
    question: "Kapan biasanya Anda merespons?",
    answer:
      "Umumnya pada hari yang sama, maksimal 1×24 jam pada hari kerja.",
  },
];

const contacts = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: cleanUrl(profile.social.linkedin),
    href: profile.social.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: cleanUrl(profile.social.github),
    href: profile.social.github,
    Icon: GitHubIcon,
    external: true,
  },
].filter((contact) => Boolean(contact.href));

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Mari Terhubung"
        description="Silakan hubungi saya melalui salah satu kanal di bawah. Terbuka untuk diskusi, berbagi, maupun kolaborasi profesional. Respons tercepat melalui WhatsApp."
        bg="bg-persimmon"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <WhatsAppLink
            number={profile.whatsapp}
            message="Halo, saya ingin berdiskusi."
            className="group rounded-2xl border border-border bg-paper p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-inkwell hover:shadow-xl"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-inkwell/20 text-inkwell">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-base font-bold">WhatsApp</h2>
            <p className="mt-1 break-all text-sm text-muted group-hover:text-inkwell">
              Chat via WhatsApp
            </p>
          </WhatsAppLink>

          {contacts.map(({ label, value, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-border bg-paper p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-inkwell hover:shadow-xl"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-inkwell/20 text-inkwell">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-bold">{label}</h2>
              <p className="mt-1 break-all text-sm text-muted group-hover:text-inkwell">{value}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-start gap-3">
          <WhatsAppLink
            number={profile.whatsapp}
            message="Halo, saya ingin berdiskusi."
            className="inline-flex items-center justify-center gap-2 rounded-full bg-inkwell px-7 py-3 text-base font-medium text-on-accent shadow-lg shadow-inkwell/25 transition-colors hover:-translate-y-0.5 hover:bg-obsidian hover:text-paper hover:shadow-xl"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat WhatsApp
          </WhatsAppLink>
          <Button href={`mailto:${profile.email}`} size="lg">
            Kirim Email
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted">
          Berlokasi di {profile.location}.
        </p>

        <section className="mt-16 border-t border-border pt-12" aria-labelledby="faq">
          <h2 id="faq" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Pertanyaan Umum
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Beberapa hal yang mungkin ingin Anda ketahui sebelum memulai diskusi.
          </p>
          <div className="mt-6 space-y-3">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-2xl border border-border bg-paper p-5 shadow-sm transition-colors open:border-inkwell/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold [&::-webkit-details-marker]:hidden">
                  {question}
                  <span
                    className="shrink-0 text-xl leading-none text-inkwell transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
