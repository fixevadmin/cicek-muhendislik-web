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
    slug: "isg-danismanligi",
    title: "İş Sağlığı ve Güvenliği Danışmanlığı",
    shortTitle: "İSG Danışmanlığı",
    description:
      "Risk değerlendirmesinden mevzuat uyumuna, İSG kurul süreçlerinden iş kazası incelemesine kadar kapsamlı danışmanlık desteği.",
    longDescription:
      "İşletmenizin iş sağlığı ve güvenliği yönetim süreçlerini mevzuata uygun ve sürdürülebilir şekilde yaplandırıyoruz. Risk değerlendirmesi, İSG kurulu çalışmaları, mevzuat uyumu ve iş kazası incelemesi konularında uçtan uca danışmanlık sağlıyoruz.",
    features: [
      "Risk değerlendirmesi",
      "Saha denetimleri",
      "Mevzuat uyum çalışmaları",
      "İSG kurul süreçleri",
      "İş kazası inceleme ve raporlama",
      "Acil durum planlaması",
    ],
    iconName: "consulting",
    highlights: ["Mevzuat uyumu", "Sürdürülebilir sistem", "Süreç danışmanlığı"],
  },
  {
    id: "workplace-health",
    slug: "isyeri-saglik-hizmetleri",
    title: "İşyeri Sağlık Hizmetleri",
    shortTitle: "İşyeri Sağlık Hizmetleri",
    description:
      "Mevzuatın gerektirdiği yetkili sağlık kuruluşları ve yetkin sağlık profesyonelleri ile koordine edilen işyeri sağlık hizmetleri.",
    longDescription:
      "İşyeri sağlık hizmetleri, mevzuatın gerektirdiği yetkili sağlık kuruluşları ve yetkin sağlık profesyonelleri aracılığıyla sunulur. Süreç koordinasyonunu ve işletmenizin sağlık gözetimi gereksinimlerinin karşılanmasını üstleniyoruz.",
    features: [
      "İşyeri hekimliği hizmetleri",
      "İşe giriş ve periyodik muayeneler",
      "Çalışan sağlık gözetimi",
      "Sağlık eğitimleri",
      "Tetkik ve süreç koordinasyonu",
    ],
    iconName: "health",
    highlights: ["Yetkili kuruluşlarla koordineli", "Sağlık gözetimi", "Periyodik takip"],
  },
  {
    id: "safety-training",
    slug: "is-guvenligi-egitimleri",
    title: "İş Güvenliği Eğitimleri",
    shortTitle: "İş Güvenliği Eğitimleri",
    description:
      "Çalışanların İSG bilincini güçlendiren, mevzuata uygun ve işe özel olarak tasarlanan eğitim programları.",
    longDescription:
      "Çalışanların iş sağlığı ve güvenliği bilincini güçlendiren, mevzuata uygun eğitim programları sunuyoruz. Temel İSG eğitimlerinden işe özel ve sektörel eğitimlere kadar çalışanların risk farkındalığını artırmayı hedefliyoruz.",
    features: [
      "Çalışan İSG eğitimleri",
      "İşe özel ve sektörel eğitimler",
      "Yönetici ve yöneticilik eğitimleri",
      "İSG profesyoneli eğitimleri",
      "Eğitim materyali hazırlanması",
    ],
    iconName: "training",
    highlights: ["Mevzuata uygun", "İşe özel tasarım", "Uygulamalı eğitim"],
  },
  {
    id: "emergency-fire",
    slug: "acil-durum-yangin-tatbikatlari",
    title: "Acil Durum ve Yangın Tatbikatları",
    shortTitle: "Acil Durum ve Yangın Tatbikatları",
    description:
      "Acil durum senaryolarına hazırlık, yangın söndürme ve tahliye tatbikatlarının planlanması ve yürütülmesi.",
    longDescription:
      "Acil durum hazırlığı için uygulamalı yangın söndürme, tahliye ve acil durum tatbikatları planlıyor ve yürütüyoruz. Çalışanların acil durum prosedürlerini öğrenmesi ve saha koşullarında uygulaması için gerçek senaryo temelli tatbikatlar düzenliyoruz.",
    features: [
      "Yangın söndürme tatbikatları",
      "Tahliye tatbikatları",
      "Acil durum senaryo çalışmaları",
      "Tatbikat planlaması ve raporlama",
      "İlk yardım eğitimi koordinasyonu",
    ],
    iconName: "emergency",
    highlights: ["Uygulamalı tatbikat", "Gerçek senaryo", "Raporlama"],
  },
  {
    id: "risk-inspection",
    slug: "risk-degerlendirme-saha-denetimleri",
    title: "Risk Değerlendirmesi ve Saha Denetimleri",
    shortTitle: "Risk Değerlendirmesi ve Denetim",
    description:
      "İşletmenizin risk haritasını çıkaran saha denetimleri, tehlike tespiti ve kontrol önlemi önerileri.",
    longDescription:
      "İşletmenizin çalışma alanlarında tehlike ve risk kaynaklarını tespit ediyor, risk değerlendirmesi sürecini yönetiyor ve saha denetimleri ile uygunsuzlukları raporluyoruz. Bulguları düzeltici ve önleyici faaliyetlere dönüştürerek güvenli çalışma ortamını sürdürülebilir kılıyoruz.",
    features: [
      "Risk değerlendirmesi süreç yönetimi",
      "Saha denetimleri",
      "Tehlike tespiti ve analizi",
      "Uygunsuzluk raporlama",
      "Düzeltici ve önleyici faaliyet takibi",
    ],
    iconName: "risk",
    highlights: ["Saha tespiti", "Risk haritası", "Düzeltici takip"],
  },
  {
    id: "technical-engineering",
    slug: "teknik-muhendislik-hizmetleri",
    title: "Teknik Mühendislik Hizmetleri",
    shortTitle: "Teknik Mühendislik Hizmetleri",
    description:
      "İş ekipmanı kontrolleri, teknik raporlama ve mühendislik yaklaşımıyla İSG sorunlarına kalıcı çözümler.",
    longDescription:
      "Mühendislik altyapımız ve saha tecrübemizle iş ekipmanlarının teknik kontrollerini yapıyor, çalışma alanları için mühendislik çözümleri sunuyoruz. Teknik raporlama ve düzeltici faaliyet takibi ile İSG sorunlarına kalıcı çözümler üretiyoruz.",
    features: [
      "İş ekipmanı teknik kontrolleri",
      "Çalışma alanı mühendislik incelemesi",
      "Teknik raporlama",
      "Koruyucu sistem tasarımı danışmanlığı",
      "Düzeltici faaliyet mühendislik desteği",
    ],
    iconName: "engineering",
    highlights: ["Mühendislik yaklaşımı", "Teknik raporlama", "Kalıcı çözüm"],
  },
  {
    id: "documentation",
    slug: "isg-dokumantasyonu",
    title: "İSG Dokümantasyonu",
    shortTitle: "İSG Dokümantasyonu",
    description:
      "Risk analizleri, acil durum planları, çalışma talimatları ve prosedürler için mevzuata uygun doküman hazırlama.",
    longDescription:
      "İşletmenizin İSG yönetim sistemi için gerekli tüm dokümanları mevzuata uygun olarak hazırlıyoruz. Risk analizlerinden acil durum planlarına, çalışma talimatlarından kontrol formlarına kadar eksiksiz dokümantasyon sağlıyoruz.",
    features: [
      "Risk analizleri",
      "Acil durum planları",
      "Çalışma talimatları",
      "Kontrol formları",
      "Eğitim dokümanları ve prosedürler",
    ],
    iconName: "documents",
    highlights: ["Mevzuata uygun", "Eksiksiz dokümantasyon", "Düzenlenebilir şablonlar"],
  },
];

export const SECTORS: Sector[] = [
  {
    id: "inşaat",
    slug: "insaat",
    name: "İnşaat",
    description: "Yüksekten düşme, göçme ve ekipman riskleri başta olmak üzere inşaat sahasının İSG gereksinimleri.",
    iconName: "construction",
  },
  {
    id: "beton",
    slug: "hazir-beton-ve-yapi-malzemeleri",
    name: "Hazır Beton ve Yapı Malzemeleri",
    description: "Üretim tesisleri, taşıma ve depolama süreçleri için İSG yönetim ve denetim desteği.",
    iconName: "concrete",
  },
  {
    id: "sanayi",
    slug: "sanayi-ve-uretim",
    name: "Sanayi ve Üretim",
    description: "Makine, ekipman ve üretim hattı riskleri için teknik denetim ve eğitim çözümleri.",
    iconName: "industry",
  },
  {
    id: "lojistik",
    slug: "lojistik-ve-depolama",
    name: "Lojistik ve Depolama",
    description: "Forklift, elleçleme ve depolama operasyonları için risk yönetimi ve saha denetimi.",
    iconName: "logistics",
  },
  {
    id: "maden",
    slug: "maden-ve-dogal-kaynaklar",
    name: "Maden ve Doğal Kaynaklar",
    description: "Yeraltı ve yerüstü madencilik faaliyetleri için yüksek riskli çalışma ortamı İSG desteği.",
    iconName: "mining",
  },
  {
    id: "hizmet",
    slug: "hizmet-sektoru",
    name: "Hizmet Sektörü",
    description: "Ofis, perakende ve hizmet işletmeleri için çalışan sağlığı ve ergonomi odaklı İSG çözümleri.",
    iconName: "service",
  },
  {
    id: "diger",
    slug: "diger-is-kollari",
    name: "Diğer İş Kolları",
    description: "Farklı risk profillerine sahip diğer tüm iş kolları için uyumlu İSG danışmanlık desteği.",
    iconName: "other",
  },
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
