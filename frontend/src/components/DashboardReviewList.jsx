import { useEffect, useState } from 'react';
import { getSavedBusinessAds, getSavedMissingAlerts } from '../lib/dashboardStorage';

export default function DashboardReviewList({ type = 'missing' }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = () => {
      setItems(type === 'ads' ? getSavedBusinessAds() : getSavedMissingAlerts());
    };

    loadItems();
    window.addEventListener('dashboard-data-change', loadItems);
    window.addEventListener('storage', loadItems);

    return () => {
      window.removeEventListener('dashboard-data-change', loadItems);
      window.removeEventListener('storage', loadItems);
    };
  }, [type]);

  const isAds = type === 'ads';

  return (
    <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
      <span className={`badge ${isAds ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-100' : 'bg-red-50 text-red-700 ring-1 ring-red-100'}`}>
        {isAds ? 'My Ads' : 'My Missing Person Alerts'}
      </span>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
        {isAds ? 'Submitted business ads' : 'Submitted missing-person alerts'}
      </h2>

      {items.length === 0 ? (
        <div className="mt-8 rounded-3xl bg-slate-50 p-8 text-center ring-1 ring-slate-100">
          <p className="font-black text-slate-950">No submissions yet.</p>
          <p className="mt-2 text-sm font-semibold text-slate-500">
            {isAds ? 'Create a business ad to see it here.' : 'Create a missing-person alert to see it here.'}
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4">
          {items.map((item) => (
            <article key={item.id} className="grid gap-4 rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-100 lg:grid-cols-[120px_1fr_auto] lg:items-center">
              <div className="h-28 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
                {(item.photo_preview || item.image_preview) ? (
                  <img src={item.photo_preview || item.image_preview} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="grid h-full place-items-center text-xs font-black uppercase tracking-wide text-slate-400">No image</div>
                )}
              </div>
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="badge bg-amber-50 text-amber-800 ring-1 ring-amber-100">{item.status}</span>
                  {item.parish && <span className="badge bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">{item.parish}</span>}
                  {item.location && <span className="badge bg-blue-50 text-blue-700 ring-1 ring-blue-100">{item.location}</span>}
                </div>
                <h3 className="mt-3 text-xl font-black text-slate-950">{isAds ? item.ad_title : item.name}</h3>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
                  {isAds ? item.promo_description : item.description}
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-wide text-slate-400">
                  Submitted {new Date(item.submitted_at).toLocaleString()}
                </p>
              </div>
              <button className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-700 shadow-sm ring-1 ring-slate-200">
                View Review
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}