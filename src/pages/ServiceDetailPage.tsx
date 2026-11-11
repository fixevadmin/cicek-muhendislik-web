import { ArrowRight, Check } from "../components/Icons";
import { SERVICES, servicePath } from "../data/site";
import type { Service } from "../types";
import "./ServiceDetailPage.css";

type Props = { service: Service };

export default function ServiceDetailPage({ service }: Props) {
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <section className="service-hero">
        <div className="container">
          <nav className="service-hero__crumbs" aria-label="Konum">
            <a href="/">Ana Sayfa</a>
            <span aria-hidden>/</span>
            <a href="/#services">Hizmetler</a>
            <span aria-hidden>/</span>
            <span aria-current="page">{service.shortTitle}</span>
          </nav>
          <h1 className="service-hero__title">{service.title}</h1>
          <p className="service-hero__lead">{service.longDescription}</p>
          <div className="service-hero__actions">
            <a href="/#contact" className="btn btn--primary btn--lg">
              Danışmanlık Talebi Oluştur
              <ArrowRight size={18} />
            </a>
            <a href="/#contact" className="btn btn--secondary btn--lg service-hero__btn-alt">
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>

      <section className="section service-body">
        <div className="container service-body__grid">
          <article className="service-panel">
            <h2 className="service-panel__title">Hizmetin Kapsamı</h2>
            <ul className="service-panel__list">
              {service.features.map((f) => (
                <li key={f}>
                  <Check size={16} className="service-panel__check" />
                  {f}
                </li>
              ))}
            </ul>
          </article>

          <article className="service-panel">
            <h2 className="service-panel__title">Kimlere Yönelik</h2>
            <p className="service-panel__text">{service.audience}</p>
          </article>

          <article className="service-panel">
            <h2 className="service-panel__title">Sağlanan Çalışmalar ve Çıktılar</h2>
            <ul className="service-panel__list">
              {service.outputs.map((o) => (
                <li key={o}>
                  <Check size={16} className="service-panel__check" />
                  {o}
                </li>
              ))}
            </ul>
          </article>

          <article className="service-panel">
            <h2 className="service-panel__title">İşletmenize Faydaları</h2>
            <ul className="service-panel__list">
              {service.benefits.map((b) => (
                <li key={b}>
                  <Check size={16} className="service-panel__check" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="container">
          <p className="service-body__note">
            Hizmetin kapsamı, uygulanacak yöntem ve gerekli yetki koşulları işletmenizin
            ihtiyacına göre teklif aşamasında netleştirilir.
          </p>
        </div>
      </section>

      <section className="section service-cta">
        <div className="container service-cta__inner">
          <h2 className="service-cta__title">{service.shortTitle} için görüşelim</h2>
          <p className="service-cta__text">
            İşletmenizin mevcut durumunu birlikte değerlendirelim ve size uygun çalışma planını
            belirleyelim.
          </p>
          <a href="/#contact" className="btn btn--primary btn--lg">
            Danışmanlık Talebi Oluştur
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="section service-related">
        <div className="container">
          <h2 className="service-related__title">Diğer hizmetlerimiz</h2>
          <ul className="service-related__list">
            {related.map((s) => (
              <li key={s.id}>
                <a href={servicePath(s.slug)} className="service-related__link">
                  {s.shortTitle}
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
