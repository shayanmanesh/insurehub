import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'InsureHub.ai - Insurance Directory',
    short_name: 'InsureHub',
    description: 'Find the right insurance coverage with InsureHub.ai. Compare top providers for health, auto, home, life, and business insurance.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['finance', 'insurance', 'business'],
    lang: 'en-US',
    orientation: 'portrait-primary',
  };
}