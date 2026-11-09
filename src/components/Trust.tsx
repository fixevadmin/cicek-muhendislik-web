import { COMPANY, TRUST_PILLARS } from "../data/site";
import { Check, TRUST_ICONS } from "./Icons";
import "./Trust.css";

const PRINCIPLES = [
  "Mevzuata uygun, uygulanabilir çözümler",
  "Saha tecrübesine dayalı yaklaşım",
  "Sürdürülebilir İSG yönetim kültürü",
  "Gizlilik ve profesyonel iş ahlakı",
];

export default function Trust() {
  return (
    <section id="about" className="section trust">
      <div className="container trust__inner">
        <div className="trust__intro">
          <span className="eyebrow">Neden Çiçek Mühendislik?</span>
          <h2>Mühendislik altyapısı ve saha tecrübesi</h2>
          <p className="trust__lead">
            {COMPANY.fullName} olarak iş sağlığı ve güvenliği alanında bilgi paylaşımı, teknik
            doküman sunumu ve danışmanlık hizmetlerini tek bir platformda sunuyoruz.
          </p>
          <p className="trust__text">
            İSG profesyonelleri ve işletmeler için mevzuata uygun, pratik ve uygulanabilir çözümler
            üretiyoruz. Mühendislik altyapımız ve saha tecrübemizle teorik bilgiyi sahada çalışan
            metodolojilere dönüştürüyoruz.
          </p>

          <ul className="trust__principles">
            {PRINCIPLES.map((p) => (
              <li key={p} className="trust__principle">
                <span className="trust__principle-icon">
                  <Check size={16} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="trust__pillars">
          {TRUST_PILLARS.map((pillar, i) => {
            const Icon = TRUST_ICONS[pillar.iconName];
            return (
              <div
                key={pillar.id}
                className="trust__pillar"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="trust__pillar-icon">
                  <Icon size={26} />
                </span>
                <div>
                  <h3 className="trust__pillar-title">{pillar.title}</h3>
                  <p className="trust__pillar-desc">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
