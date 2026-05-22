export default function Stats() {
  const items = [
    { label: 'Reports submitted', value: '1,200+', detail: 'community and official reports' },
    { label: 'Recoveries supported', value: '300+', detail: 'families reconnected' },
    { label: 'Parish coverage', value: '14', detail: 'Jamaican parishes' },
    { label: 'Emergency access', value: '24/7', detail: 'mobile safety updates' },
  ];

  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="container-premium">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{item.value}</div>
              <div className="mt-1 text-sm font-black text-slate-800">{item.label}</div>
              <div className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}