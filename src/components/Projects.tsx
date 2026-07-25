import { PROJECTS } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowUpRightIcon } from './Icons';
import { Section } from './Section';

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects" kicker={t.projects.kicker} title={t.projects.title} alt>
      <div className="grid grid--3">
        {PROJECTS.map((project, index) => (
          <a
            className="card project"
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} — ${t.a11y.externalLink}`}
            data-reveal
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <div className="project__top">
              <span className="project__logo">
                <img src={project.logo} alt={`${project.name} logo`} loading="lazy" />
              </span>
              <h3 className="project__name">{project.name}</h3>
              <ArrowUpRightIcon className="project__arrow" />
            </div>

            <p className="project__desc">{t.projects.descriptions[project.id]}</p>

            <ul className="project__stack">
              {project.stack.map((tech) => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </Section>
  );
}
