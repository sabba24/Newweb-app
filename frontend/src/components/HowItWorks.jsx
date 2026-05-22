export default function HowItWorks() {
  const steps = [
    { num: 1, title: 'Report', desc: 'Submit missing person reports or safety alerts with details and location.', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" stroke="#009B3A" strokeWidth="2"/><path d="M8 8h8M8 12h6M8 16h4" stroke="#009B3A" strokeWidth="2" strokeLinecap="round"/></svg>
    ) },
    { num: 2, title: 'Verify', desc: 'Community and officials review and verify critical information.', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" stroke="#009B3A" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="#009B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ) },
    { num: 3, title: 'Notify', desc: 'Urgent alerts reach people in relevant parishes instantly.', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 10h2l1-3 3-2 3-1 3 1 3 2 1 3h2v6h-6l-3 2-3-2H3v-6z" stroke="#009B3A" strokeWidth="2"/></svg>
    ) },
    { num: 4, title: 'Respond', desc: 'With timely information, communities act swiftly and safely.', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="#009B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ) },
  ];
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
          <p className="text-gray-600">A simple, trusted flow for public safety</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50">{s.icon}</div>
                <div className="text-xs font-semibold text-emerald-700">Step {s.num}</div>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
