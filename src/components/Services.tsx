import { SERVICES } from "../data/site";
import { ArrowRight, Check, SERVICE_ICONS } from "./Icons";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Hizmetlerimiz</span>
          <h2>Uçtan uca iş güvenliği çözümleri</h2>
          <p>
            Risk analizinden saha denetimine, dijital dokümanlardan teknik danışmanlığa kadar İSG
            ihtiyaçlarınızı tek platformdan karşılayın.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.iconName];
            return (
              <article
                key={service.id}
                className="service-card"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="service-card__icon">
                  <Icon size={30} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <ul className="service-card__features">
                  {service.features.map((f) => (
                    <li key={f} className="service-card__feature">
                      <Check size={15} className="service-card__check" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-card__link">
                  Bilgi Al
                  <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
