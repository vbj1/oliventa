import type { SiteDictionary } from "@/data/dictionaries/types";
import type { LocalizedProduct } from "@/data/products";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { ButtonLink } from "../ui/button-link";
import { FadeIn } from "../ui/fade-in";

type FeaturedCollectionBlockProps = {
  locale: Locale;
  content: SiteDictionary["products"]["featuredCollection"];
  featuredProducts: LocalizedProduct[];
};

export function FeaturedCollectionBlock({
  locale,
  content,
  featuredProducts,
}: FeaturedCollectionBlockProps) {
  const spotlight = featuredProducts[0];

  return (
    <section className="section-padding pt-4">
      <div className="site-shell">
        <div className="rounded-frame relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(217,188,115,0.18),transparent_22%),radial-gradient(circle_at_82%_72%,rgba(120,145,82,0.14),transparent_24%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <FadeIn>
              <div className="surface-card gold-ring rounded-[2.15rem] p-5">
                <span className="inline-flex rounded-full border border-[rgba(217,188,115,0.22)] bg-[rgba(217,188,115,0.08)] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
                  {content.highlightLabel}
                </span>
                <p className="mt-5 text-xs uppercase tracking-[0.34em] text-white/44">
                  {content.eyebrow}
                </p>
                <h2 className="mt-4 text-5xl text-white md:text-6xl">{content.title}</h2>
                <p className="mt-5 max-w-xl text-base leading-7 muted-copy md:text-lg">
                  {content.description}
                </p>

                <div className="mt-7 space-y-3">
                  {content.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/72"
                    >
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <ButtonLink href={`${getLocalizedPath(locale, "contact")}?context=collection`}>
                    {content.primaryCta}
                  </ButtonLink>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4">
                {/*
                  Replace this editorial composition with a real featured collection visual
                  or signature product still life when imagery is available.
                */}
                <div className="relative aspect-[4/4.2] overflow-hidden rounded-[1.75rem] bg-[linear-gradient(160deg,#101510_0%,#0a0e0a_46%,#141b12_100%)] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(217,188,115,0.24),transparent_20%),radial-gradient(circle_at_76%_68%,rgba(120,145,82,0.18),transparent_24%)]" />
                  <div className="absolute left-[14%] top-[14%] h-[58%] w-[32%] rounded-[2.3rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]" />
                  <div className="absolute left-[17%] top-[28%] h-[27%] w-[26%] rounded-[1.7rem] bg-[linear-gradient(180deg,rgba(91,106,36,0.88),rgba(40,49,20,0.18))]" />
                  <div className="absolute right-[10%] bottom-[14%] h-[42%] w-[40%] rounded-[2rem] border border-[rgba(217,188,115,0.22)] bg-[radial-gradient(circle_at_50%_24%,rgba(217,188,115,0.2),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]" />

                  <div className="relative z-10 ml-auto flex h-full max-w-[15rem] flex-col justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-white/46">
                        {content.highlightLabel}
                      </p>
                      <div className="mt-4 space-y-3">
                        {featuredProducts.slice(0, 3).map((product) => (
                          <div
                            key={product.id}
                            className="rounded-[1.35rem] border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-md"
                          >
                            <p className="text-lg text-white">{product.name}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                              {product.tag}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {spotlight && (
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-white/44">
                          {content.eyebrow}
                        </p>
                        <p className="mt-2 text-xl text-white">{spotlight.name}</p>
                        <p className="mt-2 text-sm leading-6 text-white/68">
                          {spotlight.shortDescription}
                        </p>
                      </div>
                    )}
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
