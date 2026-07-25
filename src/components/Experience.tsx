import { EXPERIENCE, EXPERIENCE_STACK } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';
import { formatDuration, formatPeriod } from '../utils/format';
import { ArrowUpRightIcon } from './Icons';
import { Section } from './Section';

export function Experience() {
  const { t, locale } = useLanguage();

  return (
    <Section id="experience" kicker={t.experience.kicker} title={t.experience.title}>
      <div className="timeline">
        {EXPERIENCE.map((job) => {
          const copy = t.experience.roles[job.id];
          if (!copy) return null;

          const stack = EXPERIENCE_STACK[job.id] ?? [];
          const isCurrent = job.to === null;

          return (
            <article
              className={`job${isCurrent ? ' job--current' : ''}`}
              key={job.id}
              data-reveal
            >
              <div className="job__period">
                <span>
                  {formatPeriod(job.from, job.to, locale, t.experience.present)}
                </span>
                <span className="job__duration">
                  {formatDuration(
                    job.from,
                    job.to,
                    t.experience.yearsShort,
                    t.experience.monthsShort,
                    locale,
                  )}
                </span>
              </div>

              <h3 className="job__role">{copy.role}</h3>

              <p className="job__company">
                {job.companyUrl ? (
                  <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                    {job.company}
                    <ArrowUpRightIcon size={14} />
                  </a>
                ) : (
                  job.company
                )}
              </p>

              {copy.bullets.length > 0 && (
                <ul className="job__bullets">
                  {copy.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {stack.length > 0 && (
                <ul className="job__stack">
                  {stack.map((tech) => (
                    <li className="chip" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
