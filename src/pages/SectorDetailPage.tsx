import { ArrowRight, Check } from "../components/Icons";
import { SECTORS, sectorPath } from "../data/site";
import type { Sector, SectorDetail } from "../types";
import "./DetailPage.css";

type Props = { sector: Sector; detail: SectorDetail };

export default function SectorDetailPage({ sector, detail }: Props) {
  const related = SECTORS.filter((s) => s.id !== sector.id).slice(0, 3);

  return (
    <>
      <section className="detail-hero">
        <div className="container">
          <nav className="detail-hero__crumbs" aria-label="Konum">
            <a href="/">Ana Sayfa</a>
            <span aria-hidden>/</span>
            <a href="/#sectors">Sektörler</a>
            <span aria-hidden>/</span>
            <span aria-current="page">{sector.name}</span>
          </nav>
          <h1 className="detail-hero__title">{sector.name} için İSG Çözümleri</h1>
          <p className="detail-hero__lead">{detail.intro}</p>
          <div className="detail-hero__actions">
            <a href="/#contact" className="btn btn--primary btn--lg">
              Danışmanlık Talebi Oluştur
              <ArrowRight size={18} />
            </a>
            <a href="/#contact" className="btn btn--secondary btn--lg detail-hero__btn-alt">
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>

      <section className="section detail-body">
        <div className="container detail-body__grid">
          <article className="detail-panel detail-panel--wide">
            <h2 className="detail-panel__title">Sektöre Özgü Temel Riskler</h2>
            <ul className="detail-panel__list">
              {detail.risks.map((risk) => (
                <li key={risk}>
                  <Check size={16} className="detail-panel__check" />
                  {risk}
                </li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <h2 className="detail-panel__title">İSG Danışmanlığı</h2>
            <p className="detail-panel__text">{detail.consulting}</p>
          </article>

          <article className="detail-panel">
            <h2 className="detail-panel__title">Risk Değerlendirmesi ve Saha Denetimleri</h2>
            <p className="detail-panel__text">{detail.inspection}</p>
          </article>

          <article className="detail-panel">
            <h2 className="detail-panel__title">Eğitim ve Tatbikat İhtiyaçları</h2>
            <p className="detail-panel__text">{detail.training}</p>
          </article>

          <article className="detail-panel">
            <h2 className="detail-panel__title">Teknik Kontrol ve Dokümantasyon</h2>
            <p className="detail-panel__text">{detail.documentation}</p>
          </article>
        </div>

        <div className="container">
          <p className="detail-body__note">
            Sektöre özgü kapsam, uygulanacak yöntem ve gerekli yetki koşulları işletmenizin
            ihtiyacına göre teklif aşamasında netleştirilir.
          </p>
        </div>
      </section>

      <section className="section detail-cta">
        <div className="container detail-cta__inner">
          <h2 className="detail-cta__title">{sector.name} için görüşelim</h2>
          <p className="detail-cta__text">
            İşletmenizin riskleri ve mevcut İSG düzeni birlikte değerlendirilerek size uygun
            çalışma planı belirlenir.
          </p>
          <a href="/#contact" className="btn btn--primary btn--lg">
            Danışmanlık Talebi Oluştur
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="section detail-related">
        <div className="container">
          <h2 className="detail-related__title">Diğer sektörler</h2>
          <ul className="detail-related__list">
            {related.map((s) => (
              <li key={s.id}>
                <a href={sectorPath(s.slug)} className="detail-related__link">
                  {s.name}
                  <ArrowRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
