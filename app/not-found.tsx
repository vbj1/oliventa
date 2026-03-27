import Link from "next/link";
import { defaultLocale } from "@/lib/i18n";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="site-shell">
        <div className="rounded-frame mx-auto max-w-2xl px-6 py-12 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
            Oliventa
          </p>
          <h1 className="mt-5 text-5xl text-white">Page not found.</h1>
          <p className="mt-4 text-base leading-7 muted-copy">
            The route you requested is not available in the current multilingual structure.
          </p>
          <Link
            href={`/${defaultLocale}`}
            className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white transition hover:bg-white/[0.08]"
          >
            Return to Oliventa
          </Link>
        </div>
      </div>
    </main>
  );
}
