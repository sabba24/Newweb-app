export default function Stats() {
  const items = [
    { label: 'Reports submitted', value: '1,200+', detail: 'community and official reports' },
    { label: 'Recoveries supported', value: '300+', detail: 'families reconnected' },
    { label: 'Parish coverage', value: '14', detail: 'Jamaican parishes' },
    { label: 'Emergency access', value: '24/7', detail: 'mobile-ready safety updates' },
  ];

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="container-premium">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="card-premium rounded-3xl p-6">
              <div className="text-4xl font-black tracking-tight text-gray-950">{item.value}</div>
              <div className="mt-2 font-extrabold text-gray-900">{item.label}</div>
              <div className="mt-1 text-sm text-gray-500">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}