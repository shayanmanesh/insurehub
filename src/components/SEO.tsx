import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: object;
}

export function generateSEOMetadata({
  title,
  description,
  canonical,
  keywords = [],
  ogImage,
  ogType = 'website',
  noIndex = false,
}: SEOProps): Metadata {
  const baseUrl = 'https://insurehub.ai';
  const fullTitle = title.includes('InsureHub') ? title : `${title} | InsureHub.ai`;
  const canonicalUrl = canonical || baseUrl;
  
  return {
    title: fullTitle,
    description,
    keywords: [...keywords, 'insurance', 'coverage', 'quotes', 'providers'],
    authors: [{ name: 'InsureHub.ai' }],
    creator: 'InsureHub.ai',
    publisher: 'InsureHub.ai',
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'InsureHub.ai',
      images: ogImage ? [{ url: ogImage }] : [],
      type: ogType as 'website' | 'article',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: '@insurehub',
      images: ogImage ? [ogImage] : [],
    },
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'InsureHub',
      'application-name': 'InsureHub',
      'msapplication-TileColor': '#2563eb',
      'theme-color': '#2563eb',
    },
  };
}

export function generateStructuredData(data: {
  type: 'WebSite' | 'Article' | 'Organization' | 'LocalBusiness';
  name: string;
  description: string;
  url: string;
  image?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': data.type,
    name: data.name,
    description: data.description,
    url: data.url,
  };

  if (data.image) {
    (baseStructuredData as Record<string, unknown>).image = data.image;
  }

  if (data.type === 'Article') {
    return {
      ...baseStructuredData,
      author: {
        '@type': 'Person',
        name: data.author || 'InsureHub.ai',
      },
      publisher: {
        '@type': 'Organization',
        name: 'InsureHub.ai',
        url: 'https://insurehub.ai',
      },
      datePublished: data.datePublished,
      dateModified: data.dateModified,
    };
  }

  if (data.type === 'Organization') {
    return {
      ...baseStructuredData,
      '@type': 'Organization',
      name: 'InsureHub.ai',
      url: 'https://insurehub.ai',
      logo: 'https://insurehub.ai/logo.png',
      sameAs: [
        'https://twitter.com/insurehub',
        'https://facebook.com/insurehub',
        'https://linkedin.com/company/insurehub',
      ],
    };
  }

  return baseStructuredData;
}