'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

interface AnalyticsProps {
  gaId?: string;
}

export default function Analytics({ gaId = 'G-XXXXXXXXXX' }: AnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && gaId) {
      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', gaId, {
        page_path: pathname,
      });
    }
  }, [gaId, pathname]);

  // Track page views
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && window.gtag) {
      window.gtag('config', gaId, {
        page_path: pathname,
      });
    }
  }, [pathname, gaId]);

  // Track performance metrics
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Track Core Web Vitals
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => {
          window.gtag?.('event', 'web_vitals', {
            metric_name: metric.name,
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id,
          });
        });

        onINP((metric) => {
          window.gtag?.('event', 'web_vitals', {
            metric_name: metric.name,
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id,
          });
        });

        onFCP((metric) => {
          window.gtag?.('event', 'web_vitals', {
            metric_name: metric.name,
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id,
          });
        });

        onLCP((metric) => {
          window.gtag?.('event', 'web_vitals', {
            metric_name: metric.name,
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id,
          });
        });

        onTTFB((metric) => {
          window.gtag?.('event', 'web_vitals', {
            metric_name: metric.name,
            metric_value: metric.value,
            metric_delta: metric.delta,
            metric_id: metric.id,
          });
        });
      });
    }
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Custom event tracking functions
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  if (process.env.NODE_ENV === 'production' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackInsuranceView = (category: string) => {
  trackEvent('insurance_category_view', {
    category,
    timestamp: Date.now(),
  });
};

export const trackQuoteRequest = (category: string, provider?: string) => {
  trackEvent('quote_request', {
    category,
    provider,
    timestamp: Date.now(),
  });
};

export const trackAdClick = (adZone: string, adType: string) => {
  trackEvent('ad_click', {
    ad_zone: adZone,
    ad_type: adType,
    timestamp: Date.now(),
  });
};

export const trackPerformanceMetric = (metric: string, value: number) => {
  trackEvent('performance_metric', {
    metric_name: metric,
    metric_value: value,
    timestamp: Date.now(),
  });
};