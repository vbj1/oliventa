import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "./fade-in";

type SectionShellProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  frameClassName?: string;
  children: ReactNode;
};

export function SectionShell({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  frameClassName,
  children,
}: SectionShellProps) {
  const centered = align === "center";

  return (
    <section className={cn("section-padding", className)}>
      <div className="site-shell">
        <div className={cn("rounded-frame overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-10", frameClassName)}>
          {(eyebrow || title || description) && (
            <FadeIn className={cn("max-w-3xl", centered && "mx-auto text-center")}>
              {eyebrow && (
                <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                  {eyebrow}
                </p>
              )}
              {title && <h2 className="mt-4 text-4xl text-white md:text-5xl">{title}</h2>}
              {description && (
                <p className="mt-4 max-w-2xl text-base leading-7 muted-copy md:text-lg">
                  {description}
                </p>
              )}
            </FadeIn>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
