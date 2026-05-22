import useSelectedLanguage from '../hooks/useSelectedLanguage';
import { SUPPORTED_LANGUAGES } from '../lib/languageContext';

export default function LanguageSelector() {
  const { languageCode, setLanguageCode } = useSelectedLanguage();

  return (
    <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <span className="text-sm" aria-hidden="true">🌐</span>
      <span className="sr-only">Select language</span>
      <select
        value={languageCode}
        onChange={(event) => setLanguageCode(event.target.value, true)}
        className="max-w-[8.5rem] bg-transparent text-sm font-black text-slate-800 outline-none"
        aria-label="Select language"
      >
        {SUPPORTED_LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </label>
  );
}