import { useLanguage } from '../hooks/useLanguage';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__brand">
          <img src="logo_pablo_sin_fondo.png" alt="" />
          <div className="footer__meta">
            <div>
              © {new Date().getFullYear()} Pablo Yamild Rosiles Loeza. {t.footer.rights}
            </div>
            <div>{t.footer.builtWith}</div>
          </div>
        </div>

        <SocialLinks className="footer__socials" />
      </div>
    </footer>
  );
}
