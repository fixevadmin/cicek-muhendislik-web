import { useState } from "react";
import { SECTORS } from "../data/site";
import { TRAINING_REQUEST_TOPICS } from "../data/training";
import { ArrowRight, Check } from "./Icons";
import "./TrainingRequestForm.css";

type FormState = {
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  sector: string;
  topic: string;
  message: string;
};

const EMPTY: FormState = {
  businessName: "",
  contactName: "",
  phone: "",
  email: "",
  sector: "",
  topic: "",
  message: "",
};

export default function TrainingRequestForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY);
  };

  if (submitted) {
    return (
      <div className="training-form__success">
        <span className="training-form__success-icon">
          <Check size={32} />
        </span>
        <h3>Talebiniz kaydedilmedi</h3>
        <p>
          Bu form şimdilik demo amaçlıdır; girdiğiniz bilgiler iletilmez. Eğitim talebi için
          iletişim sayfasından bizimle doğrudan iletişime geçebilirsiniz.
        </p>
        <button className="btn btn--secondary" onClick={() => setSubmitted(false)}>
          Yeni talep
        </button>
      </div>
    );
  }

  return (
    <form className="training-form" onSubmit={handleSubmit}>
      <div className="training-form__grid">
        <div className="training-form__field">
          <label htmlFor="tr-business" className="training-form__label">
            İşletme adı
          </label>
          <input
            id="tr-business"
            type="text"
            className="training-form__input"
            value={form.businessName}
            onChange={update("businessName")}
            required
          />
        </div>
        <div className="training-form__field">
          <label htmlFor="tr-contact" className="training-form__label">
            İlgili kişi
          </label>
          <input
            id="tr-contact"
            type="text"
            className="training-form__input"
            value={form.contactName}
            onChange={update("contactName")}
            required
          />
        </div>
        <div className="training-form__field">
          <label htmlFor="tr-phone" className="training-form__label">
            Telefon
          </label>
          <input
            id="tr-phone"
            type="tel"
            className="training-form__input"
            value={form.phone}
            onChange={update("phone")}
            required
          />
        </div>
        <div className="training-form__field">
          <label htmlFor="tr-email" className="training-form__label">
            E-posta
          </label>
          <input
            id="tr-email"
            type="email"
            className="training-form__input"
            value={form.email}
            onChange={update("email")}
            required
          />
        </div>
        <div className="training-form__field">
          <label htmlFor="tr-sector" className="training-form__label">
            Sektör
          </label>
          <select
            id="tr-sector"
            className="training-form__input"
            value={form.sector}
            onChange={update("sector")}
            required
          >
            <option value="" disabled>
              Sektör seçin
            </option>
            {SECTORS.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div className="training-form__field">
          <label htmlFor="tr-topic" className="training-form__label">
            Talep edilen eğitim veya tatbikat
          </label>
          <select
            id="tr-topic"
            className="training-form__input"
            value={form.topic}
            onChange={update("topic")}
            required
          >
            <option value="" disabled>
              Bir konu seçin
            </option>
            {TRAINING_REQUEST_TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="training-form__field">
        <label htmlFor="tr-message" className="training-form__label">
          Açıklama
        </label>
        <textarea
          id="tr-message"
          rows={4}
          className="training-form__input training-form__textarea"
          placeholder="Katılımcı sayısı, tercih edilen tarih ve varsa özel ihtiyaçlarınızı yazabilirsiniz."
          value={form.message}
          onChange={update("message")}
        />
      </div>
      <button type="submit" className="btn btn--primary btn--lg training-form__submit">
        Eğitim Talebi Gönder
        <ArrowRight size={18} />
      </button>
      <p className="training-form__note">
        Bu form şimdilik demo amaçlıdır; gönderilen bilgiler kaydedilmez.
      </p>
    </form>
  );
}
