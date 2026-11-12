import { ArrowRight, Check } from "../components/Icons";
import TrainingRequestForm from "../components/TrainingRequestForm";
import { SECTORS, sectorPath } from "../data/site";
import { TRAINING_SECTIONS, TRAINING_STEPS } from "../data/training";
import "./DetailPage.css";
import "./TrainingPage.css";

export default function TrainingPage() {
  return (
    <>
      <section className="detail-hero training-hero">
        <div className="container">
          <nav className="detail-hero__crumbs" aria-label="Konum">
            <a href="/">Ana Sayfa</a>
            <span aria-hidden>/</span>
            <span aria-current="page">Eğitim ve Tatbikat</span>
          </nav>
          <h1 className="detail-hero__title">Eğitim ve Tatbikat</h1>
          <p className="detail-hero__lead">
            İşletmelerde güvenli çalışma kültürünü geliştirmek için çalışanların bilgi ve becerisini
            artıran eğitimler ile gerçek koşullara yakın tatbikatları, işletmenize özel olarak
            planlıyoruz.
          </p>
          <div className="detail-hero__actions">
            <a href="#egitim-talebi" className="btn btn--primary btn--lg">
              Eğitim Talebi Oluştur
              <ArrowRight size={18} />
            </a>
            <a href="#surec" className="btn btn--secondary btn--lg detail-hero__btn-alt">
              Eğitim Sürecini İnceleyin
            </a>
          </div>
        </div>
      </section>

      {TRAINING_SECTIONS.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`section training-section ${index % 2 === 1 ? "training-section--alt" : ""}`}
        >
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">{`0${index + 1}`}</span>
              <h2>{section.title}</h2>
              <p>{section.intro}</p>
            </div>
            <ul className="training-section__grid">
              {section.items.map((item) => (
                <li key={item.title} className="training-card">
                  <span className="training-card__icon">
                    <Check size={18} />
                  </span>
                  <h3 className="training-card__title">{item.title}</h3>
                  <p className="training-card__desc">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="section training-sectors">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Sektörel Yaklaşım</span>
            <h2>Sektörünüze özel eğitim ihtiyaçları</h2>
            <p>
              Her sektörün tehlike yapısı farklıdır. Eğitim içeriklerini işinizin ve sahanızın
              risklerine göre hazırlıyoruz.
            </p>
          </div>
          <ul className="training-sectors__list">
            {SECTORS.map((sector) => (
              <li key={sector.id}>
                <a href={sectorPath(sector.slug)} className="training-sectors__link">
                  {sector.name}
                  <ArrowRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="surec" className="section training-process">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Eğitim Süreci</span>
            <h2>Dört adımda eğitim süreci</h2>
          </div>
          <ol className="training-process__steps">
            {TRAINING_STEPS.map((step, index) => (
              <li key={step.title} className="training-process__step">
                <span className="training-process__number">{index + 1}</span>
                <h3 className="training-process__title">{step.title}</h3>
                <p className="training-process__desc">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="training-process__note">
            Eğitimler mevzuatta öngörülen eğitmen ve yetki koşullarına uygun olarak planlanır. İlk
            yardım gibi yetki gerektiren eğitimler yetkili kuruluşlarla koordinasyon içinde
            yürütülür.
          </p>
        </div>
      </section>

      <section id="egitim-talebi" className="section training-request">
        <div className="container training-request__inner">
          <div className="training-request__intro">
            <span className="eyebrow">Eğitim Talep Formu</span>
            <h2>Eğitim talebinizi iletin</h2>
            <p>
              İşletmenizin ihtiyacını kısaca anlatın. Talebinizi değerlendirip size uygun eğitim
              planını önereceğiz.
            </p>
          </div>
          <div className="training-request__form">
            <TrainingRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
