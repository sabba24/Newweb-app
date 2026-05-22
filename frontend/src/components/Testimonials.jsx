export default function Testimonials() {
  const testimonials = [
    {
      quote: 'The parish-based alert layout makes it easier for our volunteers to understand what needs attention first.',
      name: 'Community Search Coordinator',
      role: 'St. Catherine',
    },
    {
      quote: 'The site feels trustworthy and clear, which matters when families need accurate information shared quickly.',
      name: 'Family Support Advocate',
      role: 'Kingston',
    },
    {
      quote: 'Having safety tips, missing-person reports, and emergency contacts together creates a stronger public response tool.',
      name: 'Public Safety Partner',
      role: 'Montego Bay',
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-premium">
        <div className="mb-8 max-w-2xl">
          <span className="section-eyebrow">Community confidence</span>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Built for clarity when every minute matters.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold leading-7 text-slate-700">“{item.quote}”</p>
              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="font-black text-slate-950">{item.name}</p>
                <p className="text-sm font-bold text-emerald-700">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}