type ProductDetailsProps = {
  eyebrow: string;
  title: string;
  labels: {
    type: string;
    category: string;
    origin: string;
    storage: string;
    usage: string;
  };
  values: {
    type: string;
    category: string;
    origin: string;
    storage: string;
    usage: string;
  };
};

export function ProductDetails({
  eyebrow,
  title,
  labels,
  values,
}: ProductDetailsProps) {
  const items = [
    { label: labels.type, value: values.type },
    { label: labels.category, value: values.category },
    { label: labels.origin, value: values.origin },
    { label: labels.storage, value: values.storage },
    { label: labels.usage, value: values.usage },
  ];

  return (
    <section className="section-padding py-5">
      <div className="site-shell">
        <div className="rounded-frame overflow-hidden px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent-strong)]">
              {eyebrow}
            </p>
            <h2 className="mt-5 text-4xl text-white md:text-5xl">{title}</h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {items.map((item) => (
              <div key={item.label} className="surface-card rounded-[1.85rem] p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/76">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
