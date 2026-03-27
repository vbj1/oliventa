import { FeaturedCollectionBlock } from "@/components/products/FeaturedCollectionBlock";
import { ProductsCatalogExperience } from "@/components/products/ProductsCatalogExperience";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductsInquiryCTA } from "@/components/products/ProductsInquiryCTA";
import { getLocalizedProducts } from "@/data/products";
import { getDictionary, getLocaleFromParams } from "@/lib/i18n";

type ProductsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ProductsPage({ params }: ProductsPageProps) {
  const locale = await getLocaleFromParams(params);
  const dictionary = getDictionary(locale);
  const products = getLocalizedProducts(locale);
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <>
      <ProductsHero content={dictionary.products.hero} />
      <ProductsCatalogExperience
        locale={locale}
        content={dictionary.products}
        products={products}
      />
      <FeaturedCollectionBlock
        locale={locale}
        content={dictionary.products.featuredCollection}
        featuredProducts={featuredProducts}
      />
      <ProductsInquiryCTA locale={locale} content={dictionary.products.inquiry} />
    </>
  );
}
