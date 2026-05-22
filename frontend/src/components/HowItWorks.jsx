export default function HowItWorks() {
  const steps = [
    { num: 1, title: 'Report', desc: 'Submit missing person reports or safety alerts with details and location.' },
    { num: 2, title: 'Verify', desc: 'Community and officials review and verify critical information.' },
    { num: 3, title: 'Notify', desc: 'Urgent alerts reach people in relevant parishes instantly.' },
    { num: 4, title: 'Respond', desc: 'With timely information, communities act swiftly and safely.' },
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
            <div key={s.num} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full grid place-items-center font-bold text-white" style={{background:'#009B3A'}}>{s.num}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
