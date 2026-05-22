import useSelectedCountry from '../hooks/useSelectedCountry';
import { SUPPORTED_COUNTRIES } from '../lib/countryContext';

export default function CountrySelector() {
  const { country, countryCode, setCountryCode } = useSelectedCountry();

  return (
    <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <span className="text-sm" aria-hidden="true">
        {country.flag}
      </span>
      <span className="sr-only">Select country</span>
      <select
        value={countryCode}
        onChange={(event) => setCountryCode(event.target.value)}
        className="max-w-[11rem] bg-transparent text-sm font-black text-slate-800 outline-none"
        aria-label="Select country"
      >
        {SUPPORTED_COUNTRIES.map((item) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  );
}