import { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

export const SECTION_IDS = [
  'about',
  'skills',
  'experience',
  'projects',
  'research',
  'contact',
] as const;

export function Header() {
  const { t } = useLanguage();
  const { theme, toggle } = useTheme();
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection([...SECTION_IDS]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keep the page from scrolling behind the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const labels: Record<(typeof SECTION_IDS)[number], string> = {
    about: t.nav.about,
    skills: t.nav.skills,
    experience: t.nav.experience,
    projects: t.nav.projects,
    research: t.nav.research,
    contact: t.nav.contact,
  };

  return (
    <header className={`header${stuck ? ' is-stuck' : ''}`}>
      <div className="header__inner">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="brand__text">
            <span className="brand__name">Pablo Rosiles</span>
            <span className="brand__role">Bioinformatics · Full-Stack · AI</span>
          </span>
        </a>

        <nav className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="Main">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              className={`nav__link${active === id ? ' is-active' : ''}`}
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {labels[id]}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <LanguageSwitcher />

          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={t.a11y.toggleTheme}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
