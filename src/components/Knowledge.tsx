import { ARTICLES } from "../data/site";
import { ArrowRight, Clock } from "./Icons";
import "./Knowledge.css";

export default function Knowledge() {
  return (
    <section id="knowledge" className="section knowledge">
      <div className="container">
        <div className="section-head knowledge__head">
          <span className="eyebrow">Bilgi Merkezi</span>
          <h2>İş sağlığı ve güvenliği bilgi merkezi</h2>
          <p>
            İSG alanında güncel bilgiler, uygulama rehberleri ve teknik makaleler. Bilgi birikimini
            paylaştığımız bilgi merkezini keşfedin.
          </p>
        </div>

        <div className="knowledge__grid">
          {ARTICLES.map((article, i) => (
            <article
              key={article.id}
              className="article-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="article-card__visual">
                <span className="article-card__category-tag">{article.category}</span>
              </div>
              <div className="article-card__body">
                <div className="article-card__meta">
                  <span className="article-card__read">
                    <Clock size={14} />
                    {article.readTime} okuma
                  </span>
                  {article.isDemo && <span className="badge badge--demo">Demo</span>}
                </div>
                <h3 className="article-card__title">{article.title}</h3>
                <p className="article-card__excerpt">{article.excerpt}</p>
                <a href="#knowledge" className="article-card__link">
                  Devamını oku
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="knowledge__note">
          Makaleler örnek içeriktir. Yeni makaleler yakında eklenecektir.
        </div>
      </div>
    </section>
  );
}
