import type { SectorDetail } from "../types";

export const SECTOR_DETAILS: SectorDetail[] = [
  {
    slug: "insaat",
    seoDescription:
      "İnşaat sektörü için İSG danışmanlığı, yüksekte çalışma ve şantiye risk değerlendirmesi, saha denetimi, eğitim ve tatbikat desteği.",
    intro:
      "Şantiyelerde yüksekten düşme, göçük, kaldırma ekipmanı, elektrik ve iş makineleri gibi yüksek riskli faaliyetler aynı anda yürür. Şantiye koşulları sürekli değiştiği için İSG yönetiminin de güncel ve sahayla uyumlu olması gerekir.",
    risks: [
      "Yüksekte çalışma ve yüksekten düşme",
      "Kazı, şev ve göçük riskleri",
      "Vinç, forklift ve kaldırma ekipmanı kaynaklı riskler",
      "Elektrik ve iş makineleri ile yaya trafiğinin çakışması",
      "Kalıp, iskele ve geçici yapı elemanlarının kontrolü",
    ],
    consulting:
      "Şantiye bazında İSG yönetim sistemi, taşeron koordinasyonu ve iş programı değiştikçe güncellenen prosedürlerin kurulmasına destek veriyoruz. Mevzuata uygun kurul, sorumluluk ve yazılı süreç yapısını birlikte oluşturuyoruz.",
    inspection:
      "İskele, kazı, elektrik ve kaldırma ekipmanları için saha denetimi yapıyor, şantiye geneli risk değerlendirmesini düzenli olarak güncelliyoruz. Bulguları fotoğraflı rapora ve düzeltici faaliyet takibine dönüştürüyoruz.",
    training:
      "Yüksekte çalışma, kazı güvenliği, iş makinesi çevresinde çalışma ve acil durum tahliyesi konularında şantiye ekiplerine işe özel eğitim ve tatbikat planlıyoruz.",
    documentation:
      "Şantiyeye özel risk analizi, iş izin formları, kontrol listeleri, eğitim kayıtları ve acil durum planı gibi dokümanları hazırlayıp güncel tutuyoruz.",
  },
  {
    slug: "hazir-beton-ve-yapi-malzemeleri",
    seoDescription:
      "Hazır beton ve yapı malzemeleri tesisleri için İSG danışmanlığı, makine ve sevkiyat riskleri, saha denetimi ve eğitim desteği.",
    intro:
      "Hazır beton santralleri ve yapı malzemeleri tesisleri; karıştırma, dökme, sevkiyat ve depolama süreçlerini aynı sahada yürüten, makine yoğun işletmelerdir. Tesis düzeni, araç trafiği ve üretim temposu İSG yönetimini özellikle önemli kılar.",
    risks: [
      "Mikser ve santral ekipmanlarının hareketli parçaları",
      "Silo, konveyör ve besleme hatlarında sıkışma ve düşme",
      "Araç trafiği ve geri manevra kazaları",
      "Çimento tozu ve kimyasal katkı maddelerine maruziyet",
      "Yüksek sıcaklık ve gürültü etkisi",
    ],
    consulting:
      "Tesis bazında İSG yönetim sistemi, sevkiyat ve taşeron koordinasyonu ile kimyasal yönetimi süreçlerinin kurulmasına destek veriyoruz. Vardiya ve üretim planına uygun sorumluluk yapısını netleştiriyoruz.",
    inspection:
      "Santral, mikser, silo ve yükleme alanlarında saha denetimi ile makine koruyucu kontrolleri yapıyor; toz ve gürültü gibi çevresel etmenleri değerlendirerek risk analizini güncelliyoruz.",
    training:
      "Santral operatörleri, sevkiyat sürücüleri ve bakım ekipleri için kilitleme-etiketleme, güvenli yükleme ve kimyasal güvenliği konularında eğitim planlıyoruz.",
    documentation:
      "Tesis risk analizi, kimyasal güvenlik bilgi formlarının takibi, bakım talimatları, kontrol formları ve acil durum eylem planını hazırlıyoruz.",
  },
  {
    slug: "maden",
    seoDescription:
      "Maden sahaları için İSG danışmanlığı, yeraltı ve yerüstü risk değerlendirmesi, teknik denetim, eğitim ve acil durum tatbikatı desteği.",
    intro:
      "Maden işletmelerinde göçük, gaz, patlama, ağır makine ve yüksek enerji riskleri birlikte bulunur. Bu nedenle İSG yönetimi, teknik kontrol ve acil durum hazırlığı birbirinden ayrı ele alınamaz.",
    risks: [
      "Göçük, tavan dökülmesi ve zemin hareketleri",
      "Gaz birikimi ve yetersiz havalandırma",
      "Patlayıcı ve yüksek enerjili malzeme kullanımı",
      "Ağır iş makineleri ile çalışma alanlarının çakışması",
      "Yeraltında tahliye ve kurtarma gereksinimleri",
    ],
    consulting:
      "Maden işletmesinin İSG yönetim sistemi, vardiya bazlı sorumluluklar ve yüklenici koordinasyonunu mevzuat çerçevesinde yapılandırmaya destek veriyoruz.",
    inspection:
      "Yeraltı ve yerüstü çalışma alanlarında risk değerlendirmesi ve saha denetimi yapıyor, bulguları öncelikli düzeltici faaliyet planına dönüştürüyoruz. Teknik ölçüm ve kontroller için ilgili yetkili kuruluşlarla koordinasyon sağlıyoruz.",
    training:
      "Yeraltı çalışma güvenliği, kurtarma ekipleri, gaz algılama ve acil durum tahliyesi konularında saha ekiplerine uygulamalı eğitim ve tatbikat planlıyoruz.",
    documentation:
      "Saha risk analizleri, çalışma izin prosedürleri, acil durum ve kurtarma planları ile eğitim ve denetim kayıtlarını mevzuata uygun olarak hazırlıyoruz.",
  },
  {
    slug: "sanayi",
    seoDescription:
      "Sanayi tesisleri için İSG danışmanlığı, makine ve basınçlı ekipman güvenliği, teknik denetim, eğitim ve dokümantasyon desteği.",
    intro:
      "Sanayi tesislerinde makine, basınçlı ekipman, kaldırma sistemleri ve enerji hatları aynı alanda çalışır. Teknik kontrol ile İSG yönetimini birlikte ele almak, tesis güvenliğinin sürdürülebilirliği için temel adımdır.",
    risks: [
      "Makine koruyucularının eksik olması veya devre dışı bırakılması",
      "Basınçlı ekipman ve buhar hatlarındaki riskler",
      "Kaldırma ve taşıma ekipmanları kaynaklı kazalar",
      "Enerji kaynaklarının kilitlenmemesi ve etiketlenmemesi",
      "Yangın ve patlayıcı ortam riskleri",
    ],
    consulting:
      "Tesis genelinde İSG yönetim sistemi, bakım ve iş izin süreçleri ile yüklenici koordinasyonunun yapılandırılmasına destek veriyoruz.",
    inspection:
      "Makine güvenliği, koruyucu sistemler, kaldırma ekipmanları ve tesis genel düzeni için saha denetimi yapıyor, risk değerlendirmesini teknik bulgularla güncelliyoruz.",
    training:
      "Makine operatörleri, bakım personeli ve vardiya sorumluları için makine güvenliği, kilitleme-etiketleme ve yangın söndürme tatbikatları planlıyoruz.",
    documentation:
      "Makine bazlı risk analizleri, bakım ve kontrol talimatları, iş izin formları, eğitim kayıtları ve acil durum planlarını hazırlıyoruz.",
  },
  {
    slug: "uretim",
    seoDescription:
      "Üretim işletmeleri için İSG danışmanlığı, üretim hattı risk analizi, ergonomi ve makine güvenliği denetimi, eğitim ve dokümantasyon desteği.",
    intro:
      "Üretim hatlarında çalışan kişi sayısı, vardiya düzeni ve makine kullanımı işletmeden işletmeye büyük farklılık gösterir. Hat bazlı risk yaklaşımı, hem çalışanların korunması hem de üretim sürekliliği için önemlidir.",
    risks: [
      "Hat üzerindeki makinelerde sıkışma ve kesilme",
      "Tekrarlayan hareketlere bağlı kas-iskelet rahatsızlıkları",
      "Kimyasal madde ve buhar maruziyeti",
      "Gürültü ve yetersiz aydınlatma",
      "Yoğun iş temposunda dikkat dağınıklığına bağlı kazalar",
    ],
    consulting:
      "Üretim hatlarına özel risk değerlendirme yöntemi, vardiya bazlı sorumluluk yapısı ve değişiklik yönetimi süreçlerinin kurulmasına destek veriyoruz.",
    inspection:
      "Üretim alanlarında saha denetimi yapıyor; ergonomi ve gürültü gibi çalışma koşullarını değerlendirerek düzeltici faaliyet önerileri sunuyoruz.",
    training:
      "Hat çalışanları, kalite ve bakım ekipleri için makine güvenliği, ergonomi ve kimyasal güvenliği konularında işe özel eğitim planlıyoruz.",
    documentation:
      "Hat bazlı risk analizleri, çalışma talimatları, kimyasal güvenlik formları, kontrol listeleri ve eğitim kayıtlarını hazırlıyoruz.",
  },
  {
    slug: "lojistik-ve-depolama",
    seoDescription:
      "Lojistik ve depolama operasyonları için İSG danışmanlığı, forklift ve elleçleme riskleri, depo saha denetimi, eğitim ve tatbikat desteği.",
    intro:
      "Depo ve lojistik merkezlerinde forklift, raf sistemleri, yükleme rampaları ve yoğun araç trafiği aynı anda yönetilmek zorundadır. Operasyon hızı arttıkça İSG kontrollerinin de düzenli ve sistematik olması gerekir.",
    risks: [
      "Forklift ve istif makineleri ile çarpışma",
      "Raf devrilmesi ve yüksekten düşen yükler",
      "Rampada araç ile yaya trafiğinin çakışması",
      "Elle taşıma kaynaklı kas-iskelet rahatsızlıkları",
      "Depo içinde yangın yükü ve tahliye yolu sorunları",
    ],
    consulting:
      "Depo operasyonlarına uygun İSG yönetim sistemi, yüklenici ve kurye koordinasyonu ile vardiya bazlı sorumlulukların tanımlanmasına destek veriyoruz.",
    inspection:
      "Raf sistemleri, forklift güzergâhları, rampa düzeni ve tahliye yollarını kapsayan saha denetimi yapıyor, risk haritasını güncel tutuyoruz.",
    training:
      "Forklift operatörleri, depo personeli ve rampa ekipleri için güvenli elleçleme, yük bağlama ve acil durum tahliye tatbikatları planlıyoruz.",
    documentation:
      "Depo risk analizi, forklift ve raf kontrol formları, çalışma talimatları, eğitim kayıtları ve acil durum planını hazırlıyoruz.",
  },
  {
    slug: "hizmet-sektoru",
    seoDescription:
      "Ofis, perakende ve hizmet işletmeleri için İSG danışmanlığı, ergonomi ve çalışan sağlığı değerlendirmesi, acil durum tatbikatı ve eğitim desteği.",
    intro:
      "Ofis, perakende ve hizmet işletmelerinde risklerin büyük bölümü ergonomi, elektrik, yangın ve acil durum başlıklarında toplanır. Görünürde düşük olan risk, düzenli bir İSG yönetimiyle sürdürülebilir şekilde kontrol altında tutulmalıdır.",
    risks: [
      "Uzun süreli oturma ve ekran kullanımına bağlı ergonomik riskler",
      "Elektrik tesisatı ve çoklu priz kullanımı",
      "Yangın ve tahliye yollarının tıkanması",
      "Müşteri yoğunluğunda kaygan zemin ve düşme riskleri",
      "İş yükü kaynaklı psikososyal riskler",
    ],
    consulting:
      "İşletme büyüklüğüne uygun İSG yönetim yapısı, risk değerlendirmesi ve çalışan temsilcisi süreçlerinin mevzuata uygun kurulmasına destek veriyoruz.",
    inspection:
      "Ofis ve satış alanlarında ergonomi, elektrik, yangın güvenliği ve tahliye yollarını kapsayan saha denetimi yapıyor, bulguları kısa bir eylem planına dönüştürüyoruz.",
    training:
      "Tüm çalışanlar için temel İSG eğitimi, ilk yardım ve yangın bilgilendirmesi ile yılda düzenli acil durum tatbikatları planlıyoruz.",
    documentation:
      "Risk değerlendirme raporu, acil durum planı, ergonomi kontrol formları ve eğitim kayıtlarını işletmenize uygun şekilde hazırlıyoruz.",
  },
];
