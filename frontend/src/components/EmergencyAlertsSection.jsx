import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { demoAlerts } from '../lib/demoData';
import AlertTicker from './AlertTicker';
import SkeletonCard from './SkeletonCard';

const severityClass = (severity) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-50 text-red-700 border-red-100';
    case 'warning':
      return 'bg-yellow-50 text-yellow-800 border-yellow-100';
    default:
      return 'bg-emerald-50 text-emerald-700 border-emerald-100';
  }
};

const alertIcon = (type) => {
  if (type === 'traffic') return '🚧';
  if (type === 'weather') return '⛈️';
  if (type === 'missing person') return '🚨';
  if (type === 'community') return '🤝';
  return '⚠️';
};

function normalizeApiAlert(alert, index) {
  const fallback = demoAlerts[index % demoAlerts.length];

  return {
    ...fallback,
    ...alert,
    parish: alert.parish || fallback.parish,
    type: alert.type || fallback.type,
    timestamp: alert.timestamp || alert.created_at || fallback.timestamp,
    image: alert.image || fallback.image,
  };
}

export default function EmergencyAlertsSection() {
  const [items, setItems] = useState(demoAlerts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    api.get('/alerts?limit=8')
      .then((res) => {
        const apiItems = Array.isArray(res.data) ? res.data.map(normalizeApiAlert) : [];
        const apiIds = new Set(apiItems.map((item) => item.id));
        const merged = [...apiItems, ...demoAlerts.filter((item) => !apiIds.has(item.id))];

        if (mounted) setItems(merged);
      })
      .catch(() => setItems(demoAlerts))
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="alerts" className="overflow-hidden bg-emerald-950 py-0 text-white">
      <AlertTicker alerts={items.slice(0, 5)} />

      <div className="container-premium py-16 sm:py-24">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <span className="badge bg-white/10 text-yellow-200 ring-1 ring-white/10">Emergency operations feed</span>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Live safety alerts by parish</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-emerald-50/80">
              Critical weather, traffic, missing-person, and community notices are organized by severity so people can respond quickly.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-200">Emergency numbers</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a href="tel:119" className="rounded-2xl bg-white p-4 text-center font-black text-gray-950">119 Police</a>
              <a href="tel:110" className="rounded-2xl bg-white p-4 text-center font-black text-gray-950">110 Fire/EMS</a>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {items.map((alert) => (
              <article key={alert.id} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white text-gray-950 shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={alert.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute left-4 top-4 text-3xl">{alertIcon(alert.type)}</div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`badge border ${severityClass(alert.severity)}`}>{alert.severity}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{alert.parish} · {alert.type}</p>
                  <h3 className="mt-2 text-xl font-black">{alert.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{alert.message}</p>
                  <p className="mt-4 text-xs font-bold text-gray-400">
                    Updated {new Date(alert.timestamp).toLocaleString()}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}