# 🚀 InsureHub.ai Deployment Guide

## Pre-Deployment Checklist

✅ **AdSense Configuration**
- Publisher ID: `ca-pub-5635114711353420`
- All ad slots configured with real slot IDs
- ads.txt file created and verified

✅ **Technical Setup**
- Next.js 14 with TypeScript
- Performance optimizations enabled
- SEO configuration complete
- Analytics integration ready

## Quick Deployment to Vercel

### 1. Connect GitHub Repository

```bash
# Already connected to: https://github.com/shayanmanesh/insurehub.git
```

### 2. Deploy to Vercel

**Option A: Using Vercel CLI**
```bash
npm install -g vercel
vercel --prod
```

**Option B: Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect GitHub repository: `shayanmanesh/insurehub`
4. Deploy with default settings

### 3. Environment Variables

Add these environment variables in Vercel dashboard:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-5635114711353420
NODE_ENV=production
```

### 4. Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add `insurehub.ai`
   - Add `www.insurehub.ai`

2. **Configure DNS**
   - Point A record to Vercel's IP: `76.76.19.19`
   - Point CNAME for www to your Vercel project URL

3. **Update Canonical URLs**
   - URLs will automatically use your custom domain
   - SSL certificate auto-generated

## Post-Deployment Verification

### 1. AdSense Verification

Check these URLs are accessible:
- `https://insurehub.ai/ads.txt` ✅
- Should show: `google.com, pub-5635114711353420, DIRECT, f08c47fec0942fa0`

### 2. SEO Verification

- `https://insurehub.ai/sitemap.xml` ✅
- `https://insurehub.ai/robots.txt` ✅

### 3. Performance Testing

Run these tests:
```bash
# Lighthouse
npx lighthouse https://insurehub.ai --output=html

# PageSpeed Insights
Check: https://pagespeed.web.dev/

# Web Vitals
Use Chrome DevTools Performance tab
```

### 4. Ad Testing

1. **AdSense Dashboard**
   - Verify ads.txt is detected
   - Check ad serving status
   - Monitor impressions

2. **Visual Testing**
   - Check ad placements on all pages
   - Verify responsive behavior
   - Test lazy loading

## Alternative Deployment Options

### Netlify

```bash
# Build command
npm run build

# Publish directory
out

# Environment variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-5635114711353420
```

### AWS Amplify

```bash
# Build settings
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
```

## Monitoring Setup

### 1. Google Analytics

1. Create GA4 property
2. Update `NEXT_PUBLIC_GA_ID` in environment variables
3. Verify tracking is working

### 2. Google Search Console

1. Add property for `insurehub.ai`
2. Verify ownership
3. Submit sitemap: `https://insurehub.ai/sitemap.xml`

### 3. AdSense Monitoring

- Check daily earnings
- Monitor ad performance
- Optimize based on RPM/CTR

## Performance Optimization

### 1. Cloudflare Setup

Follow the comprehensive guide in `CLOUDFLARE_SETUP.md`:

1. **Add Domain to Cloudflare**
2. **Configure Caching Rules**
3. **Enable Performance Features**
4. **Set Up Security Headers**

### 2. Image Optimization

Images are automatically optimized:
- WebP/AVIF conversion
- Responsive sizing
- Lazy loading

### 3. Bundle Analysis

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Check for optimization opportunities
```

## Security Checklist

✅ **Security Headers Configured**
- HSTS enabled
- CSP configured for AdSense
- X-Frame-Options set
- Content-Type-Options set

✅ **SSL/TLS**
- HTTPS enforcement
- Automatic certificate renewal

✅ **Content Security**
- AdSense domains whitelisted
- No inline scripts (except AdSense)
- Secure cookie settings

## Troubleshooting

### Common Issues

1. **Ads Not Showing**
   - Check AdSense account status
   - Verify ads.txt file accessibility
   - Check browser ad blockers

2. **Performance Issues**
   - Enable Cloudflare
   - Check image optimization
   - Monitor Core Web Vitals

3. **SEO Issues**
   - Verify sitemap accessibility
   - Check meta tags
   - Monitor Google Search Console

### Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [AdSense Help Center](https://support.google.com/adsense)
- [Cloudflare Documentation](https://developers.cloudflare.com)

## Success Metrics

Monitor these KPIs after deployment:

### Performance
- **Page Load Speed**: < 3 seconds
- **Core Web Vitals**: All green
- **Lighthouse Score**: > 90

### SEO
- **Organic Traffic**: 20% monthly growth
- **Search Rankings**: Top 10 for insurance keywords
- **Click-through Rate**: > 5%

### Monetization
- **Ad Revenue**: Target RPM based on niche
- **Ad Viewability**: > 70%
- **CTR**: Industry benchmarks

### User Experience
- **Bounce Rate**: < 40%
- **Session Duration**: > 2 minutes
- **Page Views**: > 2 per session

## Next Steps After Deployment

1. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

2. **Content Marketing**
   - Create insurance guides
   - Update content regularly
   - Build backlinks

3. **Performance Monitoring**
   - Set up alerts
   - Weekly performance reviews
   - Monthly optimization cycles

4. **Revenue Optimization**
   - A/B test ad placements
   - Monitor earnings
   - Optimize for higher RPM

---

**🎯 Your InsureHub.ai is ready for launch!**

*All AdSense configurations are complete and optimized for maximum revenue.*