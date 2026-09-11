export const projects = [
  {
    title: "Website Kamang Tangah Anam Suku",
    slug: "kamang-tangah-anam-suku",
    summary:
      "Website informasi untuk Nagari Kamang Tangah Anam Suku yang online sejak 2024, lengkap dengan sistem pengelolaan konten dan database.",
    category: "Web Development",
    period: "Sejak Juni 2024",
    technologies: ["JavaScript", "React.js", "Node.js", "PostgreSQL"],
    image: "/projects/kamang-tangah-anam-suku/opengraph-image",
    featured: true,
    liveUrl: "https://www.kamangtangahanamsuku.com",
    githubUrl: null,
    screenshots: ["/projects/kamang-tangah-anam-suku.png"],
    sections: [
      {
        heading: "Overview",
        body: "Proyek ini adalah website informasi untuk Nagari Kamang Tangah Anam Suku yang mulai online sejak Juni 2024. Website menjadi media untuk menyampaikan informasi nagari kepada masyarakat, seperti profil, berita, data, dan agenda kegiatan. Pengerjaan dimulai dari proses pemahaman kebutuhan, perancangan, hingga deployment dan maintenance.",
      },
      {
        heading: "Problem",
        body: "Sebelum website ini ada, informasi nagari disampaikan secara terbatas melalui pesan WhatsApp dan mulut ke mulut, sehingga mudah tersebar dan sulit diakses kembali. Belum ada satu tempat yang menampung informasi nagari secara terstruktur, termasuk data yang terus berubah seperti data penduduk dan APB nagari.",
      },
      {
        heading: "Solution",
        body: "Saya membangun website informasi terpusat yang dapat diakses masyarakat dari mana saja. Konten dikelola langsung oleh staf nagari melalui fitur admin (CMS), sehingga berita dan data seperti data penduduk serta APB nagari dapat diperbarui secara berkala tanpa perlu menyentuh kode.",
      },
      {
        heading: "My Role",
        body: "Saya bekerja secara individu sebagai pengembang website. Tanggung jawab saya mencakup pengumpulan kebutuhan, perancangan database, pengembangan frontend dan backend, pembuatan fitur pengelolaan konten, sampai deployment dan maintenance.",
      },
      {
        heading: "Key Features",
        bullets: [
          "Halaman informasi dan profil nagari",
          "Berita dan pengumuman yang dikelola staf nagari",
          "Data nagari realtime, termasuk data penduduk dan APB nagari",
          "Kalender dan agenda kegiatan",
          "Sistem CMS/admin untuk mengelola konten",
          "Pengelolaan data melalui database",
        ],
      },
      {
        heading: "Impact",
        body: "Nagari lebih mudah mengelola dan menyajikan data penduduk serta APB nagari, sementara masyarakat dapat mengakses informasi secara terpusat. Website ini menjadi langkah awal digitalisasi nagari. Saya masih melakukan maintenance secara sukarela hingga sekarang.",
      },
      {
        heading: "Challenges",
        body: "Salah satu tantangan adalah menyederhanakan proses pengelolaan konten agar bisa dipakai oleh orang dengan tingkat kemampuan teknis yang bervariasi. Diperlukan desain antarmuka yang intuitif dan pola pengelolaan data yang mudah dipahami.",
      },
      {
        heading: "What I Learned",
        body: "Proyek ini mengajarkan saya cara bekerja dari awal hingga akhir sebagai single developer. Saya belajar melakukan requirement gathering dengan pengguna nyata, merancang struktur data, dan mempraktikkan penggunaan React.js, Node.js, serta PostgreSQL pada project yang benar-benar dipakai orang.",
      },
    ],
  },
  {
    title: "SIKAWAL",
    slug: "sikawal",
    summary:
      "Aplikasi internal untuk membantu pengelolaan dokumen, assessment, dan proses informasi, dikembangkan untuk mendukung kegiatan IT assessment di lingkungan kerja.",
    category: "Information Management / IT Assessment",
    period: "Aktif digunakan",
    technologies: ["JavaScript", "React.js", "Node.js", "PostgreSQL"],
    image: "/projects/sikawal/opengraph-image",
    featured: true,
    liveUrl: "https://sikawal.padang.go.id",
    githubUrl: null,
    screenshots: ["/projects/sikawal.png"],
    sections: [
      {
        heading: "Overview",
        body: "SIKAWAL adalah aplikasi internal yang saya kembangkan untuk mendukung kegiatan assessment dan pengelolaan informasi di bidang saya. Aplikasi ini aktif digunakan oleh sekitar 8 orang dan membantu merapikan alur dokumen serta proses agar lebih terkontrol dan dapat diaudit. Karena aplikasi ini digunakan di lingkungan kerja, detail dan data yang bersifat internal tidak ditampilkan di sini.",
      },
      {
        heading: "Problem",
        body: "Dokumen dan proses informasi tersebar sehingga menyulitkan pencarian — sering kali file harus dicari secara manual tanpa tahu di mana letaknya. Dibutuhkan sebuah sistem yang mengelola siklus hidup dokumen, memastikan proses berjalan sesuai alur, menyediakan jejak audit untuk kebutuhan assessment, dan menjaga kerahasiaan berkas.",
      },
      {
        heading: "Solution",
        body: "Saya mengembangkan aplikasi yang memusatkan pengelolaan dokumen dan proses pengambilan keputusan dalam satu tempat. Dokumen menjadi terintegrasi dan terpusat, lengkap dengan metadata, workflow, dan jejak audit, sementara file yang bersifat rahasia disimpan dalam keadaan terenkripsi.",
      },
      {
        heading: "My Role",
        body: "Saya berperan sebagai pengembang utama aplikasi. Saya merancang alur proses, struktur data, dan mengembangkan antarmuka serta logika backend untuk mendukung kebutuhan pengelolaan informasi yang terstruktur dan dapat dilacak.",
      },
      {
        heading: "Key Features",
        bullets: [
          "Modul kelola dokumen",
          "Modul Audit IKASANDI",
          "Modul Indeks KAMI",
          "Kelengkapan metadata dokumen",
          "Workflow proses dan persetujuan",
          "Review dan approval berjenjang",
          "Audit trail untuk ketertelusuran",
          "Enkripsi untuk dokumen rahasia",
        ],
      },
      {
        heading: "Impact",
        body: "Pengelolaan dokumen dan proses menjadi lebih terkontrol, terintegrasi, dan terpusat. Pencarian file tidak lagi dilakukan secara manual, dan dokumen rahasia tersimpan lebih aman.",
      },
      {
        heading: "Challenges",
        body: "Tantangan utamanya adalah merancang alur proses yang sesuai dengan kebutuhan organisasi sambil tetap fleksibel. Perlu perhatian pada kepastian bahwa setiap langkah tercatat dengan benar, karena aplikasi ini mendukung kebutuhan audit dan assessment.",
      },
      {
        heading: "What I Learned",
        body: "Proyek ini mengajarkan saya bagaimana mengembangkan aplikasi yang mendukung proses kerja nyata di sebuah organisasi. Saya belajar merancang sistem untuk ketertelusuran dan kontrol, serta pentingnya data dan alur yang cocok dengan kebutuhan pengguna.",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) || null;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
