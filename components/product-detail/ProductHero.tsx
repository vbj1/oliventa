import Image from "next/image";
import { type LocalizedProductDetail } from "@/data/products";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { ButtonLink } from "../ui/button-link";

type ProductHeroProps = {
  locale: Locale;
  product: LocalizedProductDetail;
  categoryLabel: string;
  inquiryLabel: string;
};

export function ProductHero({
  locale,
  product,
  categoryLabel,
  inquiryLabel,
}: ProductHeroProps) {
  const inquiryHref = `${getLocalizedPath(locale, "contact")}?product=${product.slug}`;

  return (
    <section className="px-4 pt-28 sm:px-6 sm:pt-[7.5rem] lg:px-8 lg:pt-32">
      <div className="site-shell">
        <div className="rounded-frame relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_14%,rgba(217,188,115,0.14),transparent_18%),radial-gradient(circle_at_18%_88%,rgba(120,145,82,0.12),transparent_24%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,34rem)] lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                {categoryLabel}
              </p>
              <h1 className="mt-5 text-5xl text-white md:text-6xl">{product.name}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 muted-copy md:text-lg">
                {product.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[rgba(217,188,115,0.18)] bg-[rgba(217,188,115,0.08)] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/78">
                  {product.tag}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs leading-5 text-white/62">
                  {product.origin.region}
                </span>
              </div>

              <div className="mt-8">
                <ButtonLink href={inquiryHref}>{inquiryLabel}</ButtonLink>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="surface-card gold-ring relative overflow-hidden rounded-[2.2rem] p-4 sm:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(217,188,115,0.18),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]" />
                <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,#151914_0%,#0b0f0b_100%)]">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={900}
                      height={1080}
                      sizes="(min-width: 1024px) 40rem, 100vw"
                      className="aspect-[5/6] h-auto w-full object-cover"
                      priority
                    />
                  ) : (
                    <>
                      {/*
                        Replace this placeholder with the final product packshot or editorial still.
                        Keeping a fixed aspect ratio here avoids layout shift when real assets are added.
                      */}
                      <div className="relative aspect-[5/6] w-full bg-[radial-gradient(circle_at_50%_18%,rgba(217,188,115,0.16),transparent_24%),radial-gradient(circle_at_20%_82%,rgba(120,145,82,0.14),transparent_26%),linear-gradient(180deg,#171c15_0%,#0a0e0a_100%)]">
                        <div className="absolute inset-x-[18%] bottom-8 h-10 rounded-full bg-black/45 blur-2xl" />
                        <div className="absolute left-1/2 top-[12%] h-[70%] w-[32%] -translate-x-1/2 rounded-[3rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03))]" />
                        <div className="absolute left-1/2 top-[28%] h-[38%] w-[24%] -translate-x-1/2 rounded-[2rem] bg-[linear-gradient(180deg,rgba(91,106,36,0.86),rgba(40,49,20,0.22))]" />
                        <div className="absolute left-1/2 top-[7%] h-[10%] w-[10%] -translate-x-1/2 rounded-full border border-white/10 bg-[rgba(217,188,115,0.16)]" />
                        <div className="absolute inset-x-6 bottom-6 rounded-full border border-white/10 bg-black/24 px-4 py-3 text-center text-[11px] uppercase tracking-[0.26em] text-white/56 backdrop-blur-sm">
                          {product.imageHint}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
