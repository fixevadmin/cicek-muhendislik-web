export const TRAINING_PATH = "/egitim-ve-tatbikat";

export type TrainingSection = {
  id: string;
  title: string;
  intro: string;
  items: { title: string; description: string }[];
};

export const TRAINING_SECTIONS: TrainingSection[] = [
  {
    id: "is-guvenligi",
    title: "İş Güvenliği Eğitimleri",
    intro:
      "Çalışanların risklerini tanıdığı, iş ekipmanlarını doğru kullandığı ve güvenli çalışma alışkanlıklarını edindiği eğitimler.",
    items: [
      {
        title: "Çalışanların iş sağlığı ve güvenliği eğitimleri",
        description:
          "Mevzuatta öngörülen çalışan İSG eğitimlerinin planlanması, uygulanması ve kayıt altına alınması.",
      },
      {
        title: "İşe ve çalışma alanına özgü eğitimler",
        description:
          "Görev tanımına ve çalışma alanının risklerine göre hazırlanan, sahada karşılaşılan durumları içeren içerikler.",
      },
      {
        title: "Sektörel İSG eğitimleri",
        description:
          "İnşaat, üretim, lojistik gibi sektörlerin tehlike yapısına uygun, sektör örnekleriyle desteklenen eğitimler.",
      },
      {
        title: "İş ekipmanlarının güvenli kullanımı",
        description:
          "Makine, forklift, el aletleri ve benzeri ekipmanların kontrolü, kullanım kuralları ve güvenlik donanımları.",
      },
      {
        title: "KKD kullanımı ve güvenli çalışma alışkanlıkları",
        description:
          "Kişisel koruyucu donanımın doğru seçimi, kullanımı, bakımı ve günlük çalışmaya yerleşmesi için uygulamalı anlatım.",
      },
    ],
  },
  {
    id: "yangin",
    title: "Yangın Eğitimleri",
    intro:
      "Yangının önlenmesinden ilk müdahaleye kadar, çalışanların yangın anında doğru karar verebilmesini hedefleyen eğitimler.",
    items: [
      {
        title: "Yangın önleme ve yangın riskleri",
        description:
          "Yangın çıkış nedenleri, yanıcı madde yönetimi ve işletmenin risk yapısına göre alınacak önleyici tedbirler.",
      },
      {
        title: "Yangın söndürme ekipmanlarının tanıtımı",
        description:
          "Yangın tüpü, hortum ve benzeri ekipmanların türleri, kullanım alanları ve periyodik kontrol esasları.",
      },
      {
        title: "Yangına müdahale konusunda teorik ve uygulamalı eğitimler",
        description:
          "Sınıf ortamında teorik anlatım ve ardından sahada uygulamalı söndürme çalışması.",
      },
    ],
  },
  {
    id: "tatbikat",
    title: "Acil Durum ve Tahliye Tatbikatları",
    intro:
      "Acil durum planının kağıt üzerinde kalmaması için senaryo temelli hazırlanan ve sahada uygulanan tatbikatlar.",
    items: [
      {
        title: "Acil durum senaryolarının hazırlanması",
        description:
          "İşletmenin risk yapısına göre yangın, kimyasal sızıntı ve benzeri olayların senaryolaştırılması.",
      },
      {
        title: "Tahliye organizasyonu",
        description:
          "Tahliye yollarının, toplanma alanlarının ve sorumlu kişilerin belirlenmesi ile tahliye ekiplerinin görevlendirilmesi.",
      },
      {
        title: "Yangın ve acil durum tatbikatları",
        description:
          "Planlanan senaryonun gerçek koşullara mümkün olduğunca yakın biçimde uygulanması.",
      },
      {
        title: "Tatbikat sonrası değerlendirme ve raporlama",
        description:
          "Tahliye süresi, katılım ve aksaklıkların ölçülmesi; iyileştirme eylem listesinin hazırlanması.",
      },
    ],
  },
  {
    id: "ilk-yardim",
    title: "İlk Yardım Eğitimleri",
    intro:
      "İlk yardım eğitimleri, yetkili eğitim kuruluşlarıyla koordinasyon içinde planlanır ve yürütülür.",
    items: [
      {
        title: "İlk yardım eğitimi ihtiyaçlarının belirlenmesi",
        description:
          "Çalışan sayısı, işin tehlike sınıfı ve mevzuat gereksinimlerine göre eğitim ihtiyacının tespiti.",
      },
      {
        title: "Yetkili eğitim kuruluşlarıyla koordinasyon",
        description:
          "Eğitimin mevzuata uygun yetkili kuruluşlar aracılığıyla planlanması ve yürütülmesi için koordinasyon.",
      },
      {
        title: "Eğitim ve belgelendirme süreçlerinin takibi",
        description:
          "Katılım kayıtları ve eğitim sonrası belgelerin düzenli olarak takip edilmesi.",
      },
    ],
  },
];

export const TRAINING_STEPS: { title: string; description: string }[] = [
  {
    title: "İhtiyaç analizi",
    description:
      "İşletmenizin sektörü, çalışan profili ve mevcut risklerini birlikte inceliyoruz.",
  },
  {
    title: "Eğitim planlaması",
    description:
      "Konu, süre, katılımcı grupları ve tarih takvimini belirleyip yazılı bir eğitim planı hazırlıyoruz.",
  },
  {
    title: "Eğitim ve uygulama",
    description:
      "Eğitimi ve gerekli tatbikatları sahada, çalışanlarınızın katılımıyla yürütüyoruz.",
  },
  {
    title: "Değerlendirme ve raporlama",
    description:
      "Katılım, ölçme sonuçlarını ve iyileştirme önerilerini içeren raporu sizinle paylaşıyoruz.",
  },
];

export const TRAINING_REQUEST_TOPICS = [
  "İş güvenliği eğitimleri",
  "Yangın eğitimleri",
  "Acil durum ve tahliye tatbikatı",
  "İlk yardım eğitimi",
  "Sektörel İSG eğitimi",
  "Diğer",
] as const;
