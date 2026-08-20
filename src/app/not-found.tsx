import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-4xl font-extrabold text-secondary mb-4">404 - Page Not Found</h1>
      <p className="text-textMuted mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white bg-primary hover:bg-opacity-90 font-semibold transition-all"
        href="/"
      >
        Back to Home
      </Link>
    </main>
  );
}
