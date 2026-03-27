type ProductStoryProps = {
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
};

export function ProductStory({
  eyebrow,
  title,
  description,
  paragraphs,
}: ProductStoryProps) {
  return (
    <section className="section-padding pb-5 pt-8">
      <div className="site-shell">
        <div className="rounded-frame overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                {eyebrow}
              </p>
              <h2 className="mt-5 text-4xl text-white md:text-5xl">{title}</h2>
              <p className="mt-5 text-base leading-7 muted-copy md:text-lg">{description}</p>
            </div>

            <div className="surface-card rounded-[2rem] p-6 sm:p-7">
              <div className="space-y-5">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-white/78">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
