export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: ServiceIconName;
};

export type ServiceIconName =
  | "risk-analysis"
  | "documents"
  | "training"
  | "inspection"
  | "consulting";

export type Document = {
  id: string;
  title: string;
  description: string;
  category: DocumentCategory;
  format: string;
  pages: number;
  price: number;
  isDemo: boolean;
};

export type DocumentCategory =
  | "Risk Analizleri"
  | "Acil Durum Planları"
  | "Eğitim Materyalleri"
  | "Yönergeler"
  | "Formlar ve Kayıtlar";

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  isDemo: boolean;
};

export type TrustPillar = {
  id: string;
  title: string;
  description: string;
  iconName: TrustIconName;
};

export type TrustIconName = "compliance" | "expertise" | "confidentiality" | "support";
