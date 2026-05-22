import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { demoMissingPersons } from '../lib/demoData';

export default function MissingPersonsPreview() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api.get('/missing-persons?limit=6')
      .then((res) => {
        const data = Array.isArray(res.data) && res.data.length ? res.data : demoMissingPersons;
        if (mounted) setItems(data);
      })
      .catch(() => setItems(demoMissingPersons))
      .finally(() => setLoading(false));
    return () => { mounted = false; };
  }, []);

  return (
    <section id="missing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Recently Reported Missing Persons</h2>
            <p className="text-gray-600">Help bring them home by sharing and reporting tips.</p>
          </div>
          <a href="#" className="text-emerald-700 hover:underline">View all</a>
        </div>
        {loading ? (
          <div className="text-center text-gray-500">Loading…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <article key={p.id} className="rounded-xl border shadow-sm overflow-hidden bg-white">
                <div className="aspect-[16/10] bg-emerald-50">
                  {p.photo_url ? (
                    <img src={p.photo_url} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-emerald-700 font-semibold">No Photo</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg text-gray-900">{p.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-md border" style={{borderColor:'#009B3A', color:'#065F46'}}>Missing</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{p.age ? `${p.age} yrs · ` : ''}{p.last_seen_location || 'Location unknown'}</p>
                  {p.date_missing && (
                    <p className="text-xs text-gray-500 mt-1">Missing since {new Date(p.date_missing).toLocaleDateString()}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
