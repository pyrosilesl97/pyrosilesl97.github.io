import { SOCIAL } from '../data/profile';
import { useLanguage } from '../hooks/useLanguage';
import { GitHubIcon, LinkIcon, LinkedInIcon, OrcidIcon } from './Icons';

const LINKS = [
  { key: 'linkedin', href: SOCIAL.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { key: 'github', href: SOCIAL.github, label: 'GitHub', Icon: GitHubIcon },
  { key: 'orcid', href: SOCIAL.orcid, label: 'ORCID', Icon: OrcidIcon },
  { key: 'linktree', href: SOCIAL.linktree, label: 'Linktree', Icon: LinkIcon },
] as const;

export function SocialLinks({ className = 'hero__socials' }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <div className={className}>
      {LINKS.map(({ key, href, label, Icon }) => (
        <a
          key={key}
          className="social"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} — ${t.a11y.externalLink}`}
          title={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
