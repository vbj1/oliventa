import Image from "next/image";
import type { SiteDictionary } from "@/data/dictionaries/types";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { ButtonLink } from "../ui/button-link";

type HeroSectionProps = {
  locale: Locale;
  hero: SiteDictionary["home"]["hero"];
};

export function HeroSection({ locale, hero }: HeroSectionProps) {
  return (
    <section className="px-4 pb-6 pt-4 sm:px-6 lg:px-8">
      <div className="site-shell">
        <div className="rounded-frame relative overflow-hidden">
          <div className="relative min-h-[calc(100svh-7.5rem)]">
            <Image
              src="/images/editorial/greek-landscape-hero.svg"
              alt="Greek coastal landscape"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,5,0.92)_0%,rgba(5,7,5,0.84)_28%,rgba(5,7,5,0.46)_56%,rgba(5,7,5,0.62)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(217,188,115,0.16),transparent_26%),radial-gradient(circle_at_74%_24%,rgba(217,188,115,0.14),transparent_22%),radial-gradient(circle_at_72%_78%,rgba(120,145,82,0.14),transparent_28%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050705] via-[#050705]/78 to-transparent" />

            <div className="relative z-10 flex min-h-[calc(100svh-7.5rem)] flex-col justify-between px-6 pb-7 pt-24 sm:px-8 sm:pb-8 sm:pt-28 lg:px-12 lg:pb-10 lg:pt-32">
              <div className="max-w-[44rem]">
                <p className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-[var(--color-accent-strong)] backdrop-blur-sm">
                  {hero.eyebrow}
                </p>

                <h1 className="editorial-title mt-7 text-7xl text-white sm:text-8xl lg:text-[7.5rem]">
                  Oliventa
                </h1>

                <h2 className="mt-5 max-w-2xl text-2xl font-medium tracking-[-0.03em] text-white/92 sm:text-[2rem] lg:text-[2.25rem]">
                  {hero.title}
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
                  {hero.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={getLocalizedPath(locale, "products")}>
                    {hero.primaryCta}
                  </ButtonLink>
                  <ButtonLink href={getLocalizedPath(locale, "about")} variant="secondary">
                    {hero.secondaryCta}
                  </ButtonLink>
                </div>
              </div>

              <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
                <div className="grid gap-3 sm:grid-cols-3">
                  {hero.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="surface-card rounded-[1.6rem] px-4 py-4 text-sm leading-6 text-white/78"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <aside className="surface-card hidden rounded-[2rem] p-5 lg:block">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-strong)]">
                    {hero.stage.kicker}
                  </p>
                  <h3 className="mt-4 text-3xl text-white">{hero.stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                    {hero.stage.description}
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
