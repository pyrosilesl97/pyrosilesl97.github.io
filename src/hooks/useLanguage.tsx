import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { LANGUAGES, LANGUAGE_META, translations } from '../i18n';
import type { LanguageCode, Translation } from '../i18n';

const STORAGE_KEY = 'pyr-lang';

function isLanguageCode(value: string | null): value is LanguageCode {
  return value !== null && (LANGUAGES as readonly string[]).includes(value);
}

/** URL (?lang=) wins over saved choice, which wins over the browser's own list. */
function detectLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'en';

  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (isLanguageCode(fromUrl)) return fromUrl;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLanguageCode(stored)) return stored;

  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split('-')[0];
    // The browser reports Japanese as "ja"; the old site used "jp".
    const normalised = base === 'jp' ? 'ja' : base;
    if (isLanguageCode(normalised)) return normalised;
  }

  return 'en';
}

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: Translation;
  locale: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>(() => detectLanguage());

  const setLang = useCallback((next: LanguageCode) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing can reject writes; the choice just won't persist.
    }
  }, []);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description);
  }, [lang, t]);

  const value = useMemo(
    () => ({ lang, setLang, t, locale: LANGUAGE_META[lang].locale }),
    [lang, setLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
