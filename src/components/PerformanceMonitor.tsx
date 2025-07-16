'use client';

import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
}

export default function PerformanceMonitor() {
  const metricsRef = useRef<Partial<PerformanceMetrics>>({});

  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          metricsRef.current.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          metricsRef.current.timeToFirstByte = navEntry.responseStart - navEntry.requestStart;
        }

        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.firstContentfulPaint = entry.startTime;
          }
        }

        if (entry.entryType === 'largest-contentful-paint') {
          metricsRef.current.largestContentfulPaint = entry.startTime;
        }

        if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as PerformanceEventTiming;
          metricsRef.current.firstInputDelay = firstInputEntry.processingStart - entry.startTime;
        }

        if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
          if (!layoutShiftEntry.hadRecentInput) {
            metricsRef.current.cumulativeLayoutShift = 
              (metricsRef.current.cumulativeLayoutShift || 0) + layoutShiftEntry.value;
          }
        }
      }
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['navigation'] });
      observer.observe({ entryTypes: ['paint'] });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      observer.observe({ entryTypes: ['first-input'] });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch {
      console.warn('Performance Observer not supported for some entry types');
    }

    // Send metrics after page load
    const sendMetrics = () => {
      const metrics = metricsRef.current;
      
      if (Object.keys(metrics).length > 0) {
        // Send to Google Analytics instead of API
        if (window.gtag) {
          window.gtag('event', 'performance_metrics', {
            ...metrics,
            url: window.location.href,
            timestamp: Date.now(),
          });
        }
      }
    };

    // Send metrics on page hide
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendMetrics();
      }
    };

    const handleBeforeUnload = () => {
      sendMetrics();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Send metrics after 30 seconds
    const timeout = setTimeout(sendMetrics, 30000);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}

// Helper function to track custom performance metrics
export const trackCustomMetric = (name: string, value: number) => {
  if (process.env.NODE_ENV === 'production' && 'performance' in window) {
    performance.mark(`${name}-start`);
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', 'custom_metric', {
        metric_name: name,
        metric_value: value,
        timestamp: Date.now(),
      });
    }
  }
};