import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
    webVitalsAttribution: ['CLS', 'LCP']
  },
  
  // Image optimization (disabled for static export)
  images: {
    unoptimized: true,
  },
  
  // Compression
  compress: true,
  
  
  // Security headers (configured in Cloudflare)
  
  // Optimize bundle
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'lucide',
            priority: 20,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
  
  // Enable static export for Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  
  // PoweredBy header removal
  poweredByHeader: false,
  
};

export default nextConfig;