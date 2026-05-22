import { useEffect, useState } from 'react';
import { api } from '../lib/api';

export default function MissingPersonsPreview() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api.get('/missing-persons?limit=6').then((res) => {
      if (mounted) setItems(res.data || []);
    }).catch(() => {}).finally(() => setLoading(false));
    return () => { mounted = false; };
  }, []);

  return (
    <section id="missing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Recently Reported Missing Persons</h2>
            <p className="text-gray-600">Help bring them home by sharing and reporting tips.</p>
          </div>
          <a href="#" className="text-[color:var(--jamaica-green)] hover:underline">View all</a>
        </div>
        {loading ? (
          <div className="text-center text-gray-500">Loading…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <div key={p.id} className="rounded-xl border shadow-sm overflow-hidden">
                <div className="aspect-video bg-emerald-50 flex items-center justify-center">
                  {p.photo_url ? (
                    <img src={p.photo_url} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-emerald-700 font-semibold">No Photo</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.age ? `${p.age} yrs · ` : ''}{p.last_seen_location || 'Location unknown'}</p>
                  {p.date_missing && (
                    <p className="text-xs text-gray-500 mt-1">Missing since {new Date(p.date_missing).toLocaleDateString()}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
