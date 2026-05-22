export const SELECTED_LANGUAGE_STORAGE_KEY = 'selected_language_code';
export const LANGUAGE_OVERRIDE_STORAGE_KEY = 'selected_language_override';

export const SUPPORTED_LANGUAGES = [
  { code: 'auto', name: 'Auto Detect', label: 'Auto Detect', dir: 'ltr' },
  { code: 'en', name: 'English', label: 'English', dir: 'ltr' },
  { code: 'es', name: 'Spanish', label: 'Español', dir: 'ltr' },
  { code: 'fr', name: 'French', label: 'Français', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', label: 'Português', dir: 'ltr' },
  { code: 'nl', name: 'Dutch', label: 'Nederlands', dir: 'ltr' },
  { code: 'de', name: 'German', label: 'Deutsch', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', label: 'العربية', dir: 'rtl' },
  { code: 'hi', name: 'Hindi', label: 'हिन्दी', dir: 'ltr' },
  { code: 'zh', name: 'Chinese', label: '中文', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', label: '日本語', dir: 'ltr' },
  { code: 'ko', name: 'Korean', label: '한국어', dir: 'ltr' },
];

export const countryLanguageMap = {
  AE: 'ar',
  AR: 'es',
  AT: 'de',
  BE: 'nl',
  BR: 'pt',
  CA: 'en',
  CH: 'de',
  CN: 'zh',
  CO: 'es',
  CU: 'es',
  CW: 'nl',
  DE: 'de',
  DO: 'es',
  DZ: 'ar',
  EG: 'ar',
  ES: 'es',
  FR: 'fr',
  GF: 'fr',
  GP: 'fr',
  HT: 'fr',
  IN: 'hi',
  JP: 'ja',
  KR: 'ko',
  MA: 'ar',
  MQ: 'fr',
  MX: 'es',
  NL: 'nl',
  PA: 'es',
  PE: 'es',
  PF: 'fr',
  PT: 'pt',
  QA: 'ar',
  RE: 'fr',
  SA: 'ar',
  SX: 'nl',
  TN: 'ar',
  US: 'en',
  GB: 'en',
  JM: 'en',
  BB: 'en',
  BS: 'en',
  GY: 'en',
  TT: 'en',
  NG: 'en',
  GH: 'en',
  PH: 'en',
};

const languageAliases = {
  iw: 'he',
  in: 'id',
  zh: 'zh',
  'zh-cn': 'zh',
  'zh-hans': 'zh',
  'zh-tw': 'zh',
  'zh-hant': 'zh',
  pt: 'pt',
  'pt-br': 'pt',
  es: 'es',
  fr: 'fr',
  de: 'de',
  nl: 'nl',
  ar: 'ar',
  hi: 'hi',
  ja: 'ja',
  ko: 'ko',
  en: 'en',
};

export function getLanguageByCode(code) {
  return SUPPORTED_LANGUAGES.find((language) => language.code === code) || SUPPORTED_LANGUAGES[1];
}

export function normalizeLanguageCode(value) {
  const raw = String(value || '').trim().toLowerCase();

  if (!raw || raw === 'auto') return 'auto';

  const direct = languageAliases[raw] || languageAliases[raw.split('-')[0]] || raw.split('-')[0];
  const supported = SUPPORTED_LANGUAGES.some((language) => language.code === direct);

  return supported ? direct : 'en';
}

export function detectBrowserLanguage() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const language of languages) {
    const normalized = normalizeLanguageCode(language);
    if (normalized !== 'auto' && SUPPORTED_LANGUAGES.some((item) => item.code === normalized)) {
      return normalized;
    }
  }

  return 'en';
}

export function hasManualLanguageOverride() {
  return localStorage.getItem(LANGUAGE_OVERRIDE_STORAGE_KEY) === 'true';
}

export function getSelectedLanguageCode() {
  const saved = localStorage.getItem(SELECTED_LANGUAGE_STORAGE_KEY);

  if (saved && saved !== 'auto') {
    return normalizeLanguageCode(saved);
  }

  const detected = detectBrowserLanguage();
  localStorage.setItem(SELECTED_LANGUAGE_STORAGE_KEY, detected);
  return detected;
}

export function setSelectedLanguageCode(code, manual = true) {
  const normalized = normalizeLanguageCode(code);
  const nextCode = normalized === 'auto' ? detectBrowserLanguage() : normalized;

  localStorage.setItem(SELECTED_LANGUAGE_STORAGE_KEY, nextCode);
  localStorage.setItem(LANGUAGE_OVERRIDE_STORAGE_KEY, manual && normalized !== 'auto' ? 'true' : 'false');
  window.dispatchEvent(new CustomEvent('language-change', { detail: nextCode }));

  return nextCode;
}

export function getMainLanguageForCountry(countryCode) {
  return countryLanguageMap[String(countryCode || '').toUpperCase()] || 'en';
}

export function syncLanguageForCountryIfAllowed(countryCode) {
  if (hasManualLanguageOverride()) return getSelectedLanguageCode();

  const nextCode = getMainLanguageForCountry(countryCode);
  localStorage.setItem(SELECTED_LANGUAGE_STORAGE_KEY, nextCode);
  localStorage.setItem(LANGUAGE_OVERRIDE_STORAGE_KEY, 'false');
  window.dispatchEvent(new CustomEvent('language-change', { detail: nextCode }));

  return nextCode;
}

export function applyDocumentLanguage(languageCode) {
  const language = getLanguageByCode(languageCode);
  document.documentElement.lang = language.code;
  document.documentElement.dir = language.dir;
}