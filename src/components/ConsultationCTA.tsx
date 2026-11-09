import { ArrowRight, Check } from "./Icons";
import "./ConsultationCTA.css";

const STEPS = [
  { num: "01", title: "İhtiyacınızı Belirtin", desc: "İSG alanındaki ihtiyacınızı bizimle paylaşın." },
  { num: "02", title: "Çözüm Önerisi Alın", desc: "İşletmenize uygun yaklaşımı birlikte belirleyelim." },
  { num: "03", title: "Uygulamaya Başlayın", desc: "Doküman, eğitim veya danışmanlık desteği başlasın." },
];

export default function ConsultationCTA() {
  return (
    <section id="consultation" className="section consultation">
      <div className="container">
        <div className="consultation__panel">
          <div className="consultation__bg" aria-hidden />
          <div className="consultation__content">
            <span className="consultation__eyebrow">Danışmanlık Talebi</span>
            <h2 className="consultation__title">
              İSG sürecinizde profesyonel destek mi arıyorsunuz?
            </h2>
            <p className="consultation__desc">
              Risk analizinden saha denetimine, sistem kurulumundan eğitim materyallerine kadar
              ihtiyaçlarınıza yönelik çözüm önerisi alın. İletişime geçin, birlikte planlayalım.
            </p>

            <div className="consultation__actions">
              <a href="#contact" className="btn btn--primary btn--lg consultation__btn">
                Danışmanlık Talep Et
                <ArrowRight size={18} />
              </a>
              <a href="#store" className="btn consultation__btn-alt">
                Dokümanları İncele
              </a>
            </div>

            <ul className="consultation__checklist">
              {["Ücretsiz ihtiyaç değerlendirmesi", "İşletmenize özel çözüm"].map((item) => (
                <li key={item} className="consultation__check">
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="consultation__steps">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="consultation__step"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="consultation__step-num">{step.num}</span>
                <h3 className="consultation__step-title">{step.title}</h3>
                <p className="consultation__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
