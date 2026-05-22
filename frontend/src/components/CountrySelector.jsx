import useSelectedCountry from '../hooks/useSelectedCountry';
import { SUPPORTED_COUNTRIES } from '../lib/countryContext';

export default function CountrySelector({ compact = false }) {
  const { countryCode, setCountryCode } = useSelectedCountry();

  return (
    <label className={`flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm ${
      compact ? 'px-3 py-2' : 'px-3 py-2'
    }`}>
      <span className="text-sm" aria-hidden="true">
        {SUPPORTED_COUNTRIES.find((country) => country.code === countryCode)?.flag || '🌍'}
      </span>
      <span className="sr-only">Select country</span>
      <select
        value={countryCode}
        onChange={(event) => setCountryCode(event.target.value)}
        className="max-w-[11rem] bg-transparent text-sm font-black text-slate-800 outline-none"
        aria-label="Select country"
      >
        {SUPPORTED_COUNTRIES.map((country) => (
          <option key={country.code} value={country.code}>
            {country.flag} {country.name}
          </option>
        ))}
      </select>
    </label>
  );
}