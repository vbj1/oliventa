"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { LocalizedProduct } from "@/data/products";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  locale: Locale;
  product: LocalizedProduct;
  categoryLabel: string;
  actionLabel: string;
  index: number;
};

const accentMap = {
  gold: {
    glow: "bg-[radial-gradient(circle_at_24%_24%,rgba(217,188,115,0.26),transparent_22%)]",
    tone: "border-[rgba(217,188,115,0.18)] bg-[rgba(217,188,115,0.08)]",
  },
  olive: {
    glow: "bg-[radial-gradient(circle_at_24%_24%,rgba(120,145,82,0.24),transparent_22%)]",
    tone: "border-[rgba(120,145,82,0.18)] bg-[rgba(120,145,82,0.08)]",
  },
  stone: {
    glow: "bg-[radial-gradient(circle_at_24%_24%,rgba(255,255,255,0.16),transparent_22%)]",
    tone: "border-white/12 bg-white/[0.05]",
  },
} as const;

export function ProductCard({
  locale,
  product,
  categoryLabel,
  actionLabel,
  index,
}: ProductCardProps) {
  const accent = accentMap[product.accent];
  const productHref = `${getLocalizedPath(locale, "products")}/${product.slug}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{
        duration: 0.55,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="surface-card group relative overflow-hidden rounded-[2rem] p-4"
    >
      <div className={cn("pointer-events-none absolute inset-0 opacity-90", accent.glow)} />

      {/*
        Replace this placeholder image treatment with a real packshot or render.
        When real assets exist, wire `product.image` into an `Image` component here.
      */}
      <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(155deg,#111611_0%,#090d09_48%,#151d12_100%)] p-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(217,188,115,0.18),transparent_22%),radial-gradient(circle_at_28%_74%,rgba(120,145,82,0.16),transparent_24%)]" />
        <div className="relative flex aspect-[4/4.6] flex-col justify-between rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-4">
          <div className="flex items-start justify-between gap-3">
            <span
              className={cn(
                "rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/72",
                accent.tone,
              )}
            >
              {categoryLabel}
            </span>
            <span className="text-[10px] uppercase tracking-[0.26em] text-white/42">
              {product.tag}
            </span>
          </div>

          <div className="relative mx-auto flex h-44 w-full max-w-[14rem] items-center justify-center">
            <div className="absolute inset-x-4 bottom-3 h-10 rounded-full bg-black/45 blur-2xl" />
            <div className="absolute left-1/2 top-5 h-28 w-20 -translate-x-1/2 rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]" />
            <div className="absolute left-1/2 top-14 h-16 w-14 -translate-x-1/2 rounded-[1.2rem] bg-[linear-gradient(180deg,rgba(91,106,36,0.86),rgba(40,49,20,0.2))]" />
            <div className="absolute left-1/2 top-3 h-7 w-6 -translate-x-1/2 rounded-full border border-white/10 bg-[rgba(217,188,115,0.14)]" />
            <div className="absolute left-5 top-8 h-10 w-10 rounded-full border border-white/10 bg-white/[0.04]" />
            <div className="absolute right-4 bottom-8 h-12 w-12 rounded-full border border-white/10 bg-white/[0.03]" />
            <div className="rounded-full border border-white/10 bg-black/24 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/56 backdrop-blur-sm">
              {product.imageHint}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-5 px-1 pb-1">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
          {categoryLabel}
        </p>
        <h3 className="mt-3 text-3xl text-white">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-white/72">{product.shortDescription}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/48">
            {product.tag}
          </span>
          <Link
            href={productHref}
            className="text-sm font-medium text-[var(--color-accent-strong)] transition duration-300 hover:text-white"
          >
            {actionLabel} ↗
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
