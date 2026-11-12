import { SECTORS, sectorPath } from "../data/site";
import { ArrowRight, SECTOR_ICONS } from "./Icons";
import "./Sectors.css";

export default function Sectors() {
  return (
    <section id="sectors" className="section sectors">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Sektörel Çözümler</span>
          <h2>Bütün sektörlere yönelik İSG çözümleri</h2>
          <p>
            Her iş kolunun kendine özgü risk yapısı ve mevzuat gereksinimleri vardır. Sektörünüze
            özel İSG yaklaşımı ile güvenli çalışma ortamını sürdürülebilir kılın.
          </p>
        </div>

        <div className="sectors__grid">
          {SECTORS.map((sector, i) => {
            const Icon = SECTOR_ICONS[sector.iconName];
            return (
              <div
                key={sector.id}
                className="sector-card"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="sector-card__icon">
                  <Icon size={26} />
                </span>
                <h3 className="sector-card__name">{sector.name}</h3>
                <p className="sector-card__desc">{sector.description}</p>
                <a href={sectorPath(sector.slug)} className="sector-card__link">
                  Detayları İncele
                  <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
