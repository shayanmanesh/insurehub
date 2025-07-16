# InsureHub.ai - Insurance Directory Platform

A comprehensive insurance directory platform built with Next.js 14, designed for optimal performance, SEO, and monetization through strategic ad placement.

## 🚀 Features

- **Lightning-fast performance** - Optimized for Core Web Vitals
- **Revenue-generating ads** - Strategic AdSense integration with lazy loading
- **SEO-optimized** - Complete technical SEO implementation
- **Responsive design** - Mobile-first approach
- **Performance monitoring** - Real-time metrics and analytics
- **Security-first** - Comprehensive security headers and configurations

## 📋 Requirements

- Node.js 18.17 or later
- npm or yarn
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/insurehub.git
   cd insurehub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
insurehub/
├── src/
│   ├── app/
│   │   ├── [slug]/          # Dynamic insurance category pages
│   │   ├── api/             # API routes
│   │   ├── layout.tsx       # Root layout with SEO and analytics
│   │   ├── page.tsx         # Homepage
│   │   ├── sitemap.ts       # Dynamic sitemap generation
│   │   └── manifest.ts      # PWA manifest
│   ├── components/
│   │   ├── AdZone.tsx       # Ad component with lazy loading
│   │   ├── Analytics.tsx    # Google Analytics integration
│   │   ├── Layout.tsx       # Page layout with ad zones
│   │   ├── PerformanceMonitor.tsx # Performance tracking
│   │   └── SEO.tsx          # SEO metadata helpers
│   ├── data/
│   │   └── insurance-categories.ts # Insurance category data
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── types/
│       ├── global.d.ts      # Global type definitions
│       └── index.ts         # Type exports
├── public/
│   └── robots.txt           # Search engine instructions
├── CLOUDFLARE_SETUP.md      # Cloudflare configuration guide
└── README.md
```

## 🎯 Core Features

### Insurance Categories

The platform covers five main insurance categories:

1. **Health Insurance** - `/health-insurance`
2. **Auto Insurance** - `/auto-insurance`
3. **Home Insurance** - `/home-insurance`
4. **Life Insurance** - `/life-insurance`
5. **Business Insurance** - `/business-insurance`

Each category includes:
- Benefits overview
- Top provider listings
- FAQ sections
- Strategic ad placements

### Ad Monetization

**Ad Zones:**
- Header Banner (728x90 desktop, 320x50 mobile)
- Sidebar Ads (300x250)
- In-content Ads (responsive)
- Mobile Sticky Footer (320x50)

**Features:**
- Lazy loading for optimal performance
- Responsive ad units
- Non-intrusive placement
- AdSense integration ready

### Performance Optimization

**Implemented optimizations:**
- Image optimization (WebP, AVIF)
- Font optimization (Inter, self-hosted)
- Code splitting and bundle optimization
- Brotli compression
- Cache-optimized headers
- Core Web Vitals tracking

### SEO Implementation

**Technical SEO:**
- Dynamic sitemap generation
- Robots.txt configuration
- Schema markup (JSON-LD)
- Open Graph tags
- Twitter Cards
- Canonical URLs
- Meta descriptions and titles

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# AdSense (pre-configured)
NEXT_PUBLIC_ADSENSE_ID=ca-pub-5635114711353420

# Database (if using)
DATABASE_URL=your_database_url

# API Keys (if using external services)
ANALYTICS_API_KEY=your_analytics_api_key
```

### AdSense Setup

✅ **AdSense Already Configured!**
- Publisher ID: `ca-pub-5635114711353420`
- All ad slots configured with your actual slot IDs
- ads.txt file created with verification

**Available Ad Slots:**
- `4431777949` - Display Responsive Square
- `3137758017` - Display Horizontal  
- `4175507517` - Display Vertical
- `3637571023` - Auto Ads Relaxed (In-Feed)
- `2324489353` - Auto Ads Relaxed (In-Feed)

**Next Steps:**
1. Deploy to production
2. Verify ads.txt file is accessible at `/ads.txt`
3. Monitor ad performance in AdSense dashboard

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   vercel --prod
   ```

2. **Set Environment Variables**
   - Add environment variables in Vercel dashboard
   - Ensure `NEXT_PUBLIC_GA_ID` is set

3. **Configure Domain**
   - Add custom domain in Vercel
   - Update canonical URLs in SEO config

## 📊 Success Metrics

After deployment, monitor these success indicators:

- **Performance**: Page load times under 3 seconds
- **SEO**: Organic traffic growth of 20% monthly
- **Monetization**: Achieving target RPM and CTR
- **User Experience**: Bounce rate under 40%
- **Security**: No security incidents
- **Availability**: 99.9% uptime

## 📈 Quick Start Guide

1. **Get AdSense approved** - Apply with quality content
2. **Set up Google Analytics** - Track performance metrics
3. **Configure Cloudflare** - Follow CLOUDFLARE_SETUP.md
4. **Deploy to Vercel** - Connect GitHub repository
5. **Monitor performance** - Use built-in analytics

## 🔄 Maintenance

### Regular Tasks

**Weekly:**
- Check performance metrics
- Review ad performance
- Monitor security alerts

**Monthly:**
- Update content
- Review SEO performance
- Check for dependency updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for the insurance industry**

*InsureHub.ai - Your trusted insurance directory platform*