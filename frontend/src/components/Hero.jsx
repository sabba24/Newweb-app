import logoMark from '../assets/logo-mark.svg';
import { demoMissingPersons } from '../lib/demoData';

export default function Hero() {
  const featured = demoMissingPersons.slice(0, 6);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f0fdf4_48%,#fff8d7_100%)]" />
        <div className="absolute left-[-10rem] top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="absolute right-[-8rem] top-16 h-[28rem] w-[28rem] rounded-full bg-yellow-300/25 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container-premium grid gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <div className="flex flex-col justify-center animate-fade-up">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-extrabold text-emerald-800 shadow-sm backdrop-blur">
            <img src={logoMark} alt="" className="h-6 w-6" />
            Jamaica Missing Persons & Emergency Alert Network
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 sm:text-6xl lg:text-7xl">
            Faster alerts. Safer communities. More people brought home.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700 sm:text-xl">
            876Alert helps Jamaicans share verified missing-person reports, emergency alerts, parish safety updates, and critical response information in one trusted public safety platform.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#missing" className="btn btn-primary">Browse Missing Persons</a>
            <a href="#alerts" className="btn btn-outline">View Emergency Alerts</a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Verified reports', '14 parishes covered', 'Mobile-first alerts'].map((item) => (
              <span key={item} className="badge border border-emerald-100 bg-white text-emerald-800 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {item}
              </span>
            ))}
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ['1,200+', 'Reports'],
              ['300+', 'Recoveries'],
              ['24/7', 'Alert access'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white/80 bg-white/75 p-4 text-center shadow-sm backdrop-blur transition hover:-translate-y-1">
                <dt className="text-2xl font-black tracking-tight text-gray-950 sm:text-3xl">{value}</dt>
                <dd className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[34rem] animate-fade-up lg:min-h-[42rem]">
          <div className="absolute right-0 top-0 w-full max-w-xl rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {featured.map((person, index) => (
                <div key={person.id} className={`group overflow-hidden rounded-[1.45rem] border border-white bg-white shadow-sm ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={person.photo_url} alt={person.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                      <p className="text-sm font-black">{person.name}</p>
                      <p className="text-xs text-white/80">{person.parish}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-0 max-w-sm rounded-[2rem] border border-white/70 bg-white/88 p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-red-50 text-red-600">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-black text-gray-950">Live parish alert routing</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">Emergency notices are grouped by severity, parish, and latest timestamp for faster response.</p>
              </div>
            </div>
          </div>

          <div className="absolute right-10 top-16 -z-10 h-52 w-52 rounded-full bg-yellow-300/50 blur-3xl animate-float" />
        </div>
      </div>
    </section>
  );
}