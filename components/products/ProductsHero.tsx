import type { SiteDictionary } from "@/data/dictionaries/types";
import { FadeIn } from "../ui/fade-in";

type ProductsHeroProps = {
  content: SiteDictionary["products"]["hero"];
};

export function ProductsHero({ content }: ProductsHeroProps) {
  return (
    <section className="px-4 pt-28 sm:px-6 sm:pt-[7.5rem] lg:px-8 lg:pt-32">
      <div className="site-shell">
        <div className="rounded-frame relative overflow-hidden px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(217,188,115,0.14),transparent_22%),radial-gradient(circle_at_84%_20%,rgba(120,145,82,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))]" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <FadeIn className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                {content.eyebrow}
              </p>
              <div className="mt-5 flex items-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-[rgba(217,188,115,0.7)] to-transparent" />
                <span className="text-[11px] uppercase tracking-[0.32em] text-white/45">
                  {content.kicker}
                </span>
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl text-white md:text-6xl lg:text-[4.7rem]">
                {content.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 muted-copy md:text-lg md:leading-8">
                {content.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4">
                <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.65rem] bg-[linear-gradient(160deg,#101510_0%,#0a0f0a_46%,#141a12_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(217,188,115,0.22),transparent_22%),radial-gradient(circle_at_74%_70%,rgba(120,145,82,0.18),transparent_26%)]" />
                  <div className="absolute left-[18%] top-[16%] h-[56%] w-[34%] rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]" />
                  <div className="absolute left-[21%] top-[28%] h-[28%] w-[28%] rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(91,106,36,0.88),rgba(40,49,20,0.2))]" />
                  <div className="absolute right-[10%] bottom-[16%] h-[34%] w-[36%] rounded-[1.9rem] border border-[rgba(217,188,115,0.2)] bg-[rgba(217,188,115,0.08)]" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/60">
                    {content.kicker}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
