import { COMPANY, SECTORS, SERVICES, sectorPath, servicePath } from "../data/site";
import { GitHub, LogoMark, Mail, MapPin, Phone } from "./Icons";
import "./Footer.css";

const CORPORATE_LINKS = [
  { label: "Hakkımızda", href: "/#about" },
  { label: "Danışmanlık Talebi", href: "/#consultation" },
  { label: "Doküman Mağazası", href: "/#store" },
  { label: "Eğitim ve Tatbikat", href: "/#training" },
  { label: "İletişim", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand-col">
          <a href="/" className="footer__brand" aria-label={`${COMPANY.fullName} ana sayfa`}>
            <LogoMark size={40} className="footer__logo" />
            <span className="footer__brand-text">
              <span className="footer__brand-name">Çiçek Mühendislik</span>
              <span className="footer__brand-sub">Eğitim ve Danışmanlık</span>
            </span>
          </a>
          <p className="footer__tagline">
            Türkiye'de bütün sektörlere yönelik iş sağlığı ve güvenliği danışmanlığı, eğitim,
            tatbikat, denetim ve işyeri sağlık hizmetleri.
          </p>
          <a
            href={COMPANY.githubUrl}
            className="footer__github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHub size={20} />
            <span>GitHub</span>
          </a>
        </div>

        <nav className="footer__col" aria-label="Kurumsal">
          <h4 className="footer__col-title">Kurumsal</h4>
          <ul className="footer__links">
            {CORPORATE_LINKS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="footer__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Hizmetler">
          <h4 className="footer__col-title">Hizmetler</h4>
          <ul className="footer__links">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a href={servicePath(s.slug)} className="footer__link">
                  {s.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Sektörler">
          <h4 className="footer__col-title">Sektörler</h4>
          <ul className="footer__links">
            {SECTORS.map((s) => (
              <li key={s.id}>
                <a href={sectorPath(s.slug)} className="footer__link">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h4 className="footer__col-title">İletişim</h4>
          <ul className="footer__links">
            <li className="footer__contact">
              <Mail size={16} />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li className="footer__contact">
              <Phone size={16} />
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
            </li>
            <li className="footer__contact">
              <MapPin size={16} />
              <span>{COMPANY.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>
            &copy; {year} {COMPANY.fullName}. Tüm hakları saklıdır.
          </span>
          <span className="footer__legal">İSG Platformu</span>
        </div>
      </div>
    </footer>
  );
}
