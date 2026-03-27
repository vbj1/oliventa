import { BrandStorySection } from "@/components/home/brand-story-section";
import { ProductUniverseSection } from "@/components/home/product-universe-section";
import { HeroSection } from "@/components/hero/HeroSection";
import { InquiryCtaSection } from "@/components/home/inquiry-cta-section";
import { OriginQualitySection } from "@/components/home/origin-quality-section";
import { getDictionary, getLocaleFromParams } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const locale = await getLocaleFromParams(params);
  const dictionary = getDictionary(locale);

  return (
    <>
      <HeroSection locale={locale} hero={dictionary.home.hero} />
      <BrandStorySection content={dictionary.home.story} />
      <ProductUniverseSection content={dictionary.home.productUniverse} />
      <OriginQualitySection locale={locale} content={dictionary.home.quality} />
      <InquiryCtaSection locale={locale} content={dictionary.home.inquiry} />
    </>
  );
}
