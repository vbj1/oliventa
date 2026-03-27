import type { SiteDictionary } from "@/data/dictionaries/types";

type BrandStorySectionProps = {
  content: SiteDictionary["home"]["story"];
};

export function BrandStorySection({ content }: BrandStorySectionProps) {
  return (
    <section className="section-padding pb-4">
      <div className="site-shell">
        <div className="rounded-frame relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(217,188,115,0.12),transparent_20%),radial-gradient(circle_at_78%_28%,rgba(120,145,82,0.12),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-[38%] hidden w-px bg-white/6 lg:block" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_0.92fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                {content.eyebrow}
              </p>
              <h2 className="mt-5 text-5xl text-white md:text-6xl">{content.title}</h2>
              <p className="mt-5 text-base leading-7 muted-copy md:text-lg">{content.description}</p>

              <div className="mt-8 space-y-5">
                {content.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-sm leading-7 text-white/76 md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {content.metrics.map((metric) => (
                  <div key={metric.label} className="surface-card rounded-[1.7rem] px-5 py-5">
                    <p className="text-4xl text-white md:text-[2.6rem]">{metric.value}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-white/46">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="surface-card gold-ring relative overflow-hidden rounded-[2.25rem] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_26%,rgba(217,188,115,0.18),transparent_24%),radial-gradient(circle_at_76%_74%,rgba(120,145,82,0.16),transparent_26%)]" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-strong)]">
                    {content.visual.eyebrow}
                  </p>
                  <h3 className="mt-4 max-w-sm text-3xl text-white">{content.visual.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 muted-copy">
                    {content.visual.description}
                  </p>

                  {/*
                    Replace this composed placeholder with a real editorial image, still-life,
                    or campaign mockup once Oliventa photography is ready.
                  */}
                  <div className="mt-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-[linear-gradient(160deg,#121811_0%,#0b100b_45%,#141a12_100%)]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_26%,rgba(217,188,115,0.2),transparent_22%),radial-gradient(circle_at_72%_66%,rgba(120,145,82,0.16),transparent_24%)]" />
                      <div className="absolute left-[12%] top-[12%] h-[68%] w-[58%] rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))]" />
                      <div className="absolute bottom-[10%] right-[10%] h-[38%] w-[42%] rounded-[2rem] border border-[rgba(217,188,115,0.24)] bg-[radial-gradient(circle_at_50%_24%,rgba(217,188,115,0.24),transparent_28%),linear-gradient(180deg,rgba(27,33,22,0.9),rgba(8,10,8,0.9))]" />
                      <div className="absolute left-[18%] top-[18%] h-[54%] w-[48%] rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-md" />
                      <div className="absolute bottom-8 left-8 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/62">
                        Future imagery
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {content.visual.details.map((detail) => (
                      <div
                        key={detail}
                        className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/72"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
