export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Report', desc: 'Submit missing-person details, photos, parish, last-seen location, and contact information.' },
    { num: '02', title: 'Verify', desc: 'Community leaders and officials can review details before wider public sharing.' },
    { num: '03', title: 'Alert', desc: 'Important notices are organized by parish, severity, and most recent updates.' },
    { num: '04', title: 'Respond', desc: 'Families, responders, and neighbours act with clearer information and safer coordination.' },
  ];

  return (
    <section className="bg-white py-16 sm:py-24" id="how-it-works">
      <div className="container-premium">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="badge bg-yellow-50 text-yellow-800">Trusted response flow</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">Simple enough for emergencies</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">A clear workflow designed for families, volunteers, NGOs, and public safety partners.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="card-premium rounded-[1.75rem] p-6">
              <div className="text-sm font-black tracking-[0.25em] text-emerald-600">{step.num}</div>
              <h3 className="mt-5 text-xl font-black text-gray-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}