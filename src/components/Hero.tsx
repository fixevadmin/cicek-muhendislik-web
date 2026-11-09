import { COMPANY } from "../data/site";
import { ArrowRight, Check } from "./Icons";
import "./Hero.css";

const HIGHLIGHTS = [
  "Mevzuata uygun dokümanlar",
  "Uygulamalı rehberler",
  "Profesyonel danışmanlık",
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
            İş güvenliğinde <span className="hero__title-accent">bilgi, uygulama ve çözüm.</span>
          </h1>
          <p className="hero__desc">
            İSG profesyonelleri ve işletmeler için teknik dokümanlar, uygulamalı rehberler ve
            profesyonel danışmanlık. {COMPANY.fullName} güvencesiyle.
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
            <a href="#store" className="btn btn--primary btn--lg">
              Dokümanları Keşfet
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn--secondary btn--lg">
              Danışmanlık Hizmetleri
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden>
          <div className="hero__card hero__card--main">
            <div className="hero__card-head">
              <span className="hero__card-label">İSG Dokümanı</span>
              <span className="hero__card-pages">48 sayfa</span>
            </div>
            <div className="hero__card-title">Genel Risk Değerlendirme Rehberi</div>
            <div className="hero__card-meta">
              <span className="hero__card-tag">Risk Analizleri</span>
              <span className="hero__card-format">PDF + Düzenlenebilir</span>
            </div>
            <div className="hero__card-bars">
              <div className="hero__card-bar" style={{ width: "82%" }} />
              <div className="hero__card-bar" style={{ width: "64%" }} />
              <div className="hero__card-bar" style={{ width: "90%" }} />
            </div>
          </div>

          <div className="hero__card hero__card--float">
            <div className="hero__card-stat">5</div>
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
