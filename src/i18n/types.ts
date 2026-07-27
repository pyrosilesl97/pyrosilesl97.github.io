export const LANGUAGES = ['en', 'es', 'de', 'ja', 'zh'] as const;
export type LanguageCode = (typeof LANGUAGES)[number];

export const LANGUAGE_META: Record<
  LanguageCode,
  { label: string; short: string; locale: string; flag: string }
> = {
  en: { label: 'English', short: 'EN', locale: 'en-US', flag: '🇬🇧' },
  es: { label: 'Español', short: 'ES', locale: 'es-MX', flag: '🇲🇽' },
  de: { label: 'Deutsch', short: 'DE', locale: 'de-DE', flag: '🇩🇪' },
  ja: { label: '日本語', short: 'JA', locale: 'ja-JP', flag: '🇯🇵' },
  zh: { label: '中文', short: 'ZH', locale: 'zh-CN', flag: '🇨🇳' },
};

export interface SkillGroup {
  icon: string;
  title: string;
  items: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Translation {
  meta: { title: string; description: string };
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    research: string;
    contact: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    changeLanguage: string;
    toggleTheme: string;
    backToTop: string;
    externalLink: string;
  };
  hero: {
    greeting: string;
    role: string;
    tagline: string;
    location: string;
    ctaPrimary: string;
    ctaSecondary: string;
    updated: string;
  };
  about: { title: string; kicker: string; body: string; stats: Stat[] };
  skills: { title: string; kicker: string; groups: SkillGroup[] };
  experience: {
    title: string;
    kicker: string;
    present: string;
    /** e.g. "3 yrs 4 mos" → built from these two words */
    yearsShort: string;
    monthsShort: string;
    roles: Record<string, { role: string; bullets: string[] }>;
  };
  projects: {
    title: string;
    kicker: string;
    descriptions: Record<string, string>;
  };
  publications: { title: string; kicker: string; viewDoi: string };
  education: {
    title: string;
    degrees: Record<string, { degree: string; note?: string }>;
  };
  languages: {
    title: string;
    names: Record<string, string>;
    levels: Record<string, string>;
  };
  highlights: { title: string; kicker: string; showMore: string; showLess: string; items: string[] };
  contact: {
    title: string;
    kicker: string;
    body: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    turnstileError: string;
    configError: string;
  };
  footer: { rights: string };
}
