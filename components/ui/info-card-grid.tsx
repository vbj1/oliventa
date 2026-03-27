import type { DictionaryCard } from "@/data/dictionaries/types";
import { cn } from "@/lib/utils";
import { FadeIn } from "./fade-in";

type InfoCardGridProps = {
  items: DictionaryCard[];
  columns?: 2 | 3;
  className?: string;
};

export function InfoCardGrid({
  items,
  columns = 3,
  className,
}: InfoCardGridProps) {
  return (
    <div
      className={cn(
        "mt-10 grid gap-4",
        columns === 2 ? "lg:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3",
        className,
      )}
    >
      {items.map((item, index) => (
        <FadeIn key={`${item.title}-${index}`} delay={index * 0.05}>
          <article className="surface-card h-full p-6">
            {item.kicker && (
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-strong)]">
                {item.kicker}
              </p>
            )}
            <div className="mt-4 flex items-start justify-between gap-4">
              <h3 className="text-2xl text-white">{item.title}</h3>
              {item.stat && (
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/55">
                  {item.stat}
                </span>
              )}
            </div>
            <p className="mt-4 text-sm leading-6 muted-copy md:text-base">
              {item.description}
            </p>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
