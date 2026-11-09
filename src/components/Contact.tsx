import { useState } from "react";
import { COMPANY } from "../data/site";
import { ArrowRight, Check, Mail, MapPin, Phone } from "./Icons";
import "./Contact.css";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMPTY: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="eyebrow">İletişim</span>
          <h2>İhtiyacınız olan çözüm için iletişime geçin</h2>
          <p className="contact__lead">
            İSG dokümanları, eğitim materyalleri veya danışmanlık hizmetleri hakkında bilgi almak
            için bizimle iletişime geçin. En kısa sürede dönüş yapalım.
          </p>

          <ul className="contact__list">
            <li className="contact__item">
              <span className="contact__item-icon">
                <Mail size={20} />
              </span>
              <div>
                <span className="contact__item-label">E-posta</span>
                <a href={`mailto:${COMPANY.email}`} className="contact__item-value">
                  {COMPANY.email}
                </a>
              </div>
            </li>
            <li className="contact__item">
              <span className="contact__item-icon">
                <Phone size={20} />
              </span>
              <div>
                <span className="contact__item-label">Telefon</span>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="contact__item-value">
                  {COMPANY.phone}
                </a>
              </div>
            </li>
            <li className="contact__item">
              <span className="contact__item-icon">
                <MapPin size={20} />
              </span>
              <div>
                <span className="contact__item-label">Adres</span>
                <span className="contact__item-value">{COMPANY.address}</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <span className="contact__success-icon">
                <Check size={32} />
              </span>
              <h3>Mesajınız alındı</h3>
              <p>
                Teşekkürler. Form şu anda demo amaçlıdır ve mesaj gönderilmez. İleride iletiler
                kaydedilip yanıtlanacaktır.
              </p>
              <button className="btn btn--secondary" onClick={() => setSubmitted(false)}>
                Yeni mesaj
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">
                  Ad Soyad
                </label>
                <input
                  id="name"
                  type="text"
                  className="contact__input"
                  placeholder="Adınız ve soyadınız"
                  value={form.name}
                  onChange={update("name")}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email" className="contact__label">
                  E-posta
                </label>
                <input
                  id="email"
                  type="email"
                  className="contact__input"
                  placeholder="ornek@firma.com"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="subject" className="contact__label">
                  Konu
                </label>
                <input
                  id="subject"
                  type="text"
                  className="contact__input"
                  placeholder="Hangi hizmet hakkında bilgi almak istiyorsunuz?"
                  value={form.subject}
                  onChange={update("subject")}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message" className="contact__label">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="contact__input contact__textarea"
                  placeholder="İhtiyacınızı kısaca açıklayın..."
                  value={form.message}
                  onChange={update("message")}
                  required
                />
              </div>
              <button type="submit" className="btn btn--primary btn--lg contact__submit">
                Mesaj Gönder
                <ArrowRight size={18} />
              </button>
              <p className="contact__form-note">
                Bu form demo amaçlıdır. Mesaj gönderilmez. İleride mesajlar kaydedilecektir.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
