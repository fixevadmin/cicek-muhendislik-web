import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import { SERVICES } from "./data/site";
import type { Service } from "./types";

const HOME_TITLE = "Çiçek Mühendislik | İş Sağlığı ve Güvenliği Platformu";
const HOME_DESCRIPTION =
  "İSG profesyonelleri ve işletmeler için teknik dokümanlar, uygulamalı rehberler ve profesyonel danışmanlık.";

function findServiceByPath(pathname: string): Service | undefined {
  const match = pathname.match(/^\/hizmetler\/([^/]+)\/?$/);
  return match ? SERVICES.find((s) => s.slug === match[1]) : undefined;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function App() {
  const { pathname } = window.location;
  const service = findServiceByPath(pathname);
  const isHome = pathname === "/";

  const title = service
    ? `${service.title} | Çiçek Mühendislik`
    : isHome
      ? HOME_TITLE
      : "Sayfa bulunamadı | Çiçek Mühendislik";
  const description = service ? service.description : HOME_DESCRIPTION;

  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
  }, [title, description]);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  let content;
  if (service) {
    content = <ServiceDetailPage service={service} />;
  } else if (isHome) {
    content = <HomePage />;
  } else {
    content = (
      <section className="section">
        <div className="container">
          <h1>Aradığınız sayfa bulunamadı</h1>
          <p>Adres değişmiş veya kaldırılmış olabilir.</p>
          <a href="/" className="btn btn--primary">
            Ana sayfaya dön
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      <Header />
      <main>{content}</main>
      <Footer />
    </>
  );
}
