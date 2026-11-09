import { FEATURED_DOCUMENTS } from "../data/site";
import { ArrowRight, Download, FileText } from "./Icons";
import "./Documents.css";

export default function Documents() {
  return (
    <section id="store" className="section documents">
      <div className="container">
        <div className="section-head documents__head">
          <span className="eyebrow">Doküman Mağazası</span>
          <h2>Öne çıkan dijital dokümanlar</h2>
          <p>
            Hazır İSG dokümanları, rehberler ve şablonlar. İndirin, kendi işletmenize göre
            düzenleyin, hemen kullanmaya başlayın.
          </p>
        </div>

        <div className="documents__grid">
          {FEATURED_DOCUMENTS.map((doc, i) => (
            <article
              key={doc.id}
              className="doc-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="doc-card__top">
                <span className="doc-card__icon">
                  <FileText size={22} />
                </span>
                <span className="badge badge--demo">Demo</span>
              </div>

              <span className="doc-card__category">{doc.category}</span>
              <h3 className="doc-card__title">{doc.title}</h3>
              <p className="doc-card__desc">{doc.description}</p>

              <div className="doc-card__meta">
                <span>{doc.format}</span>
                <span className="doc-card__dot">•</span>
                <span>{doc.pages} sayfa</span>
              </div>

              <div className="doc-card__footer">
                <span className="doc-card__price">Yakında</span>
                <button className="btn btn--secondary doc-card__btn" disabled>
                  <Download size={16} />
                  İndir
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="documents__note">
          <span>
            Yeni dokümanlar yakında eklenecek. İleride dijital satın alma ve dosya indirme
            özellikleri aktif olacaktır.
          </span>
          <a href="#contact" className="documents__note-link">
            İhtiyacınız olan doküman için iletişime geçin
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
