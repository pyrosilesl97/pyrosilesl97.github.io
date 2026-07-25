import { useLanguage } from '../hooks/useLanguage';
import { Section } from './Section';

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" kicker={t.skills.kicker} title={t.skills.title} alt>
      <div className="grid grid--3">
        {t.skills.groups.map((group, index) => (
          <article
            className="card"
            key={group.title}
            data-reveal
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <span className="skill__icon" aria-hidden>
              {group.icon}
            </span>
            <h3 className="skill__title">{group.title}</h3>
            <ul className="skill__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
