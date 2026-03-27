import Link from "next/link";
import type { LocalizedProduct, ProductCategory } from "@/data/products";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

type RelatedProductsProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  products: LocalizedProduct[];
  categoryLabels: Record<ProductCategory, string>;
};

export function RelatedProducts({
  locale,
  eyebrow,
  title,
  description,
  actionLabel,
  products,
  categoryLabels,
}: RelatedProductsProps) {
  if (!products.length) {
    return null;
  }

  return (
    <section className="section-padding pb-10 pt-5">
      <div className="site-shell">
        <div className="rounded-frame overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
              {eyebrow}
            </p>
            <h2 className="mt-5 text-4xl text-white md:text-5xl">{title}</h2>
            <p className="mt-5 text-base leading-7 muted-copy md:text-lg">{description}</p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {products.map((product) => {
              const href = `${getLocalizedPath(locale, "products")}/${product.slug}`;

              return (
                <Link
                  key={product.id}
                  href={href}
                  className="surface-card group rounded-[2rem] p-4 transition duration-300 hover:border-[rgba(217,188,115,0.22)] hover:bg-white/[0.06]"
                >
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,#161a15_0%,#0a0d0a_100%)] p-4">
                    {/*
                      Swap this compact placeholder for a real product crop when packshots are available.
                      The fixed aspect ratio keeps the related grid stable and CLS-safe.
                    */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem] bg-[radial-gradient(circle_at_50%_24%,rgba(217,188,115,0.16),transparent_22%),radial-gradient(circle_at_22%_76%,rgba(120,145,82,0.14),transparent_24%),linear-gradient(180deg,#141814_0%,#0b0f0b_100%)]">
                      <div className="absolute inset-x-[22%] bottom-5 h-8 rounded-full bg-black/40 blur-xl" />
                      <div className="absolute left-1/2 top-[16%] h-[58%] w-[24%] -translate-x-1/2 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]" />
                      <div className="absolute left-1/2 top-[31%] h-[30%] w-[18%] -translate-x-1/2 rounded-[1.4rem] bg-[linear-gradient(180deg,rgba(91,106,36,0.82),rgba(40,49,20,0.18))]" />
                    </div>
                  </div>

                  <div className="px-1 pb-1 pt-5">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
                      {categoryLabels[product.category]}
                    </p>
                    <h3 className="mt-3 text-3xl text-white">{product.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {product.shortDescription}
                    </p>
                    <p className="mt-5 text-sm font-medium text-[var(--color-accent-strong)] transition duration-300 group-hover:text-white">
                      {actionLabel} ↗
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
