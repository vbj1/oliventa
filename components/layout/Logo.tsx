import Image from "next/image";
import Link from "next/link";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LogoProps = {
  locale: Locale;
  className?: string;
  compact?: boolean;
};

export function Logo({ locale, className, compact = false }: LogoProps) {
  return (
    <Link
      href={getLocalizedPath(locale, "home")}
      className={cn("inline-flex items-center", compact ? "gap-0" : "gap-3", className)}
      aria-label="Oliventa"
    >
      {/*
        Replace `/public/logo/oliventa-logo.svg` with the final brand SVG when ready.
        The component keeps the same footprint so the shell layout does not need to change.
      */}
      <Image
        src="/logo/oliventa-logo.svg"
        alt="Oliventa"
        width={compact ? 64 : 220}
        height={compact ? 64 : 56}
        priority
        className={cn(
          "object-contain object-left",
          compact ? "h-16 w-auto max-w-[4rem]" : "h-auto w-[11.75rem] sm:w-[12.75rem]",
        )}
      />
    </Link>
  );
}
