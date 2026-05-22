import { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { applyDocumentLanguage, getSelectedLanguageCode } from '../lib/languageContext';
import { translateText } from '../lib/i18n/translations';

export const I18nContext = createContext({
  languageCode: 'en',
  t: (key) => key,
});

const ignoredTags = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT', 'OPTION', 'SVG']);

function shouldSkipTextNode(node) {
  const parent = node.parentElement;
  if (!parent) return true;
  if (ignoredTags.has(parent.tagName)) return true;
  if (parent.closest('[data-no-translate="true"]')) return true;
  return !node.nodeValue || !node.nodeValue.trim();
}

export default function I18nProvider({ children }) {
  const [languageCode, setLanguageCode] = useState(getSelectedLanguageCode());
  const originalsRef = useRef(new WeakMap());
  const translatingRef = useRef(false);

  useEffect(() => {
    const syncLanguage = () => setLanguageCode(getSelectedLanguageCode());

    window.addEventListener('storage', syncLanguage);
    window.addEventListener('language-change', syncLanguage);

    return () => {
      window.removeEventListener('storage', syncLanguage);
      window.removeEventListener('language-change', syncLanguage);
    };
  }, []);

  useEffect(() => {
    applyDocumentLanguage(languageCode);
  }, [languageCode]);

  useEffect(() => {
    const translateNode = (node) => {
      if (shouldSkipTextNode(node)) return;

      if (!originalsRef.current.has(node)) {
        originalsRef.current.set(node, node.nodeValue);
      }

      const original = originalsRef.current.get(node);
      const translated = translateText(original, languageCode);

      if (node.nodeValue !== translated) {
        translatingRef.current = true;
        node.nodeValue = translated;
        translatingRef.current = false;
      }
    };

    const translateTree = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();

      while (node) {
        translateNode(node);
        node = walker.nextNode();
      }
    };

    window.requestAnimationFrame(translateTree);

    const observer = new MutationObserver((mutations) => {
      if (translatingRef.current) return;

      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            translateNode(node);
          }

          if (node.nodeType === Node.ELEMENT_NODE) {
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
            let child = walker.nextNode();

            while (child) {
              translateNode(child);
              child = walker.nextNode();
            }
          }
        });

        if (mutation.type === 'characterData') {
          const node = mutation.target;

          if (!translatingRef.current && !shouldSkipTextNode(node)) {
            originalsRef.current.set(node, node.nodeValue);
            translateNode(node);
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [languageCode]);

  const value = useMemo(
    () => ({
      languageCode,
      t: (key) => translateText(key, languageCode),
    }),
    [languageCode]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}