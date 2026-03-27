import type { SiteDictionary } from "@/data/dictionaries/types";

type ProductUniverseSectionProps = {
  content: SiteDictionary["home"]["productUniverse"];
};

const tileLayouts = [
  "md:col-span-7 md:row-span-2 min-h-[23rem]",
  "md:col-span-5 min-h-[18rem]",
  "md:col-span-4 min-h-[17rem]",
  "md:col-span-4 min-h-[17rem]",
  "md:col-span-4 min-h-[17rem]",
  "md:col-span-8 min-h-[18rem]",
];

const accentStyles = [
  "from-[rgba(217,188,115,0.22)] via-transparent to-transparent",
  "from-[rgba(120,145,82,0.2)] via-transparent to-transparent",
  "from-[rgba(255,255,255,0.12)] via-transparent to-transparent",
  "from-[rgba(217,188,115,0.18)] via-transparent to-transparent",
  "from-[rgba(120,145,82,0.16)] via-transparent to-transparent",
  "from-[rgba(217,188,115,0.2)] via-transparent to-transparent",
];

export function ProductUniverseSection({ content }: ProductUniverseSectionProps) {
  return (
    <section className="section-padding pt-2">
      <div className="site-shell">
        <div className="rounded-frame relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_10%,rgba(217,188,115,0.11),transparent_20%),radial-gradient(circle_at_10%_80%,rgba(120,145,82,0.12),transparent_22%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                {content.eyebrow}
              </p>
              <h2 className="mt-5 max-w-4xl text-5xl text-white md:text-6xl">{content.title}</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 muted-copy md:text-lg">
                {content.description}
              </p>
            </div>

            <aside className="surface-card gold-ring rounded-[2rem] p-5">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-strong)]">
                Oliventa
              </p>
              <h3 className="mt-4 text-2xl text-white">{content.note.title}</h3>
              <p className="mt-3 text-sm leading-6 muted-copy">{content.note.description}</p>
            </aside>
          </div>

          <div className="relative mt-10 grid gap-4 md:grid-cols-12 md:auto-rows-[180px]">
            {content.items.map((item, index) => (
              <article
                key={item.title}
                className={`surface-card group relative overflow-hidden rounded-[2rem] p-5 transition-transform duration-300 hover:-translate-y-1 ${tileLayouts[index] ?? "md:col-span-6 min-h-[17rem]"}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentStyles[index] ?? accentStyles[0]}`}
                />
                <div className="pointer-events-none absolute right-5 top-5 h-20 w-20 rounded-full border border-white/8 bg-white/[0.03]" />
                <div className="pointer-events-none absolute right-9 top-9 h-6 w-6 rounded-full bg-[rgba(217,188,115,0.28)] blur-sm" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent-strong)]">
                      {item.kicker}
                    </p>
                    {item.stat && (
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/48">
                        {item.stat}
                      </span>
                    )}
                  </div>

                  {/*
                    Replace this refined placeholder band with future product renders,
                    packshots, or category-led lifestyle imagery.
                  */}
                  <div className="mt-5 rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3">
                    <div className="relative h-28 overflow-hidden rounded-[1.3rem] bg-[linear-gradient(155deg,#111611_0%,#0b0f0b_48%,#151d12_100%)]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_30%,rgba(217,188,115,0.24),transparent_24%),radial-gradient(circle_at_78%_70%,rgba(120,145,82,0.18),transparent_26%)]" />
                      <div className="absolute left-5 top-5 h-12 w-12 rounded-[1rem] border border-white/10 bg-white/[0.04]" />
                      <div className="absolute bottom-4 right-5 h-14 w-24 rounded-full border border-[rgba(217,188,115,0.22)] bg-[rgba(217,188,115,0.08)]" />
                    </div>
                  </div>

                  <div className="mt-5 flex-1">
                    <h3 className="text-3xl text-white">{item.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/72 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
