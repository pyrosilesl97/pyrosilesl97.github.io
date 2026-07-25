import type { CSSProperties } from 'react';
import { EDUCATION, LANGUAGE_SKILLS, ORCID_ID, PUBLICATIONS, SOCIAL } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowUpRightIcon } from './Icons';
import { Section } from './Section';

export function Research() {
  const { t } = useLanguage();

  return (
    <Section id="research" kicker={t.publications.kicker} title={t.publications.title}>
      <div className="research">
        <div className="panel" data-reveal>
          <h3 className="panel__title">
            {t.publications.title}
            <a
              className="panel__aside"
              href={SOCIAL.orcid}
              target="_blank"
              rel="noopener noreferrer"
            >
              ORCID {ORCID_ID}
            </a>
          </h3>

          <ul>
            {PUBLICATIONS.map((pub) => (
              <li className="pub" key={pub.doi}>
                <span className="pub__year">{pub.year}</span>
                <span>
                  <span className="pub__journal">{pub.journal}</span>
                  <a
                    className="pub__doi"
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.publications.viewDoi} ${pub.doi}`}
                  >
                    doi.org/{pub.doi}
                    <ArrowUpRightIcon size={12} />
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="panel" data-reveal>
            <h3 className="panel__title">{t.education.title}</h3>
            <ul>
              {EDUCATION.map((item) => {
                const copy = t.education.degrees[item.id];
                return (
                  <li className="edu" key={item.id}>
                    <div className="edu__degree">{copy.degree}</div>
                    <div className="edu__school">
                      {item.school}
                      {copy.note ? ` · ${copy.note}` : ''}
                    </div>
                    <div className="edu__period">
                      {item.from}–{item.to}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="panel" data-reveal>
            <h3 className="panel__title">{t.languages.title}</h3>
            {LANGUAGE_SKILLS.map((skill) => (
              <div className="lang-skill" key={skill.id}>
                <div className="lang-skill__head">
                  <strong>{t.languages.names[skill.id]}</strong>
                  <span className="lang-skill__level">
                    {t.languages.levels[skill.id]}
                    {skill.note ? ` · ${skill.note}` : ''}
                  </span>
                </div>
                <div
                  className="lang-skill__bar"
                  role="meter"
                  aria-valuenow={skill.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={t.languages.names[skill.id]}
                >
                  <div
                    className="lang-skill__fill"
                    style={{ '--value': `${skill.value}%` } as CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
