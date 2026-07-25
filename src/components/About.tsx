import { useLanguage } from '../hooks/useLanguage';
import { Section } from './Section';

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" kicker={t.about.kicker} title={t.about.title}>
      <div className="about">
        <p className="about__body" data-reveal>
          {t.about.body}
        </p>

        <div className="stats" data-reveal>
          {t.about.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
