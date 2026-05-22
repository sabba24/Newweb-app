import { useEffect, useMemo, useState } from 'react';
import { api } from '../lib/api';
import { demoMissingPersons, parishes } from '../lib/demoData';
import SkeletonCard from './SkeletonCard';

const statusStyles = {
  urgent: 'bg-red-50 text-red-700 border-red-100',
  missing: 'bg-amber-50 text-amber-800 border-amber-100',
  located: 'bg-emerald-50 text-emerald-700 border-emerald-100',
};

function normalizeApiPerson(person, index) {
  const fallback = demoMissingPersons[index % demoMissingPersons.length];

  return {
    ...fallback,
    ...person,
    parish: person.parish || fallback.parish,
    contact_number: person.contact_number || fallback.contact_number,
    photo_url: person.photo_url || fallback.photo_url,
    status: person.status || fallback.status || 'missing',
    description: person.description || fallback.description,
  };
}

export default function MissingPersonsPreview() {
  const [items, setItems] = useState(demoMissingPersons);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [parish, setParish] = useState('All');
  const [visible, setVisible] = useState(12);

  useEffect(() => {
    let mounted = true;

    api.get('/missing-persons?limit=24')
      .then((res) => {
        const apiItems = Array.isArray(res.data) ? res.data.map(normalizeApiPerson) : [];
        const apiIds = new Set(apiItems.map((item) => item.id));
        const merged = [...apiItems, ...demoMissingPersons.filter((item) => !apiIds.has(item.id))];

        if (mounted) setItems(merged);
      })
      .catch(() => setItems(demoMissingPersons))
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter((person) => {
      const searchable = `${person.name} ${person.parish} ${person.last_seen_location} ${person.description}`.toLowerCase();
      const matchesQuery = searchable.includes(query.trim().toLowerCase());
      const matchesParish = parish === 'All' || person.parish === parish || person.last_seen_location?.includes(parish);

      return matchesQuery && matchesParish;
    });
  }, [items, query, parish]);

  return (
    <section id="missing" className="bg-white py-16 sm:py-24">
      <div className="container-premium">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <span className="badge bg-emerald-50 text-emerald-700">Missing persons registry</span>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
              Recently reported across Jamaica
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Browse active public reports, filter by parish, and share verified information with the listed contacts or local authorities.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-3">
            <div className="grid gap-3 sm:grid-cols-[1fr_13rem]">
              <input
                className="input-premium"
                placeholder="Search name, location, parish..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <select className="input-premium" value={parish} onChange={(event) => setParish(event.target.value)}>
                <option>All</option>
                {parishes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredItems.slice(0, visible).map((person) => (
                <article key={person.id} className="card-premium group overflow-hidden rounded-[1.65rem]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-emerald-50">
                    <img src={person.photo_url} alt={person.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute left-3 top-3">
                      <span className={`badge border ${statusStyles[person.status] || statusStyles.missing}`}>
                        {person.status === 'urgent' ? 'Urgent' : person.status === 'located' ? 'Located' : 'Missing'}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-black text-gray-950">{person.name}</h3>
                        <p className="text-sm font-semibold text-emerald-700">{person.age} years old · {person.parish}</p>
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">{person.description}</p>
                    <div className="mt-4 space-y-2 text-sm text-gray-600">
                      <p><span className="font-bold text-gray-900">Last seen:</span> {person.last_seen_location}</p>
                      <p><span className="font-bold text-gray-900">Date:</span> {new Date(person.date_missing).toLocaleDateString()}</p>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <a href={`tel:${person.contact_number}`} className="btn btn-primary !px-3 !py-3 text-sm">Call</a>
                      <button className="btn btn-outline !px-3 !py-3 text-sm">Share</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <p className="text-sm font-semibold text-gray-500">
                Showing {Math.min(visible, filteredItems.length)} of {filteredItems.length} reports
              </p>
              {visible < filteredItems.length && (
                <button onClick={() => setVisible((count) => count + 12)} className="btn btn-outline">
                  Load more profiles
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}