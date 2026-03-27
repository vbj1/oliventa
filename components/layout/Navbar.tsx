"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SiteDictionary } from "@/data/dictionaries/types";
import { getLocalizedPath, type Locale, type RouteKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ButtonLink } from "../ui/button-link";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

type NavbarProps = {
  locale: Locale;
  navigation: SiteDictionary["navigation"];
};

type NavItem = {
  href: string;
  label: string;
  route: RouteKey;
};

export function Navbar({ locale, navigation }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const homePath = getLocalizedPath(locale, "home");
  const isHome = pathname === homePath;

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 22);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const items: NavItem[] = [
    { href: getLocalizedPath(locale, "home"), label: navigation.home, route: "home" },
    { href: getLocalizedPath(locale, "about"), label: navigation.about, route: "about" },
    {
      href: getLocalizedPath(locale, "products"),
      label: navigation.products,
      route: "products",
    },
    {
      href: getLocalizedPath(locale, "quality"),
      label: navigation.quality,
      route: "quality",
    },
    { href: getLocalizedPath(locale, "contact"), label: navigation.contact, route: "contact" },
  ];

  const solidShell = !isHome || scrolled;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] px-4 pt-4 sm:px-6 lg:px-8">
        <div className="site-shell">
          <div
            className={cn(
              "relative overflow-hidden rounded-[2rem] border transition duration-500",
              solidShell
                ? "border-white/12 bg-[rgba(8,11,8,0.68)] shadow-[0_24px_58px_rgba(0,0,0,0.28)] backdrop-blur-[24px]"
                : "translate-y-1 border-white/8 bg-[rgba(8,11,8,0.18)] shadow-[0_12px_34px_rgba(0,0,0,0.18)] backdrop-blur-[12px]",
            )}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
            <div className="relative flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
              <Logo locale={locale} compact />

              <nav className="hidden items-center gap-1 lg:flex">
                {items.map((item) => {
                  const active =
                    item.route === "home"
                      ? pathname === item.href
                      : pathname === item.href || pathname?.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group relative px-4 py-3 text-sm text-white/68 transition-colors duration-300 hover:text-white",
                        active && "text-white",
                      )}
                    >
                      <span>{item.label}</span>
                      <span
                        className={cn(
                          "absolute inset-x-4 bottom-2 h-px origin-left rounded-full bg-[linear-gradient(90deg,rgba(217,188,115,0.9),rgba(217,188,115,0))] transition-transform duration-300",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        )}
                      />
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden items-center gap-3 lg:flex">
                <LanguageSwitcher locale={locale} label={navigation.switcherLabel} />
                <ButtonLink href={getLocalizedPath(locale, "contact")} variant="secondary">
                  {navigation.inquiry}
                </ButtonLink>
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] lg:hidden"
                aria-label={navigation.menu}
              >
                <span className="absolute h-px w-5 -translate-y-[4px] bg-white transition-transform duration-300 group-hover:-translate-y-[5px]" />
                <span className="absolute h-px w-5 translate-y-[4px] bg-white transition-transform duration-300 group-hover:translate-y-[5px]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        locale={locale}
        navigation={navigation}
        items={items}
        activePath={pathname}
      />
    </>
  );
}
