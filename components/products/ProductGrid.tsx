"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { LocalizedProduct, ProductCategory } from "@/data/products";
import type { Locale } from "@/lib/i18n";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  locale: Locale;
  products: LocalizedProduct[];
  categoryLabels: Record<ProductCategory, string>;
  emptyState: string;
  actionLabel: string;
};

export function ProductGrid({
  locale,
  products,
  categoryLabels,
  emptyState,
  actionLabel,
}: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="surface-card rounded-[2rem] px-6 py-12 text-center text-sm text-white/62">
        {emptyState}
      </div>
    );
  }

  return (
    <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            locale={locale}
            product={product}
            categoryLabel={categoryLabels[product.category]}
            actionLabel={actionLabel}
            index={index}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
