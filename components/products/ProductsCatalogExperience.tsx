"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import type { SiteDictionary } from "@/data/dictionaries/types";
import type { LocalizedProduct, ProductCategory } from "@/data/products";
import type { Locale } from "@/lib/i18n";
import { FadeIn } from "../ui/fade-in";
import {
  ProductFilters,
  type ProductFilterOption,
  type ProductFilterValue,
} from "./ProductFilters";
import { ProductGrid } from "./ProductGrid";

type ProductsCatalogExperienceProps = {
  locale: Locale;
  content: SiteDictionary["products"];
  products: LocalizedProduct[];
};

export function ProductsCatalogExperience({
  locale,
  content,
  products,
}: ProductsCatalogExperienceProps) {
  const [activeFilter, setActiveFilter] = useState<ProductFilterValue>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useSpring(useTransform(scrollYProgress, [0, 1], [28, -18]), {
    stiffness: 110,
    damping: 24,
    mass: 0.75,
  });

  const options: ProductFilterOption[] = [
    { value: "all", label: content.filters.allLabel },
    { value: "olive-oil", label: content.filters.labels.oliveOil },
    { value: "olives", label: content.filters.labels.olives },
    { value: "honey", label: content.filters.labels.honey },
    { value: "herbs", label: content.filters.labels.herbs },
    { value: "soaps", label: content.filters.labels.soaps },
    { value: "gift-boxes", label: content.filters.labels.giftBoxes },
  ];

  const categoryLabels: Record<ProductCategory, string> = {
    "olive-oil": content.filters.labels.oliveOil,
    olives: content.filters.labels.olives,
    honey: content.filters.labels.honey,
    herbs: content.filters.labels.herbs,
    soaps: content.filters.labels.soaps,
    "gift-boxes": content.filters.labels.giftBoxes,
  };

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section ref={sectionRef} className="section-padding pb-4 pt-6">
      <div className="site-shell">
        <div className="rounded-frame relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(217,188,115,0.12),transparent_20%),radial-gradient(circle_at_14%_82%,rgba(120,145,82,0.12),transparent_22%)]" />
          <motion.div style={{ y: headingY }} className="relative">
            <FadeIn>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                    {content.filters.eyebrow}
                  </p>
                  <h2 className="mt-5 text-5xl text-white md:text-6xl">{content.filters.title}</h2>
                  <p className="mt-5 text-base leading-7 muted-copy md:text-lg">
                    {content.filters.description}
                  </p>
                </div>

                <div className="surface-card rounded-[2rem] p-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-strong)]">
                    {content.catalog.eyebrow}
                  </p>
                  <h3 className="mt-4 text-3xl text-white">{content.catalog.title}</h3>
                  <p className="mt-3 text-sm leading-6 muted-copy">{content.catalog.description}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="mt-8">
              <ProductFilters
                options={options}
                value={activeFilter}
                onChange={setActiveFilter}
              />
            </FadeIn>

            <div className="mt-8">
              <ProductGrid
                locale={locale}
                products={filteredProducts}
                categoryLabels={categoryLabels}
                emptyState={content.catalog.emptyState}
                actionLabel={content.actions.viewDetails}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
