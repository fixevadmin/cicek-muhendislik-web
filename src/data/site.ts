import type { Article, Document, NavItem, Service, TrustPillar } from "../types";

export const COMPANY = {
  name: "Çiçek Mühendislik",
  fullName: "Çiçek Mühendislik Eğitim ve Danışmanlık",
  tagline: "İş güvenliğinde bilgi, uygulama ve çözüm.",
  email: "info@cicekmuhendislik.com",
  phone: "+90 (000) 000 00 00",
  address: "Örnek Mah. Örnek Cad. No: 0, İstanbul",
  githubUrl: "https://github.com/",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Ana Sayfa", href: "#home" },
  { id: "services", label: "Hizmetler", href: "#services" },
  { id: "store", label: "Doküman Mağazası", href: "#store" },
  { id: "knowledge", label: "Bilgi Merkezi", href: "#knowledge" },
  { id: "about", label: "Hakkımızda", href: "#about" },
  { id: "contact", label: "İletişim", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "risk-analysis",
    title: "Risk Analizleri",
    description:
      "İşletmenize özel risk değerlendirmesi ve tehlike analizi çalışmaları ile güvenli çalışma ortamının temellerini atın.",
    features: ["Tehlike tespiti", "Risk değerlendirme matrisi", "Kontrol önlemleri planı"],
    iconName: "risk-analysis",
  },
  {
    id: "documents",
    title: "İSG Dokümanları",
    description:
      "Mevzuata uygun, uygulanabilir dijital İSG dokümanları ve prosedürlerle sistematinizi hızla kurun.",
    features: ["Dijital teslim", "Düzenlenebilir format", "Mevzuat uyumlu"],
    iconName: "documents",
  },
  {
    id: "training",
    title: "Eğitim Materyalleri",
    description:
      "İSG eğitimleri için hazır sunumlar, uygulamalı rehberler ve test materyalleri ile eğitim süreçlerinizi güçlendirin.",
    features: ["Hazır sunumlar", "Uygulamalı rehberler", "Değerlendirme formları"],
    iconName: "training",
  },
  {
    id: "inspection",
    title: "Saha Denetimi",
    description:
      "İşletmenizin sahada mevcut durumunun belirlenmesi, uygunsuzluk tespiti ve düzeltici faaliyet önerileri.",
    features: ["Saha tespiti", "Uygunsuzluk raporu", "Düzeltici faaliyet önerisi"],
    iconName: "inspection",
  },
  {
    id: "consulting",
    title: "Teknik Danışmanlık",
    description:
      "İSG yönetim sistemi kurulumu, mevzuat uyumu ve süreç iyileştirme konularında uzman danışmanlık desteği.",
    features: ["Sistem kurulumu", "Mevzuat uyumu", "Süreç iyileştirme"],
    iconName: "consulting",
  },
];

export const FEATURED_DOCUMENTS: Document[] = [
  {
    id: "doc-1",
    title: "Genel Risk Değerlendirme Rehberi",
    description:
      "Tüm sektörler için uygulanabilir, adım adım risk değerlendirme metodolojisi ve hazır formlar.",
    category: "Risk Analizleri",
    format: "PDF + Düzenlenebilir",
    pages: 48,
    price: 0,
    isDemo: true,
  },
  {
    id: "doc-2",
    title: "Acil Durum Eylem Planı Şablonu",
    description:
      "Yangın, deprem ve tahliye senaryoları için eksiksiz acil durum eylem planı şablonu.",
    category: "Acil Durum Planları",
    format: "Düzenlenebilir",
    pages: 32,
    price: 0,
    isDemo: true,
  },
  {
    id: "doc-3",
    title: "İSG Temel Eğitim Sunumu",
    description:
      "İş sağlığı ve güvenliği temel konularını kapsayan, eğitime hazır interaktif sunum materyali.",
    category: "Eğitim Materyalleri",
    format: "Sunum",
    pages: 64,
    price: 0,
    isDemo: true,
  },
  {
    id: "doc-4",
    title: "Yüksekten Çalışma Yönergesi",
    description:
      "Yüksekten yapılan çalışmalarda güvenlik önlemleri, prosedürler ve kontrol listeleri.",
    category: "Yönergeler",
    format: "PDF",
    pages: 18,
    price: 0,
    isDemo: true,
  },
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Risk Değerlendirmesi: Temel Adımlar",
    excerpt:
      "Etkili bir risk değerlendirmesi için tehlike tespitinden kontrol önlemlerine kadar izlemeniz gereken adımlar.",
    category: "Risk Yönetimi",
    readTime: "8 dk",
    isDemo: true,
  },
  {
    id: "art-2",
    title: "İSG Yönetim Sistemi Kurulumu",
    excerpt:
      "İşletmenizde sürdürülebilir bir İSG yönetim sistemi kurmanın temel ilkeleri ve uygulama yöntemleri.",
    category: "Yönetim Sistemleri",
    readTime: "12 dk",
    isDemo: true,
  },
  {
    id: "art-3",
    title: "Acil Durum Planlamasında Dikkat Edilmesi Gerekenler",
    excerpt:
      "Acil durum eylem planı hazırlarken gözden kaçmaması gereken kritik noktalar ve en iyi uygulamalar.",
    category: "Acil Durum",
    readTime: "6 dk",
    isDemo: true,
  },
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: "compliance",
    title: "Mevzuat Uyumu",
    description:
      "Tüm doküman ve hizmetlerimiz güncel iş sağlığı ve güvenliği mevzuatı göz önünde bulundurularak hazırlanır.",
    iconName: "compliance",
  },
  {
    id: "expertise",
    title: "Teknik Uzmanlık",
    description:
      "Mühendislik altyapısı ve saha tecrübesi ile pratik, uygulanabilir çözümler sunuyoruz.",
    iconName: "expertise",
  },
  {
    id: "confidentiality",
    title: "Gizlilik",
    description:
      "İşletmenize ait tüm bilgiler ve danışmanlık süreçleri tam gizlilik ilkesiyle yürütülür.",
    iconName: "confidentiality",
  },
  {
    id: "support",
    title: "Sürekli Destek",
    description:
      "Doküman satışından danışmanlık sonrasına kadar tüm süreçlerde teknik destek sağlıyoruz.",
    iconName: "support",
  },
];
