import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { demoAlerts } from '../lib/demoData';

const badgeClass = (severity) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-100 text-red-800';
    case 'warning':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-emerald-100 text-emerald-800';
  }
};

export default function EmergencyAlertsSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api.get('/alerts?limit=3')
      .then((res) => {
        const data = Array.isArray(res.data) && res.data.length ? res.data.slice(0,3) : demoAlerts;
        if (mounted) setItems(data);
      })
      .catch(() => setItems(demoAlerts))
      .finally(() => setLoading(false));
    return () => { mounted = false; };
  }, []);

  const AlertIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l10 18H2L12 2z" stroke="#b45309" strokeWidth="2"/><circle cx="12" cy="17" r="1" fill="#b45309"/><path d="M12 8v6" stroke="#b45309" strokeWidth="2"/></svg>
  );

  return (
    <section id="alerts" className="py-14 section-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Emergency Alerts</h2>
            <p className="text-gray-600">Stay up to date and stay safe.</p>
          </div>
        </div>
        {loading ? (
          <div className="text-center text-gray-500">Loading…</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {items.map((a) => (
              <article key={a.id} className="rounded-2xl overflow-hidden bg-white shadow-md ring-1 ring-black/5 transition hover:shadow-lg hover:-translate-y-0.5">
                {a.image && (
                  <div className="bg-gray-50">
                    <img src={a.image} alt="" className="w-full h-40 md:h-44 object-cover"/>
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="inline-flex items-center gap-2 text-xs text-amber-700"><AlertIcon />Public alert</div>
                      <h3 className="font-semibold text-[15px] text-gray-900 truncate">{a.title}</h3>
                      <p className="text-gray-700 mt-1 text-sm line-clamp-3">{a.message}</p>
                    </div>
                    <span className={`badge ${badgeClass(a.severity)}`}>{a.severity}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
