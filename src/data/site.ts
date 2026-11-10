import type { Article, Document, NavItem, Sector, Service, TrustPillar } from "../types";

export const COMPANY = {
  name: "Çiçek Mühendislik",
  fullName: "Çiçek Mühendislik Eğitim ve Danışmanlık",
  tagline: "İş sağlığı ve güvenliğinde kapsamlı çözümler, güvenli çalışma kültürü.",
  email: "info@cicekmuhendislik.com",
  phone: "+90 (000) 000 00 00",
  address: "Örnek Mah. Örnek Cad. No: 0, İstanbul",
  githubUrl: "https://github.com/",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Ana Sayfa", href: "#home" },
  { id: "services", label: "Hizmetler", href: "#services" },
  { id: "sectors", label: "Sektörler", href: "#sectors" },
  { id: "training", label: "Eğitim ve Tatbikat", href: "#training" },
  { id: "store", label: "Doküman Mağazası", href: "#store" },
  { id: "about", label: "Hakkımızda", href: "#about" },
  { id: "contact", label: "İletişim", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "isg-consulting",
    title: "İSG Danışmanlığı",
    description:
      "Risk değerlendirmesinden mevzuat uyumuna, İSG kurul süreçlerinden iş kazası incelemesine kadar kapsamlı danışmanlık desteği.",
    features: [
      "Risk değerlendirmesi",
      "Saha denetimleri",
      "Mevzuat uyum çalışmaları",
      "İSG kurul süreçleri",
      "İş kazası inceleme ve raporlama",
      "Acil durum planlaması",
    ],
    iconName: "consulting",
  },
  {
    id: "workplace-health",
    title: "İşyeri Sağlık Hizmetleri",
    description:
      "Mevzuatın gerektirdiği yetkili sağlık kuruluşları ve yetkin sağlık profesyonelleri ile koordine edilen işyeri sağlık hizmetleri.",
    features: [
      "İşyeri hekimliği hizmetleri",
      "İşe giriş ve periyodik muayeneler",
      "Çalışan sağlık gözetimi",
      "Sağlık eğitimleri",
      "Tetkik ve süreç koordinasyonu",
    ],
    iconName: "health",
  },
  {
    id: "training",
    title: "Eğitim ve Tatbikatlar",
    description:
      "Çalışan İSG eğitimlerinden yangın ve tahliye tatbikatlarına kadar uygulamalı eğitim ve tatbikat hizmetleri.",
    features: [
      "Çalışan İSG eğitimleri",
      "İşe özel ve sektörel eğitimler",
      "Acil durum eğitimleri",
      "Yangın söndürme ve tahliye tatbikatları",
      "İlk yardım eğitimi koordinasyonu",
    ],
    iconName: "training",
  },
  {
    id: "inspection",
    title: "Teknik Denetim ve Saha Hizmetleri",
    description:
      "İş ekipmanları ve çalışma alanları için teknik kontroller, uygunsuzluk tespiti ve düzeltici faaliyet takibi.",
    features: [
      "İş ekipmanı kontrolleri",
      "Çalışma alanı denetimleri",
      "Uygunsuzluk tespitleri",
      "Teknik raporlama",
      "Düzeltici ve önleyici faaliyet takibi",
    ],
    iconName: "inspection",
  },
  {
    id: "documentation",
    title: "İSG Dokümantasyonu",
    description:
      "Risk analizleri, acil durum planları, çalışma talimatları ve prosedürler için mevzuata uygun doküman hazırlama.",
    features: [
      "Risk analizleri",
      "Acil durum planları",
      "Çalışma talimatları",
      "Kontrol formları",
      "Eğitim dokümanları ve prosedürler",
    ],
    iconName: "documents",
  },
  {
    id: "sectoral",
    title: "Sektörel İSG Çözümleri",
    description:
      "İnşaattan madenciliğe, lojistikten hizmet sektörüne kadar her iş kolunun risk yapısına özel İSG çözümleri.",
    features: [
      "Sektöre özel risk haritası",
      "Uygulamalı denetim metodolojisi",
      "Sektörel mevzuat uyumu",
      "İş kollarına özel eğitimler",
    ],
    iconName: "sector",
  },
];

export const SECTORS: Sector[] = [
  { id: "inşaat", name: "İnşaat", iconName: "construction" },
  { id: "beton", name: "Hazır Beton ve Yapı Malzemeleri", iconName: "concrete" },
  { id: "sanayi", name: "Sanayi ve Üretim", iconName: "industry" },
  { id: "lojistik", name: "Lojistik ve Depolama", iconName: "logistics" },
  { id: "maden", name: "Maden ve Doğal Kaynaklar", iconName: "mining" },
  { id: "hizmet", name: "Hizmet Sektörü", iconName: "service" },
  { id: "diger", name: "Diğer İş Kolları", iconName: "other" },
];

export const TRAINING_ITEMS = [
  {
    id: "isg-egitim",
    title: "Çalışan İSG Eğitimleri",
    desc: "Tüm çalışanlar için temel iş sağlığı ve güvenliği eğitimleri.",
  },
  {
    id: "sektorel-egitim",
    title: "İşe Özel ve Sektörel Eğitimler",
    desc: "İşin ve sektörün risk yapısına göre tasarlanmış özel eğitimler.",
  },
  {
    id: "acil-durum",
    title: "Acil Durum Eğitimleri",
    desc: "Acil durum senaryolarına hazırlık ve müdahale eğitimleri.",
  },
  {
    id: "yangin-tahliye",
    title: "Yangın Söndürme ve Tahliye Tatbikatları",
    desc: "Uygulamalı yangın söndürme ve tahliye tatbikat planlaması ve yürütülmesi.",
  },
  {
    id: "ilk-yardim",
    title: "İlk Yardım Eğitimi Koordinasyonu",
    desc: "Yetkili kuruluşlarla koordineli ilk yardım eğitimi düzenlenmesi.",
  },
] as const;

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
      "Hizmet kapsamına göre danışmanlık sonrası süreçlerde de teknik destek sağlıyoruz.",
    iconName: "support",
  },
];
