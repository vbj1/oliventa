import Link from "next/link";
import type { SiteDictionary } from "@/data/dictionaries/types";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { ButtonLink } from "../ui/button-link";
import { Logo } from "./Logo";

type FooterProps = {
  locale: Locale;
  navigation: SiteDictionary["navigation"];
  footer: SiteDictionary["footer"];
};

export function Footer({ locale, navigation, footer }: FooterProps) {
  return (
    <footer className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="site-shell">
        <div className="rounded-frame relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(217,188,115,0.12),transparent_18%),radial-gradient(circle_at_84%_74%,rgba(120,145,82,0.12),transparent_24%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_0.75fr_0.75fr_0.75fr]">
            <div className="max-w-xl">
              <Logo locale={locale} />
              <h2 className="mt-6 text-4xl text-white md:text-[2.8rem]">{footer.tagline}</h2>
              <p className="mt-4 text-base leading-7 muted-copy">{footer.description}</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/48">
                {footer.navigationLabel}
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/72">
                <Link href={getLocalizedPath(locale, "home")}>{navigation.home}</Link>
                <Link href={getLocalizedPath(locale, "about")}>{navigation.about}</Link>
                <Link href={getLocalizedPath(locale, "products")}>{navigation.products}</Link>
                <Link href={getLocalizedPath(locale, "quality")}>{navigation.quality}</Link>
                <Link href={getLocalizedPath(locale, "contact")}>{navigation.contact}</Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/48">
                {navigation.contact}
              </p>
              <p className="mt-5 text-sm leading-6 muted-copy">{footer.contactLabel}</p>
              <div className="mt-6">
                <ButtonLink href={getLocalizedPath(locale, "contact")} variant="secondary">
                  {navigation.inquiry}
                </ButtonLink>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/48">
                {footer.socialLabel}
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/72">
                {footer.socialItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs uppercase tracking-[0.24em] text-white/36 md:flex-row md:items-center md:justify-between">
            <p>{footer.rights}</p>
            <p>{footer.note}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
