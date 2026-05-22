import { useEffect, useState } from 'react';
import { getLanguageByCode, getSelectedLanguageCode, setSelectedLanguageCode } from '../lib/languageContext';

export default function useSelectedLanguage() {
  const [languageCode, setLanguageCodeState] = useState(getSelectedLanguageCode());

  useEffect(() => {
    const syncLanguage = () => setLanguageCodeState(getSelectedLanguageCode());

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