import { useEffect, useState } from 'react';
import { api } from '../lib/api';

const badgeClass = (severity) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-100 text-red-800 border border-red-200';
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
    default:
      return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
  }
};

export default function EmergencyAlertsSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api.get('/alerts?limit=5').then((res) => {
      if (mounted) setItems(res.data || []);
    }).catch(() => {}).finally(() => setLoading(false));
    return () => { mounted = false; };
  }, []);

  return (
    <section id="alerts" className="py-16 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Emergency Alerts</h2>
            <p className="text-gray-600">Stay up to date and stay safe.</p>
          </div>
        </div>
        {loading ? (
          <div className="text-center text-gray-500">Loading</div>
        ) : (
          <div className="space-y-4">
            {items.map((a) => (
              <div key={a.id} className="rounded-xl border bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">{a.title}</h3>
                    <p className="text-gray-700 mt-1">{a.message}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-md ${badgeClass(a.severity)}`}>{a.severity}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
