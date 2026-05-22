import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { demoMissingPersons } from '../lib/demoData';

const avatars = ['/src/assets/avatar1.svg','/src/assets/avatar2.svg','/src/assets/avatar3.svg'];

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-5.686-7-11a7 7 0 1 1 14 0c0 5.314-7 11-7 11z" stroke="#065F46" strokeWidth="2"/><circle cx="12" cy="10" r="2" fill="#065F46"/></svg>
);

export default function MissingPersonsPreview() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api.get('/missing-persons?limit=3')
      .then((res) => {
        let data = Array.isArray(res.data) && res.data.length ? res.data.slice(0,3) : demoMissingPersons;
        data = data.map((p, i) => ({ ...p, photo_url: p.photo_url || avatars[i % avatars.length] }));
        if (mounted) setItems(data);
      })
      .catch(() => setItems(demoMissingPersons.map((p,i)=>({...p, photo_url: avatars[i%avatars.length]}))))
      .finally(() => setLoading(false));
    return () => { mounted = false; };
  }, []);

  return (
    <section id="missing" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Recently Reported Missing Persons</h2>
            <p className="text-gray-600">Help bring them home by sharing and reporting tips.</p>
          </div>
          <a href="#" className="text-emerald-700 hover:underline">View all</a>
        </div>
        {loading ? (
          <div className="text-center text-gray-500">Loading…</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {items.map((p, idx) => (
              <article key={p.id || idx} className="rounded-2xl overflow-hidden bg-white shadow-md ring-1 ring-black/5 transition hover:shadow-lg hover:-translate-y-0.5">
                <div className="bg-gray-50">
                  <img src={p.photo_url} alt={p.name} className="w-full h-40 md:h-44 object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-[15px] text-gray-900">{p.name}</h3>
                    <span className="badge bg-yellow-100 text-yellow-800">Missing</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-700">{p.age ? `${p.age} yrs · ` : ''}<span className="inline-flex items-center gap-1"><LocationIcon />{p.last_seen_location || 'Location unknown'}</span></p>
                  {p.date_missing && (
                    <p className="text-xs text-gray-500 mt-1">Last seen {new Date(p.date_missing).toLocaleDateString()}</p>
                  )}
                  <div className="mt-3">
                    <button className="btn btn-outline w-full text-sm">View Details</button>
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
