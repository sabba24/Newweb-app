export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Report', desc: 'Submit key details, photos, parish, last-seen location, and contact information.' },
    { num: '02', title: 'Verify', desc: 'Community leaders and officials can review details before wider sharing.' },
    { num: '03', title: 'Alert', desc: 'Important notices are organized by parish, severity, and latest updates.' },
    { num: '04', title: 'Respond', desc: 'Families, responders, and neighbours act with clearer information.' },
  ];

  return (
    <section className="bg-white section-padding" id="how-it-works">
      <div className="container-premium">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <span className="section-eyebrow">Trusted response flow</span>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">Simple enough for emergencies</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">A clear workflow designed for families, volunteers, NGOs, and public safety partners.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-black tracking-[0.22em] text-emerald-600">{step.num}</div>
              <h3 className="mt-5 text-lg font-black text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}