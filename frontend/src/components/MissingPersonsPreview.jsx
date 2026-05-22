import { useEffect, useMemo, useState } from 'react';
import { api } from '../lib/api';
import { demoMissingPersons, parishes } from '../lib/demoData';
import SkeletonCard from './SkeletonCard';

const statusStyles = {
  urgent: 'bg-red-50 text-red-700',
  missing: 'bg-amber-50 text-amber-800',
  located: 'bg-emerald-50 text-emerald-700',
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
    <section id="missing" className="bg-white section-padding">
      <div className="container-premium">
        <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Missing persons</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Search recent public reports
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Browse active reports by parish and share verified information with the listed contact or local authorities.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-3 shadow-sm ring-1 ring-slate-100">
            <div className="grid gap-3 sm:grid-cols-[1fr_12rem]">
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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.slice(0, visible).map((person) => (
                <article key={person.id} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_12px_34px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(15,23,42,0.12)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={person.photo_url} alt={person.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute left-3 top-3">
                      <span className={`badge ${statusStyles[person.status] || statusStyles.missing}`}>
                        {person.status === 'urgent' ? 'Urgent' : person.status === 'located' ? 'Located' : 'Missing'}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-base font-black leading-tight text-slate-950">{person.name}</h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-wide text-emerald-700">
                      {person.age} years · {person.parish}
                    </p>

                    <div className="mt-3 space-y-1.5 text-sm leading-5 text-slate-600">
                      <p className="line-clamp-2-custom">
                        <span className="font-black text-slate-900">Last seen:</span> {person.last_seen_location}
                      </p>
                      <p>
                        <span className="font-black text-slate-900">Date:</span> {new Date(person.date_missing).toLocaleDateString()}
                      </p>
                    </div>

                    <p className="mt-3 line-clamp-2-custom min-h-[2.5rem] text-sm leading-5 text-slate-500">
                      {person.description}
                    </p>

                    <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
                      <button className="btn btn-outline !min-h-10 !px-3 !py-2 text-xs">View Details</button>
                      <a href={`tel:${person.contact_number}`} className="btn btn-primary !min-h-10 !px-3 !py-2 text-xs">Call</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-9 flex flex-col items-center gap-3">
              <p className="text-sm font-bold text-slate-500">
                Showing {Math.min(visible, filteredItems.length)} of {filteredItems.length} reports
              </p>
              {visible < filteredItems.length && (
                <button onClick={() => setVisible((count) => count + 12)} className="btn btn-outline sm:w-auto">
                  Load more
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}