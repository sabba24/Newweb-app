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

  return (
    <section id="alerts" className="py-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Emergency Alerts</h2>
            <p className="text-gray-600">Stay up to date and stay safe.</p>
          </div>
        </div>
        {loading ? (
          <div className="text-center text-gray-500">Loading…</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((a) => (
              <article key={a.id} className="rounded-xl overflow-hidden bg-white shadow-md ring-1 ring-black/5">
                {a.image && (
                  <div className="aspect-[4/3] bg-gray-50">
                    <img src={a.image} alt="" className="w-full h-full object-cover"/>
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-base text-gray-900">{a.title}</h3>
                      <p className="text-gray-700 mt-1 text-sm">{a.message}</p>
                    </div>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${badgeClass(a.severity)}`}>{a.severity}</span>
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
