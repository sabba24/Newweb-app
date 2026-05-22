import logoMark from '../assets/logo-mark.svg';
import { demoMissingPersons } from '../lib/demoData';

export default function Hero() {
  const featured = demoMissingPersons.slice(0, 5);

  return (
    <section className="relative isolate overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#f0fdf4_52%,#fff8d7_100%)]" />
      <div className="absolute left-[-12rem] top-[-14rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-emerald-300/24 blur-3xl" />
      <div className="absolute right-[-10rem] top-8 -z-10 h-[30rem] w-[30rem] rounded-full bg-yellow-300/25 blur-3xl" />

      <div className="container-premium grid items-center gap-10 py-14 lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/86 px-3.5 py-2 text-xs font-black text-emerald-800 shadow-sm backdrop-blur sm:text-sm">
            <img src={logoMark} alt="" className="h-6 w-6" />
            Jamaica Missing Persons & Emergency Alert Network
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
            Public safety alerts that help Jamaica respond faster.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            876Alert brings missing-person reports, parish emergency updates, traffic notices, and safety resources into one polished, mobile-ready platform.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#missing" className="btn btn-primary sm:w-auto">Browse reports</a>
            <a href="#alerts" className="btn btn-outline sm:w-auto">View live alerts</a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {['Verified-first workflow', '14 parishes covered', 'Emergency-ready design'].map((item) => (
              <span key={item} className="badge border border-emerald-100 bg-white text-emerald-800 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {item}
              </span>
            ))}
          </div>

          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {[
              ['1,200+', 'Reports'],
              ['300+', 'Recoveries'],
              ['24/7', 'Updates'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/80 bg-white/78 p-4 shadow-sm backdrop-blur">
                <dt className="text-2xl font-black tracking-tight text-slate-950">{value}</dt>
                <dd className="mt-1 text-xs font-black uppercase tracking-wider text-slate-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] animate-fade-up lg:mx-0">
          <div className="rounded-[2rem] border border-white/80 bg-white/76 p-3 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-5 gap-2">
              <div className="col-span-3 overflow-hidden rounded-[1.45rem]">
                <div className="relative aspect-[4/4.35]">
                  <img src={featured[0].photo_url} alt={featured[0].name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/78 to-transparent p-4 text-white">
                    <p className="text-base font-black">{featured[0].name}</p>
                    <p className="text-xs font-semibold text-white/80">{featured[0].parish} · Active report</p>
                  </div>
                </div>
              </div>

              <div className="col-span-2 grid gap-2">
                {featured.slice(1).map((person) => (
                  <div key={person.id} className="overflow-hidden rounded-2xl">
                    <div className="relative aspect-[4/3]">
                      <img src={person.photo_url} alt={person.name} className="h-full w-full object-cover" loading="lazy" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-2 text-white">
                        <p className="truncate text-xs font-black">{person.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 grid gap-3 rounded-[1.5rem] bg-slate-950 p-4 text-white sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-sm font-black">Live parish alert routing</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">Critical notices grouped by severity, parish, and recency.</p>
              </div>
              <a href="tel:119" className="rounded-full bg-yellow-300 px-4 py-2 text-center text-sm font-black text-slate-950">Call 119</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}