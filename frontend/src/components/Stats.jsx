export default function Stats() {
  const items = [
    { label: 'Reports Submitted', value: '1,200+', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 5h16M4 12h10M4 19h7" stroke="#009B3A" strokeWidth="2" strokeLinecap="round"/></svg>
    )},
    { label: 'Recoveries', value: '300+', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 20c4.418 0 8-3.582 8-8h-2l3-4 3 4h-2c0 5.523-4.477 10-10 10S2 17.523 2 12" stroke="#009B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )},
    { label: 'Communities', value: '14 Parishes', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 7l9-4 9 4-9 4-9-4zm0 5l9 4 9-4m-9 4v6" stroke="#009B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )},
  ];
  return (
    <section className="py-12 section-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {items.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-black/5">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-emerald-50">{s.icon}</div>
              <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
              <div className="mt-1 text-gray-600 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
