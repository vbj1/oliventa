"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, locales, replaceLocaleInPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  className?: string;
};

const flags: Record<Locale, { alt: string; src: string }> = {
  ro: { alt: "Romania", src: "/icons/flags/ro.svg" },
  en: { alt: "United Kingdom", src: "/icons/flags/gb.svg" },
  el: { alt: "Greece", src: "/icons/flags/gr.svg" },
};

export function LanguageSwitcher({
  locale,
  label,
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl",
        className,
      )}
      aria-label={label}
    >
      {locales.map((item) => {
        const active = item === locale;

        return (
          <Link
            key={item}
            href={replaceLocaleInPath(pathname, item)}
            aria-label={flags[item].alt}
            className={cn(
              "rounded-full px-2.5 py-2 transition duration-300",
              active
                ? "bg-[linear-gradient(135deg,#e7d39a,#f6ead0)] text-[#11140f] shadow-[0_12px_28px_rgba(217,188,115,0.24)]"
                : "text-white/54 hover:text-white",
            )}
          >
            <Image
              src={flags[item].src}
              alt={flags[item].alt}
              width={22}
              height={15}
              className="rounded-[3px] shadow-[0_2px_6px_rgba(0,0,0,0.22)]"
            />
          </Link>
        );
      })}
    </div>
  );
}
