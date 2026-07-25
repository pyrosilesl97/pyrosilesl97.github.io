import { useEffect, useId, useRef, useState } from 'react';
import { LANGUAGES, LANGUAGE_META } from '../i18n';
import type { LanguageCode } from '../i18n';
import { useLanguage } from '../hooks/useLanguage';
import { CheckIcon, ChevronDownIcon, GlobeIcon } from './Icons';

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const choose = (code: LanguageCode) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className="langswitch" ref={rootRef}>
      <button
        type="button"
        className="langswitch__trigger"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={t.a11y.changeLanguage}
        onClick={() => setOpen((v) => !v)}
      >
        <GlobeIcon />
        {LANGUAGE_META[lang].short}
        <ChevronDownIcon size={14} className="langswitch__chevron" />
      </button>

      {open && (
        <div className="langswitch__menu" id={menuId} role="listbox">
          {LANGUAGES.map((code) => (
            <button
              key={code}
              type="button"
              role="option"
              className="langswitch__option"
              aria-current={code === lang}
              aria-selected={code === lang}
              lang={code}
              onClick={() => choose(code)}
            >
              <span aria-hidden>{LANGUAGE_META[code].flag}</span>
              {LANGUAGE_META[code].label}
              {code === lang && <CheckIcon size={15} className="langswitch__check" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
