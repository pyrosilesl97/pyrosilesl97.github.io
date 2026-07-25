import { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowUpIcon } from './Icons';

export function BackToTop() {
  const { t } = useLanguage();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Hide again near the very bottom so the button never covers the footer links.
    const onScroll = () => {
      const fromBottom =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      setShown(window.scrollY > window.innerHeight && fromBottom > 140);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${shown ? ' is-shown' : ''}`}
      aria-label={t.a11y.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUpIcon />
    </button>
  );
}
