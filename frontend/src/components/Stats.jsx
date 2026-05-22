export default function Stats() {
  const items = [
    { label: 'Reports Submitted', value: '1,200+' },
    { label: 'Recoveries', value: '300+' },
    { label: 'Communities', value: '14 Parishes' },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((s) => (
            <div key={s.label} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-gray-900">{s.value}</div>
              <div className="mt-1 text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
