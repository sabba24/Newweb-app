export const SELECTED_LANGUAGE_STORAGE_KEY = 'selected_language_code';

export const SUPPORTED_LANGUAGES = [
  { code: 'auto', name: 'Auto Detect', label: 'Auto' },
  { code: 'en', name: 'English', label: 'English' },
  { code: 'es', name: 'Spanish', label: 'Español' },
  { code: 'fr', name: 'French', label: 'Français' },
  { code: 'pt', name: 'Portuguese', label: 'Português' },
  { code: 'nl', name: 'Dutch', label: 'Nederlands' },
  { code: 'de', name: 'German', label: 'Deutsch' },
  { code: 'ar', name: 'Arabic', label: 'العربية' },
  { code: 'hi', name: 'Hindi', label: 'हिन्दी' },
  { code: 'zh', name: 'Chinese', label: '中文' },
  { code: 'ja', name: 'Japanese', label: '日本語' },
  { code: 'ko', name: 'Korean', label: '한국어' },
];

export function getLanguageByCode(code) {
  return SUPPORTED_LANGUAGES.find((language) => language.code === code) || SUPPORTED_LANGUAGES[0];
}

export function getSelectedLanguageCode() {
  return localStorage.getItem(SELECTED_LANGUAGE_STORAGE_KEY) || 'auto';
}

export function setSelectedLanguageCode(code) {
  const nextCode = getLanguageByCode(code).code;
  localStorage.setItem(SELECTED_LANGUAGE_STORAGE_KEY, nextCode);
  window.dispatchEvent(new CustomEvent('language-change', { detail: nextCode }));
  return nextCode;
}