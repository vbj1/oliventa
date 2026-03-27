import { InfoCardGrid } from "@/components/ui/info-card-grid";
import { PageHero } from "@/components/ui/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { getDictionary, getLocaleFromParams } from "@/lib/i18n";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const locale = await getLocaleFromParams(params);
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={dictionary.contact.hero.eyebrow}
        title={dictionary.contact.hero.title}
        description={dictionary.contact.hero.description}
        aside={
          <>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent-strong)]">
              Oliventa
            </p>
            <h2 className="mt-5 text-3xl text-white">{dictionary.contact.note.title}</h2>
            <p className="mt-4 text-sm leading-6 muted-copy">
              {dictionary.contact.note.description}
            </p>
          </>
        }
      />

      <SectionShell
        eyebrow={dictionary.contact.channels.eyebrow}
        title={dictionary.contact.channels.title}
        description={dictionary.contact.channels.description}
      >
        <InfoCardGrid items={dictionary.contact.channels.items} columns={3} />
      </SectionShell>

      <SectionShell
        eyebrow={dictionary.contact.process.eyebrow}
        title={dictionary.contact.process.title}
        description={dictionary.contact.process.description}
      >
        <InfoCardGrid items={dictionary.contact.process.items} columns={3} />
      </SectionShell>
    </>
  );
}
