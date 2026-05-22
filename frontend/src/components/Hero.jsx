import { useEffect, useMemo, useState } from 'react';
import logoMark from '../assets/logo-mark.svg';
import { demoMissingPersons } from '../lib/demoData';

const statusStyles = {
  urgent: 'bg-red-50 text-red-700',
  missing: 'bg-amber-50 text-amber-800',
  located: 'bg-emerald-50 text-emerald-700',
};

const formatDate = (value) =>
  new Date(value).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

export default function Hero() {
  const showcaseItems = useMemo(() => demoMissingPersons.slice(0, 10), []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % showcaseItems.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [showcaseItems.length]);

  const priorityPerson = showcaseItems[activeIndex];
  const regularPeople = Array.from({ length: 4 }, (_, index) => showcaseItems[(activeIndex + index + 1) % showcaseItems.length]);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f0fdf4_58%,#fff8d7_100%)]">
      <div className="absolute left-[-12rem] top-[-12rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute right-[-10rem] top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-yellow-300/25 blur-3xl" />

      <div className="container-hero grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,700px)] lg:gap-16 lg:py-20 xl:gap-24">
        <div className="max-w-[780px] justify-self-start">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-800 shadow-sm ring-1 ring-emerald-100 backdrop-blur">
            <img src={logoMark} alt="" className="h-6 w-6" />
            Jamaica public safety platform
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
            Faster missing-person and emergency alerts across Jamaica.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            876Alert helps families, communities, and responders share trusted reports, emergency updates, parish notices, and safety resources in one modern platform.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#missing" className="btn btn-primary sm:w-auto">Browse Missing Persons</a>
            <a href="#alerts" className="btn btn-outline sm:w-auto">View Emergency Alerts</a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {['Verified reports', '14 parishes', 'Mobile emergency access'].map((item) => (
              <span key={item} className="badge bg-white text-emerald-800 shadow-sm ring-1 ring-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {item}
              </span>
            ))}
          </div>

          <dl className="mt-9 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ['1,200+', 'Reports'],
              ['300+', 'Recoveries'],
              ['24/7', 'Alerts'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/88 p-4 shadow-sm ring-1 ring-slate-100 backdrop-blur">
                <dt className="text-2xl font-black tracking-tight text-slate-950">{value}</dt>
                <dd className="mt-1 text-xs font-black uppercase tracking-wider text-slate-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="w-full max-w-[700px] justify-self-center lg:translate-x-4 lg:justify-self-end xl:translate-x-8 2xl:translate-x-10">
          <div className="overflow-hidden rounded-[2rem] bg-white/90 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.14)] ring-1 ring-white/80 backdrop-blur-xl">
            <div className="rounded-[1.6rem] bg-gradient-to-br from-red-700 via-red-600 to-rose-700 p-3 text-white shadow-[0_20px_50px_rgba(185,28,28,0.28)]">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
                <div>
                  <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-white">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/18 text-base ring-1 ring-white/25">🚨</span>
                    Priority Alert
                  </p>
                  <p className="mt-1 text-sm font-bold text-white/85">Featured / Sponsored · Boosted visibility</p>
                </div>
                <span className="badge bg-white text-red-700 shadow-sm">Urgent</span>
              </div>

              <div key={priorityPerson.id} className="grid gap-4 transition-opacity duration-500 md:grid-cols-[1.08fr_0.92fr] md:items-stretch">
                <div className="overflow-hidden rounded-[1.35rem] bg-red-950/25 ring-1 ring-white/15">
                  <div className="relative aspect-[4/3] h-full min-h-[250px]">
                    <img
                      src={priorityPerson.photo_url}
                      alt={priorityPerson.name}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-red-950/95 to-transparent p-4">
                      <p className="text-2xl font-black leading-tight">{priorityPerson.name}</p>
                      <p className="mt-1 text-sm font-semibold text-white/85">
                        {priorityPerson.age} years · {priorityPerson.parish}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-[1.35rem] bg-white p-4 text-slate-950 shadow-lg">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge bg-red-50 text-red-700 ring-1 ring-red-100">Featured / Sponsored</span>
                      <span className="badge bg-yellow-100 text-yellow-900 ring-1 ring-yellow-200">Boosted visibility</span>
                    </div>

                    <div className="mt-5 space-y-4 text-sm">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Parish / Location</p>
                        <p className="mt-1 font-black text-slate-950">{priorityPerson.parish}</p>
                        <p className="mt-1 leading-5 text-slate-600">{priorityPerson.last_seen_location}</p>
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Missing date</p>
                        <p className="mt-1 font-black text-slate-950">{formatDate(priorityPerson.date_missing)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-red-50 p-4 ring-1 ring-red-100">
                    <p className="text-sm font-black text-red-800">Paid priority placement</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-red-700">
                      This alert is promoted at the top for faster community visibility.
                    </p>
                    <a href="/#missing" className="btn btn-primary mt-3 !min-h-10 !w-full !bg-gradient-to-br !from-red-700 !to-red-600 !px-4 !py-2 text-xs shadow-[0_10px_22px_rgba(185,28,28,0.24)]">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {regularPeople.map((person) => (
                <article key={person.id} className="overflow-hidden rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-100">
                  <div className="grid grid-cols-[5.25rem_1fr]">
                    <div className="aspect-square overflow-hidden bg-slate-100">
                      <img src={person.photo_url} alt={person.name} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="min-w-0 p-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`h-2 w-2 rounded-full ${person.status === 'urgent' ? 'bg-red-500' : person.status === 'located' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                        <span className="truncate text-[0.65rem] font-black uppercase tracking-wide text-slate-500">Community Report</span>
                      </div>
                      <h3 className="mt-1 truncate text-sm font-black text-slate-950">{person.name}</h3>
                      <p className="truncate text-xs font-bold text-emerald-700">{person.parish}</p>
                      <div className="mt-1 flex items-center justify-between gap-2">
                        <p className="truncate text-[0.68rem] font-black capitalize text-slate-500">{person.status} alert</p>
                        <a href="/#missing" className="rounded-full border border-slate-300 bg-white px-2 py-1 text-[0.64rem] font-black text-slate-800 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700">
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {showcaseItems.slice(0, 6).map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${index === activeIndex % 6 ? 'w-8 bg-emerald-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={`Show ${item.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}