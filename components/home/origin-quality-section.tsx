import type { SiteDictionary } from "@/data/dictionaries/types";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { ButtonLink } from "../ui/button-link";

type OriginQualitySectionProps = {
  locale: Locale;
  content: SiteDictionary["home"]["quality"];
};

export function OriginQualitySection({
  locale,
  content,
}: OriginQualitySectionProps) {
  return (
    <section className="section-padding pt-2">
      <div className="site-shell">
        <div className="rounded-frame relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_14%,rgba(217,188,115,0.12),transparent_18%),radial-gradient(circle_at_14%_78%,rgba(120,145,82,0.12),transparent_22%)]" />

          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
            {content.eyebrow}
          </p>
          <h2 className="mt-5 max-w-4xl text-5xl text-white md:text-6xl">{content.title}</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 muted-copy md:text-lg">
            {content.description}
          </p>

          <div className="mt-8">
            <div className="rounded-[2.15rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4">
              {/*
                Replace this immersive placeholder with a future origin image,
                map composition, or Thessaloniki / Epanomi landscape treatment.
              */}
              <div className="relative aspect-[21/9] overflow-hidden rounded-[1.7rem] bg-[linear-gradient(160deg,#101510_0%,#0a0f0a_48%,#111911_100%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(217,188,115,0.2),transparent_22%),radial-gradient(circle_at_76%_52%,rgba(120,145,82,0.16),transparent_24%)]" />
                <div className="absolute inset-x-[8%] top-[28%] h-px bg-white/10" />
                <div className="absolute inset-y-[22%] left-[26%] w-px bg-white/8" />
                <div className="absolute inset-y-[18%] left-[68%] w-px bg-white/8" />
                <div className="absolute left-[12%] top-[36%] rounded-full border border-white/10 bg-black/26 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/66">
                  Greece
                </div>
                <div className="absolute left-[54%] top-[30%] rounded-full border border-[rgba(217,188,115,0.22)] bg-[rgba(217,188,115,0.08)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
                  Thessaloniki
                </div>
                <div className="absolute left-[66%] top-[52%] rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/66">
                  Epanomi
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <div className="surface-card gold-ring rounded-[2rem] p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-strong)]">
                  {content.location.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl text-white">{content.location.title}</h3>
                <p className="mt-4 text-sm leading-6 muted-copy">{content.location.description}</p>
                <div className="mt-6 space-y-3">
                  {content.location.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/72"
                    >
                      {point}
                    </div>
                  ))}
                </div>
                <div className="mt-7">
                  <ButtonLink href={getLocalizedPath(locale, "quality")} variant="secondary">
                    {content.cta}
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="relative pl-6">
              <div className="absolute bottom-0 left-0 top-2 w-px bg-gradient-to-b from-[rgba(217,188,115,0.3)] via-white/10 to-transparent" />
              <div className="space-y-4">
                {content.pillars.map((pillar, index) => (
                  <article
                    key={pillar.title}
                    className="surface-card relative rounded-[2rem] p-6"
                  >
                    <div className="absolute -left-[2.05rem] top-7 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(217,188,115,0.22)] bg-[rgba(217,188,115,0.08)] text-[11px] font-semibold tracking-[0.18em] text-[var(--color-accent-strong)]">
                      {index + 1}
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
                      Oliventa
                    </p>
                    <h3 className="mt-4 text-3xl text-white">{pillar.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 md:text-base">
                      {pillar.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
