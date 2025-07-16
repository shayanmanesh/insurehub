export interface AdZone {
  id: string;
  name: string;
  size: {
    width: number;
    height: number;
  };
  position: 'header' | 'sidebar' | 'content' | 'footer';
  responsive: boolean;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Provider {
  name: string;
  logo?: string;
  rating?: number;
  features: string[];
  website?: string;
}