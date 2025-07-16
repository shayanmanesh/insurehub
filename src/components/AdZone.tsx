'use client';

import { useEffect, useState } from 'react';
import { getAdSlot, ADSENSE_CLIENT_ID } from '@/data/adsense-slots';

interface AdZoneProps {
  id: string;
  width: number;
  height: number;
  className?: string;
  slotId?: string;
}

export default function AdZone({ id, width, height, className = '', slotId }: AdZoneProps) {
  const [isVisible, setIsVisible] = useState(false);
  const adSlot = getAdSlot(id);
  const actualSlotId = slotId || adSlot?.slotId;
  const adFormat = adSlot?.format || 'auto';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [id]);

  useEffect(() => {
    if (isVisible && actualSlotId && typeof window !== 'undefined') {
      try {
        // Initialize AdSense ads when visible
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch {
        console.warn('AdSense not loaded');
      }
    }
  }, [isVisible, actualSlotId]);

  return (
    <div
      id={id}
      className={`ad-zone ${className}`}
      style={{ width, height }}
    >
      {isVisible && actualSlotId ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={ADSENSE_CLIENT_ID}
          data-ad-slot={actualSlotId}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
        />
      ) : (
        <div 
          className="bg-gray-100 border border-gray-300 rounded flex items-center justify-center text-gray-500 text-sm"
          style={{ width, height }}
        >
          Advertisement
        </div>
      )}
    </div>
  );
}