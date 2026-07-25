import { TECH_MARQUEE } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowUpRightIcon, ClockIcon, MailIcon, PinIcon } from './Icons';
import { SocialLinks } from './SocialLinks';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="hero__aurora" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="hero__grid" aria-hidden />

      <div className="shell hero__inner">
        <div data-reveal>
          <p className="hero__greeting">{t.hero.greeting}</p>
          <h1 className="hero__name">Pablo Yamild Rosiles Loeza</h1>
          <p className="hero__role">{t.hero.role}</p>
          <p className="hero__tagline">{t.hero.tagline}</p>

          <div className="hero__meta">
            <span>
              <PinIcon />
              {t.hero.location}
            </span>
            <span>
              <ClockIcon />
              {t.hero.updated}
            </span>
          </div>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              <MailIcon size={18} />
              {t.hero.ctaPrimary}
            </a>
            <a className="btn btn--ghost" href="#projects">
              {t.hero.ctaSecondary}
              <ArrowUpRightIcon size={17} />
            </a>
          </div>

          <SocialLinks />
        </div>

        <div className="hero__portrait" data-reveal>
          <img
            src="logo_pablo_sin_fondo.png"
            alt="Pablo Yamild Rosiles Loeza"
            width={320}
            height={320}
          />
        </div>
      </div>

      <div className="shell">
        <div className="marquee">
          <ul className="marquee__track">
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, index) => (
              <li className="chip" key={`${tech}-${index}`} aria-hidden={index >= TECH_MARQUEE.length}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
