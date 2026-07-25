import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  alt?: boolean;
  children: ReactNode;
}

export function Section({ id, kicker, title, alt = false, children }: SectionProps) {
  return (
    <section className={`section${alt ? ' section--alt' : ''}`} id={id}>
      <div className="shell">
        <header className="section__head" data-reveal>
          <span className="section__kicker">{kicker}</span>
          <h2 className="section__title">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
