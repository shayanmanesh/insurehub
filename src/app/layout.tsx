import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "InsureHub.ai - Your Insurance Directory",
  description: "Find the right insurance coverage with InsureHub.ai. Compare top providers for health, auto, home, life, and business insurance.",
  keywords: ["insurance", "coverage", "health insurance", "auto insurance", "home insurance", "life insurance", "business insurance"],
  authors: [{ name: "InsureHub.ai" }],
  creator: "InsureHub.ai",
  publisher: "InsureHub.ai",
  robots: "index, follow",
  openGraph: {
    title: "InsureHub.ai - Your Insurance Directory",
    description: "Find the right insurance coverage with InsureHub.ai. Compare top providers for health, auto, home, life, and business insurance.",
    url: "https://insurehub.ai",
    siteName: "InsureHub.ai",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "InsureHub.ai - Your Insurance Directory",
    description: "Find the right insurance coverage with InsureHub.ai. Compare top providers for health, auto, home, life, and business insurance.",
    creator: "@insurehub",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5635114711353420"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        
        {/* DNS Prefetch for ad networks */}
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//googleads.g.doubleclick.net" />
        
        {/* Meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="google-adsense-account" content="ca-pub-5635114711353420" />
        <link rel="canonical" href="https://insurehub.ai" />
        
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "InsureHub.ai",
              "description": "Your Insurance Directory",
              "url": "https://insurehub.ai",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://insurehub.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-inter`}
      >
        <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <PerformanceMonitor />
        {children}
        
        {/* Initialize AdSense */}
        <Script
          id="adsense-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-5635114711353420",
                enable_page_level_ads: true
              });
            `
          }}
        />
      </body>
    </html>
  );
}