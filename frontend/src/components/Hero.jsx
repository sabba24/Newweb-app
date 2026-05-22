import logoMark from '../assets/logo-mark.svg';
import { demoMissingPersons } from '../lib/demoData';

export default function Hero() {
  const featured = demoMissingPersons.slice(0, 4);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#f0fdf4_56%,#fff8d8_100%)]" />
      <div className="absolute left-[-10rem] top-[-10rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute right-[-8rem] top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-yellow-300/24 blur-3xl" />

      <div className="container-premium grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.06fr_0.94fr] lg:py-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3.5 py-2 text-xs font-black text-emerald-800 shadow-sm ring-1 ring-emerald-100 backdrop-blur sm:text-sm">
            <img src={logoMark} alt="" className="h-6 w-6" />
            Jamaica Missing Persons & Emergency Alert Platform
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
            Faster alerts for safer communities across Jamaica.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            876Alert helps families, communities, and responders share missing-person reports, emergency notices, and trusted public safety information in one modern platform.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#missing" className="btn btn-primary sm:w-auto">Browse Missing Persons</a>
            <a href="#alerts" className="btn btn-outline sm:w-auto">View Alerts</a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {['Trusted reports', '14 parish coverage', 'Emergency-ready access'].map((item) => (
              <span key={item} className="badge bg-white text-emerald-800 shadow-sm ring-1 ring-emerald-100">
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
              <div key={label} className="rounded-2xl bg-white/82 p-4 shadow-sm ring-1 ring-slate-100 backdrop-blur">
                <dt className="text-2xl font-black tracking-tight text-slate-950">{value}</dt>
                <dd className="mt-1 text-xs font-black uppercase tracking-wider text-slate-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-up">
          <div className="rounded-[2rem] bg-white/82 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)] ring-1 ring-white/70 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 overflow-hidden rounded-[1.5rem]">
                <div className="relative aspect-[16/10]">
                  <img src={featured[0].photo_url} alt={featured[0].name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 text-white">
                    <p className="text-base font-black">{featured[0].name}</p>
                    <p className="text-xs font-semibold text-white/80">{featured[0].parish} · Active case</p>
                  </div>
                </div>
              </div>

              {featured.slice(1).map((person) => (
                <div key={person.id} className="overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3]">
                    <img src={person.photo_url} alt={person.name} className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/72 to-transparent p-3 text-white">
                      <p className="truncate text-xs font-black">{person.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-[1.5rem] bg-slate-950 p-4 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black">Emergency routing active</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">Critical alerts are grouped by severity, parish, and most recent updates.</p>
                </div>
                <a href="tel:119" className="rounded-full bg-yellow-300 px-4 py-2 text-sm font-black text-slate-950">Call 119</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}