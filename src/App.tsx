import { useEffect, type ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import SectorDetailPage from "./pages/SectorDetailPage";
import TrainingPage from "./pages/TrainingPage";
import { SECTORS, SERVICES } from "./data/site";
import { SECTOR_DETAILS } from "./data/sectorDetails";
import { TRAINING_PATH } from "./data/training";

const HOME_TITLE = "Çiçek Mühendislik | İş Sağlığı ve Güvenliği Platformu";
const HOME_DESCRIPTION =
  "İSG profesyonelleri ve işletmeler için teknik dokümanlar, uygulamalı rehberler ve profesyonel danışmanlık.";

type Page = { title: string; description: string; content: ReactNode };

function resolvePage(pathname: string): Page {
  const serviceSlug = pathname.match(/^\/hizmetler\/([^/]+)\/?$/)?.[1];
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (service) {
    return {
      title: `${service.title} | Çiçek Mühendislik`,
      description: service.description,
      content: <ServiceDetailPage service={service} />,
    };
  }

  const sectorSlug = pathname.match(/^\/sektorler\/([^/]+)\/?$/)?.[1];
  const sector = SECTORS.find((s) => s.slug === sectorSlug);
  const detail = SECTOR_DETAILS.find((d) => d.slug === sectorSlug);
  if (sector && detail) {
    return {
      title: `${sector.name} İSG Çözümleri | Çiçek Mühendislik`,
      description: detail.seoDescription,
      content: <SectorDetailPage sector={sector} detail={detail} />,
    };
  }

  if (pathname === TRAINING_PATH) {
    return {
      title: "Eğitim ve Tatbikat | İSG Eğitimi, Yangın ve Tahliye | Çiçek Mühendislik",
      description:
        "İş güvenliği, yangın, acil durum tahliye tatbikatı ve ilk yardım eğitimleri. Sektörünüze özel İSG eğitim planlaması ve eğitim talep formu.",
      content: <TrainingPage />,
    };
  }

  if (pathname === "/") {
    return { title: HOME_TITLE, description: HOME_DESCRIPTION, content: <HomePage /> };
  }

  return {
    title: "Sayfa bulunamadı | Çiçek Mühendislik",
    description: HOME_DESCRIPTION,
    content: (
      <section className="section">
        <div className="container">
          <h1>Aradığınız sayfa bulunamadı</h1>
          <p>Adres değişmiş veya kaldırılmış olabilir.</p>
          <a href="/" className="btn btn--primary">
            Ana sayfaya dön
          </a>
        </div>
      </section>
    ),
  };
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
  const { title, description, content } = resolvePage(window.location.pathname);

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

  return (
    <>
      <Header />
      <main>{content}</main>
      <Footer />
    </>
  );
}
