import { useEffect, useState } from 'react';
import { getLanguageByCode, getSelectedLanguageCode, setSelectedLanguageCode } from '../lib/languageContext';

export default function useSelectedLanguage() {
  const [languageCode, setLanguageCode] = useState(getSelectedLanguageCode());

  useEffect(() => {
    const syncLanguage = () => setLanguageCode(getSelectedLanguageCode());

    window.addEventListener('storage', syncLanguage);
    window.addEventListener('language-change', syncLanguage);

    return () => {
      window.removeEventListener('storage', syncLanguage);
      window.removeEventListener('language-change', syncLanguage);
    };
  }, []);

  return {
    language: getLanguageByCode(languageCode),
    languageCode,
    setLanguageCode: setSelectedLanguageCode,
  };
}