const localeCountryFallbacks = {
  ar: 'AE',
  de: 'DE',
  en: 'JM',
  es: 'PA',
  fr: 'FR',
  hi: 'IN',
  ja: 'JP',
  ko: 'KR',
  nl: 'NL',
  pt: 'BR',
  zh: 'CN',
};

export function detectCountryFromBrowserLocale(supportedCodes = []) {
  const supported = new Set(supportedCodes);
  const locales = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const locale of locales) {
    const region = String(locale || '').split('-')[1]?.toUpperCase();

    if (region && supported.has(region)) {
      return region;
    }
  }

  for (const locale of locales) {
    const language = String(locale || '').split('-')[0]?.toLowerCase();
    const fallbackCountry = localeCountryFallbacks[language];

    if (fallbackCountry && supported.has(fallbackCountry)) {
      return fallbackCountry;
    }
  }

  return null;
}

export async function detectCountryFromIpPlaceholder() {
  return null;
}

export async function detectInitialCountry(supportedCodes = []) {
  const browserCountry = detectCountryFromBrowserLocale(supportedCodes);

  if (browserCountry) {
    return browserCountry;
  }

  const ipCountry = await detectCountryFromIpPlaceholder();

  if (ipCountry && supportedCodes.includes(ipCountry)) {
    return ipCountry;
  }

  return 'JM';
}