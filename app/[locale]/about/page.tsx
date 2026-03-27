import { InfoCardGrid } from "@/components/ui/info-card-grid";
import { PageHero } from "@/components/ui/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { getDictionary, getLocaleFromParams } from "@/lib/i18n";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const locale = await getLocaleFromParams(params);
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dictionary.about.hero.eyebrow}
        title={dictionary.about.hero.title}
        description={dictionary.about.hero.description}
        aside={
          <>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-strong)]">
              Oliventa
            </p>
            <h2 className="mt-5 text-3xl text-white">{dictionary.about.introduction.title}</h2>
            <p className="mt-4 text-sm leading-6 muted-copy">
              {dictionary.about.introduction.description}
            </p>
          </>
        }
      />

      <SectionShell
        eyebrow={dictionary.about.values.eyebrow}
        title={dictionary.about.values.title}
        description={dictionary.about.values.description}
      >
        <InfoCardGrid items={dictionary.about.values.items} />
      </SectionShell>

      <SectionShell
        eyebrow={dictionary.about.roadmap.eyebrow}
        title={dictionary.about.roadmap.title}
        description={dictionary.about.roadmap.description}
      >
        <InfoCardGrid items={dictionary.about.roadmap.steps} columns={3} />
      </SectionShell>
    </>
  );
}
