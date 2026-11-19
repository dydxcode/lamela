import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-xl font-semibold">404 — Video tidak ditemukan</h1>
      <Link href="/" className="text-sm text-neutral-400 underline">
        Kembali
      </Link>
    </main>
  );
}
