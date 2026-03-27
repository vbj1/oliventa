import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/product-detail/ProductDetails";
import { ProductHero } from "@/components/product-detail/ProductHero";
import { ProductInquiry } from "@/components/product-detail/ProductInquiry";
import { ProductOrigin } from "@/components/product-detail/ProductOrigin";
import { ProductStory } from "@/components/product-detail/ProductStory";
import { RelatedProducts } from "@/components/product-detail/RelatedProducts";
import {
  getAllProductSlugs,
  getLocalizedProductDetailBySlug,
  getLocalizedRelatedProducts,
} from "@/data/products";
import { getDictionary, locales, resolveLocale } from "@/lib/i18n";

type ProductDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

function getCategoryLabels(locale: ReturnType<typeof resolveLocale>) {
  const dictionary = getDictionary(locale);

  return {
    "olive-oil": dictionary.products.filters.labels.oliveOil,
    olives: dictionary.products.filters.labels.olives,
    honey: dictionary.products.filters.labels.honey,
    herbs: dictionary.products.filters.labels.herbs,
    soaps: dictionary.products.filters.labels.soaps,
    "gift-boxes": dictionary.products.filters.labels.giftBoxes,
  };
}

export function generateStaticParams() {
  const slugs = getAllProductSlugs();

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const product = getLocalizedProductDetailBySlug(locale, slug);

  if (!product) {
    notFound();
  }

  const path = `/products/${product.slug}`;

  return {
    title: product.name,
    description: product.seoDescription,
    alternates: {
      languages: Object.fromEntries(
        locales.map((entry) => [entry, `/${entry}${path}`]),
      ),
    },
    openGraph: {
      title: product.name,
      description: product.seoDescription,
      type: "website",
      locale,
      url: `/${locale}${path}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const categoryLabels = getCategoryLabels(locale);
  const product = getLocalizedProductDetailBySlug(locale, slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getLocalizedRelatedProducts(locale, product.slug, 3);

  return (
    <>
      <ProductHero
        locale={locale}
        product={product}
        categoryLabel={categoryLabels[product.category]}
        inquiryLabel={dictionary.products.detailPage.inquiry.primaryCta}
      />
      <ProductStory
        eyebrow={dictionary.products.detailPage.story.eyebrow}
        title={dictionary.products.detailPage.story.title}
        description={dictionary.products.detailPage.story.description}
        paragraphs={product.longDescription}
      />
      <ProductOrigin
        eyebrow={dictionary.products.detailPage.origin.eyebrow}
        title={dictionary.products.detailPage.origin.title}
        description={dictionary.products.detailPage.origin.description}
        region={product.origin.region}
        story={product.origin.story}
      />
      <ProductDetails
        eyebrow={dictionary.products.detailPage.details.eyebrow}
        title={dictionary.products.detailPage.details.title}
        labels={dictionary.products.detailPage.details.labels}
        values={{
          type: product.details.type,
          category: categoryLabels[product.category],
          origin: product.details.origin,
          storage: product.details.storage,
          usage: product.details.usage,
        }}
      />
      <ProductInquiry
        locale={locale}
        product={product}
        eyebrow={dictionary.products.detailPage.inquiry.eyebrow}
        title={dictionary.products.detailPage.inquiry.title}
        description={dictionary.products.detailPage.inquiry.description}
        primaryCta={dictionary.products.detailPage.inquiry.primaryCta}
      />
      <RelatedProducts
        locale={locale}
        eyebrow={dictionary.products.detailPage.related.eyebrow}
        title={dictionary.products.detailPage.related.title}
        description={dictionary.products.detailPage.related.description}
        actionLabel={dictionary.products.actions.viewDetails}
        products={relatedProducts}
        categoryLabels={categoryLabels}
      />
    </>
  );
}
