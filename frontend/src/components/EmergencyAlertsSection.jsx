import { useEffect, useMemo, useState } from 'react';
import useSelectedCountry from '../hooks/useSelectedCountry';
import { api } from '../lib/api';
import { demoAlerts } from '../lib/demoData';
import AlertTicker from './AlertTicker';
import SkeletonCard from './SkeletonCard';

const severityClass = (severity) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-50 text-red-700';
    case 'warning':
      return 'bg-yellow-50 text-yellow-800';
    default:
      return 'bg-emerald-50 text-emerald-700';
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
    country: alert.country || fallback.country,
    countryCode: alert.countryCode || alert.country_code || fallback.countryCode,
    flag: alert.flag || fallback.flag,
    region: alert.region || alert.parish || fallback.region,
    parish: alert.parish || alert.region || fallback.parish,
    city: alert.city || fallback.city,
    type: alert.type || fallback.type,
    timestamp: alert.timestamp || alert.created_at || fallback.timestamp,
    image: alert.image || fallback.image,
  };
}

export default function EmergencyAlertsSection() {
  const { country, countryCode } = useSelectedCountry();
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

  const countryItems = useMemo(
    () => items.filter((alert) => alert.countryCode === countryCode),
    [items, countryCode]
  );

  return (
    <section id="alerts" className="bg-slate-950 text-white">
      <AlertTicker alerts={countryItems.slice(0, 5)} />

      <div className="container-premium section-padding">
        <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-wide text-yellow-200 ring-1 ring-white/10">
              {country.flag} Emergency alerts
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Live alerts in {country.name}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Weather, traffic, missing-person, and community alerts displayed for the selected country.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-200">Emergency contacts</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a href="tel:119" className="rounded-2xl border border-blue-300/60 bg-blue-950 p-4 text-center font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-900">
                <span className="mb-1 block text-xl">🚓</span>
                Police
              </a>
              <a href="tel:110" className="rounded-2xl border border-yellow-200 bg-yellow-300 p-4 text-center font-black text-slate-950 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-200">
                <span className="mb-1 block text-xl">🚑</span>
                EMS
              </a>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {countryItems.map((alert) => (
              <article key={alert.id} className="overflow-hidden rounded-3xl bg-white text-slate-950 shadow-xl">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={alert.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/62 to-transparent" />
                  <div className="absolute left-3 top-3 text-2xl">{alertIcon(alert.type)}</div>
                  <div className="absolute bottom-3 left-3">
                    <span className={`badge ${severityClass(alert.severity)}`}>{alert.severity}</span>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-emerald-700">
                    {alert.flag} {alert.region} · {alert.type}
                  </p>
                  <h3 className="mt-2 text-lg font-black leading-tight">{alert.title}</h3>
                  <p className="mt-2 line-clamp-2-custom min-h-[2.5rem] text-sm leading-5 text-slate-600">{alert.message}</p>
                  <p className="mt-4 text-xs font-bold text-slate-400">
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