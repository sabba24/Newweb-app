import { useEffect, useState } from 'react';
import { getCountryByCode, getSelectedCountryCode, setSelectedCountryCode } from '../lib/countryContext';

export default function useSelectedCountry() {
  const [countryCode, setCountryCode] = useState(getSelectedCountryCode());

  useEffect(() => {
    const syncCountry = () => setCountryCode(getSelectedCountryCode());

    window.addEventListener('storage', syncCountry);
    window.addEventListener('country-change', syncCountry);

    return () => {
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