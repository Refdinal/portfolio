import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-28 text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Halaman tidak ditemukan</h1>
      <p className="mt-4 max-w-md text-muted">
        Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Kembali ke Beranda
        </Button>
      </div>
    </Container>
  );
}
