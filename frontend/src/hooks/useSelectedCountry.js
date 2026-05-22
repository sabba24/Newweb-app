import { useEffect, useState } from 'react';
import { getCountryByCode, getSelectedCountryCode, initializeSelectedCountry, setSelectedCountryCode } from '../lib/countryContext';

export default function useSelectedCountry() {
  const [countryCode, setCountryCodeState] = useState(getSelectedCountryCode());

  useEffect(() => {
    let mounted = true;

    initializeSelectedCountry().then((detectedCode) => {
      if (mounted) setCountryCodeState(detectedCode);
    });

    const syncCountry = () => setCountryCodeState(getSelectedCountryCode());

    window.addEventListener('storage', syncCountry);
    window.addEventListener('country-change', syncCountry);

    return () => {
      mounted = false;
      window.removeEventListener('storage', syncCountry);
      window.removeEventListener('country-change', syncCountry);
    };
  }, []);

  const country = getCountryByCode(countryCode);

  return {
    country,
    countryCode,
    setCountryCode: setSelectedCountryCode,
  };
}