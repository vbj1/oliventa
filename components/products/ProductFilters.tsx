"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ProductFilterValue =
  | "all"
  | "olive-oil"
  | "olives"
  | "honey"
  | "herbs"
  | "soaps"
  | "gift-boxes";

export type ProductFilterOption = {
  value: ProductFilterValue;
  label: string;
};

type ProductFiltersProps = {
  options: ProductFilterOption[];
  value: ProductFilterValue;
  onChange: (value: ProductFilterValue) => void;
};

export function ProductFilters({
  options,
  value,
  onChange,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "relative overflow-hidden rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[0.26em] transition-colors duration-500",
              active ? "text-[#11140f]" : "border border-white/10 bg-white/[0.04] text-white/58 hover:text-white",
            )}
          >
            {active && (
              <motion.span
                layoutId="product-filter-pill"
                className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#e7d39a,#f2e5c4)] shadow-[0_18px_42px_rgba(217,188,115,0.18)]"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
