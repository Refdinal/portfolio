import { Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, personSchema, websiteSchema } from "@/lib/seo";
import { profile } from "@/data/profile";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: SITE_URL,
  title: {
    default: "Refdinal — IT Professional | Web Development & Information Security",
    template: "%s | Refdinal",
  },
  description: profile.tagline,
  openGraph: {
    siteName: profile.name,
    locale: "id_ID",
    type: "website",
  },
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && systemDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${interTight.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <JsonLd data={[personSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
