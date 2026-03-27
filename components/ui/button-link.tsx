import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variants = {
  primary:
    "inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--color-accent-strong),#f5e2aa)] px-5 py-3 text-sm font-semibold text-[#11140f] shadow-[0_22px_48px_rgba(217,188,115,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_rgba(217,188,115,0.28)]",
  secondary:
    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/[0.08]",
  text: "inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-strong)] transition duration-300 hover:text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link href={href} onClick={onClick} className={cn(variants[variant], className)}>
      <span>{children}</span>
      <span aria-hidden>↗</span>
    </Link>
  );
}
