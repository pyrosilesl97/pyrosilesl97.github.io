import { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ChevronDownIcon, StarIcon } from './Icons';
import { Section } from './Section';

const PREVIEW_COUNT = 8;

export function Highlights() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const items = expanded ? t.highlights.items : t.highlights.items.slice(0, PREVIEW_COUNT);

  // Newly mounted cards start at opacity:0 via [data-reveal]. The global
  // IntersectionObserver only re-binds on language change, so without this
  // the extra items stay invisible until something else re-triggers reveal.
  useEffect(() => {
    if (!expanded) return;
    document
      .querySelectorAll<HTMLElement>('#highlights [data-reveal]:not(.is-visible)')
      .forEach((node) => node.classList.add('is-visible'));
  }, [expanded, items]);

  return (
    <Section id="highlights" kicker={t.highlights.kicker} title={t.highlights.title} alt>
      <ul className="highlights">
        {items.map((item) => (
          <li className="highlight" key={item} data-reveal>
            <StarIcon className="highlight__icon" />
            <span className="highlight__text">{item}</span>
          </li>
        ))}
      </ul>

      {t.highlights.items.length > PREVIEW_COUNT && (
        <button
          type="button"
          className="more-btn"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? t.highlights.showLess : t.highlights.showMore}
          <ChevronDownIcon />
        </button>
      )}
    </Section>
  );
}
