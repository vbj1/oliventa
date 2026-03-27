import { type LocalizedProductDetail } from "@/data/products";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { ButtonLink } from "../ui/button-link";

type ProductInquiryProps = {
  locale: Locale;
  product: LocalizedProductDetail;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
};

export function ProductInquiry({
  locale,
  product,
  eyebrow,
  title,
  description,
  primaryCta,
}: ProductInquiryProps) {
  const inquiryHref = `${getLocalizedPath(locale, "contact")}?product=${product.slug}`;

  return (
    <section className="section-padding py-5">
      <div className="site-shell">
        <div className="rounded-frame relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_16%,rgba(217,188,115,0.14),transparent_20%)]" />

          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                {eyebrow}
              </p>
              <h2 className="mt-5 text-4xl text-white md:text-5xl">{title}</h2>
              <p className="mt-5 text-base leading-7 muted-copy md:text-lg">{description}</p>
            </div>

            <div className="surface-card rounded-[2rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">
                {product.name}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/68">
                {product.shortDescription}
              </p>
              <div className="mt-6">
                <ButtonLink href={inquiryHref}>{primaryCta}</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
