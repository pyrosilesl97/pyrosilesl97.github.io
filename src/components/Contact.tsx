import { useEffect, useState, type FormEvent } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import type { Theme } from '../hooks/useTheme';
import { useTurnstile } from '../hooks/useTurnstile';
import { CheckIcon } from './Icons';

const SITE_KEY = import.meta.env.VITE_TT_SITEKEY as string | undefined;
const API_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined;

type Status = 'idle' | 'sending' | 'success' | 'error';

function useDocumentTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(() => {
    const current = document.documentElement.dataset.theme;
    return current === 'light' || current === 'dark' ? current : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => {
      const next = root.dataset.theme;
      if (next === 'light' || next === 'dark') setTheme(next);
    };
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return theme;
}

export function Contact() {
  const { t } = useLanguage();
  const theme = useDocumentTheme();
  const { containerRef, token, failed: turnstileFailed, reset } = useTurnstile(SITE_KEY, theme);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorKey, setErrorKey] = useState<'error' | 'turnstileError' | 'configError'>('error');

  const configured = Boolean(SITE_KEY && API_URL);
  const canSubmit = configured && status !== 'sending' && Boolean(token) && !turnstileFailed;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || !API_URL || !token) return;

    setStatus('sending');
    setErrorKey('error');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          company,
          turnstileToken: token,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        if (data?.error === 'turnstile_failed') setErrorKey('turnstileError');
        else setErrorKey('error');
        setStatus('error');
        reset();
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setCompany('');
      reset();
    } catch {
      setStatus('error');
      reset();
    }
  };

  const touch = () => {
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="contact" data-reveal>
          <span className="section__kicker">{t.contact.kicker}</span>
          <h2 className="contact__title">{t.contact.title}</h2>
          <p className="contact__body">{t.contact.body}</p>

          {!configured ? (
            <p className="contact__status contact__status--error" role="status">
              {t.contact.configError}
            </p>
          ) : (
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              {status === 'success' && (
                <div className="contact__status contact__status--success" role="status">
                  <CheckIcon />
                  {t.contact.success}
                </div>
              )}
              {/* Honeypot — leave empty */}
              <label className="contact-form__hp" aria-hidden="true">
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>

              <div className="contact-form__row">
                <label className="contact-form__field">
                  <span>{t.contact.nameLabel}</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={120}
                    value={name}
                    onChange={(e) => {
                      touch();
                      setName(e.target.value);
                    }}
                    placeholder={t.contact.namePlaceholder}
                  />
                </label>

                <label className="contact-form__field">
                  <span>{t.contact.emailLabel}</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    maxLength={200}
                    value={email}
                    onChange={(e) => {
                      touch();
                      setEmail(e.target.value);
                    }}
                    placeholder={t.contact.emailPlaceholder}
                  />
                </label>
              </div>

              <label className="contact-form__field">
                <span>{t.contact.messageLabel}</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={4000}
                  value={message}
                  onChange={(e) => {
                    touch();
                    setMessage(e.target.value);
                  }}
                  placeholder={t.contact.messagePlaceholder}
                />
              </label>

              <div className="contact-form__turnstile" ref={containerRef} />

              {(status === 'error' || turnstileFailed) && (
                <p className="contact__status contact__status--error" role="alert">
                  {turnstileFailed ? t.contact.turnstileError : t.contact[errorKey]}
                </p>
              )}

              <button type="submit" className="btn btn--primary" disabled={!canSubmit}>
                {status === 'sending' ? t.contact.sending : t.contact.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
