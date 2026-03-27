import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "./fade-in";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("px-4 pt-28 sm:px-6 sm:pt-[7.5rem] lg:px-8 lg:pt-32", className)}>
      <div className="site-shell">
        <div className="rounded-frame overflow-hidden px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <FadeIn className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                {eyebrow}
              </p>
              <h1 className="mt-5 text-5xl text-white md:text-6xl">{title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 muted-copy md:text-lg">
                {description}
              </p>
            </FadeIn>
            {aside && (
              <FadeIn delay={0.08} className="surface-card gold-ring p-6">
                {aside}
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
