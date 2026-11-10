import { ArrowRight, Check } from "./Icons";
import "./Hero.css";

const HIGHLIGHTS = [
  "İSG danışmanlığı",
  "İşyeri sağlık hizmetleri",
  "Eğitim ve tatbikatlar",
  "Teknik denetim",
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            İş Sağlığı ve Güvenliği
          </span>
          <h1 className="hero__title">
            İş sağlığı ve güvenliğinde{" "}
            <span className="hero__title-accent">kapsamlı çözümler, güvenli çalışma kültürü.</span>
          </h1>
          <p className="hero__desc">
            İşletmenizin ihtiyaçlarına uygun İSG danışmanlığı, işyeri sağlık hizmetleri, eğitimler,
            tatbikatlar, denetimler ve teknik çözümler. Türkiye'de bütün sektörlere yönelik
            profesyonel mühendislik ve danışmanlık hizmetleri.
          </p>

          <ul className="hero__highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="hero__highlight">
                <span className="hero__highlight-icon">
                  <Check size={16} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <a href="#services" className="btn btn--primary btn--lg">
              Hizmetlerimizi Keşfedin
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn--secondary btn--lg">
              Danışmanlık Talebi Oluştur
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden>
          <div className="hero__card hero__card--main">
            <div className="hero__card-head">
              <span className="hero__card-label">İSG Hizmeti</span>
              <span className="hero__card-pages">Kapsamlı</span>
            </div>
            <div className="hero__card-title">İSG Danışmanlığı</div>
            <p className="hero__card-text">
              Risk değerlendirmesi, mevzuat uyumu, denetim ve eğitim süreçleri tek elden yönetilir.
            </p>
            <div className="hero__card-meta">
              <span className="hero__card-tag">Danışmanlık</span>
              <span className="hero__card-tag">Denetim</span>
              <span className="hero__card-tag">Eğitim</span>
            </div>
            <div className="hero__card-bars">
              <div className="hero__card-bar" style={{ width: "82%" }} />
              <div className="hero__card-bar" style={{ width: "64%" }} />
              <div className="hero__card-bar" style={{ width: "90%" }} />
            </div>
          </div>

          <div className="hero__card hero__card--float">
            <div className="hero__card-stat">6</div>
            <div className="hero__card-stat-label">Hizmet Alanı</div>
          </div>

          <div className="hero__card hero__card--float-2">
            <div className="hero__card-pulse" />
            <div>
              <div className="hero__card-float-title">Saha Denetimi</div>
              <div className="hero__card-float-sub">Aktif hizmet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
