# Cloudflare Configuration Guide for InsureHub.ai

This guide provides comprehensive instructions for configuring Cloudflare to optimize InsureHub.ai's performance, security, and monetization.

## Initial Setup

1. **Add Domain to Cloudflare**
   - Sign up for a Cloudflare account at https://cloudflare.com
   - Add your domain (insurehub.ai) to Cloudflare
   - Update your domain's nameservers to use Cloudflare's nameservers

2. **SSL/TLS Configuration**
   - Go to SSL/TLS > Overview
   - Set encryption mode to "Full (strict)"
   - Enable "Always Use HTTPS" under SSL/TLS > Edge Certificates
   - Enable "Automatic HTTPS Rewrites"

## Performance Optimization

### Caching Configuration

1. **Caching Rules**
   - Navigate to Rules > Page Rules or Rules > Cache Rules
   - Create the following rules:

   **Rule 1: HTML Pages (4-hour cache)**
   ```
   If URL matches: insurehub.ai/*
   Then: Cache Level = Standard, TTL = 4 hours
   ```

   **Rule 2: Static Assets (1-week cache)**
   ```
   If URL matches: insurehub.ai/_next/static/*
   Then: Cache Level = Cache Everything, TTL = 1 week
   ```

   **Rule 3: API Routes (No cache)**
   ```
   If URL matches: insurehub.ai/api/*
   Then: Cache Level = Bypass
   ```

### Speed Optimization

1. **Auto Minify**
   - Go to Speed > Optimization
   - Enable Auto Minify for:
     - [x] JavaScript
     - [x] CSS
     - [x] HTML

2. **Brotli Compression**
   - Enable Brotli compression under Speed > Optimization
   - This will compress files by up to 25% more than gzip

3. **Rocket Loader**
   - Enable Rocket Loader under Speed > Optimization
   - This will prioritize above-the-fold content loading

4. **Image Optimization**
   - Enable Polish under Speed > Optimization
   - Set to "Lossless" for insurance content
   - Enable WebP conversion

### Mobile Optimization

1. **Mobile Redirect**
   - If you have a separate mobile site, configure under Speed > Mobile Redirect
   - For InsureHub.ai (responsive design), leave disabled

2. **Mirage**
   - Enable Mirage for mobile image optimization
   - This will lazy-load images on mobile devices

## Security Configuration

### Firewall Rules

1. **Block Common Threats**
   ```
   Expression: (cf.threat_score gt 10)
   Action: Block
   ```

2. **Rate Limiting for API**
   ```
   Expression: (http.request.uri.path contains "/api/")
   Action: Rate Limit (100 requests per minute)
   ```

3. **Block Countries (if needed)**
   ```
   Expression: (ip.geoip.country in {"CN" "RU"})
   Action: Block
   ```

### Security Headers

Configure the following headers under Security > Headers:

1. **HTTP Strict Transport Security (HSTS)**
   ```
   max-age=31536000; includeSubDomains; preload
   ```

2. **Content Security Policy (CSP)**
   ```
   default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;
   ```

3. **X-Content-Type-Options**
   ```
   nosniff
   ```

## Ad Optimization

### For Google AdSense

1. **Browser Insights**
   - Enable Browser Insights under Analytics > Web Analytics
   - This provides detailed performance metrics

2. **Load Balancing**
   - If using multiple ad networks, configure Load Balancing
   - Set up health checks for ad servers

3. **Workers for Ad Optimization**
   Create a Cloudflare Worker to optimize ad loading:

   ```javascript
   addEventListener('fetch', event => {
     event.respondWith(handleRequest(event.request))
   })

   async function handleRequest(request) {
     const url = new URL(request.url)
     
     // Optimize ad requests
     if (url.pathname.includes('/ads/')) {
       const response = await fetch(request)
       const newResponse = new Response(response.body, response)
       
       // Add caching headers for ads
       newResponse.headers.set('Cache-Control', 'public, max-age=3600')
       return newResponse
     }
     
     return fetch(request)
   }
   ```

## Analytics and Monitoring

### Cloudflare Analytics

1. **Web Analytics**
   - Enable Web Analytics under Analytics
   - Add the beacon to your site (already included in layout.tsx)

2. **Speed Testing**
   - Use Cloudflare's Speed Test under Speed > Observatory
   - Monitor Core Web Vitals

3. **Real User Monitoring (RUM)**
   - Enable RUM under Analytics > Web Analytics
   - Track performance metrics in real-time

### Custom Analytics

Create a Worker to track custom events:

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // Track insurance category visits
  if (url.pathname.match(/\/(health|auto|home|life|business)-insurance/)) {
    const category = url.pathname.split('-')[0].substring(1)
    
    // Send analytics event
    await fetch('https://analytics.insurehub.ai/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'category_view',
        category: category,
        timestamp: Date.now()
      })
    })
  }
  
  return fetch(request)
}
```

## SEO Optimization

### Page Rules for SEO

1. **Canonical URLs**
   ```
   If URL matches: insurehub.ai/*/
   Then: Forwarding URL = https://insurehub.ai/* (301 redirect)
   ```

2. **WWW Redirect**
   ```
   If URL matches: www.insurehub.ai/*
   Then: Forwarding URL = https://insurehub.ai/$1 (301 redirect)
   ```

### Transform Rules

1. **Add Security Headers**
   ```
   If hostname equals "insurehub.ai"
   Then: Add response header
   Name: X-Robots-Tag
   Value: index, follow
   ```

2. **Remove Powered-By Header**
   ```
   If hostname equals "insurehub.ai"
   Then: Remove response header
   Name: X-Powered-By
   ```

## Monitoring and Maintenance

### Alerts

Set up alerts for:
- High error rates (>5%)
- Low cache hit ratio (<80%)
- High threat score requests
- Page load times >3 seconds

### Regular Checks

1. **Monthly Performance Review**
   - Check Core Web Vitals
   - Review cache hit ratios
   - Monitor threat activity

2. **Quarterly Security Review**
   - Update firewall rules
   - Review SSL certificate
   - Check for new security features

## Cost Optimization

### Bandwidth Optimization

1. **Image Compression**
   - Enable Polish for automatic image optimization
   - Configure appropriate quality settings

2. **Caching Strategy**
   - Maximize cache hit ratios
   - Use appropriate TTL values

3. **Worker Optimization**
   - Minimize Worker CPU usage
   - Use efficient caching strategies

## Testing and Validation

### Performance Testing

1. **Use Cloudflare Speed Test**
   - Test from multiple locations
   - Monitor before/after configurations

2. **External Testing Tools**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

### Security Testing

1. **SSL Labs Test**
   - Verify SSL configuration
   - Ensure A+ rating

2. **Security Headers Check**
   - Use securityheaders.com
   - Verify all headers are properly configured

## Troubleshooting

### Common Issues

1. **Cache Not Working**
   - Check cache rules order
   - Verify TTL settings
   - Review bypass rules

2. **Ads Not Loading**
   - Check CSP headers
   - Verify ad domains in allowlist
   - Review firewall rules

3. **Slow Performance**
   - Enable Argo Smart Routing
   - Optimize images
   - Review Worker performance

### Support Resources

- Cloudflare Documentation: https://developers.cloudflare.com/
- Community Forum: https://community.cloudflare.com/
- Status Page: https://www.cloudflarestatus.com/

## Implementation Checklist

- [ ] Domain added to Cloudflare
- [ ] SSL/TLS configured (Full strict)
- [ ] Caching rules configured
- [ ] Auto Minify enabled
- [ ] Brotli compression enabled
- [ ] Security headers configured
- [ ] Firewall rules set up
- [ ] Analytics enabled
- [ ] Performance monitoring configured
- [ ] Regular maintenance scheduled

This configuration will provide optimal performance, security, and monetization for InsureHub.ai while maintaining excellent user experience.