import { SECTORS } from "../data/site";
import { SECTOR_ICONS } from "./Icons";
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
                className="sector-chip"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="sector-chip__icon">
                  <Icon size={26} />
                </span>
                <span className="sector-chip__name">{sector.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
