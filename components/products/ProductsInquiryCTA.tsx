import type { SiteDictionary } from "@/data/dictionaries/types";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { ButtonLink } from "../ui/button-link";
import { FadeIn } from "../ui/fade-in";

type ProductsInquiryCTAProps = {
  locale: Locale;
  content: SiteDictionary["products"]["inquiry"];
};

export function ProductsInquiryCTA({ locale, content }: ProductsInquiryCTAProps) {
  return (
    <section className="section-padding pt-2">
      <div className="site-shell">
        <FadeIn>
          <div className="rounded-frame relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
            <div className="halo left-[10%] top-10 h-40 w-40 bg-[rgba(217,188,115,0.14)]" />
            <div className="halo bottom-6 right-[12%] h-40 w-40 bg-[rgba(120,145,82,0.16)]" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                  {content.eyebrow}
                </p>
                <h2 className="mt-5 text-4xl text-white md:text-5xl">{content.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 muted-copy md:text-lg">
                  {content.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <ButtonLink href={getLocalizedPath(locale, "contact")}>
                  {content.primaryCta}
                </ButtonLink>
                <ButtonLink href={getLocalizedPath(locale, "quality")} variant="secondary">
                  {content.secondaryCta}
                </ButtonLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
