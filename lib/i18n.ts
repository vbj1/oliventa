import { notFound } from "next/navigation";
import { elDictionary } from "@/data/dictionaries/el";
import { enDictionary } from "@/data/dictionaries/en";
import { roDictionary } from "@/data/dictionaries/ro";

export const locales = ["ro", "en", "el"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ro";

export const routeSegments = {
  home: "",
  about: "about",
  products: "products",
  quality: "quality",
  contact: "contact",
} as const;

export type RouteKey = keyof typeof routeSegments;

const dictionaries = {
  ro: roDictionary,
  en: enDictionary,
  el: elDictionary,
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function resolveLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getLocalizedPath(locale: Locale, route: RouteKey) {
  const segment = routeSegments[route];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function replaceLocaleInPath(pathname: string, locale: Locale) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = normalized.split("/");

  if (segments.length > 1 && isLocale(segments[1])) {
    segments[1] = locale;
  } else {
    segments.splice(1, 0, locale);
  }

  return segments.join("/").replace(/\/+/g, "/");
}

export async function getLocaleFromParams(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  return resolveLocale(locale);
}
