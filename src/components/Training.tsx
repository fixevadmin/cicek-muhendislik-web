import { TRAINING_ITEMS } from "../data/site";
import { ArrowRight, Check, Flame } from "./Icons";
import "./Training.css";

export default function Training() {
  return (
    <section id="training" className="section training">
      <div className="container training__inner">
        <div className="training__intro">
          <span className="eyebrow">Eğitim ve Tatbikatlar</span>
          <h2>Uygulamalı İSG eğitimleri ve tatbikatlar</h2>
          <p className="training__lead">
            Çalışanların iş sağlığı ve güvenliği bilincini güçlendiren, sahada uygulanabilir eğitim
            ve tatbikat hizmetleri. Yangın söndürme, tahliye ve ilk yardım süreçleri yetkili
            kuruluşlarla koordineli olarak planlanır.
          </p>

          <div className="training__feature">
            <span className="training__feature-icon">
              <Flame size={26} />
            </span>
            <div>
              <h3 className="training__feature-title">Yangın ve Tahliye Tatbikatları</h3>
              <p className="training__feature-desc">
                Acil durum hazırlığı için uygulamalı yangın söndürme ve tahliye tatbikat planlaması
                ve yürütülmesi.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn btn--primary training__cta">
            Eğitim Talebi Oluştur
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="training__list">
          {TRAINING_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className="training__item"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="training__item-icon">
                <Check size={18} />
              </span>
              <div>
                <h3 className="training__item-title">{item.title}</h3>
                <p className="training__item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
