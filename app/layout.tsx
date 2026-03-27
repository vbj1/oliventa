import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import { defaultLocale, isLocale } from "@/lib/i18n";

const sans = Noto_Sans({
  variable: "--font-manrope",
  subsets: ["latin", "greek"],
});

const serif = Noto_Serif({
  variable: "--font-cormorant",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Oliventa",
    template: "%s | Oliventa",
  },
  description:
    "A premium multilingual foundation for Oliventa, a modern Greek products brand.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const { locale } = await params;
  const htmlLang = locale && isLocale(locale) ? locale : defaultLocale;

  return (
    <html
      lang={htmlLang}
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
