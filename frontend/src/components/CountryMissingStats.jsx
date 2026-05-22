import { SUPPORTED_COUNTRIES } from '../lib/countryContext';

export default function CountryMissingStats({ activeIndex = 0, selectedCountryCode = 'JM' }) {
  const visibleCountries = Array.from({ length: 4 }, (_, index) => {
    const countryIndex = (activeIndex + index) % SUPPORTED_COUNTRIES.length;
    return SUPPORTED_COUNTRIES[countryIndex];
  });

  return (
    <aside className="rounded-[2rem] bg-white/92 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.12)] ring-1 ring-white/80 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-emerald-700">Country reports</p>
          <h3 className="mt-1 text-lg font-black text-slate-950">Missing-person totals</h3>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-100 text-lg ring-1 ring-yellow-200">🌍</span>
      </div>

      <div className="mt-4 grid gap-2">
        {visibleCountries.map((country) => {
          const selected = country.code === selectedCountryCode;

          return (
            <div
              key={country.code}
              className={`flex items-center justify-between gap-3 rounded-2xl px-3 py-3 transition ${
                selected
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                  : 'bg-slate-50 text-slate-800 ring-1 ring-slate-100'
              }`}
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="text-lg">{country.flag}</span>
                <span className="truncate text-sm font-black">{country.name}</span>
              </div>
              <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-black ${
                selected ? 'bg-white/18 text-white' : 'bg-white text-emerald-700 ring-1 ring-slate-100'
              }`}>
                {country.totalMissingReports.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs font-semibold leading-5 text-slate-500">
        Totals rotate with the priority carousel. Selected country is highlighted.
      </p>
    </aside>
  );
}