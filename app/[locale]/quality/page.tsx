import { InfoCardGrid } from "@/components/ui/info-card-grid";
import { PageHero } from "@/components/ui/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { getDictionary, getLocaleFromParams } from "@/lib/i18n";

type QualityPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function QualityPage({ params }: QualityPageProps) {
  const locale = await getLocaleFromParams(params);
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dictionary.qualityPage.hero.eyebrow}
        title={dictionary.qualityPage.hero.title}
        description={dictionary.qualityPage.hero.description}
        aside={
          <>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-strong)]">
              Oliventa
            </p>
            <h2 className="mt-5 text-3xl text-white">
              {dictionary.qualityPage.provenance.title}
            </h2>
            <p className="mt-4 text-sm leading-6 muted-copy">
              {dictionary.qualityPage.provenance.description}
            </p>
          </>
        }
      />

      <SectionShell
        eyebrow={dictionary.qualityPage.pillars.eyebrow}
        title={dictionary.qualityPage.pillars.title}
        description={dictionary.qualityPage.pillars.description}
      >
        <InfoCardGrid items={dictionary.qualityPage.pillars.items} columns={3} />
      </SectionShell>

      <SectionShell
        eyebrow={dictionary.qualityPage.standards.eyebrow}
        title={dictionary.qualityPage.standards.title}
        description={dictionary.qualityPage.standards.description}
      >
        <InfoCardGrid items={dictionary.qualityPage.standards.items} columns={3} />
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {dictionary.qualityPage.provenance.bullets.map((bullet) => (
            <div
              key={bullet}
              className="surface-card rounded-[1.6rem] px-5 py-5 text-sm leading-6 text-white/72"
            >
              {bullet}
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
