import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ChevronDownIcon, StarIcon } from './Icons';
import { Section } from './Section';

const PREVIEW_COUNT = 8;

export function Highlights() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const items = expanded ? t.highlights.items : t.highlights.items.slice(0, PREVIEW_COUNT);

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
