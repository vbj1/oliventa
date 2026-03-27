type ProductOriginProps = {
  eyebrow: string;
  title: string;
  description: string;
  region: string;
  story: string[];
};

export function ProductOrigin({
  eyebrow,
  title,
  description,
  region,
  story,
}: ProductOriginProps) {
  return (
    <section className="section-padding py-5">
      <div className="site-shell">
        <div className="rounded-frame relative overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(217,188,115,0.12),transparent_20%),radial-gradient(circle_at_16%_78%,rgba(120,145,82,0.12),transparent_22%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
                {eyebrow}
              </p>
              <h2 className="mt-5 text-4xl text-white md:text-5xl">{title}</h2>
              <p className="mt-5 text-base leading-7 muted-copy md:text-lg">{description}</p>

              <div className="surface-card mt-7 rounded-[2rem] p-6">
                <p className="text-2xl leading-tight text-white">{region}</p>
              </div>
            </div>

            <div className="space-y-4">
              {story.map((paragraph) => (
                <div
                  key={paragraph}
                  className="surface-card rounded-[2rem] p-6 sm:p-7"
                >
                  <p className="text-base leading-8 text-white/78">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
