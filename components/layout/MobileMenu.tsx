"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { SiteDictionary } from "@/data/dictionaries/types";
import type { Locale, RouteKey } from "@/lib/i18n";
import { ButtonLink } from "../ui/button-link";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

type MobileMenuItem = {
  href: string;
  label: string;
  route: RouteKey;
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  navigation: SiteDictionary["navigation"];
  items: MobileMenuItem[];
  activePath: string | null;
};

export function MobileMenu({
  open,
  onClose,
  locale,
  navigation,
  items,
  activePath,
}: MobileMenuProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] lg:hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(217,188,115,0.18),transparent_20%),radial-gradient(circle_at_84%_18%,rgba(120,145,82,0.16),transparent_24%),linear-gradient(180deg,rgba(4,5,4,0.96),rgba(5,7,5,0.98))] backdrop-blur-2xl" />

      <div className="relative flex min-h-screen flex-col px-5 pb-10 pt-5">
        <div className="flex items-center justify-between">
          <Logo locale={locale} compact />
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white"
          >
            {navigation.close}
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="mx-auto flex w-full max-w-md flex-col gap-3">
            {items.map((item) => {
              const active =
                item.route === "home"
                  ? activePath === item.href
                  : activePath === item.href || activePath?.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group relative flex items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-5 transition duration-300 hover:border-white/16 hover:bg-white/[0.05]"
                >
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(217,188,115,0.16),transparent_24%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span
                    className={cn(
                      "relative text-[2rem] transition duration-300",
                      active ? "text-white" : "text-white/72",
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-col items-center gap-5">
          <LanguageSwitcher locale={locale} label={navigation.switcherLabel} />
          <ButtonLink
            href={items.find((item) => item.route === "contact")?.href ?? `/${locale}/contact`}
            className="justify-center"
            onClick={onClose}
          >
            {navigation.inquiry}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
